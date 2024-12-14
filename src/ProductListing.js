import React, { useState } from 'react';
import './ProductListing.css';

import plantImage from './assets/plant.webp';

const ProductListing = ({ cart, setCart }) => {
  const [disabledButtons, setDisabledButtons] = useState({});

  // Produktdaten
  const products = [
    { id: 1, name: 'Monstera', price: 20, category: 'Tropical', thumbnail: plantImage },
    { id: 2, name: 'Snake Plant', price: 15, category: 'Succulent', thumbnail: plantImage },
    { id: 3, name: 'Fiddle Leaf Fig', price: 25, category: 'Ficus', thumbnail: plantImage },
    { id: 4, name: 'Aloe Vera', price: 10, category: 'Succulent', thumbnail: plantImage },
    { id: 5, name: 'Peace Lily', price: 18, category: 'Flowering', thumbnail: plantImage },
    { id: 6, name: 'ZZ Plant', price: 22, category: 'Tropical', thumbnail: plantImage },
  ];

  // Produkte nach Kategorie gruppieren
  const groupedProducts = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  // Funktion: Produkt zum Warenkorb hinzufügen
  const handleAddToCart = (product) => {
    setCart([...cart, product]); // Produkt zum Warenkorb hinzufügen
    setDisabledButtons({ ...disabledButtons, [product.id]: true }); // Button deaktivieren
  };

  return (
    <div>
      <h1>Product Listing Page</h1>
      {Object.keys(groupedProducts).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="product-grid">
            {groupedProducts[category].map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.thumbnail} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={disabledButtons[product.id]}
                >
                  {disabledButtons[product.id] ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;

