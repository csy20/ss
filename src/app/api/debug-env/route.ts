import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const mongoUri = process.env.MONGODB_URI;
    const nextAuthUrl = process.env.NEXTAUTH_URL;
    const nextAuthSecret = process.env.NEXTAUTH_SECRET;
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    return NextResponse.json({
      message: "Environment Variables Debug",
      environment: {
        mongoUri: mongoUri ? `${mongoUri.substring(0, 20)}...${mongoUri.substring(mongoUri.length - 10)}` : 'NOT SET',
        mongoUriLength: mongoUri?.length || 0,
        nextAuthUrl: nextAuthUrl || 'NOT SET',
        nextAuthSecret: nextAuthSecret ? 'SET' : 'NOT SET',
        adminEmail: adminEmail || 'NOT SET',
        adminPassword: adminPassword ? 'SET' : 'NOT SET',
        mongoUriStartsWith: mongoUri?.startsWith('mongodb') || false,
        mongoUriScheme: mongoUri?.split('://')[0] || 'UNKNOWN'
      }
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error checking environment variables",
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
