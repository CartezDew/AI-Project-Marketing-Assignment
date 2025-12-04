import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Prompt3Landing = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        
        <div className="hero-content">
          <span className="hero-badge">Mattel × AI Brand Lab</span>
          
          <h1 className="hero-title">
            Unleashing
            <br />
            <span className="highlight">Playful</span> Brand
            <br />
            <span className="highlight-gradient">Experiences</span>
          </h1>
          
          <p className="hero-subtitle">
            Explore how AI reimagines UNO game nights and Hot Wheels collector 
            worlds — all in one playful digital lab.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Iconic Brands</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">1</span>
              <span className="stat-label">AI Lab</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Possibilities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Selection */}
      <section className="brand-selection">
        <div className="selection-header">
          <h2>Choose Your Experience</h2>
          <p>Each brand has its own universe. Which one calls to you?</p>
        </div>

        <div className="brand-cards">
          {/* UNO Card */}
          <Link to="/prompt3/uno" className="brand-card card-uno">
            <div className="card-glow"></div>
            <div className="card-inner">
              <div className="card-header">
                <div className="card-icon-stack">
                  <div className="mini-card mc-red"></div>
                  <div className="mini-card mc-blue"></div>
                  <div className="mini-card mc-yellow"></div>
                  <div className="mini-card mc-green"></div>
                </div>
              </div>
              
              <div className="card-body">
                <h3 className="card-title">UNO</h3>
                <p className="card-tagline">The World's #1 Card Game</p>
                <p className="card-desc">
                  Fast. Social. Unpredictable. Join millions in the ultimate game night experience.
                </p>
              </div>
              
              <div className="card-footer">
                <span className="card-cta">Enter Community</span>
                <span className="card-arrow">→</span>
              </div>
            </div>
          </Link>

          {/* Hot Wheels Card */}
          <Link to="/prompt3/hotwheels" className="brand-card card-hw">
            <div className="card-glow"></div>
            <div className="card-inner">
              <div className="card-header">
                <div className="track-visual">
                  <div className="track-piece"></div>
                  <div className="track-piece"></div>
                  <div className="track-piece"></div>
                </div>
              </div>
              
              <div className="card-body">
                <h3 className="card-title">HOT WHEELS</h3>
                <p className="card-tagline">Challenge Accepted</p>
                <p className="card-desc">
                  From epic tracks to rare collectibles. Where speed meets artistry.
                </p>
              </div>
              
              <div className="card-footer">
                <span className="card-cta">Start Your Engines</span>
                <span className="card-arrow">→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* AI Explanation Section */}
      <section className="ai-section">
        <div className="ai-container">
          <div className="ai-header">
            <span className="ai-label">Powered by Opus 4.5</span>
            <h2>AI-Crafted Brand Experiences</h2>
            <p>
              This isn't just a website—it's a demonstration of how AI can understand brand DNA 
              and translate it into authentic digital experiences.
            </p>
          </div>
          
          <div className="ai-features">
            <div className="ai-feature">
              <div className="feature-icon">🎨</div>
              <h4>Brand-Aware Design</h4>
              <p>AI analyzed official Mattel branding to create visually authentic experiences.</p>
            </div>
            <div className="ai-feature">
              <div className="feature-icon">🎯</div>
              <h4>Persona-Driven UX</h4>
              <p>Content tailored to real user personas—from 10-year-old players to adult collectors.</p>
            </div>
            <div className="ai-feature">
              <div className="feature-icon">🔮</div>
              <h4>Interactive AI Widgets</h4>
              <p>House rules generators and track builders powered by intelligent suggestions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">MATTEL × AI LAB</span>
            <p>Empowering Generations Through Play</p>
          </div>
          <div className="footer-note">
            <p>Educational Prototype | Built with Opus 4.5</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Prompt3Landing;
