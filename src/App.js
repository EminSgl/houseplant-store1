import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProductListing from "./ProductListing";
import ShoppingCart from "./ShoppingCart"; // Name aktualisiert
import "./App.css"; // Falls du CSS für den Header hinzufügen möchtest

function App() {
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
                <Link to="/cart">
                  <span className="cart-icon">🛒</span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Routen */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
