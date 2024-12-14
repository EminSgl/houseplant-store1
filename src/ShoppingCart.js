import React from "react";

const ShoppingCart = ({ cart, setCart }) => {
  // Berechnung der totalen Anzahl und der Kosten
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleIncrease = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const handleDecrease = (productId) => {
    const updatedCart = cart
      .map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  const handleDelete = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>

      <div>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleIncrease(item.id)}>Increase</button>
            <button onClick={() => handleDecrease(item.id)}>Decrease</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>

      <button onClick={() => window.location.href = "/products"}>Continue Shopping</button>
      <button onClick={() => alert("Coming Soon")}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
