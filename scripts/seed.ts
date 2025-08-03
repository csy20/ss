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
    name: "Casual Sneakers",
    description: "Comfortable casual sneakers for everyday wear",
    price: 119.99,
    category: "Accessories",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["White", "Black", "Gray"],
    stock: 35,
    featured: true,
    images: ["/placeholder-product.jpg"],
  },
];

async function seedDatabase() {
  try {
    await connectDB();
    console.log('Connected to MongoDB');

    // Clear existing data
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('Seeded products');

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
      console.log('Created test user');
    }

    // Create admin user if it doesn't exist
    const adminEmail = process.env.ADMIN_EMAIL || 'jageshwarsahu910@gmail.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'Jaggu@06';
    
    const adminUser = await User.findOne({ email: adminEmail });
    if (!adminUser) {
      const hashedPassword = await bcrypt.hash(adminPassword, 12);
      await User.create({
        name: 'Admin User',
        email: adminEmail,
        password: hashedPassword,
        role: 'admin',
        profileCompleted: true,
        address: {
          street: 'Admin Address',
          city: 'Admin City',
          state: 'Admin State',
          country: 'India',
          pincode: '123456',
        },
      });
      console.log('Created admin user');
    } else if (adminUser.role !== 'admin') {
      // Update existing user to admin role
      adminUser.role = 'admin';
      await adminUser.save();
      console.log('Updated user to admin role');
    }

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

// Check if we're running this as a script
if (require.main === module) {
  seedDatabase().then(() => process.exit(0));
}

export default seedDatabase;
