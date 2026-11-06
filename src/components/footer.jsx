import React from 'react';
import { Phone, Mail } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-title">Harmony Green Coffee</h3>
        <div className="footer-contact">
          <div className="contact-item">
            <Phone size={20} />
            <span>754-214-3075</span>
          </div>
          <div className="contact-item">
            <Mail size={20} />
            <span>trading@harmonygreencoffee.com</span>
          </div>
        </div>
        <p className="footer-text">
          © Copyright harmony green - HARMONY GREEN COFFEE LLC
        </p>
      </div>
    </footer>
  );
};

export default Footer;