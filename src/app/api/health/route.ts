import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import mongoose from 'mongoose';

export async function GET() {
  try {
    // Check environment variables
    const mongoUri = process.env.MONGODB_URI;
    const hasPasswordPlaceholder = mongoUri?.includes('<db_password>');
    const nextAuthUrl = process.env.NEXTAUTH_URL;
    const nextAuthSecret = process.env.NEXTAUTH_SECRET;
    
    // Test database connection
    let dbStatus = 'disconnected';
    let dbError = null;
    
    try {
      await connectDB();
      dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'connecting';
    } catch (error) {
      dbError = error instanceof Error ? error.message : 'Unknown database error';
    }
    
    return NextResponse.json({
      message: 'Server is running properly',
      timestamp: new Date().toISOString(),
      environment: {
        nodeEnv: process.env.NODE_ENV,
        hasMongoUri: !!mongoUri,
        hasPasswordPlaceholder,
        mongoUriLength: mongoUri?.length || 0,
        hasNextAuthUrl: !!nextAuthUrl,
        hasNextAuthSecret: !!nextAuthSecret,
      },
      database: {
        status: dbStatus,
        error: dbError,
        connectionState: mongoose.connection.readyState,
      },
      server: {
        status: 'healthy',
        port: process.env.PORT || '3000',
        vercel: !!process.env.VERCEL,
      },
      warnings: [
        ...(hasPasswordPlaceholder ? ['MongoDB URI contains placeholder password'] : []),
        ...(process.env.NODE_ENV === 'production' && !nextAuthSecret ? ['NEXTAUTH_SECRET not set'] : []),
        ...(process.env.NODE_ENV === 'production' && !nextAuthUrl ? ['NEXTAUTH_URL not set'] : []),
      ],
    });
  } catch (error) {
    return NextResponse.json(
      { 
        message: 'Server error',
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
