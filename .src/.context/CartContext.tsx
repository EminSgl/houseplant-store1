import React, { createContext, useContext } from 'react';
import { Plant, CartItem } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { isValidQuantity } from '../utils/validation';
import { formatPrice } from '../utils/formatters';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (plant: Plant) => void;
  removeFromCart: (plantId: string) => void;
  increaseQuantity: (plantId: string) => void;
  decreaseQuantity: (plantId: string) => void;
  getTotalItems: () => number;
  getTotalCost: () => number;
  formatTotalCost: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart', []);

  const addToCart = (plant: Plant) => {
    setCartItems((prev) => [...prev, { plant, quantity: 1 }]);
  };

  const removeFromCart = (plantId: string) => {
    setCartItems((prev) => prev.filter((item) => item.plant.id !== plantId));
  };

  const increaseQuantity = (plantId: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.plant.id === plantId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (plantId: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.plant.id === plantId && isValidQuantity(item.quantity - 1)
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalCost = () => {
    return cartItems.reduce(
      (total, item) => total + item.plant.price * item.quantity,
      0
    );
  };

  const formatTotalCost = () => {
    return formatPrice(getTotalCost());
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getTotalItems,
        getTotalCost,
        formatTotalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}