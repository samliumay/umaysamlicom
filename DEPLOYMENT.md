# Next.js Deployment Guide

## Best Practices for Hosting Next.js Applications

### 🚀 Recommended: Vercel (Primary Choice)

**Why Vercel?**
- Created by the Next.js team
- Zero-configuration deployment
- Automatic optimizations (Image Optimization, Edge Functions, etc.)
- Built-in CI/CD with Git integration
- Free tier for personal projects
- Global CDN with edge network
- Automatic HTTPS/SSL certificates

**Deployment Steps:**
1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy from command line:**
   ```bash
   vercel
   ```
   Follow the prompts to link your project.

3. **Or deploy via GitHub:**
   - Push your code to GitHub
   - Import project at [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Vercel auto-detects Next.js and deploys

4. **Environment Variables:**
   - Add in Vercel dashboard: Settings → Environment Variables
   - Or via CLI: `vercel env add <key>`

**Vercel Configuration (Optional):**
Create `vercel.json` for custom settings:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

---

### 🌐 Alternative Hosting Options

#### 1. **Netlify**
- Good for static exports
- Free tier available
- Easy Git integration
- **Note:** For full Next.js features, use Vercel

#### 2. **AWS (Amplify / EC2 / ECS)**
- **Amplify:** Managed Next.js hosting
- **EC2/ECS:** Full control, more complex setup
- Good for enterprise needs

#### 3. **Railway**
- Simple deployment
- Good for full-stack apps
- Free tier available

#### 4. **DigitalOcean App Platform**
- Simple deployment
- Good pricing
- Supports Next.js

#### 5. **Self-Hosting (VPS)**
- **Docker:** Use official Next.js Docker image
- **PM2:** Process manager for Node.js
- **Nginx:** Reverse proxy
- Full control but requires maintenance

---

## Pre-Deployment Checklist

### ✅ Build Optimization
- [x] Run `npm run build` successfully
- [x] Check for build warnings/errors
- [x] Optimize images (use Next.js Image component)
- [x] Minimize bundle size

### ✅ Environment Variables
- [ ] Set all required environment variables
- [ ] Never commit secrets to Git
- [ ] Use `.env.local` for local development
- [ ] Add to hosting platform's environment variables

### ✅ Performance
- [ ] Enable static generation where possible
- [ ] Use `next/image` for images
- [ ] Implement proper caching headers
- [ ] Optimize fonts (already using next/font)

### ✅ Security
- [ ] Review `next.config.ts` security headers
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Review API routes for vulnerabilities
- [ ] Check dependencies for vulnerabilities: `npm audit`

### ✅ SEO & Metadata
- [x] Metadata configured in `layout.tsx`
- [ ] Add Open Graph tags if needed
- [ ] Add sitemap.xml (optional)
- [ ] Add robots.txt (optional)

---

## Deployment Commands

### Vercel CLI
```bash
# Install
npm i -g vercel

# Login
vercel login

# Deploy to production
vercel --prod

# Preview deployment
vercel

# View deployments
vercel ls
```

### Manual Build (for self-hosting)
```bash
# Build
npm run build

# Start production server
npm start

# Or with PM2
pm2 start npm --name "portfolio" -- start
```

---

## Recommended Configuration

### For Vercel (Automatic)
No configuration needed! Vercel auto-detects Next.js.

### For Other Platforms

**Netlify** (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

**Docker** (`Dockerfile`):
```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

---

## Post-Deployment

1. **Test the live site:**
   - Check all pages load correctly
   - Test responsive design
   - Verify all links work
   - Test contact form (if applicable)

2. **Monitor:**
   - Set up error tracking (Sentry, etc.)
   - Monitor performance (Vercel Analytics)
   - Check Core Web Vitals

3. **Domain Setup:**
   - Add custom domain in hosting platform
   - Configure DNS records
   - SSL certificate (automatic on Vercel)

---

## Best Practices Summary

1. **Use Vercel** for Next.js projects (easiest and most optimized)
2. **Enable Analytics** to monitor performance
3. **Use Environment Variables** for sensitive data
4. **Optimize Images** with `next/image`
5. **Enable Caching** for static assets
6. **Monitor Performance** with Lighthouse
7. **Set up CI/CD** for automatic deployments
8. **Use Preview Deployments** for testing before production

---

## Quick Start: Deploy to Vercel

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel --prod

# Done! Your site is live 🎉
```

Or simply push to GitHub and import at [vercel.com](https://vercel.com)

---

## Troubleshooting

**Build fails:**
- Check Node.js version (should be 18+)
- Review build logs for errors
- Ensure all dependencies are in `package.json`

**Environment variables not working:**
- Verify they're set in hosting platform
- Restart deployment after adding variables
- Check variable names match exactly

**Slow performance:**
- Enable static generation
- Optimize images
- Check bundle size
- Use Vercel's Edge Network

---

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Next.js Production Checklist](https://nextjs.org/docs/going-to-production)

