import React from 'react';
import { Plant } from '../types';
import { useCart } from '../context/CartContext';

interface PlantCardProps {
  plant: Plant;
}

export default function PlantCard({ plant }: PlantCardProps) {
  const { addToCart, cartItems } = useCart();
  const isInCart = cartItems.some((item) => item.plant.id === plant.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={plant.image}
        alt={plant.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {plant.name}
        </h3>
        <p className="text-gray-600 mb-4">{plant.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-green-600">
            ${plant.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(plant)}
            disabled={isInCart}
            className={`px-4 py-2 rounded-lg ${
              isInCart
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {isInCart ? 'In Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}