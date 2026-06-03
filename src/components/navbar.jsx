import React from 'react';
import { Phone, Mail } from 'lucide-react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img
            src="/harmony-green-logo.png"
            alt="Harmony Green Coffee Logo"
            className="logo-img"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <h1 className="logo-text">
            Harmony Green Coffee
          </h1>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <Phone size={16} color="rgb(101, 65, 55)" />
            <span>754-214-3075</span>
          </div>
          <div className="contact-item">
            <Mail size={16} color="rgb(101, 65, 55)" />
            <span>trading@harmonygreencoffee.com</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;