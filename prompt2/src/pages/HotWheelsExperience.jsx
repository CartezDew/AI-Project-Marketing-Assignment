import React from 'react';
import HotWheelsCollectorsHub from '../components/HotWheelsCollectorsHub';
import './HotWheelsExperience.css';

const HotWheelsExperience = () => {
  return (
    <div className="hw-page">
      {/* Hero */}
      <section className="hw-hero">
        <div className="hw-hero-bg"></div>
        <div className="hw-hero-content">
          <span className="tagline">CHALLENGE ACCEPTED</span>
          <h1 className="hw-title">Artistry Meets <br/>Adrenaline</h1>
          <p className="hw-subtitle">
            For the racers, the builders, and the serious collectors. 
            Discover the legacy of speed and the thrill of the chase.
          </p>
          <button className="btn-hw-primary">Start Your Collection</button>
        </div>
      </section>

      {/* Collectors Section */}
      <section className="hw-section section-collectors">
        <div className="hw-container">
          <div className="section-header-hw">
            <h2>The Garage</h2>
            <div className="line-accent"></div>
          </div>
          
          <div className="collectors-grid">
            <div className="collector-card">
              <div className="card-image placeholder-car"></div>
              <div className="card-details">
                <span className="rarity">Red Line Club Exclusive</span>
                <h3>'72 Skyline H/T 2000GT-R</h3>
                <p>Spectraflame Purple finish. Opening hood. Real Riders wheels.</p>
                <button className="btn-text">View Drop Calendar &rarr;</button>
              </div>
            </div>
            <div className="collector-card">
              <div className="card-image placeholder-track"></div>
              <div className="card-details">
                <span className="rarity">Track Builder</span>
                <h3>System Unlimited</h3>
                <p>Build the ultimate gravity defying course. Connects with ID system.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Widget Section */}
      <section className="hw-section section-widget-hw">
        <div className="hw-container">
          <div className="split-layout">
            <div className="widget-text">
              <h2>Design Your Dream Track</h2>
              <p>
                Need inspiration for your next build or display? 
                Our AI analyzes thousands of track configurations to suggest the ultimate setup for your space.
              </p>
            </div>
            <HotWheelsCollectorsHub />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="hw-section section-videos-hw">
        <div className="hw-container">
          <h2>Legends Tour Highlights</h2>
          <div className="video-strip">
            {[1, 2, 3].map((i) => (
              <div key={i} className="video-thumb">
                <div className="play-btn-small">▶</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Article */}
      <section className="hw-section section-article">
        <div className="hw-container">
          <article className="featured-article">
            <div className="article-content">
              <span className="cat-tag">Collector Focus</span>
              <h2>From Track to Shelf: How to Display Like a Pro</h2>
              <p>
                The transition from play to display is an art form. We interview top collectors on how they use lighting, negative space, and custom dioramas...
              </p>
              <button className="btn-hw-secondary">Read Article</button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HotWheelsExperience;

