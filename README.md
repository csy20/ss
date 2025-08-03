# SITASONI E-commerce Website

A modern e-commerce website for SITASONI clothing store built with Next.js 14, TypeScript, Tailwind CSS, and MongoDB Atlas.

## Features

- **User Authentication**: Secure login/signup with NextAuth.js
- **Role-based Access**: Admin panel for store management
- **Product Management**: Add, edit, delete products with images
- **Shopping Cart**: Persistent cart with local and database storage
- **Order Management**: Complete order tracking and management
- **Analytics Dashboard**: Sales reports and inventory tracking
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Search & Filters**: Advanced product search and filtering

## Admin Access

- **Email**: jageshwarsahu910@gmail.com
- **Password**: Jaggu@06

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sitasoni
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env.local` file with:
   ```
   MONGODB_URI=mongodb+srv://csy20:<db_password>@cluster0.vm7ufhd.mongodb.net/sitasoni?retryWrites=true&w=majority&appName=Cluster0
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   ADMIN_EMAIL=jageshwarsahu910@gmail.com
   ADMIN_PASSWORD=Jaggu@06
   ```

4. **Replace `<db_password>` with your actual MongoDB Atlas password**

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)**

## Project Structure

```
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── admin/             # Admin panel routes
│   │   ├── api/               # API routes
│   │   ├── auth/              # Authentication pages
│   │   ├── products/          # Product pages
│   │   └── ...
│   ├── components/            # Reusable components
│   ├── lib/                   # Utilities and configurations
│   ├── models/                # MongoDB/Mongoose models
│   └── store/                 # Zustand state management
├── public/                    # Static assets
└── ...
```

## Technologies Used

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, MongoDB Atlas, Mongoose
- **Authentication**: NextAuth.js
- **State Management**: Zustand
- **UI Components**: Lucide React (icons)
- **Analytics**: Chart.js, React Chart.js 2

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## License

MIT License
