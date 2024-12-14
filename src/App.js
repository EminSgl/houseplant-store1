import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProductListing from "./ProductListing";
import ShoppingCart from "./ShoppingCart";
import "./App.css"; // Falls du CSS für den Header hinzufügen möchtest

function App() {
  // Zustand für den Warenkorb
  const [cart, setCart] = useState([]);

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
                <Link to="/cart">Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})</Link>
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
