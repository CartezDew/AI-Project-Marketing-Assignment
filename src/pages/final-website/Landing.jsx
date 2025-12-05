import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/final-website/Hero';
import Overview from '../../components/final-website/Overview';
import './Landing.css';

// Import logos and icons
import unoLogo from '../../assets/logos/Uno_logo.webp';
import hotwheelsLogo from '../../assets/logos/hotwheels_logo.png';
import hotwheelsIcon from '../../assets/icons/Hotwheels-icon.webp';
import unoCardIcon from '../../assets/icons/Uno-card.webp';
import aiIcon from '../../assets/icons/ai-icon.webp';

const FinalWebsiteLanding = () => {
  return (
    <div className="landing-page">
      {/* New Conference-Style Hero Section */}
      <Hero />

      {/* Mattel Overview Section */}
      <Overview />

      {/* Brand Selection */}
      <section className="landing-brand-selection">
        {/* Background Elements */}
        <div className="landing-sel-bg">
          <div className="landing-sel-blob landing-sel-blob-1"></div>
          <div className="landing-sel-blob landing-sel-blob-2"></div>
          <div className="landing-sel-doodle landing-sel-doodle-star">✦</div>
          <div className="landing-sel-doodle landing-sel-doodle-burst">✺</div>
          <div className="landing-sel-doodle landing-sel-doodle-spark">✧</div>
          {/* Floating AI Icons */}
          <img src={aiIcon} alt="" className="landing-sel-ai landing-sel-ai-1" />
          <img src={aiIcon} alt="" className="landing-sel-ai landing-sel-ai-2" />
          <img src={aiIcon} alt="" className="landing-sel-ai landing-sel-ai-3" />
        </div>

        <div className="landing-selection-header">
          <span className="landing-sel-badge">Pick Your Adventure</span>
          <h2>Choose Your <span className="landing-sel-highlight">Experience</span></h2>
          <p>Each brand has its own universe. Which one calls to you?</p>
        </div>

        <div className="landing-brand-cards">
          {/* UNO Card */}
          <Link to="/final-website/uno" className="landing-brand-card landing-card-uno">
            <div className="landing-card-glow"></div>
            <div className="landing-card-inner">
              <img src={unoLogo} alt="UNO Logo" className="landing-card-logo" />
              <p className="landing-card-tagline">The World's #1 Card Game</p>
              <span className="landing-card-cta landing-cta-uno">
                <img src={unoCardIcon} alt="" className="landing-cta-icon-img" />
                Let's Play
                <span className="landing-cta-sparkle">✨</span>
              </span>
            </div>
          </Link>

          {/* Hot Wheels Card */}
          <Link to="/final-website/hotwheels" className="landing-brand-card landing-card-hw">
            <div className="landing-card-glow"></div>
            <div className="landing-card-inner">
              <img src={hotwheelsLogo} alt="Hot Wheels Logo" className="landing-card-logo landing-hw-logo" />
              <p className="landing-card-tagline">Challenge Accepted</p>
              <span className="landing-card-cta landing-cta-hw">
                Start Your Engines
                <span className="landing-cta-arrow">→</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Bottom Accent */}
        <div className="landing-sel-bottom-accent">
          <span>PLAY</span>
          <span>•</span>
          <span>COLLECT</span>
          <span>•</span>
          <span>CREATE</span>
          <span>•</span>
          <span>SHARE</span>
        </div>
      </section>

      {/* AI Explanation Section */}
      <section className="landing-ai-section">
        <div className="landing-ai-container">
          <div className="landing-ai-header">
            <span className="landing-ai-label">Powered by Opus 4.5</span>
            <h2>AI-Crafted Brand Experiences</h2>
            <p>
              This isn't just a website—it's a demonstration of how AI can understand brand DNA 
              and translate it into authentic digital experiences.
            </p>
          </div>
          
          <div className="landing-ai-features">
            <div className="landing-ai-feature">
              <div className="landing-feature-icon">🎨</div>
              <h4>Brand-Aware Design</h4>
              <p>AI analyzed official Mattel branding to create visually authentic experiences.</p>
            </div>
            <div className="landing-ai-feature">
              <div className="landing-feature-icon">🎯</div>
              <h4>Persona-Driven UX</h4>
              <p>Content tailored to real user personas—from 10-year-old players to adult collectors.</p>
            </div>
            <div className="landing-ai-feature">
              <div className="landing-feature-icon">🔮</div>
              <h4>Interactive AI Widgets</h4>
              <p>House rules generators and track builders powered by intelligent suggestions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="landing-footer-content">
          <div className="landing-footer-brand">
            <span className="landing-footer-logo">MATTEL × AI LAB</span>
            <p>Empowering Generations Through Play</p>
          </div>
          <div className="landing-footer-note">
            <p>Educational Prototype | Built with Opus 4.5</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FinalWebsiteLanding;
