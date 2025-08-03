import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check environment variables
    const mongoUri = process.env.MONGODB_URI;
    const hasPasswordPlaceholder = mongoUri?.includes('<db_password>');
    
    return NextResponse.json({
      message: 'Server is running properly',
      timestamp: new Date().toISOString(),
      environment: {
        nodeEnv: process.env.NODE_ENV,
        hasMongoUri: !!mongoUri,
        hasPasswordPlaceholder,
        mongoUriLength: mongoUri?.length || 0,
      },
      server: {
        status: 'healthy',
        port: process.env.PORT || '3002',
      }
    });
  } catch (error) {
    return NextResponse.json(
      { 
        message: 'Server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
