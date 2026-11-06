import React from 'react';
import '../styles/companystory.css';

const CompanyStory = () => {
  return (
    <section className="company-story-section">
      <div className="story-container">
        <div className="grid">
          <div className="grid-item">
            {/* <div className="circle">
              <span className="circle-text">1</span>
            </div> */}
            <h3 className="section-title">Our Mission</h3>
            <p className="section-text">
              "Harmony is committed to provide quality Arabica and Robusta green coffee beans to roasters in Florida, and across the United States, with the goal of exceeding our customer's expectations."
            </p>
          </div>

          <div className="grid-item">
            {/* <div className="circle">
              <span className="circle-text">2</span>
            </div> */}
            <h3 className="section-title">Who we are</h3>
            <p className="section-text">
              "Our primary focus is to be a coffee business built on integrity, thus fulfilling Harmony's customer needs. We will accomplish this by offering a superior quality product, at competitive prices, in the right amount required, and shipped as expeditiously as possible."
            </p>
          </div>

          <div className="grid-item">
            {/* <div className="circle">
              <span className="circle-text">3</span>
            </div> */}
            <h3 className="section-title">Our Goal</h3>
            <p className="section-text">
              "To gain the trust and respect of coffee roasters by building close, strong bonds that will endure throughout the course of our customer's business relationship with Harmony. To grow together with our clients and discover a mutual path of sustainable ethical development."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;