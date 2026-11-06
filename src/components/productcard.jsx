import React from 'react';
import '../styles/productcard.css'

const ProductCard = ({ product }) => {
  return (
    <div
      className="product-card"
    >
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
          className="product-image-img"
        />
      </div>
      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>
        <div className="product-description">
          {product.description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="product-description-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;