# Deployment Guide

This guide will walk you through deploying your portfolio to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- MongoDB Atlas account (optional, for contact form storage)
- Email service configured (optional, for contact notifications)

## Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

2. **Create GitHub Repository**
   - Go to GitHub and create a new repository
   - Push your code:
     ```bash
     git remote add origin https://github.com/yourusername/portfolio.git
     git branch -M main
     git push -u origin main
     ```

## Step 2: Set Up MongoDB (Optional)

If you want to store contact form submissions:

1. **Create MongoDB Atlas Account**
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for a free account

2. **Create a Cluster**
   - Choose the free M0 tier
   - Select a region close to you
   - Click "Create Cluster"

3. **Set Up Database Access**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Create a user with username and password
   - Save the credentials

4. **Configure Network Access**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Select "Allow Access from Anywhere" (0.0.0.0/0)
   - Confirm

5. **Get Connection String**
   - Go to "Databases"
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password

## Step 3: Configure Email (Optional)

### Using Gmail:

1. **Enable 2-Step Verification**
   - Go to Google Account Settings
   - Security → 2-Step Verification → Enable

2. **Generate App Password**
   - In Security settings
   - 2-Step Verification → App passwords
   - Select "Mail" and "Windows Computer"
   - Generate and save the password

3. **Save Credentials**
   - EMAIL_HOST: smtp.gmail.com
   - EMAIL_PORT: 587
   - EMAIL_USER: your.email@gmail.com
   - EMAIL_PASS: your-app-password

## Step 4: Deploy to Vercel

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub

2. **Import Project**
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**
   
   Click "Environment Variables" and add:

   ```
   MONGODB_URI=your_mongodb_connection_string
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   EMAIL_TO=your_email@gmail.com
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

   **Note:** You can skip MongoDB and Email variables if you don't want those features.

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live!

## Step 5: Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add your domain
   - Follow DNS configuration instructions

2. **Update Environment Variable**
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

## Step 6: Post-Deployment

### Test Your Site

1. **Check All Sections**
   - Hero section loads with 3D animation
   - All sections are visible
   - Theme toggle works
   - Navigation works

2. **Test Contact Form**
   - Fill out and submit the form
   - Check if you receive the email
   - Verify MongoDB entry (if configured)

3. **Test on Mobile**
   - Open on phone/tablet
   - Check responsiveness
   - Test touch interactions

### Monitor Performance

1. **Vercel Analytics**
   - Enable in Project Settings
   - Monitor page views and performance

2. **Google Search Console**
   - Add your site
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`
   - Monitor SEO performance

## Automatic Deployments

Vercel automatically deploys:
- **Production:** When you push to `main` branch
- **Preview:** For every pull request

To update your site:
```bash
git add .
git commit -m "Update content"
git push
```

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Verify all environment variables are set
3. Test build locally: `npm run build`

### Contact Form Not Working

1. Verify EMAIL_* variables are correctly set
2. Check MongoDB connection string
3. Review API route logs in Vercel

### Images Not Loading

1. Check image URLs are accessible
2. Verify domains in `next.config.mjs`
3. Use Next.js Image component

### 3D Animation Not Showing

1. Clear browser cache
2. Check browser console for errors
3. Verify Three.js dependencies installed

## Environment Variables Reference

### Required
- `NEXT_PUBLIC_SITE_URL` - Your site URL

### Optional (Contact Form)
- `MONGODB_URI` - MongoDB connection string
- `EMAIL_HOST` - SMTP host
- `EMAIL_PORT` - SMTP port
- `EMAIL_USER` - Email username
- `EMAIL_PASS` - Email password
- `EMAIL_TO` - Recipient email

## Performance Optimization

Already implemented:
- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Font optimization
- ✅ Bundle optimization

## Security

- Rate limiting on contact form
- Input validation with Zod
- Environment variables for secrets
- HTTPS by default on Vercel

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Review browser console
3. Check environment variables
4. Contact support via the portfolio contact form

---

Congratulations! Your portfolio is now live! 🎉
