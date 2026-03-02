import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import clientPromise from "@/lib/mongodb";
import { z } from "zod";

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitStore.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + 60000, // 1 minute window
    });
    return true;
  }

  if (limit.count >= 5) {
    return false;
  }

  limit.count++;
  return true;
}

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function getSmtpConfig() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    return null;
  }

  const host = process.env.EMAIL_HOST || "smtp.gmail.com";
  const port = Number.parseInt(process.env.EMAIL_PORT || "587", 10);
  const secureFromEnv = process.env.EMAIL_SECURE;
  const secure =
    typeof secureFromEnv === "string"
      ? secureFromEnv.toLowerCase() === "true"
      : port === 465;

  return {
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  };
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = getClientIp(request);

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Save to database (optional - only if MongoDB is configured)
    if (clientPromise) {
      try {
        const client = await clientPromise;
        const db = client.db("portfolio");
        const collection = db.collection("messages");

        await collection.insertOne({
          ...validatedData,
          createdAt: new Date(),
          ip,
          read: false,
        });
      } catch (dbError) {
        console.error("Database error:", dbError);
        // Continue even if database save fails
      }
    }

    // Send email notification
    const smtpConfig = getSmtpConfig();

    if (!smtpConfig) {
      return NextResponse.json(
        { error: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport(smtpConfig);

    const mailOptions = {
      from: process.env.EMAIL_FROM || smtpConfig.auth.user,
      to: process.env.EMAIL_TO || "ankitbhaumik23@gmail.com",
      replyTo: validatedData.email,
      subject: `New Contact Form Message from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>Sent from your portfolio website</small></p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (mailError) {
      console.error("Email send error:", mailError);
      return NextResponse.json(
        { error: "Unable to send email with current SMTP settings." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
