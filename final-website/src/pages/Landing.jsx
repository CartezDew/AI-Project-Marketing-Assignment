import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

// Import images
import heroImage1 from '../hero-images/image-1.png';
import heroImage2 from '../hero-images/image-2.png';
import heroImage4 from '../hero-images/image-4.png';
import heroImage5 from '../hero-images/image-5.png';
import heroImage6 from '../hero-images/image-6.png';

// Import team headshots
import akendai from '../headshots/Akendai_Kouassi.png';
import camilla from '../headshots/Camilla_Ojeda.png';
import cartez from '../headshots/Cartez_Dewberry.png';
import kethely from '../headshots/Kethely_Veloso.png';
import lesley from '../headshots/Lesley_Gonzalez.png';

// Import logos
import mattelLogo from '../logos/Mattel_logo.svg.png';
import unoLogo from '../logos/Uno_logo.webp';
import hwLogo from '../logos/hotwheels_logo.png';
import aiIcon from '../logos/ai-icon.png';

const Landing = () => {
  const teamMembers = [
    { name: 'Akendai Kouassi', role: 'Brand Strategist', image: akendai, color: '#FF6B6B' },
    { name: 'Camilla Ojeda', role: 'UX Designer', image: camilla, color: '#4ECDC4' },
    { name: 'Cartez Dewberry', role: 'Tech Lead', image: cartez, color: '#FFE66D' },
    { name: 'Kethely Veloso', role: 'Creative Director', image: kethely, color: '#95E1D3' },
    { name: 'Lesley Gonzalez', role: 'Project Manager', image: lesley, color: '#DDA0DD' },
  ];

  // Duplicate for infinite scroll
  const carouselItems = [...teamMembers, ...teamMembers, ...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Decorative Doodles */}
        <div className="doodle doodle-star-1">✦</div>
        <div className="doodle doodle-star-2">✧</div>
        <div className="doodle doodle-star-3">★</div>
        <div className="doodle doodle-spiral">🌀</div>
        <div className="doodle doodle-spark-1">✨</div>
        <div className="doodle doodle-spark-2">⚡</div>
        <div className="doodle doodle-circle"></div>
        <div className="doodle doodle-squiggle"></div>

        <div className="hero-grid">
          {/* Left Column - Content */}
          <div className="hero-left">
            <div className="ai-badge">
              <img src={aiIcon} alt="AI" className="ai-badge-icon" />
              <span>Powered with AI-assisted design</span>
            </div>

            <h1 className="hero-headline">
              <span className="headline-small">Mattel x AI Brand Lab:</span>
              <span className="headline-large">Unleashing <span className="text-gradient">Playful</span> Brand Experiences</span>
            </h1>

            <p className="hero-subheading">
              Explore how AI reimagines UNO game nights and Hot Wheels collector worlds — all in one playful digital lab.
            </p>

            <div className="hero-ctas">
              <Link to="/uno" className="cta-btn cta-primary">
                <span className="cta-icon">🃏</span>
                Let's Play UNO
              </Link>
              <Link to="/hotwheels" className="cta-btn cta-secondary">
                <span className="cta-icon">🏎️</span>
                Hot Wheels Collectors Edition
              </Link>
            </div>

            <div className="hero-stats">
              <span className="stat-item">2 Iconic Brands</span>
              <span className="stat-divider">•</span>
              <span className="stat-item">1 AI Lab</span>
              <span className="stat-divider">•</span>
              <span className="stat-item">Unlimited Play</span>
            </div>
          </div>

          {/* Right Column - Visual Collage */}
          <div className="hero-right">
            <div className="portrait-collage">
              {/* Portrait 1 - UNO themed */}
              <div className="portrait-container portrait-1">
                <div className="portrait-bg bg-uno-red"></div>
                <img src={heroImage1} alt="Family enjoying UNO" className="portrait-image" />
                <div className="portrait-doodle doodle-cards">🃏</div>
              </div>

              {/* Portrait 2 - Game night vibe */}
              <div className="portrait-container portrait-2">
                <div className="portrait-bg bg-uno-yellow"></div>
                <img src={heroImage2} alt="Game night fun" className="portrait-image" />
                <div className="portrait-doodle doodle-stars">✦</div>
              </div>

              {/* Portrait 3 - Hot Wheels themed */}
              <div className="portrait-container portrait-3">
                <div className="portrait-bg bg-hw-blue"></div>
                <img src={heroImage4} alt="Hot Wheels collector" className="portrait-image" />
                <div className="portrait-doodle doodle-speed">💨</div>
              </div>

              {/* Floating shape decorations */}
              <div className="floating-shape shape-1"></div>
              <div className="floating-shape shape-2"></div>
              <div className="floating-shape shape-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos Strip */}
      <section className="brands-strip">
        <div className="brands-container">
          <img src={mattelLogo} alt="Mattel" className="brand-logo mattel-logo" />
          <span className="brand-divider">×</span>
          <img src={unoLogo} alt="UNO" className="brand-logo uno-logo" />
          <span className="brand-divider">×</span>
          <img src={hwLogo} alt="Hot Wheels" className="brand-logo hw-logo" />
        </div>
      </section>

      {/* Brand Selection Cards */}
      <section className="brand-selection">
        <div className="section-header">
          <h2>Choose Your Experience</h2>
          <p>Two iconic brands. Two unique digital worlds. Which one calls to you?</p>
        </div>

        <div className="brand-cards">
          <Link to="/uno" className="brand-card uno-card">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="card-icon-stack">
                <div className="mini-card red"></div>
                <div className="mini-card blue"></div>
                <div className="mini-card yellow"></div>
                <div className="mini-card green"></div>
              </div>
              <h3>UNO</h3>
              <p className="card-tagline">The World's #1 Card Game</p>
              <p className="card-desc">Fast. Social. Unpredictable. Join millions in the ultimate game night experience.</p>
              <span className="card-cta">Enter Community →</span>
            </div>
          </Link>

          <Link to="/hotwheels" className="brand-card hw-card">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="track-visual">
                <div className="track-piece"></div>
                <div className="track-car">🏎️</div>
              </div>
              <h3>HOT WHEELS</h3>
              <p className="card-tagline">Challenge Accepted</p>
              <p className="card-desc">From epic tracks to rare collectibles. Where speed meets artistry.</p>
              <span className="card-cta">Start Your Engines →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* AI Section */}
      <section className="ai-section">
        <div className="ai-container">
          {/* Doodles for AI section */}
          <div className="ai-doodle ai-doodle-1">✨</div>
          <div className="ai-doodle ai-doodle-2">🤖</div>
          <div className="ai-doodle ai-doodle-3">⚡</div>

          <div className="ai-badge-large">
            <img src={aiIcon} alt="AI" className="ai-icon-large" />
            <span>Powered by Claude Opus 4.5</span>
          </div>
          
          <h2>AI-Crafted Brand Experiences</h2>
          <p className="ai-subtitle">
            This isn't just a website—it's a demonstration of how AI can understand brand DNA 
            and translate it into authentic digital experiences.
          </p>

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

      {/* Team Section with Carousel */}
      <section className="team-section">
        {/* Doodles for team section */}
        <div className="team-doodle team-doodle-star-1">✦</div>
        <div className="team-doodle team-doodle-star-2">★</div>
        <div className="team-doodle team-doodle-star-3">✧</div>
        <div className="team-doodle team-doodle-spark">✨</div>
        <div className="team-doodle team-doodle-circle"></div>

        <div className="section-header">
          <h2>Meet the <span className="text-gradient">Team</span></h2>
          <p>The creative minds behind the Mattel x AI Brand Lab</p>
        </div>

        <div className="carousel-wrapper">
          <div className="carousel-track">
            {carouselItems.map((member, index) => (
              <div 
                key={index} 
                className="team-card"
                style={{ '--card-color': member.color }}
              >
                <div className="team-card-inner">
                  <div className="team-photo-container">
                    <div className="team-photo-bg" style={{ background: `linear-gradient(135deg, ${member.color}40, ${member.color}20)` }}></div>
                    <img src={member.image} alt={member.name} className="team-photo" />
                  </div>
                  <div className="team-info">
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
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
          <div className="footer-links">
            <Link to="/uno">UNO Experience</Link>
            <Link to="/hotwheels">Hot Wheels</Link>
            <a href="/">View Prompts</a>
          </div>
          <div className="footer-note">
            <p>Educational Prototype | Built with Claude Opus 4.5</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
