'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Package, 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  Plus,
  Eye,
  Edit,
  DollarSign
} from 'lucide-react';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalUsers: 0,
    totalOrders: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session || session.user.role !== 'admin') {
      router.push('/auth/signin');
      return;
    }

    // Fetch dashboard stats
    fetchStats();
  }, [session, status, router]);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!session || session.user.role !== 'admin') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back, {session.user.name}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Products</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalProducts}</p>
              </div>
              <Package className="h-12 w-12 text-blue-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalUsers}</p>
              </div>
              <Users className="h-12 w-12 text-green-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalOrders}</p>
              </div>
              <ShoppingCart className="h-12 w-12 text-purple-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900">${stats.totalRevenue}</p>
              </div>
              <DollarSign className="h-12 w-12 text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/admin/products/new"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <Plus className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Add Product</h3>
                <p className="text-gray-600">Create a new product listing</p>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/products"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <Eye className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">View Products</h3>
                <p className="text-gray-600">Manage existing products</p>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/orders"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <ShoppingCart className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Manage Orders</h3>
                <p className="text-gray-600">View and update order status</p>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/analytics"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-yellow-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Analytics</h3>
                <p className="text-gray-600">View sales and performance data</p>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/users"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <Users className="h-8 w-8 text-indigo-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Manage Users</h3>
                <p className="text-gray-600">View and manage user accounts</p>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/settings"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <Edit className="h-8 w-8 text-red-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
                <p className="text-gray-600">Configure store settings</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
