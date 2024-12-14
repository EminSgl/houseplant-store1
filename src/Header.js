import React from "react";
import './App.css';
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
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
              <span role="img" aria-label="cart">
                🛒
              </span>
              {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
