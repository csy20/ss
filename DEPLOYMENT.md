# SITASONI - Vercel1. Replace `<db_password>` in the connection string with your actual database password
2. Ensure your IP whitelist includes `0.0.0.0/0` for Vercel deployment
3. Verify database connection using the `/api/health` endpoint
4. Note: The connection string will automatically connect to the 'sitasoni' databaseployment Guide

## Pre-deployment Checklist

### 1. Environment Variables Setup
Before deploying, you need to set up the following environment variables in Vercel:

#### Required Environment Variables:
```
MONGODB_URI=mongodb+srv://csy20:YOUR_ACTUAL_PASSWORD@cluster0.vm7ufhd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
NEXTAUTH_URL=https://your-app-name.vercel.app
NEXTAUTH_SECRET=your-very-secure-random-secret-key
ADMIN_EMAIL=jageshwarsahu910@gmail.com
ADMIN_PASSWORD=Jaggu@06
NODE_ENV=production
```

### 2. MongoDB Atlas Configuration
1. Go to MongoDB Atlas (https://cloud.mongodb.com/)
2. Replace `<db_password>` in the connection string with your actual database password
3. Ensure your IP whitelist includes `0.0.0.0/0` for Vercel deployment
4. Verify database connection using the `/api/health` endpoint

### 3. NextAuth Secret Generation
Generate a secure secret for NextAuth:
```bash
openssl rand -base64 32
```

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Add environment variables in the Environment Variables section
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set environment variables
vercel env add MONGODB_URI
vercel env add NEXTAUTH_URL
vercel env add NEXTAUTH_SECRET
vercel env add ADMIN_EMAIL
vercel env add ADMIN_PASSWORD
vercel env add NODE_ENV

# Redeploy with environment variables
vercel --prod
```

## Post-deployment Verification

### 1. Health Check
Visit: `https://your-app-name.vercel.app/api/health`
Should return server status and MongoDB connection info.

### 2. Seed Database
Visit: `https://your-app-name.vercel.app/api/seed`
This will populate your database with sample products and test users.

### 3. Admin Access
- URL: `https://your-app-name.vercel.app/auth/signin`
- Email: `jageshwarsahu910@gmail.com`
- Password: `Jaggu@06`

### 4. Test Features
- User registration/login
- Product browsing
- Cart functionality
- Order placement
- Admin panel access

## Troubleshooting

### Common Issues:

1. **MongoDB Connection Error**
   - Verify MONGODB_URI is correct
   - Check IP whitelist in MongoDB Atlas
   - Ensure password doesn't contain special characters that need URL encoding

2. **NextAuth Error**
   - Verify NEXTAUTH_URL matches your Vercel domain
   - Ensure NEXTAUTH_SECRET is set and secure

3. **Build Errors**
   - Run `npm run build` locally first
   - Check TypeScript errors with `npm run type-check`

4. **API Routes Not Working**
   - Verify all environment variables are set in Vercel
   - Check Vercel function logs for errors

## Performance Optimization

1. **Image Optimization**: Already configured in `next.config.ts`
2. **API Caching**: Consider implementing API route caching
3. **Database Indexing**: Ensure proper indexes on MongoDB collections
4. **CDN**: Vercel automatically provides CDN for static assets

## Security Considerations

1. **Environment Variables**: Never commit `.env` files to repository
2. **Database Access**: Use MongoDB Atlas IP whitelisting
3. **API Security**: Implement rate limiting for production
4. **HTTPS**: Automatically provided by Vercel

## Monitoring

1. **Vercel Analytics**: Enable in Vercel dashboard
2. **MongoDB Monitoring**: Use MongoDB Atlas monitoring
3. **Error Tracking**: Consider integrating Sentry or similar service

## Backup Strategy

1. **Database**: Set up automated backups in MongoDB Atlas
2. **Code**: Ensure code is backed up in GitHub
3. **Environment Variables**: Keep secure backup of production environment variables
