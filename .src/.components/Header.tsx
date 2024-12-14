import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { getTotalItems } = useCart();
  const location = useLocation();

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-600">
          GreenThumb
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            to="/products"
            className={`text-lg ${
              location.pathname === '/products'
                ? 'text-green-600'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            Products
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-green-600" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}