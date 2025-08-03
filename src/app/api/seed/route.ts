import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

const sampleProducts = [
  {
    name: "Classic White T-Shirt",
    description: "Comfortable cotton t-shirt perfect for everyday wear",
    price: 29.99,
    category: "Men",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"],
    stock: 50,
    featured: true,
    images: ["/placeholder-product.jpg"],
  },
  {
    name: "Elegant Summer Dress",
    description: "Beautiful summer dress for women, perfect for casual outings",
    price: 79.99,
    category: "Women",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Red", "Blue", "Green"],
    stock: 30,
    featured: true,
    images: ["/placeholder-product.jpg"],
  },
  {
    name: "Kids Colorful Hoodie",
    description: "Warm and colorful hoodie for kids",
    price: 39.99,
    category: "Kids",
    sizes: ["XS", "S", "M"],
    colors: ["Red", "Yellow", "Blue"],
    stock: 25,
    featured: false,
    images: ["/placeholder-product.jpg"],
  },
  {
    name: "Denim Jeans",
    description: "Classic blue denim jeans for men",
    price: 89.99,
    category: "Men",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    stock: 40,
    featured: false,
    images: ["/placeholder-product.jpg"],
  },
  {
    name: "Women's Leather Jacket",
    description: "Stylish leather jacket for women",
    price: 199.99,
    category: "Women",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Brown"],
    stock: 20,
    featured: true,
    images: ["/placeholder-product.jpg"],
  },
  {
    name: "Kids School Backpack",
    description: "Durable and colorful school backpack for kids",
    price: 49.99,
    category: "Kids",
    sizes: ["Small", "Medium"],
    colors: ["Blue", "Pink", "Green"],
    stock: 30,
    featured: false,
    images: ["/placeholder-product.jpg"],
  },
];

export async function POST() {
  try {
    await connectDB();

    // Clear existing products
    await Product.deleteMany({});

    // Insert sample products
    await Product.insertMany(sampleProducts);

    // Create admin user
    const adminUser = await User.findOne({ email: 'jageshwarsahu910@gmail.com' });
    if (!adminUser) {
      const hashedPassword = await bcrypt.hash('Jaggu@06', 12);
      await User.create({
        name: 'Jageshwar Sahu',
        email: 'jageshwarsahu910@gmail.com',
        password: hashedPassword,
        role: 'admin',
        profileCompleted: true,
        address: {
          street: '123 Admin Street',
          city: 'Admin City',
          state: 'Admin State',
          country: 'India',
          pincode: '123456',
        },
      });
    }

    // Create a test user if it doesn't exist
    const testUser = await User.findOne({ email: 'test@example.com' });
    if (!testUser) {
      const hashedPassword = await bcrypt.hash('password123', 12);
      await User.create({
        name: 'Test User',
        email: 'test@example.com',
        password: hashedPassword,
        role: 'user',
        profileCompleted: true,
        address: {
          street: '123 Test Street',
          city: 'Test City',
          state: 'Test State',
          country: 'Test Country',
          pincode: '12345',
        },
      });
    }

    return NextResponse.json({
      message: 'Database seeded successfully',
      productsCreated: sampleProducts.length,
    });
  } catch (error) {
    console.error('Seeding error:', error);
    return NextResponse.json(
      { 
        message: 'Error seeding database',
        error: error instanceof Error ? error.message : 'Unknown error',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}
