import React from "react";
import { Link } from "react-router-dom"; // Für die Navigation zur Produktseite
import "./LandingPage.css"; // CSS-Datei für Styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-image">
        <h1 className="company-name">GreenScape Plants</h1>
        <p className="company-description">
          Welcome to GreenScape! We bring nature closer to you with a variety of beautiful houseplants for every home.
        </p>
        <Link to="/products">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
