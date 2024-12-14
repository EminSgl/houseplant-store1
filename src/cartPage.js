import React from 'react';

const CartPage = ({ cart, setCart }) => {
  const handleIncrease = (product) => {
    setCart([...cart, product]);
  };

  const handleDecrease = (productId) => {
    const index = cart.findIndex((item) => item.id === productId);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const handleDelete = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const totalCost = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total Items: {cart.length}</p>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>
      <button>Checkout (Coming Soon)</button>
      <button onClick={() => window.history.back()}>Continue Shopping</button>

      {cart.map((product, index) => (
        <div key={index} className="cart-item">
          <img src={`./images/${product.thumbnail}`} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleIncrease(product)}>Increase</button>
          <button onClick={() => handleDecrease(product.id)}>Decrease</button>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
