import React from 'react';
import './Hero.css';
import unoImg from '../../assets/final-website/hero-images/uno.webp';
import hotwheelsImg from '../../assets/final-website/hero-images/hotwheels.webp';
import familyImg from '../../assets/final-website/hero-images/family.webp';

const Hero = () => {
  return (
    <section className="fwh-section">
      {/* Floating Doodles */}
      <div className="fwh-doodle fwh-doodle-star-1">✦</div>
      <div className="fwh-doodle fwh-doodle-star-2">✧</div>
      <div className="fwh-doodle fwh-doodle-star-3">★</div>
      <div className="fwh-doodle fwh-doodle-burst-1">✺</div>
      <div className="fwh-doodle fwh-doodle-sparkle-1">✨</div>
      <div className="fwh-doodle fwh-doodle-loop">
        <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 25 Q 25 5, 50 25 T 95 25" stroke="#FFD53D" strokeWidth="3" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="fwh-doodle fwh-doodle-squiggle">
        <svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 5 C 10 20, 50 35, 30 50 S 10 80, 30 95" stroke="#4A8CFF" strokeWidth="3" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="fwh-container">
        {/* Content First */}
        <div className="fwh-content">
          <h1 className="fwh-title">
            A New Way to <span className="fwh-title-highlight">Play</span> & <span className="fwh-title-highlight-hw">Create</span>
          </h1>

          <p className="fwh-subtitle">
            Discover new UNO rule variations and dive into Hot Wheels custom car designs, track concepts, and collector showcases—all powered by AI and community creativity.
          </p>

          <div className="fwh-ctas">
            <a href="#uno" className="fwh-cta-btn fwh-cta-primary">
              <span className="fwh-btn-icon">🎴</span>
              Let's Play UNO
            </a>
            <a href="#hotwheels" className="fwh-cta-btn fwh-cta-secondary">
              <span className="fwh-btn-text">Start Your Hot Wheels Journey</span>
            </a>
          </div>

          {/* Stats Callouts */}
          <div className="fwh-stats">
            <div className="fwh-stat-item">
              <span className="fwh-stat-number">50+</span>
              <span className="fwh-stat-label">YEARS OF PLAY</span>
            </div>
            <div className="fwh-stat-divider"></div>
            <div className="fwh-stat-item">
              <span className="fwh-stat-number">2</span>
              <span className="fwh-stat-label">ICONIC BRANDS</span>
            </div>
            <div className="fwh-stat-divider"></div>
            <div className="fwh-stat-item">
              <span className="fwh-stat-number">∞</span>
              <span className="fwh-stat-label">POSSIBILITIES</span>
            </div>
          </div>
        </div>

        {/* Image Pills Below Content */}
        <div className="fwh-pills">
          {/* Yellow Pill - UNO */}
          <div className="fwh-pill fwh-pill-yellow">
            <div className="fwh-pill-doodle fwh-pill-doodle-star">✦</div>
            <img src={unoImg} alt="UNO game night experience" className="fwh-pill-image" />
          </div>

          {/* Red Pill - Hot Wheels */}
          <div className="fwh-pill fwh-pill-red">
            <div className="fwh-pill-doodle fwh-pill-doodle-burst">✺</div>
            <img src={hotwheelsImg} alt="Hot Wheels collector experience" className="fwh-pill-image" />
          </div>

          {/* Blue Pill - Family */}
          <div className="fwh-pill fwh-pill-blue">
            <div className="fwh-pill-doodle fwh-pill-doodle-sparkle">✧</div>
            <img src={familyImg} alt="Family playing together" className="fwh-pill-image" />
          </div>
        </div>
      </div>

      {/* Bottom Doodles */}
      <div className="fwh-doodle fwh-doodle-star-bottom">★</div>
      <div className="fwh-doodle fwh-doodle-wave">
        <svg viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 15 Q 30 0, 60 15 T 120 15" stroke="#FF5E5E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
