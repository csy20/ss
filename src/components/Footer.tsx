import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">SITASONI</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Discover the latest fashion trends with SITASONI. Based in Nawagarh, Chhattisgarh, 
              we offer quality clothing for men, women, and kids at affordable prices. Your style, our passion.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1ARaNmyZRu/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://youtube.com/@sitasonitrend?si=gt1VUQfxfp_QCnbW" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/sitasoni.in?igsh=MXQ0Y25sOXJ2YXd1Zg==" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=Men" className="text-gray-300 hover:text-white transition-colors">
                  Men&apos;s Collection
                </Link>
              </li>
              <li>
                <Link href="/products?category=Women" className="text-gray-300 hover:text-white transition-colors">
                  Women&apos;s Collection
                </Link>
              </li>
              <li>
                <Link href="/products?category=Kids" className="text-gray-300 hover:text-white transition-colors">
                  Kids&apos; Collection
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">Nawagarh, Chhattisgarh, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <a href="tel:+917024367848" className="text-gray-300 hover:text-white transition-colors">+91 7024367848</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:support@sitasoni.in" className="text-gray-300 hover:text-white transition-colors">support@sitasoni.in</a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <a href="https://g.co/kgs/uCgMwxg" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Find us on Google Maps</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 SITASONI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/shipping" className="text-gray-300 hover:text-white text-sm transition-colors">
              Shipping Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
