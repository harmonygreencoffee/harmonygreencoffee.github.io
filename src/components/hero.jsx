import React from 'react';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h2 className="hero-title">Premium Green Coffee Importing</h2>
        <p className="hero-text">
          <strong>Harmony</strong> signifies a group of musical sounds, notes, and chords coming together to create a pleasing effect.<strong>We believe that our coffee can produce this same satisfying result to your senses.</strong>
        </p>
      </div>
    </section>
  );
};

export default Hero;