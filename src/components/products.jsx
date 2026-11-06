import React from 'react';
import '../styles/products.css';
import ProductCard from './productcard.jsx';

const Products = ({ products }) => {
  return (
    <section className="products-section">
      <div className="products-container">
        <h2 className="products-title">
          Featured Products
        </h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;