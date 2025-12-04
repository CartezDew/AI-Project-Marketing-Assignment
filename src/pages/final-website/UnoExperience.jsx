import React from 'react';
import UnoHouseRulesWidget from '../../components/final-website/UnoHouseRulesWidget';
import './UnoExperience.css';

const FinalWebsiteUnoExperience = () => {
  return (
    <div className="uno-experience">
      {/* Hero Section */}
      <section className="uno-hero">
        <div className="uno-hero-cards-bg">
          <div className="uno-floating-card uno-fc-1"></div>
          <div className="uno-floating-card uno-fc-2"></div>
          <div className="uno-floating-card uno-fc-3"></div>
          <div className="uno-floating-card uno-fc-4"></div>
        </div>
        
        <div className="uno-hero-content">
          <div className="uno-hero-eyebrow">
            <span className="uno-eyebrow-icon">🃏</span>
            <span>The World's #1 Card Game</span>
          </div>
          
          <h1 className="uno-hero-title">
            Every Game Night
            <br />
            <span className="uno-title-accent">Deserves to be</span>
            <br />
            <span className="uno-title-wild">WILD</span>
          </h1>
          
          <p className="uno-hero-desc">
            Easy to learn. Impossible to put down. Join millions of players 
            in the ultimate social card game experience.
          </p>
          
          <div className="uno-hero-ctas">
            <button className="uno-cta-primary">Join the Community</button>
            <button className="uno-cta-secondary">Learn the Rules</button>
          </div>
        </div>
      </section>

      {/* Persona Section */}
      <section className="uno-section uno-section-persona">
        <div className="uno-section-container">
          <div className="uno-persona-card">
            <div className="uno-persona-avatar">
              <span>T</span>
            </div>
            <div className="uno-persona-content">
              <span className="uno-persona-label">Meet Our Player</span>
              <h3 className="uno-persona-name">Teddy, 10</h3>
              <p className="uno-persona-bio">
                "I love playing UNO with my family every Friday night! My favorite 
                move is saving my Wild Draw 4 until someone's about to win. 
                The look on their face is SO funny!"
              </p>
              <div className="uno-persona-interests">
                <span className="uno-interest">🎮 Roblox</span>
                <span className="uno-interest">🎬 MrBeast</span>
                <span className="uno-interest">🎯 Challenges</span>
              </div>
            </div>
          </div>
          
          <div className="uno-persona-quote">
            <blockquote>
              "UNO isn't just a game—it's where memories happen."
            </blockquote>
          </div>
        </div>
      </section>

      {/* House Rules Widget Section */}
      <section className="uno-section uno-section-widget">
        <div className="uno-section-container">
          <div className="uno-widget-intro">
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
      <section className="uno-section uno-section-videos">
        <div className="uno-section-container">
          <div className="uno-section-header">
            <h2>Community Highlights</h2>
            <p>Watch how players around the world are making UNO their own.</p>
          </div>
          
          <div className="uno-video-grid">
            <div className="uno-video-card uno-video-featured">
              <div className="uno-video-thumbnail">
                <div className="uno-play-button">
                  <span>▶</span>
                </div>
              </div>
              <div className="uno-video-info">
                <h4>Ultimate UNO Tournament Finals</h4>
                <span className="uno-video-meta">2.3M views • Community Event</span>
              </div>
            </div>
            
            <div className="uno-video-card">
              <div className="uno-video-thumbnail small">
                <div className="uno-play-button small">
                  <span>▶</span>
                </div>
              </div>
              <div className="uno-video-info">
                <h4>Top 10 House Rules</h4>
                <span className="uno-video-meta">890K views</span>
              </div>
            </div>
            
            <div className="uno-video-card">
              <div className="uno-video-thumbnail small">
                <div className="uno-play-button small">
                  <span>▶</span>
                </div>
              </div>
              <div className="uno-video-info">
                <h4>Family Game Night Tips</h4>
                <span className="uno-video-meta">1.2M views</span>
              </div>
            </div>
          </div>
          
          <p className="uno-video-note">
            📺 Videos curated from YouTube creators and official UNO channels
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="uno-section uno-section-cta">
        <div className="uno-section-container">
          <div className="uno-cta-card">
            <h2>Ready to Play?</h2>
            <p>Join the UNO community and never have a boring game night again.</p>
            <button className="uno-cta-button">Get Started</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinalWebsiteUnoExperience;
