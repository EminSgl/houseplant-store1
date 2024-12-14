import React from "react";

function ShoppingCartPage({ cart, setCart }) {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalCost = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const increaseQuantity = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>

      {cart.map((product) => (
        <div key={product.id} className="cart-item">
          <img src={product.thumbnail} alt={product.name} />
          <div className="cart-item-details">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
          </div>
          <div className="cart-buttons">
            <button onClick={() => increaseQuantity(product)}>Increase</button>
            <button onClick={() => decreaseQuantity(product)}>Decrease</button>
            <button className="delete" onClick={() => deleteItem(product)}>
              Delete
            </button>
          </div>
        </div>
      ))}
      <div className="cart-footer">
        <button onClick={() => (window.location.href = "/products")}>
          Continue Shopping
        </button>
        <button onClick={() => alert("Checkout coming soon!")}>Checkout</button>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
