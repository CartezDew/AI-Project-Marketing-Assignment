import React from 'react';
import HotWheelsCollectorsHub from '../../components/final-website/HotWheelsCollectorsHub';
import './HotWheelsExperience.css';

const FinalWebsiteHotWheelsExperience = () => {
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
      <section className="hw-hero">
        <div className="hw-hero-overlay"></div>
        <div className="hw-hero-speed-lines"></div>
        
        <div className="hw-hero-content">
          <div className="hw-hero-badge">
            <span className="hw-badge-icon">🏁</span>
            <span>Since 1968</span>
          </div>
          
          <h1 className="hw-hero-title">
            <span className="hw-title-line-1">CHALLENGE</span>
            <span className="hw-title-line-2">ACCEPTED</span>
          </h1>
          
          <p className="hw-hero-tagline">
            Where artistry meets adrenaline. Build epic tracks. 
            Curate legendary collections. Join the chase.
          </p>
          
          <div className="hw-hero-actions">
            <button className="hw-btn-primary">Start Collecting</button>
            <button className="hw-btn-ghost">Watch Legends Tour</button>
          </div>
        </div>
        
        <div className="hw-hero-car-silhouette"></div>
      </section>

      <section className="hw-section hw-section-personas">
        <div className="hw-section-container">
          <div className="hw-personas-grid">
            <div className="hw-persona-panel hw-panel-builders">
              <div className="hw-panel-icon">🔥</div>
              <h3>Track Builders</h3>
              <p>
                Build the wildest tracks. Launch cars through loops, corkscrews, 
                and mega jumps. Your imagination is the only limit.
              </p>
              <ul className="hw-panel-features">
                <li>Epic stunt tracks</li>
                <li>Multi-car races</li>
                <li>Crash zones</li>
              </ul>
            </div>
            
            <div className="hw-persona-panel hw-panel-collectors">
              <div className="hw-panel-icon">🏆</div>
              <h3>Serious Collectors</h3>
              <p>
                Precision detail. Limited releases. The thrill of the chase. 
                Join the Red Line Club and access exclusive drops.
              </p>
              <ul className="hw-panel-features">
                <li>Red Line Club access</li>
                <li>Rare drops calendar</li>
                <li>Collection showcase</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="hw-section hw-section-hub">
        <div className="hw-section-container">
          <div className="hw-hub-header">
            <span className="hw-hub-label">COLLECTORS HUB</span>
            <h2>The Thrill of the Chase</h2>
            <p>Stay ahead of the drops. Spotlight your collection. Connect with the community.</p>
          </div>

          <div className="hw-hub-grid">
            <div className="hw-hub-card hw-drops-card">
              <div className="hw-card-header">
                <h4>📅 Upcoming Drops</h4>
              </div>
              <div className="hw-drops-list">
                {upcomingDrops.map((drop) => (
                  <div key={drop.id} className="hw-drop-item">
                    <div className="hw-drop-info">
                      <span className="hw-drop-name">{drop.name}</span>
                      <span className="hw-drop-series">{drop.series}</span>
                    </div>
                    <div className="hw-drop-meta">
                      <span className="hw-drop-date">{drop.date}</span>
                      <span className={`hw-drop-rarity hw-rarity-${drop.rarity.toLowerCase().replace(' ', '-')}`}>
                        {drop.rarity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="hw-card-btn">View Full Calendar</button>
            </div>

            <div className="hw-hub-card hw-spotlight-card">
              <div className="hw-card-header">
                <h4>⭐ Car of the Week</h4>
              </div>
              <div className="hw-spotlight-content">
                <div className="hw-spotlight-image"></div>
                <h5 className="hw-spotlight-name">{spotlightCar.name}</h5>
                <span className="hw-spotlight-series">{spotlightCar.series}</span>
                <p className="hw-spotlight-desc">{spotlightCar.desc}</p>
                <div className="hw-spotlight-stats">
                  <div className="hw-stat">
                    <span className="hw-stat-value">{spotlightCar.stats.produced}</span>
                    <span className="hw-stat-label">Produced</span>
                  </div>
                  <div className="hw-stat">
                    <span className="hw-stat-value">{spotlightCar.stats.year}</span>
                    <span className="hw-stat-label">Year</span>
                  </div>
                  <div className="hw-stat">
                    <span className="hw-stat-value">{spotlightCar.stats.value}</span>
                    <span className="hw-stat-label">Value</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hw-section hw-section-builder">
        <div className="hw-section-container">
          <div className="hw-builder-layout">
            <div className="hw-builder-text">
              <span className="hw-builder-label">AI-POWERED</span>
              <h2>Design Your Dream Build</h2>
              <p>
                Whether you're planning an epic stunt track or designing the 
                ultimate display shelf, our AI will help you bring it to life.
              </p>
              <div className="hw-builder-features">
                <div className="hw-feature">
                  <span className="hw-feature-icon">🎯</span>
                  <span>Custom recommendations</span>
                </div>
                <div className="hw-feature">
                  <span className="hw-feature-icon">📦</span>
                  <span>Parts list included</span>
                </div>
                <div className="hw-feature">
                  <span className="hw-feature-icon">💡</span>
                  <span>Pro tips from collectors</span>
                </div>
              </div>
            </div>
            <HotWheelsCollectorsHub />
          </div>
        </div>
      </section>

      <section className="hw-section hw-section-cta">
        <div className="hw-section-container">
          <div className="hw-cta-banner">
            <div className="hw-cta-content">
              <h2>Join the Community</h2>
              <p>Get early access to drops, exclusive content, and connect with collectors worldwide.</p>
            </div>
            <button className="hw-cta-button">Sign Up Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinalWebsiteHotWheelsExperience;
