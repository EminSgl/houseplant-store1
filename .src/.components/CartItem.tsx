import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md mb-4">
      <img
        src={item.plant.image}
        alt={item.plant.name}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.plant.name}</h3>
        <p className="text-green-600 font-bold">
          ${item.plant.price.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQuantity(item.plant.id)}
          className="p-1 rounded-md hover:bg-gray-100"
        >
          <Minus className="w-5 h-5" />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => increaseQuantity(item.plant.id)}
          className="p-1 rounded-md hover:bg-gray-100"
        >
          <Plus className="w-5 h-5" />
        </button>
        <button
          onClick={() => removeFromCart(item.plant.id)}
          className="p-1 rounded-md hover:bg-gray-100 ml-2"
        >
          <Trash2 className="w-5 h-5 text-red-500" />
        </button>
      </div>
    </div>
  );
}