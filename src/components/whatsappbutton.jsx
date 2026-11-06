import React from 'react';
import { MessageCircle } from 'lucide-react';
import '../styles/whatsappbutton.css';

const WhatsAppButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="whatsapp-button"
      title="Contact us on WhatsApp"
      onMouseEnter={(e) => e.target.style.backgroundColor = '#16a34a'}
      onMouseLeave={(e) => e.target.style.backgroundColor = '#22c55e'}
    >
      <MessageCircle size={32} color="white" />
    </button>
  );
};

export default WhatsAppButton;