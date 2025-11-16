# Deployment Guide

This guide covers deploying the Ratio1 Placeholder Pages to various platforms.

## Vercel (Recommended)

### Single Deployment

```bash
# Deploy with specific service
vercel --env NEXT_PUBLIC_SERVICE=drive

# Or set in Vercel dashboard:
# Settings → Environment Variables → Add NEXT_PUBLIC_SERVICE
```

### Multiple Services (Different Domains)

1. **drive.ratio1.ai**
   - Deploy to Vercel
   - Set Environment Variable: `NEXT_PUBLIC_SERVICE=drive`
   - Configure custom domain

2. **analytics.ratio1.ai**
   - Create new Vercel project (or use same project with different deployment)
   - Set Environment Variable: `NEXT_PUBLIC_SERVICE=analytics`
   - Configure custom domain

3. **dashboard.ratio1.ai**
   - Create new Vercel project
   - Set Environment Variable: `NEXT_PUBLIC_SERVICE=dashboard`
   - Configure custom domain

## Docker

### Dockerfile Example

```dockerfile
FROM node:22-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variable for build
ARG NEXT_PUBLIC_SERVICE
ENV NEXT_PUBLIC_SERVICE=${NEXT_PUBLIC_SERVICE}

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

### Build & Run

```bash
# Build for drive service
docker build --build-arg NEXT_PUBLIC_SERVICE=drive -t r1-drive-placeholder .

# Run
docker run -p 3000:3000 r1-drive-placeholder

# Or override at runtime
docker run -p 3000:3000 -e NEXT_PUBLIC_SERVICE=analytics r1-drive-placeholder
```

### Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  drive:
    build:
      context: .
      args:
        NEXT_PUBLIC_SERVICE: drive
    ports:
      - "3001:3000"
    environment:
      - NEXT_PUBLIC_SERVICE=drive

  analytics:
    build:
      context: .
      args:
        NEXT_PUBLIC_SERVICE: analytics
    ports:
      - "3002:3000"
    environment:
      - NEXT_PUBLIC_SERVICE=analytics

  dashboard:
    build:
      context: .
      args:
        NEXT_PUBLIC_SERVICE: dashboard
    ports:
      - "3003:3000"
    environment:
      - NEXT_PUBLIC_SERVICE=dashboard
```

## Netlify

1. Connect your repository
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Environment variables:
   - Add `NEXT_PUBLIC_SERVICE` with your service name
4. Deploy!

## AWS (EC2 or ECS)

### EC2

```bash
# SSH into your EC2 instance
ssh user@your-ec2-instance

# Clone repo
git clone <your-repo-url>
cd r1-placeholder-pages

# Install dependencies
npm install

# Set environment variable
export NEXT_PUBLIC_SERVICE=drive

# Build
npm run build

# Run with PM2 (recommended)
npm install -g pm2
pm2 start npm --name "r1-placeholder" -- start
pm2 save
pm2 startup
```

### ECS (with Fargate)

Use the Dockerfile above and:

1. Push to ECR
2. Create ECS task definition with environment variable `NEXT_PUBLIC_SERVICE`
3. Create service with desired count
4. Configure ALB/domain

## Kubernetes

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: r1-drive-placeholder
spec:
  replicas: 2
  selector:
    matchLabels:
      app: r1-drive-placeholder
  template:
    metadata:
      labels:
        app: r1-drive-placeholder
    spec:
      containers:
      - name: app
        image: your-registry/r1-placeholder:latest
        env:
        - name: NEXT_PUBLIC_SERVICE
          value: "drive"
        ports:
        - containerPort: 3000
---
apiVersion: v1
kind: Service
metadata:
  name: r1-drive-placeholder
spec:
  selector:
    app: r1-drive-placeholder
  ports:
  - port: 80
    targetPort: 3000
  type: LoadBalancer
```

## Environment Variables by Platform

| Platform | How to Set |
|----------|-----------|
| Vercel | Dashboard → Settings → Environment Variables |
| Netlify | Dashboard → Site settings → Environment variables |
| Docker | `docker run -e NEXT_PUBLIC_SERVICE=drive` |
| Kubernetes | ConfigMap or env in deployment.yaml |
| AWS ECS | Task definition → Environment variables |
| Heroku | `heroku config:set NEXT_PUBLIC_SERVICE=drive` |

## Build-time vs Runtime

**Important**: `NEXT_PUBLIC_SERVICE` is a build-time variable. If you change it, you need to rebuild:

```bash
# Wrong (won't work)
NEXT_PUBLIC_SERVICE=drive npm start

# Correct
NEXT_PUBLIC_SERVICE=drive npm run build
npm start
```

For runtime configuration, you would need to modify the app to use a different approach (server-side env vars, API config, etc.).

## Custom Domain Setup

### Vercel
1. Go to project settings
2. Domains → Add domain
3. Add DNS records as instructed
4. Wait for SSL certificate

### Cloudflare (if using)
1. Add CNAME record pointing to your deployment
2. Enable proxy (orange cloud)
3. SSL/TLS → Full

## Health Checks

The app responds on `/` with a 200 status code, suitable for health checks:

```bash
# Docker health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"
```

## Monitoring

Add monitoring based on your platform:
- Vercel: Built-in analytics
- Custom: Add Sentry, LogRocket, etc.

## Performance

The app is fully static and optimized:
- First Load JS: ~102 kB (gzipped)
- All pages pre-rendered at build time
- Supports CDN caching

## Troubleshooting

**Issue**: Seeing default page instead of specific service
- **Solution**: Ensure `NEXT_PUBLIC_SERVICE` is set during build, not just runtime

**Issue**: Styles not loading
- **Solution**: Check that Tailwind CSS is properly configured and PostCSS is running

**Issue**: 404 on deployment
- **Solution**: Ensure output directory is `.next` and build command includes `next build`
