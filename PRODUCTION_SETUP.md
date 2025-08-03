# Production Environment Setup

## Required Environment Variables

In your Vercel dashboard, you need to set these environment variables:

### Database
```
MONGODB_URI=mongodb+srv://csy20:<password>@cluster0.vm7ufhd.mongodb.net/sitasoni?retryWrites=true&w=majority&appName=Cluster0
```
Replace `<password>` with your actual MongoDB password.

### Authentication
```
NEXTAUTH_URL=https://sitasonii.vercel.app
NEXTAUTH_SECRET=your-super-secret-random-string-here
```

### Admin Credentials
```
ADMIN_EMAIL=jageshwarsahu910@gmail.com
ADMIN_PASSWORD=Jaggu@06
```

## Steps to Fix Authentication

1. **Set Environment Variables in Vercel:**
   - Go to your Vercel dashboard
   - Navigate to your project (sitasonii)
   - Go to Settings > Environment Variables
   - Add all the variables above

2. **Redeploy:**
   - After setting environment variables, redeploy your app
   - You can trigger a redeploy by pushing a new commit or manually from Vercel dashboard

3. **Seed Database:**
   - Once deployed with correct env vars, visit: `https://sitasonii.vercel.app/api/seed`
   - This will create the admin user and sample products

## Current Issues Fixed

- ✅ Removed demo credentials from sign-in page
- ⚠️ Environment variables need to be set in Vercel dashboard
- ⚠️ Database seeding needs to happen after env vars are set

## Test Admin Login

After setting up environment variables and seeding:
- Email: jageshwarsahu910@gmail.com
- Password: Jaggu@06

The authentication system will automatically create an admin user with these credentials when they're used for the first time.
