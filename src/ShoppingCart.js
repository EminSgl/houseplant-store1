import React from "react";
import "./ShoppingCart.css";

const ShoppingCart = ({ cart, setCart }) => {
  // Berechne die Gesamtkosten
  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleIncrease = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrease = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleDelete = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.thumbnail} alt={product.name} />
              <div>
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
              <div>
                <button onClick={() => handleIncrease(product)}>+</button>
                <button onClick={() => handleDecrease(product)}>-</button>
                <button onClick={() => handleDelete(product)}>Delete</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total Items: {cart.reduce((acc, item) => acc + item.quantity, 0)}</h3>
            <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
          </div>
          <button onClick={() => alert("Coming Soon!")}>Checkout</button>
          <button onClick={() => (window.location.href = "/products")}>
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
