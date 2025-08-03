import Link from 'next/link';
import { CheckCircle, Package, Truck, Home } from 'lucide-react';

export default function OrderSuccessPage() {
  const orderNumber = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Order Placed Successfully!
          </h1>
          
          <p className="text-lg text-gray-600 mb-2">
            Thank you for your order. We&apos;ve received your order and will process it shortly.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-500 mb-1">Order Number</p>
            <p className="text-xl font-mono font-semibold text-gray-900">{orderNumber}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Order Confirmed</h3>
              <p className="text-sm text-gray-500">Your order has been received and is being processed</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Package className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Processing</h3>
              <p className="text-sm text-gray-500">We&apos;re preparing your order for shipment</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Truck className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Delivery</h3>
              <p className="text-sm text-gray-500">Your order will be delivered within 3-5 business days</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="font-medium text-gray-900 mb-2">What&apos;s Next?</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• You&apos;ll receive an email confirmation shortly</li>
              <li>• We&apos;ll send you tracking information once your order ships</li>
              <li>• Your order will be delivered within 3-5 business days</li>
              <li>• Contact us if you have any questions about your order</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Continue Shopping
            </Link>
            
            <Link
              href="/"
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors font-medium flex items-center justify-center"
            >
              <Home className="h-4 w-4 mr-2" />
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
