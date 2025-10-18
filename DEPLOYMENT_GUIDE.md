# 🚀 Vercel Deployment Guide

This guide will walk you through deploying your personal portfolio to Vercel step by step.

## 📋 Prerequisites

Before deploying, make sure you have:
- [ ] A GitHub account
- [ ] Your portfolio code pushed to a GitHub repository
- [ ] A Vercel account (free tier available)
- [ ] Node.js installed locally (for testing)

## 🔧 Pre-Deployment Setup

### 1. Update Personal Information

Before deploying, update your personal information in the data files:

**File: `src/data/personal.ts`**
```typescript
export const personalInfo = {
  name: "Your Actual Name", // Replace with your real name
  title: "Your Actual Title", // e.g., "Senior Frontend Developer"
  tagline: "Your actual tagline",
  bio: "Your actual bio...",
  email: "your.actual.email@example.com", // Use your real email
  location: "Your City, Country",
  timezone: "UTC+0", // Your timezone
  social: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    portfolio: "https://yourportfolio.com"
  },
  resume: "/resume.pdf", // Upload your resume to public folder
  profileImage: "/images/profile.jpg" // Upload your photo to public/images/
};
```

### 2. Update Metadata

**File: `src/app/layout.tsx`**
```typescript
export const metadata: Metadata = {
  title: "Your Name - Full Stack Developer & UI/UX Designer",
  description: "Your actual description...",
  keywords: ["your", "actual", "keywords"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name - Full Stack Developer",
    description: "Your actual description",
    type: "website",
  },
};
```

### 3. Add Your Assets

Create these folders and add your files:
```
public/
├── images/
│   └── profile.jpg (your profile photo)
├── resume.pdf (your resume)
└── favicon.ico (your favicon)
```

### 4. Test Locally

Before deploying, test your site locally:

```bash
# Navigate to your project directory
cd personal-portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

## 🌐 Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Recommended)

#### Step 1: Prepare Your Repository
1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

#### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Select your portfolio repository

#### Step 3: Configure Project Settings
1. **Project Name**: Choose a name (e.g., "yourname-portfolio")
2. **Framework Preset**: Next.js (should auto-detect)
3. **Root Directory**: `./personal-portfolio` (if your repo has multiple folders)
4. **Build Command**: `npm run build` (default)
5. **Output Directory**: `.next` (default)
6. **Install Command**: `npm install` (default)

#### Step 4: Environment Variables (Optional)
If you have any environment variables, add them in the Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add any required variables

#### Step 5: Deploy
1. Click "Deploy"
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at `https://your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login to Vercel
```bash
vercel login
```

#### Step 3: Deploy
```bash
# Navigate to your project directory
cd personal-portfolio

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name? (enter your desired name)
# - Directory? ./
```

#### Step 4: Production Deployment
```bash
# For production deployment
vercel --prod
```

## 🔧 Post-Deployment Configuration

### 1. Custom Domain (Optional)

If you have a custom domain:

1. Go to your Vercel project dashboard
2. Click "Domains" tab
3. Add your domain
4. Follow DNS configuration instructions
5. Update your domain in `personal.ts` social links

### 2. Analytics (Optional)

Enable Vercel Analytics:
1. Go to Project Settings → Analytics
2. Enable Vercel Analytics
3. Add to your `layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 3. SEO Optimization

Add to your `layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name - Full Stack Developer",
  description: "Your description",
  keywords: ["web developer", "react", "nextjs"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name - Full Stack Developer",
    description: "Your description",
    url: "https://your-domain.com",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Name - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Full Stack Developer",
    description: "Your description",
    images: ["https://your-domain.com/og-image.jpg"],
  },
};
```

## 🔄 Continuous Deployment

Once deployed, Vercel automatically redeploys when you push to your main branch:

1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
3. Vercel automatically builds and deploys the changes

## 🛠️ Troubleshooting

### Common Issues:

#### Build Fails
- Check your `package.json` dependencies
- Ensure all imports are correct
- Check for TypeScript errors: `npm run build`

#### Images Not Loading
- Ensure images are in the `public` folder
- Use correct paths: `/images/photo.jpg` (not `./images/photo.jpg`)

#### Styling Issues
- Check Tailwind CSS configuration
- Ensure all CSS files are properly imported

#### Environment Variables
- Add any required environment variables in Vercel dashboard
- Use `process.env.VARIABLE_NAME` in your code

### Debug Commands:
```bash
# Check build locally
npm run build

# Check for linting errors
npm run lint

# Type check
npx tsc --noEmit
```

## 📊 Performance Optimization

### 1. Image Optimization
- Use Next.js Image component for all images
- Optimize image sizes before uploading
- Use WebP format when possible

### 2. Bundle Analysis
```bash
# Analyze bundle size
npm install -g @next/bundle-analyzer
npm run build
npm run analyze
```

### 3. Lighthouse Score
- Test your deployed site with Google Lighthouse
- Aim for 90+ scores in all categories

## 🔐 Security Considerations

1. **Environment Variables**: Never commit sensitive data
2. **API Keys**: Use Vercel environment variables
3. **Dependencies**: Keep packages updated
4. **HTTPS**: Vercel provides HTTPS by default

## 📈 Monitoring

### Vercel Dashboard Features:
- **Analytics**: Track page views and performance
- **Speed Insights**: Monitor Core Web Vitals
- **Function Logs**: Debug serverless functions
- **Deployment History**: Track all deployments

## 🎉 Success!

Once deployed, your portfolio will be live and accessible worldwide. Share your new portfolio URL and start showcasing your work!

### Next Steps:
- [ ] Share your portfolio on social media
- [ ] Add it to your resume
- [ ] Update your LinkedIn profile
- [ ] Submit to portfolio showcases
- [ ] Set up Google Analytics (optional)

---

## 📞 Support

If you encounter any issues:
1. Check Vercel's [documentation](https://vercel.com/docs)
2. Visit [Vercel's community](https://github.com/vercel/vercel/discussions)
3. Check Next.js [documentation](https://nextjs.org/docs)

**Happy Deploying! 🚀**
