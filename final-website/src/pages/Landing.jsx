import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import './Landing.css';

const Landing = () => {
  return (
    <div className="fw-landing-page">
      {/* New Conference-Style Hero Section */}
      <Hero />

      {/* Brand Selection */}
      <section className="fw-landing-brand-selection">
        <div className="fw-landing-selection-header">
          <h2>Choose Your Experience</h2>
          <p>Each brand has its own universe. Which one calls to you?</p>
        </div>

        <div className="fw-landing-brand-cards">
          {/* UNO Card */}
          <Link to="/uno" className="fw-landing-brand-card fw-landing-card-uno">
            <div className="fw-landing-card-glow"></div>
            <div className="fw-landing-card-inner">
              <div className="fw-landing-card-header">
                <div className="fw-landing-card-icon-stack">
                  <div className="fw-landing-mini-card fw-landing-mc-red"></div>
                  <div className="fw-landing-mini-card fw-landing-mc-blue"></div>
                  <div className="fw-landing-mini-card fw-landing-mc-yellow"></div>
                  <div className="fw-landing-mini-card fw-landing-mc-green"></div>
                </div>
              </div>
              
              <div className="fw-landing-card-body">
                <h3 className="fw-landing-card-title">UNO</h3>
                <p className="fw-landing-card-tagline">The World's #1 Card Game</p>
                <p className="fw-landing-card-desc">
                  Fast. Social. Unpredictable. Join millions in the ultimate game night experience.
                </p>
              </div>
              
              <div className="fw-landing-card-footer">
                <span className="fw-landing-card-cta">Enter Community</span>
                <span className="fw-landing-card-arrow">→</span>
              </div>
            </div>
          </Link>

          {/* Hot Wheels Card */}
          <Link to="/hotwheels" className="fw-landing-brand-card fw-landing-card-hw">
            <div className="fw-landing-card-glow"></div>
            <div className="fw-landing-card-inner">
              <div className="fw-landing-card-header">
                <div className="fw-landing-track-visual">
                  <div className="fw-landing-track-piece"></div>
                  <div className="fw-landing-track-piece"></div>
                  <div className="fw-landing-track-piece"></div>
                </div>
              </div>
              
              <div className="fw-landing-card-body">
                <h3 className="fw-landing-card-title">HOT WHEELS</h3>
                <p className="fw-landing-card-tagline">Challenge Accepted</p>
                <p className="fw-landing-card-desc">
                  From epic tracks to rare collectibles. Where speed meets artistry.
                </p>
              </div>
              
              <div className="fw-landing-card-footer">
                <span className="fw-landing-card-cta">Start Your Engines</span>
                <span className="fw-landing-card-arrow">→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* AI Explanation Section */}
      <section className="fw-landing-ai-section">
        <div className="fw-landing-ai-container">
          <div className="fw-landing-ai-header">
            <span className="fw-landing-ai-label">Powered by Opus 4.5</span>
            <h2>AI-Crafted Brand Experiences</h2>
            <p>
              This isn't just a website—it's a demonstration of how AI can understand brand DNA 
              and translate it into authentic digital experiences.
            </p>
          </div>
          
          <div className="fw-landing-ai-features">
            <div className="fw-landing-ai-feature">
              <div className="fw-landing-feature-icon">🎨</div>
              <h4>Brand-Aware Design</h4>
              <p>AI analyzed official Mattel branding to create visually authentic experiences.</p>
            </div>
            <div className="fw-landing-ai-feature">
              <div className="fw-landing-feature-icon">🎯</div>
              <h4>Persona-Driven UX</h4>
              <p>Content tailored to real user personas—from 10-year-old players to adult collectors.</p>
            </div>
            <div className="fw-landing-ai-feature">
              <div className="fw-landing-feature-icon">🔮</div>
              <h4>Interactive AI Widgets</h4>
              <p>House rules generators and track builders powered by intelligent suggestions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="fw-landing-footer">
        <div className="fw-landing-footer-content">
          <div className="fw-landing-footer-brand">
            <span className="fw-landing-footer-logo">MATTEL × AI LAB</span>
            <p>Empowering Generations Through Play</p>
          </div>
          <div className="fw-landing-footer-note">
            <p>Educational Prototype | Built with Opus 4.5</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
