import React from 'react';
import UnoHouseRulesWidget from '../../components/prompt3/UnoHouseRulesWidget';
import './UnoExperience.css';

const Prompt3UnoExperience = () => {
  return (
    <div className="uno-experience">
      {/* Hero Section */}
      <section className="uno-hero">
        <div className="hero-cards-bg">
          <div className="floating-card fc-1"></div>
          <div className="floating-card fc-2"></div>
          <div className="floating-card fc-3"></div>
          <div className="floating-card fc-4"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-icon">🃏</span>
            <span>The World's #1 Card Game</span>
          </div>
          
          <h1 className="hero-title">
            Every Game Night
            <br />
            <span className="title-accent">Deserves to be</span>
            <br />
            <span className="title-wild">WILD</span>
          </h1>
          
          <p className="hero-desc">
            Easy to learn. Impossible to put down. Join millions of players 
            in the ultimate social card game experience.
          </p>
          
          <div className="hero-ctas">
            <button className="cta-primary">Join the Community</button>
            <button className="cta-secondary">Learn the Rules</button>
          </div>
        </div>
      </section>

      {/* Persona Section */}
      <section className="uno-section section-persona">
        <div className="section-container">
          <div className="persona-card">
            <div className="persona-avatar">
              <span>T</span>
            </div>
            <div className="persona-content">
              <span className="persona-label">Meet Our Player</span>
              <h3 className="persona-name">Teddy, 10</h3>
              <p className="persona-bio">
                "I love playing UNO with my family every Friday night! My favorite 
                move is saving my Wild Draw 4 until someone's about to win. 
                The look on their face is SO funny!"
              </p>
              <div className="persona-interests">
                <span className="interest">🎮 Roblox</span>
                <span className="interest">🎬 MrBeast</span>
                <span className="interest">🎯 Challenges</span>
              </div>
            </div>
          </div>
          
          <div className="persona-quote">
            <blockquote>
              "UNO isn't just a game—it's where memories happen."
            </blockquote>
          </div>
        </div>
      </section>

      {/* House Rules Widget Section */}
      <section className="uno-section section-widget">
        <div className="section-container">
          <div className="widget-intro">
            <h2>Create Your Perfect Game Night</h2>
            <p>
              Standard rules are just the beginning. Let our AI help you craft 
              custom house rules that match your group's energy.
            </p>
          </div>
          
          <UnoHouseRulesWidget />
        </div>
      </section>

      {/* Video Content Section */}
      <section className="uno-section section-videos">
        <div className="section-container">
          <div className="section-header">
            <h2>Community Highlights</h2>
            <p>Watch how players around the world are making UNO their own.</p>
          </div>
          
          <div className="video-grid">
            <div className="video-card video-featured">
              <div className="video-thumbnail">
                <div className="play-button">
                  <span>▶</span>
                </div>
              </div>
              <div className="video-info">
                <h4>Ultimate UNO Tournament Finals</h4>
                <span className="video-meta">2.3M views • Community Event</span>
              </div>
            </div>
            
            <div className="video-card">
              <div className="video-thumbnail small">
                <div className="play-button small">
                  <span>▶</span>
                </div>
              </div>
              <div className="video-info">
                <h4>Top 10 House Rules</h4>
                <span className="video-meta">890K views</span>
              </div>
            </div>
            
            <div className="video-card">
              <div className="video-thumbnail small">
                <div className="play-button small">
                  <span>▶</span>
                </div>
              </div>
              <div className="video-info">
                <h4>Family Game Night Tips</h4>
                <span className="video-meta">1.2M views</span>
              </div>
            </div>
          </div>
          
          <p className="video-note">
            📺 Videos curated from YouTube creators and official UNO channels
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="uno-section section-cta">
        <div className="section-container">
          <div className="cta-card">
            <h2>Ready to Play?</h2>
            <p>Join the UNO community and never have a boring game night again.</p>
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prompt3UnoExperience;
