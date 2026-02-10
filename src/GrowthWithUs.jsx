import React from 'react';
import './index.css';

const GrowthWithUs = () => {
  const handleJoinClick = () => {
    window.open('https://www.linkedin.com/company/trifilosofi-lifestyle-indonesia', '_blank');
  };

  return (
    <div className="tli-growth-container">
      {/* Hero Section */}
      <section className="tli-hero">
        <h1 className="tli-title">Life at Trifilosofi Lifestyle Indonesia (TLI)</h1>
        <h2 className="tli-subtitle">Curating Experiences, Elevating Lives</h2>
        <p className="tli-description">
          At TLI, we don’t just "work", we create. As a premier lifestyle ecosystem, 
          we orchestrate a diverse portfolio of brands spanning from Artisanal F&B 
          and High-End Wellness to Cutting-Edge Tech and Sustainable Retail. 
          Joining TLI means stepping into a vibrant world of endless possibilities, 
          where your career is as dynamic as the lifestyle we curate.
        </p>
      </section>

      {/* Staff Photo 1 */}
      <div className="tli-image-wrapper">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
          alt="TLI Collaborative Environment" 
          className="tli-staff-img"
        />
      </div>

      {/* Synergy Section */}
      <section className="tli-content-section">
        <h3 className="tli-section-title">The TLI Synergy</h3>
        <p className="tli-section-text">
          Our culture is built on the pillars of **bold creativity** and **cross-disciplinary collaboration**. 
          We believe the most groundbreaking ideas happen at the intersection of different worlds—where 
          a barista’s craft meets a developer’s logic, and a florist’s vision inspires a designer’s touch.
        </p>
      </section>

      {/* Staff Photo 2 */}
      <div className="tli-image-wrapper">
        <img 
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80" 
          alt="TLI Team Synergy" 
          className="tli-staff-img"
        />
      </div>

      {/* Join Section */}
      <section className="tli-cta-section">
        <h3 className="tli-section-title">Join the Ecosystem</h3>
        <p className="tli-section-text">
          We are on the lookout for trendsetters, problem solvers, and dreamers who are 
          brave enough to explore the "what's next" in the lifestyle industry.
        </p>
        <blockquote className="tli-quote">
          "Be the heartbeat of the synergy that defines modern living."
        </blockquote>
        
        <button className="tli-join-button" onClick={handleJoinClick}>
          JOIN THE MOVEMENT
        </button>
      </section>
    </div>
  );
};

export default GrowthWithUs;