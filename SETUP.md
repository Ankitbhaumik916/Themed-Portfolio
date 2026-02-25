# Quick Setup Guide

## 🚀 Getting Started in 5 Minutes

### Step 1: Environment Setup

1. **Create `.env.local` file in the root directory:**
   ```bash
   cp .env.local.example .env.local
   ```

2. **Edit `.env.local` with your credentials:**
   ```env
   # Optional: MongoDB for storing contact messages
   MONGODB_URI=mongodb+srv://youruser:yourpass@cluster.mongodb.net/portfolio

   # Optional: Email for contact form notifications
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_TO=your.email@gmail.com

   # Required: Your site URL
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

### Step 2: Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎨 Customization Quick Reference

### Update Personal Information
**File:** `data/profile.ts`
- Name, title, location
- Bio, email, resume link
- Social media URLs

### Add/Update Projects
**File:** `data/projects.ts`
- Add new projects to the array
- Update images, descriptions, technologies
- Set featured projects

### Update Work Experience
**File:** `data/experience.ts`
- Add job entries
- Update responsibilities and tech stack

### Modify Skills
**File:** `data/skills.ts`
- Add/remove skills
- Update skill levels (0-100)
- Organize by categories

### Update Achievements
**File:** `data/profile.ts` (achievements array)
- Add awards and accomplishments
- Set dates and icons

---

## 📧 Contact Form Setup (Optional)

### Using Gmail:

1. **Enable 2-Step Verification** in Google Account
2.  Go to: [Google Account Security](https://myaccount.google.com/security)
3. **Generate App Password:**
   - Security → 2-Step Verification → App passwords
   - Select "Mail" → Generate
4. **Use in `.env.local`:**
   ```env
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=generated-app-password-here
   ```

---

## 💾 MongoDB Setup (Optional)

1. **Sign up** at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. **Create Free Cluster** (M0 tier)
3. **Create Database User:**
   - Database Access → Add New User
   - Save username and password
4. **Allow Network Access:**
   - Network Access → Add IP Address → Allow from Anywhere (0.0.0.0/0)
5. **Get Connection String:**
   - Databases → Connect → Connect your application
   - Copy connection string
   - Replace `<password>` with your database password
6. **Add to `.env.local`:**
   ```env
   MONGODB_URI=your-connection-string-here
   ```

---

## 🚀 Deploy to Vercel

### One-Click Deploy:

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)**
   - Sign up/Login with GitHub
   - Import Repository
   - Add Environment Variables
   - Click Deploy

3. **Add Environment Variables in Vercel:**
   - Project Settings → Environment Variables
   - Add all variables from `.env.local`

Your portfolio will be live in minutes! 🎉

---

## 🎯 Important Files

| File | Purpose |
|------|---------|
| `data/profile.ts` | Personal info, social links, achievements |
| `data/projects.ts` | Projects portfolio |
| `data/experience.ts` | Work experience |
| `data/skills.ts` | Technical skills |
| `app/globals.css` | Global styles |
| `tailwind.config.ts` | Tailwind configuration |
| `.env.local` | Environment variables (create this) |

---

## 🔧 Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types
```

---

## ❓ Troubleshooting

### Port 3000 already in use
```bash
# Kill process on port 3000 (Windows)
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Build fails
```bash
# Clean install
rm -rf node_modules .next
npm install
npm run build
```

### Contact form not working
- Verify EMAIL_* variables are set correctly
- Check MongoDB connection string
- Review Vercel function logs

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

---

## 🎉 You're All Set!

Your modern, production-ready portfolio is ready to go. Customize it, deploy it, and showcase your work to the world!

For detailed information, see [README.md](README.md) and [DEPLOYMENT.md](DEPLOYMENT.md).
