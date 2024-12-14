import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function OrderSummary() {
  const { getTotalItems, getTotalCost } = useCart();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-fit">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Total Items:</span>
          <span>{getTotalItems()}</span>
        </div>
        <div className="flex justify-between text-lg font-bold">
          <span>Total Cost:</span>
          <span>${getTotalCost().toFixed(2)}</span>
        </div>
      </div>
      <button
        onClick={() => alert('Coming Soon!')}
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 mb-2"
      >
        Checkout
      </button>
      <Link
        to="/products"
        className="block w-full text-center text-green-600 hover:text-green-700"
      >
        Continue Shopping
      </Link>
    </div>
  );
}