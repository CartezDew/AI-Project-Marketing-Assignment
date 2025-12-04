import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
        </div>
        
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>✨ AI-Powered Brand Experience</span>
            </div>
            
            <h1 className="hero-title">
              Unleash Your <br />
              <span className="highlight-gradient">Play Potential</span>
            </h1>
            
            <p className="hero-subtitle">
              Discover a new dimension of entertainment where Mattel's iconic brands meet artificial intelligence. 
              Choose your path and experience play like never before.
            </p>
            
            <div className="hero-actions">
              <Link to="/hotwheels" className="hero-btn btn-hw">
                <span className="btn-icon">🏎️</span>
                <span className="btn-text">Hot Wheels</span>
              </Link>
              <Link to="/uno" className="hero-btn btn-uno">
                <span className="btn-icon">🃏</span>
                <span className="btn-text">Uno Experience</span>
              </Link>
            </div>

            <div className="hero-stats-row">
               <div className="stat-item">
                 <strong>236+</strong>
                 <span>Daily Races</span>
               </div>
               <div className="stat-item">
                 <strong>98%</strong>
                 <span>Player Rating</span>
               </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-circle-bg"></div>
            <div className="hero-composition">
              {/* Stylized visual elements representing both brands */}
              <div className="floating-card card-1">
                 <div className="card-face">UNO</div>
              </div>
              <div className="floating-card card-2">
                 <div className="track-curve"></div>
              </div>
              <div className="hero-image-placeholder">
                <div className="character-group">
                   {/* Abstract representation of users/characters */}
                   <div className="char char-1"></div>
                   <div className="char char-2"></div>
                </div>
              </div>
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
          <Link to="/uno" className="brand-card card-uno">
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
          <Link to="/hotwheels" className="brand-card card-hw">
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

export default Landing;

