import React from 'react';
import UnoHouseRulesWidget from '../components/UnoHouseRulesWidget';
import './UnoExperience.css';

const UnoExperience = () => {
  return (
    <div className="uno-page">
      {/* Hero Section */}
      <section className="uno-hero">
        <div className="uno-hero-content">
          <h1 className="uno-title">Make Every Game Night <span className="text-wild">Wild</span></h1>
          <p className="uno-subtitle">
            The world's most beloved card game. Fast, fun, and impossible to put down.
            Join the community and rewrite the rules.
          </p>
          <div className="uno-cta-group">
            <button className="btn-uno-primary">Join Community</button>
            <button className="btn-uno-outline">Explore Rules</button>
          </div>
        </div>
        <div className="uno-hero-visual">
          <div className="card card-red">1</div>
          <div className="card card-blue">4</div>
          <div className="card card-yellow">Skip</div>
          <div className="card card-wild">Wild</div>
        </div>
      </section>

      {/* Personas */}
      <section className="uno-section section-personas">
        <div className="container">
          <h2>Who's Playing?</h2>
          <div className="persona-card">
            <div className="persona-avatar">T</div>
            <div className="persona-info">
              <h3>Teddy, 10</h3>
              <p className="persona-tag">The Speed Runner</p>
              <p>
                "I love games that are fast. My friends and I play 'Speed UNO' where you don't have to wait for your turn if you have a match. It's chaos!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Widget Section */}
      <section className="uno-section section-widget">
        <div className="container">
          <UnoHouseRulesWidget />
          <p className="ai-microcopy">* This widget demonstrates how AI can co-create game mechanics with players.</p>
        </div>
      </section>

      {/* Video Content */}
      <section className="uno-section section-videos">
        <div className="container">
          <h2>Community Highlights</h2>
          <div className="video-grid">
            <div className="video-placeholder">
              <span>Community Gameplay Replay</span>
              <div className="play-icon">▶</div>
            </div>
            <div className="video-placeholder">
              <span>Top 5 House Rules Explained</span>
              <div className="play-icon">▶</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="uno-section section-blog">
        <div className="container blog-container">
          <span className="blog-label">Featured Article</span>
          <h2>10 UNO House Rules That Turn Game Night Into an Event</h2>
          <p>
            Standard UNO is a classic, but have you ever tried "The Silent Library" rule? 
            Or the "Seven-Zero" swap? We dove into the community forums to find the wildest variations...
          </p>
          <a href="#" className="read-more">Read Full Article &rarr;</a>
        </div>
      </section>
    </div>
  );
};

export default UnoExperience;

