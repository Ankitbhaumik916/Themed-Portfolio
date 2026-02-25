# Ankit Bhaumik - Portfolio Website

A modern, production-ready portfolio website built with Next.js 14, TypeScript, and cutting-edge web technologies. Features stunning 3D animations, smooth interactions, and a fully functional backend.

![Portfolio Preview](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80)

## 🚀 Features

### Frontend Excellence
- ⚡ **Next.js 14** with App Router and TypeScript
- 🎨 **Tailwind CSS** for modern, responsive design
- 🌈 **Framer Motion** for smooth, professional animations
- 🎭 **Three.js & React Three Fiber** for 3D interactive hero section
- 🎯 **GSAP** for advanced scroll animations
- 🌓 **Dark/Light Mode** with seamless transitions
- 📱 **Fully Responsive** - works perfectly on all devices

### Backend & Features
- 📧 **Contact Form** with Nodemailer integration
- 💾 **MongoDB** for storing messages
- 🔒 **Rate Limiting** to prevent spam
- 🎯 **Dynamic Routing** for project pages
- 📝 **Markdown Support** for rich content
- 🔍 **SEO Optimized** with metadata and sitemap
- ⚡ **Performance Optimized** with lazy loading and code splitting

### Interactive Elements
- 🎨 3D Neural Network animation in hero section
- 🖱️ Custom cursor with hover effects
- 📊 Animated skill progress bars
- 🎯 Project filtering by category
- 📱 Smooth scroll and parallax effects
- ✨ Microinteractions throughout

## 🛠️ Tech Stack

### Core
- **Framework:** Next.js 14.2.3
- **Language:** TypeScript 5.4.5
- **Styling:** Tailwind CSS 3.4.3
- **Animations:** Framer Motion 11.2.10

### 3D Graphics
- **Three.js:** 0.164.1
- **React Three Fiber:** 8.16.8
- **React Three Drei:** 9.106.0

### Backend
- **Database:** MongoDB 6.6.2
- **Email:** Nodemailer 6.9.13
- **Validation:** Zod 3.23.8

### Additional
- **Markdown:** react-markdown 9.0.1
- **Themes:** next-themes 0.3.0
- **Icons:** lucide-react 0.379.0
- **Animations:** react-type-animation 3.2.0

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account (optional, for contact form storage)
- Email service credentials (optional, for email notifications)

### Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**

   Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

   Edit `.env.local` and add your credentials:
   ```env
   # MongoDB (optional)
   MONGODB_URI=your_mongodb_connection_string

   # Email Configuration (optional)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_specific_password
   EMAIL_TO=your_email@gmail.com

   # Site Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Edit `data/profile.ts` to update:
- Name, title, location
- Bio and personal information
- Social media links
- Resume URL

### Projects
Edit `data/projects.ts` to add/modify projects:
- Project details and descriptions
- Technologies used
- Images and links
- Categories

### Experience
Edit `data/experience.ts` to update work experience:
- Job titles and companies
- Responsibilities
- Technologies used

### Skills
Edit `data/skills.ts` to modify skills:
- Skill names and levels
- Categories
- Custom groupings

### Achievements
Edit `data/profile.ts` achievements section to add awards and accomplishments.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Configure environment variables
   - Deploy!

3. **Set Environment Variables in Vercel**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.local`

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
jjk_port/
├── app/                      # Next.js app directory
│   ├── api/                 # API routes
│   │   └── contact/         # Contact form endpoint
│   ├── projects/            # Dynamic project pages
│   │   └── [slug]/         # Individual project page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Sitemap generation
│   └── robots.ts           # Robots.txt
├── components/              # React components
│   ├── navigation/         # Navigation components
│   ├── sections/           # Page sections
│   ├── projects/           # Project-related components
│   └── ui/                 # UI components
├── data/                    # Content and data
│   ├── projects.ts         # Projects data
│   ├── experience.ts       # Work experience
│   ├── skills.ts           # Skills data
│   └── profile.ts          # Personal info
├── lib/                     # Utility functions
│   ├── mongodb.ts          # Database connection
│   └── utils.ts            # Helper functions
├── types/                   # TypeScript types
│   └── index.ts            # Type definitions
├── public/                  # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.mjs         # Next.js configuration
└── package.json            # Dependencies
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types
```

## 📧 Contact Form Setup

### Using Gmail

1. Enable 2-Step Verification in your Google Account
2. Generate an App Password:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the generated password as `EMAIL_PASS`

### Using Other Services
Update `EMAIL_HOST` and `EMAIL_PORT` in `.env.local` for your email provider.

## 🌟 Performance Features

- **Image Optimization** - Next.js Image component with lazy loading
- **Code Splitting** - Automatic route-based code splitting
- **Bundle Optimization** - Tree shaking and minification
- **Font Optimization** - Google Fonts with next/font
- **Lazy Loading** - Components load only when needed
- **SEO Optimization** - Meta tags, sitemap, and robots.txt

## 🎯 SEO Features

- Dynamic metadata generation
- OpenGraph tags for social sharing
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt configuration
- Semantic HTML structure

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License

MIT License - feel free to use this as a template for your own portfolio.

## 🙏 Acknowledgments

- Design inspiration from Apple, Vercel, and Tesla websites
- 3D graphics powered by Three.js and React Three Fiber
- Animations by Framer Motion and GSAP
- Icons by Lucide React

## 📞 Support

For bugs or questions:
- Open an issue on GitHub
- Contact via the website contact form
- Email: ankit.bhaumik@example.com

---

Built with ❤️ by Ankit Bhaumik using Next.js
