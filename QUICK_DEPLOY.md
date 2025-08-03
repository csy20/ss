# 🎯 Quick Vercel Deployment Instructions

## Step 1: Go to Vercel Dashboard
1. Open https://vercel.com in your browser
2. Sign in with your GitHub account
3. Click "Add New..." → "Project"

## Step 2: Import Your Repository
1. Find your "ss" repository in the list
2. Click "Import" next to it
3. Vercel will auto-detect it's a Next.js project

## Step 3: Configure Environment Variables
Before clicking "Deploy", add these environment variables:

### Required Environment Variables:
```
MONGODB_URI=mongodb+srv://csy20:YOUR_ACTUAL_PASSWORD@cluster0.vm7ufhd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
NEXTAUTH_URL=https://your-project-name.vercel.app
NEXTAUTH_SECRET=your-secure-secret-key
ADMIN_EMAIL=jageshwarsahu910@gmail.com
ADMIN_PASSWORD=Jaggu@06
NODE_ENV=production
```

### How to Add Environment Variables:
1. In the import screen, click "Environment Variables"
2. Add each variable one by one:
   - Key: MONGODB_URI
   - Value: mongodb+srv://csy20:YOUR_ACTUAL_PASSWORD@cluster0.vm7ufhd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   - Environment: Production
3. Repeat for all variables listed above

### Important Notes:
- Replace YOUR_ACTUAL_PASSWORD with your real MongoDB password
- Generate a secure NEXTAUTH_SECRET using: openssl rand -base64 32
- The NEXTAUTH_URL will be your actual Vercel domain

## Step 4: Deploy
1. Click "Deploy"
2. Wait for deployment to complete (usually 2-3 minutes)

## Step 5: Test Your Deployment
After deployment, test these URLs:
1. https://your-app.vercel.app/api/health (Health check)
2. https://your-app.vercel.app/api/seed (Seed database)
3. https://your-app.vercel.app/auth/signin (Admin login)

## 🎉 That's it! Your SITASONI store is now live!
