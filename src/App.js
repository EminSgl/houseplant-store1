import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProductListing from "./ProductListing";
import ShoppingCart from "./ShoppingCart";
import { FaShoppingCart } from "react-icons/fa"; // Importiere das Einkaufskorb-Icon
import "./App.css";

function App() {
  const [cart, setCart] = useState([]); // Globaler Zustand für den Warenkorb

  return (
    <Router>
      <div>
        {/* Header mit Navigation */}
        <header className="app-header">
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/cart" className="cart-link">
                  <FaShoppingCart /> {/* Einkaufskorb-Icon */}
                  <span className="cart-count">
                    {cart.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Routen */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/products"
            element={<ProductListing cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<ShoppingCart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
