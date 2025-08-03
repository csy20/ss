#!/bin/bash

# SITASONI Deployment Preparation Script
# This script helps prepare your app for Vercel deployment

echo "🚀 SITASONI - Deployment Preparation"
echo "===================================="

# Check if MongoDB URI has placeholder
if grep -q "<db_password>" .env.local 2>/dev/null; then
    echo "❌ ERROR: Please replace <db_password> in .env.local with your actual MongoDB password"
    echo "📝 Edit .env.local and replace <db_password> with your real password"
    exit 1
fi

echo "✅ Environment file looks good"

# Test build
echo "🔨 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful! Ready for deployment"
    echo ""
    echo "🎯 Next Steps:"
    echo "1. Push code to GitHub: git add . && git commit -m 'Ready for deployment' && git push"
    echo "2. Go to vercel.com and import your repository"
    echo "3. Add environment variables in Vercel dashboard"
    echo "4. Deploy!"
    echo ""
    echo "📚 See VERCEL_DEPLOYMENT.md for detailed instructions"
else
    echo "❌ Build failed. Please fix errors before deploying"
    exit 1
fi
