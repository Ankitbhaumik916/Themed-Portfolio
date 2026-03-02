import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navigation/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { ShaderAnimation } from "@/components/ui/shader-animation";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Ankit Bhaumik - AI Engineer | Researcher | Full Stack Innovator",
  description: "Portfolio of Ankit Bhaumik - AI Engineer, Researcher, and Full Stack Developer from Chennai, India. Specializing in AI/ML, Deep Learning, and Full Stack Development.",
  keywords: ["AI Engineer", "Machine Learning", "Full Stack Developer", "Researcher", "Ankit Bhaumik", "Portfolio"],
  authors: [{ name: "Ankit Bhaumik" }],
  creator: "Ankit Bhaumik",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ankitbhaumik.vercel.app",
    title: "Ankit Bhaumik - AI Engineer | Researcher",
    description: "Portfolio of Ankit Bhaumik - AI Engineer and Full Stack Developer",
    siteName: "Ankit Bhaumik Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Bhaumik - AI Engineer | Researcher",
    description: "Portfolio of Ankit Bhaumik - AI Engineer and Full Stack Developer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="fixed inset-0 z-0 pointer-events-none">
            <ShaderAnimation />
          </div>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
