import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/testimonials.css';

const Testimonials = ({ testimonials, currentTestimonial, onSetCurrent }) => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title">
          What Our Clients Say
        </h2>
        <div className="testimonial-section">
          <div>
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
              onClick={() => onSetCurrent(index)}
              className={`dot ${index === currentTestimonial ? 'dot-active' : 'dot-inactive'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;