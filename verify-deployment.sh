#!/bin/bash

echo "🔍 Verifying Deployment Setup..."
echo "================================="

# Check health endpoint
echo "1. Checking server health..."
curl -s https://sitasonii.vercel.app/api/health | jq '.'
echo ""

# Check if we can seed the database
echo "2. Attempting to seed database..."
curl -s -X POST https://sitasonii.vercel.app/api/seed
echo ""

# Check if products API works
echo "3. Checking products API..."
curl -s https://sitasonii.vercel.app/api/products | jq 'length'
echo " products found"

echo ""
echo "✅ Verification complete!"
echo ""
echo "Next steps:"
echo "- Visit: https://sitasonii.vercel.app"
echo "- Try logging in with: jageshwarsahu910@gmail.com / Jaggu@06"
