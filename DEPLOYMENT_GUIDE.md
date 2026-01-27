# 🚀 DEPLOYMENT & PRODUCTION GUIDE

## Quick Start

Your portfolio is **production-ready**. Here's how to deploy it:

---

## 🌐 DEPLOYMENT OPTIONS

### Option 1: VERCEL (Recommended) ⭐

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Follow prompts
# - Link to GitHub account (optional but recommended)
# - Select project root directory
# - Build settings: npm run build
# - Output directory: dist

# Result: Automatic deployments on git push
```

### Option 2: NETLIFY

```bash
# 1. Install Netlify CLI
npm i -g netlify-cli

# 2. Build
npm run build

# 3. Deploy
netlify deploy --prod --dir=dist

# Result: Your site is live!
```

### Option 3: GITHUB PAGES

```bash
# 1. Update vite.config.js for GitHub Pages
# Change: base: '/repository-name/'

# 2. Add deploy script to package.json
"deploy": "npm run build && gh-pages -d dist"

# 3. Deploy
npm run deploy
```

### Option 4: CUSTOM SERVER (Node.js)

```bash
# 1. Build
npm run build

# 2. Copy dist folder to server

# 3. Serve with Express
npm install express cors
```

---

## 📋 PRE-DEPLOYMENT CHECKLIST

### Code Quality
```bash
# Run build
npm run build

# Check for errors
npm run preview

# Open in browser
# http://localhost:3000
```

### Testing
- [ ] Test all links work
- [ ] All images load
- [ ] Animations are smooth
- [ ] Mobile responsive
- [ ] Keyboard navigation works
- [ ] No console errors

### Performance
```bash
Lighthouse Checklist:
- [ ] Performance: 90+
- [ ] Accessibility: 95+
- [ ] Best Practices: 90+
- [ ] SEO: 90+
```

---

## 🌐 CUSTOM DOMAIN SETUP

### Add Custom Domain (Vercel)

```bash
# 1. In Vercel Dashboard:
# Settings → Domains → Add
# 2. Enter your domain (e.g., ankit-portfolio.com)
# 3. Update DNS records:

Type: A
Name: @
Value: 76.76.19.165

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### DNS Configuration

```
Vercel DNS (recommended):
1. In Vercel dashboard
2. Click "Use Vercel Nameservers"
3. Update domain registrar
4. Wait 24-48 hours for propagation
```

---

## 🔒 SECURITY CHECKLIST

```
✓ Enable HTTPS (automatic on Vercel/Netlify)
✓ Set Content Security Policy headers
✓ Remove sensitive information
✓ No hardcoded API keys
✓ External links have rel="noopener noreferrer"
✓ No console logging of sensitive data
```

---

## 📊 ANALYTICS SETUP

### Google Analytics

```javascript
// Add to index.html before closing </head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Vercel Analytics

```javascript
// In vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Analytics auto-enabled on Vercel
})
```

---

## 📧 EMAIL SETUP (Optional)

### Add Email Form

```javascript
// Coming soon: Add contact form with EmailJS
import emailjs from '@emailjs/browser';

emailjs.init('YOUR_PUBLIC_KEY');

const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData
    );
    console.log('Email sent successfully', response);
  } catch (error) {
    console.log('Email failed', error);
  }
};
```

---

## 🔄 CONTINUOUS DEPLOYMENT

### GitHub → Vercel Auto-Deploy

```bash
# 1. Connect GitHub repo to Vercel
# 2. Vercel dashboard → Connect Git Repository
# 3. Select your portfolio repo
# 4. Build settings auto-detected
# 5. Deploy on every push to main branch
```

### Environment Variables

```bash
# Create .env.local
VITE_API_URL=https://your-api.com
VITE_EMAIL_SERVICE_ID=your_emailjs_id

# Add to Vercel Dashboard
# Settings → Environment Variables
```

---

## 🎯 SEO OPTIMIZATION

### Meta Tags Update

```html
<!-- In index.html -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Ankit Bhaumik - AI Enthusiast & Tech Innovator Portfolio" />
<meta name="keywords" content="AI, Machine Learning, OpenCV, Python, Portfolio" />
<meta property="og:title" content="Ankit Bhaumik | AI Enthusiast" />
<meta property="og:description" content="Showcasing AI projects and professional journey" />
<meta property="og:image" content="https://your-domain.com/preview.png" />
<meta name="twitter:card" content="summary_large_image" />
```

### Sitemap (Optional)

```xml
<!-- public/sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com/</loc>
    <lastmod>2026-01-27</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Robots.txt (Optional)

```
# public/robots.txt
User-agent: *
Allow: /
Sitemap: https://your-domain.com/sitemap.xml
```

---

## 📱 PWA SETUP (Optional)

### Add Web App Manifest

```json
<!-- public/manifest.json -->
{
  "name": "Ankit Bhaumik Portfolio",
  "short_name": "Portfolio",
  "description": "AI Enthusiast & Tech Innovator",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#050505",
  "theme_color": "#00D4FF",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

Add to index.html:
```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#00D4FF">
```

---

## 🎯 PERFORMANCE OPTIMIZATION

### Images Optimization

```bash
# Compress images
npm install imagemin imagemin-jpeg imagemin-png imagemin-webp

# Convert to WebP
# Use online tools or:
cwebp input.jpg -o output.webp
```

### Bundle Analysis

```bash
# Check bundle size
npm install rollup-plugin-visualizer

# View in vite.config.js
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [visualizer()],
})
```

---

## 🧪 MONITORING

### Uptime Monitoring

```
Options:
1. UptimeRobot (free)
   - Monitor site every 5 minutes
   - Get alerts on downtime

2. Pingdom
   - Advanced monitoring
   - Performance tracking

3. StatusPage.io
   - Customer communication
   - Incident tracking
```

### Error Tracking

```javascript
// Add Sentry for error tracking
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://your-sentry-dsn@sentry.io/project",
  environment: "production",
});
```

---

## 📊 AFTER DEPLOYMENT

### Track Success Metrics

```
Key Metrics:
✓ Visitor count
✓ Time on site
✓ Bounce rate
✓ Geographic distribution
✓ Device breakdown
✓ Traffic sources
✓ Top pages
✓ User engagement
```

### Maintenance Tasks

```
Weekly:
- [ ] Check analytics
- [ ] Monitor errors
- [ ] Check uptime

Monthly:
- [ ] Update content if needed
- [ ] Review performance
- [ ] Check for broken links

Quarterly:
- [ ] Performance audit
- [ ] Security update
- [ ] SEO audit
```

---

## 🛠️ TROUBLESHOOTING

### Images Not Loading

```
Solution:
1. Check file names (case-sensitive)
2. Verify path in assets object
3. Check public folder location
4. Use relative paths from public folder
```

### Build Errors

```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Slow Performance

```bash
# Check bundle size
npm run build -- --analyze

# Optimize:
1. Lazy load images
2. Code splitting
3. Minify CSS/JS
4. Use compression headers
```

### Mobile Issues

```
Check:
1. Viewport meta tag present
2. Touch target sizes (44x44px)
3. Font size (16px minimum)
4. No horizontal scroll
5. Proper responsive breakpoints
```

---

## 📞 SUPPORT RESOURCES

### Documentation
- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)

### Hosting
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

### Tools
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Responsive Design Tester](https://responsivedesignchecker.com/)

---

## ✅ FINAL DEPLOYMENT CHECKLIST

```
Phase 1: Pre-Deployment
□ All builds successful
□ No console errors
□ All links functional
□ Mobile responsive tested
□ Accessibility verified
□ Performance optimized

Phase 2: Deployment
□ Choose hosting provider
□ Connect repository
□ Configure domain
□ Set environment variables
□ Enable analytics
□ Setup monitoring

Phase 3: Post-Deployment
□ Test live site
□ Verify all pages load
□ Check mobile experience
□ Monitor errors
□ Verify analytics
□ Share with network

Phase 4: Ongoing
□ Monitor uptime
□ Track analytics
□ Gather feedback
□ Plan enhancements
□ Security updates
```

---

## 🎉 CONGRATULATIONS!

Your portfolio is production-ready and waiting to impress! 

**Next Steps:**
1. Choose a deployment platform
2. Follow deployment steps
3. Add your custom domain
4. Share with your network
5. Monitor analytics
6. Iterate based on feedback

**Good luck with your portfolio launch!** 🚀

---

**Questions?** Check the documentation links above or review the code comments for more details.

Happy deploying! ✨
