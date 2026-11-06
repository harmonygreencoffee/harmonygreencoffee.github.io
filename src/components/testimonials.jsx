import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/testimonials.css';

const Testimonials = ({ testimonials, currentTestimonial, onSetCurrent }) => {
  const autoScrollRef = useRef(null);
  const isUserInteractingRef = useRef(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextTestimonial = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onSetCurrent(prev => (prev + 1) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 250);
  };

  const handleUserNavigation = (index) => {
    isUserInteractingRef.current = true;
    setIsTransitioning(true);

    setTimeout(() => {
      onSetCurrent(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 250);

    // Clear existing auto-scroll
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }

    // Resume auto-scroll after 8 seconds of no interaction
    setTimeout(() => {
      isUserInteractingRef.current = false;
      startAutoScroll();
    }, 8000);
  };

  const startAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }

    autoScrollRef.current = setInterval(() => {
      if (!isUserInteractingRef.current) {
        nextTestimonial();
      }
    }, 9000);
  };

  useEffect(() => {
    startAutoScroll();

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title">
          What Our Clients Say
        </h2>
        <div className="testimonial-section">
          <div className={`testimonial-content ${isTransitioning ? 'testimonial-fade-out' : 'testimonial-fade-in'}`}>
            <p className="testimonial-text">
              "{testimonials[currentTestimonial].text}"
            </p>
            <p className="testimonial-author">
              {testimonials[currentTestimonial].author}
            </p>
          </div>
        </div>

        <div className="dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleUserNavigation(index)}
              className={`dot ${index === currentTestimonial ? 'dot-active' : 'dot-inactive'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;