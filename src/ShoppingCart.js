import React from "react";
import { Link } from "react-router-dom";
import "./ShoppingCart.css"; // Falls du Styling hinzufügen möchtest

const ShoppingCart = ({ cart, setCart }) => {
  // Funktion, um die Menge eines Produkts zu erhöhen
  const handleIncrease = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  // Funktion, um die Menge eines Produkts zu verringern
  const handleDecrease = (product) => {
    const updatedCart = cart
      .map((item) =>
        item.id === product.id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  // Funktion, um ein Produkt aus dem Warenkorb zu löschen
  const handleDelete = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  // Berechnung der Gesamtkosten
  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Berechnung der Gesamtanzahl der Produkte
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>
      <div>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleIncrease(item)}>Increase</button>
              <button onClick={() => handleDecrease(item)}>Decrease</button>
              <button onClick={() => handleDelete(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link to="/products">
          <button>Continue Shopping</button>
        </Link>
        <button onClick={() => alert("Coming Soon!")}>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;

