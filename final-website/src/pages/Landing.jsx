import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-page">
      {/* New Conference-Style Hero Section */}
      <Hero />

      {/* Brand Selection */}
      <section className="landing-brand-selection">
        <div className="landing-selection-header">
          <h2>Choose Your Experience</h2>
          <p>Each brand has its own universe. Which one calls to you?</p>
        </div>

        <div className="landing-brand-cards">
          {/* UNO Card */}
          <Link to="/uno" className="landing-brand-card landing-card-uno">
            <div className="landing-card-glow"></div>
            <div className="landing-card-inner">
              <div className="landing-card-header">
                <div className="landing-card-icon-stack">
                  <div className="landing-mini-card landing-mc-red"></div>
                  <div className="landing-mini-card landing-mc-blue"></div>
                  <div className="landing-mini-card landing-mc-yellow"></div>
                  <div className="landing-mini-card landing-mc-green"></div>
                </div>
              </div>
              
              <div className="landing-card-body">
                <h3 className="landing-card-title">UNO</h3>
                <p className="landing-card-tagline">The World's #1 Card Game</p>
                <p className="landing-card-desc">
                  Fast. Social. Unpredictable. Join millions in the ultimate game night experience.
                </p>
              </div>
              
              <div className="landing-card-footer">
                <span className="landing-card-cta">Enter Community</span>
                <span className="landing-card-arrow">→</span>
              </div>
            </div>
          </Link>

          {/* Hot Wheels Card */}
          <Link to="/hotwheels" className="landing-brand-card landing-card-hw">
            <div className="landing-card-glow"></div>
            <div className="landing-card-inner">
              <div className="landing-card-header">
                <div className="landing-track-visual">
                  <div className="landing-track-piece"></div>
                  <div className="landing-track-piece"></div>
                  <div className="landing-track-piece"></div>
                </div>
              </div>
              
              <div className="landing-card-body">
                <h3 className="landing-card-title">HOT WHEELS</h3>
                <p className="landing-card-tagline">Challenge Accepted</p>
                <p className="landing-card-desc">
                  From epic tracks to rare collectibles. Where speed meets artistry.
                </p>
              </div>
              
              <div className="landing-card-footer">
                <span className="landing-card-cta">Start Your Engines</span>
                <span className="landing-card-arrow">→</span>
              </div>
            </div>
          </Link>
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

export default Landing;
