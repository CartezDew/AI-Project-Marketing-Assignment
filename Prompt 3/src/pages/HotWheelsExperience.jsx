import React from 'react';
import HotWheelsCollectorsHub from '../components/HotWheelsCollectorsHub';
import './HotWheelsExperience.css';

const HotWheelsExperience = () => {
  /* Dummy data for collectors hub */
  const upcomingDrops = [
    { id: 1, name: "'71 Datsun 510", series: "Red Line Club", date: "Dec 15", rarity: "Ultra Rare" },
    { id: 2, name: "Porsche 911 GT3 RS", series: "Car Culture", date: "Dec 22", rarity: "Premium" },
    { id: 3, name: "Custom '67 Mustang", series: "Legends Tour", date: "Jan 5", rarity: "Limited" },
  ];

  const spotlightCar = {
    name: "'55 Chevy Bel Air Gasser",
    series: "Red Line Club Exclusive",
    desc: "Spectraflame blue finish with Real Riders wheels. Only 15,000 produced worldwide.",
    stats: { produced: "15,000", year: "2024", value: "$45+" }
  };

  return (
    <div className="hw-experience">
      {/* Hero Section */}
      <section className="hw-hero">
        <div className="hero-overlay"></div>
        <div className="hero-speed-lines"></div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🏁</span>
            <span>Since 1968</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line-1">CHALLENGE</span>
            <span className="title-line-2">ACCEPTED</span>
          </h1>
          
          <p className="hero-tagline">
            Where artistry meets adrenaline. Build epic tracks. 
            Curate legendary collections. Join the chase.
          </p>
          
          <div className="hero-actions">
            <button className="btn-primary">Start Collecting</button>
            <button className="btn-ghost">Watch Legends Tour</button>
          </div>
        </div>
        
        <div className="hero-car-silhouette"></div>
      </section>

      {/* Dual Persona Section */}
      <section className="hw-section section-personas">
        <div className="section-container">
          <div className="personas-grid">
            {/* Kids/Builders */}
            <div className="persona-panel panel-builders">
              <div className="panel-icon">🔥</div>
              <h3>Track Builders</h3>
              <p>
                Build the wildest tracks. Launch cars through loops, corkscrews, 
                and mega jumps. Your imagination is the only limit.
              </p>
              <ul className="panel-features">
                <li>Epic stunt tracks</li>
                <li>Multi-car races</li>
                <li>Crash zones</li>
              </ul>
            </div>
            
            {/* Adult Collectors */}
            <div className="persona-panel panel-collectors">
              <div className="panel-icon">🏆</div>
              <h3>Serious Collectors</h3>
              <p>
                Precision detail. Limited releases. The thrill of the chase. 
                Join the Red Line Club and access exclusive drops.
              </p>
              <ul className="panel-features">
                <li>Red Line Club access</li>
                <li>Rare drops calendar</li>
                <li>Collection showcase</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Collectors Hub Section */}
      <section className="hw-section section-hub">
        <div className="section-container">
          <div className="hub-header">
            <span className="hub-label">COLLECTORS HUB</span>
            <h2>The Thrill of the Chase</h2>
            <p>Stay ahead of the drops. Spotlight your collection. Connect with the community.</p>
          </div>

          <div className="hub-grid">
            {/* Upcoming Drops */}
            <div className="hub-card drops-card">
              <div className="card-header">
                <h4>📅 Upcoming Drops</h4>
              </div>
              <div className="drops-list">
                {upcomingDrops.map((drop) => (
                  <div key={drop.id} className="drop-item">
                    <div className="drop-info">
                      <span className="drop-name">{drop.name}</span>
                      <span className="drop-series">{drop.series}</span>
                    </div>
                    <div className="drop-meta">
                      <span className="drop-date">{drop.date}</span>
                      <span className={`drop-rarity rarity-${drop.rarity.toLowerCase().replace(' ', '-')}`}>
                        {drop.rarity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="card-btn">View Full Calendar</button>
            </div>

            {/* Spotlight Car */}
            <div className="hub-card spotlight-card">
              <div className="card-header">
                <h4>⭐ Car of the Week</h4>
              </div>
              <div className="spotlight-content">
                <div className="spotlight-image"></div>
                <h5 className="spotlight-name">{spotlightCar.name}</h5>
                <span className="spotlight-series">{spotlightCar.series}</span>
                <p className="spotlight-desc">{spotlightCar.desc}</p>
                <div className="spotlight-stats">
                  <div className="stat">
                    <span className="stat-value">{spotlightCar.stats.produced}</span>
                    <span className="stat-label">Produced</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{spotlightCar.stats.year}</span>
                    <span className="stat-label">Year</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{spotlightCar.stats.value}</span>
                    <span className="stat-label">Value</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Builder Widget Section */}
      <section className="hw-section section-builder">
        <div className="section-container">
          <div className="builder-layout">
            <div className="builder-text">
              <span className="builder-label">AI-POWERED</span>
              <h2>Design Your Dream Build</h2>
              <p>
                Whether you're planning an epic stunt track or designing the 
                ultimate display shelf, our AI will help you bring it to life.
              </p>
              <div className="builder-features">
                <div className="feature">
                  <span className="feature-icon">🎯</span>
                  <span>Custom recommendations</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">📦</span>
                  <span>Parts list included</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">💡</span>
                  <span>Pro tips from collectors</span>
                </div>
              </div>
            </div>
            <HotWheelsCollectorsHub />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="hw-section section-videos">
        <div className="section-container">
          <div className="videos-header">
            <h2>From the Community</h2>
            <p>Track builds, shelf tours, and Legends Tour highlights.</p>
          </div>
          
          <div className="videos-grid">
            <div className="video-card video-main">
              <div className="video-thumb">
                <div className="play-overlay">
                  <span className="play-icon">▶</span>
                </div>
              </div>
              <div className="video-details">
                <h4>Hot Wheels Legends Tour 2024 Highlights</h4>
                <span className="video-views">1.2M views • Official</span>
              </div>
            </div>
            
            <div className="video-card">
              <div className="video-thumb small">
                <div className="play-overlay small">
                  <span className="play-icon">▶</span>
                </div>
              </div>
              <div className="video-details">
                <h4>Ultimate Garage Build</h4>
                <span className="video-views">890K views</span>
              </div>
            </div>
            
            <div className="video-card">
              <div className="video-thumb small">
                <div className="play-overlay small">
                  <span className="play-icon">▶</span>
                </div>
              </div>
              <div className="video-details">
                <h4>Red Line Club Unboxing</h4>
                <span className="video-views">650K views</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="hw-section section-blog">
        <div className="section-container">
          <article className="blog-feature">
            <div className="blog-image"></div>
            <div className="blog-content">
              <span className="blog-category">Collector's Guide</span>
              <h2>From Track to Shelf: How Hot Wheels Bridges Play and Collecting</h2>
              <p className="blog-excerpt">
                For over five decades, Hot Wheels has ignited imaginations across generations. 
                What starts as childhood play often evolves into a lifelong passion for collecting. 
                Here's how the hobby has grown...
              </p>
              
              <div className="blog-preview">
                <h3>The Evolution of a Collector</h3>
                <p>
                  It usually starts with a single car—maybe a gift, maybe a find at the bottom 
                  of a toy bin. That first Spectraflame finish catches the light, and something 
                  clicks. Suddenly, you're checking pegs at every store...
                </p>
              </div>
              
              <button className="blog-cta">Continue Reading →</button>
            </div>
          </article>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="hw-section section-cta">
        <div className="section-container">
          <div className="cta-banner">
            <div className="cta-content">
              <h2>Join the Community</h2>
              <p>Get early access to drops, exclusive content, and connect with collectors worldwide.</p>
            </div>
            <button className="cta-button">Sign Up Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotWheelsExperience;

