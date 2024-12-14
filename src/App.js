import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProductListing from "./ProductListing";
import ShoppingCartPage from "./ShoppingCartPage";

function App({ cart }) {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div>
        <header className="app-header">
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
          <div className="cart-icon">
            <Link to="/cart">🛒</Link>
            <span className="cart-count">{totalItems}</span>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
