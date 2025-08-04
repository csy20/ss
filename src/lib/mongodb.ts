import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Check if the MongoDB URI has the placeholder password
if (MONGODB_URI.includes('<db_password>')) {
  // During build time, we might not have the actual password
  // Only throw error if we're not in build mode
  if (process.env.NODE_ENV !== 'production' && typeof window === 'undefined' && !process.env.VERCEL_ENV) {
    console.warn('MongoDB URI contains placeholder password. Database operations will be disabled.');
  }
}

interface CachedConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: CachedConnection | undefined;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB(): Promise<typeof mongoose> {
  // Skip connection if URI has placeholder password
  if (MONGODB_URI.includes('<db_password>')) {
    console.warn('MongoDB URI contains placeholder password. Skipping connection.');
    // Return a mock mongoose instance for build compatibility
    return mongoose;
  }

  if (cached!.conn) {
    return cached!.conn;
  }

  if (!cached!.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      family: 4, // Use IPv4, skip trying IPv6
      dbName: 'sitasoni', // Explicitly specify database name
    };

    cached!.promise = mongoose.connect(MONGODB_URI, opts);
  }

  try {
    cached!.conn = await cached!.promise;
    console.log('Connected to MongoDB successfully');
  } catch (e) {
    cached!.promise = null;
    console.error('MongoDB connection error:', e);
    throw e;
  }

  return cached!.conn;
}

export default connectDB;
export { connectDB };
