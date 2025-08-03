import Link from 'next/link';
import { ArrowRight, Star, Users, Shield, Truck } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to SITASONI
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Discover the latest fashion trends with our premium clothing collection
          </p>
          <Link
            href="/products"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">High-quality materials and craftsmanship in every piece</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping to your doorstep</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Customer Care</h3>
              <p className="text-gray-600">24/7 support for all your fashion needs</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Top Rated</h3>
              <p className="text-gray-600">Thousands of satisfied customers worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600">
              Find the perfect style for everyone
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Men's Category */}
            <Link
              href="/products?category=Men"
              className="group relative h-80 bg-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Men&apos;s Collection</h3>
                <p className="text-gray-200">Stylish and comfortable clothing</p>
              </div>
              <div className="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                Shop Now
              </div>
            </Link>

            {/* Women's Category */}
            <Link
              href="/products?category=Women"
              className="group relative h-80 bg-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Women&apos;s Collection</h3>
                <p className="text-gray-200">Elegant and trendy fashion</p>
              </div>
              <div className="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                Shop Now
              </div>
            </Link>

            {/* Kids' Category */}
            <Link
              href="/products?category=Kids"
              className="group relative h-80 bg-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Kids&apos; Collection</h3>
                <p className="text-gray-200">Fun and comfortable kids wear</p>
              </div>
              <div className="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                Shop Now
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Upgrade Your Wardrobe?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers and discover your perfect style
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Products
            </Link>
            <Link
              href="/auth/signin"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
