🚨 URGENT FIX: Environment Variables Setup

PROBLEM: You've added "YOUR_PASSWORD" instead of your real MongoDB password.

SOLUTION: Use Vercel Dashboard (Much Easier!)

📱 STEPS TO FIX IMMEDIATELY:

1. 🌐 Go to: https://vercel.com/dashboard
2. 🎯 Click on your "sitasonii" project
3. ⚙️  Click "Settings" tab
4. 🔧 Click "Environment Variables" in the left menu
5. ✏️  Find "MONGODB_URI" and click "Edit"
6. 📝 Replace the value with your REAL connection string:

   COPY THIS (but replace YOUR_REAL_PASSWORD):
   mongodb+srv://csy20:YOUR_REAL_PASSWORD@cluster0.vm7ufhd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

7. ➕ Add these additional variables by clicking "Add":

   Key: NEXTAUTH_URL
   Value: https://sitasonii-6iutu1wlk-csys-projects-68441e72.vercel.app

   Key: NEXTAUTH_SECRET  
   Value: 8mJc9s6rK3pQwE7tY1uI0oP2nM4xZ5vB8aS1dF6gH9jK2lX

   Key: ADMIN_EMAIL
   Value: jageshwarsahu910@gmail.com

   Key: ADMIN_PASSWORD
   Value: Jaggu@06

   Key: NODE_ENV
   Value: production

8. 🚀 Go to "Deployments" tab and click "Redeploy"

⚡ Your site will be live at:
https://sitasonii-6iutu1wlk-csys-projects-68441e72.vercel.app

🔑 IMPORTANT: Get your real MongoDB password from:
- MongoDB Atlas Dashboard
- Database → Connect → Drivers
- Copy the password (not the whole string, just the password part)
