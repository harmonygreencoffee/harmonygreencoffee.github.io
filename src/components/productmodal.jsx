import React from 'react';
import '../styles/productmodal.css';

const ProductModal = ({ product, isOpen, onClose, onContactClick }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">
            {product.name}
          </h3>
          <button
            onClick={onClose}
            className="modal-close"
          >
            ✕
          </button>
        </div>
        <p className="modal-text">{product.description}</p>
        <p className="modal-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
        <button
          onClick={onContactClick}
          className="modal-button"
          onMouseEnter={(e) => e.target.style.opacity = '0.9'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          Contact us for pricing
        </button>
      </div>
    </div>
  );
};

export default ProductModal;