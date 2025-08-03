import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import Product from '@/models/Product';
import Order from '@/models/Order';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();

    // Get stats
    const [totalProducts, totalUsers, totalOrders, orders] = await Promise.all([
      Product.countDocuments(),
      User.countDocuments(),
      Order.countDocuments(),
      Order.find({}, 'total')
    ]);

    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);

    return NextResponse.json({
      totalProducts,
      totalUsers,
      totalOrders,
      totalRevenue: totalRevenue.toFixed(2),
    });
  } catch (error) {
    console.error('Stats error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
