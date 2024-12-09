import React from 'react';

const ProductListing = () => {
  const products = [
    { id: 1, name: 'Monstera', price: 20, category: 'Tropical', thumbnail: 'monstera.jpg' },
    { id: 2, name: 'Snake Plant', price: 15, category: 'Succulent', thumbnail: 'snakeplant.jpg' },
    { id: 3, name: 'Fiddle Leaf Fig', price: 25, category: 'Ficus', thumbnail: 'fiddleleaf.jpg' },
    { id: 4, name: 'Aloe Vera', price: 10, category: 'Succulent', thumbnail: 'aloevera.jpg' },
    { id: 5, name: 'Peace Lily', price: 18, category: 'Flowering', thumbnail: 'peacelily.jpg' },
    { id: 6, name: 'ZZ Plant', price: 22, category: 'Tropical', thumbnail: 'zzplant.jpg' },
  ];

  return (
    <div>
      <h1>Our Plants</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={`./images/${product.thumbnail}`} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
