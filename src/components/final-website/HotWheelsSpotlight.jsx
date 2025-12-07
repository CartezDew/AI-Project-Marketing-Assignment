import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HotWheelsSpotlight.css';

// Car images
import datsun510 from '../../assets/hotwheels/71 Datsun 510 Wagon hot wheels.webp';
import mustang67 from '../../assets/hotwheels/Custom-67-Mustang.webp';
import fastFuriousPack from '../../assets/hotwheels/Fast-Furious-5-Pack.webp';
import chevyBelAir from '../../assets/hotwheels/55-Chevy-Bel-Air-Gasser.webp';
import trackImage from '../../assets/hotwheels/track.webp';

/**
 * Hot Wheels User Spotlight & News Drops Section
 * Features creative showcase and upcoming releases in bento layout
 */
const HotWheelsSpotlight = () => {
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [alertForm, setAlertForm] = useState({ name: '', email: '' });
  const [alertSuccess, setAlertSuccess] = useState(false);

  const handleAlertSubmit = (e) => {
    e.preventDefault();
    if (alertForm.name.trim() && alertForm.email.trim()) {
      setAlertSuccess(true);
      setTimeout(() => {
        setShowAlertModal(false);
        setAlertSuccess(false);
        setAlertForm({ name: '', email: '' });
      }, 2500);
    }
  };
  // Featured creator spotlight
  const spotlight = {
    username: 'NeonRacer_Mike',
    avatar: '🔥',
    title: 'Ultimate Neon City Track Build',
    description: 'A stunning 3-level track with LED lighting, custom loops, and synchronized car launchers. This build took 3 months and features over 200 feet of track!',
    stats: {
      likes: '12.4K',
      views: '89K',
      comments: '1.2K'
    },
    tags: ['Featured', 'Track Build', 'LED', 'Epic']
  };

  // Upcoming drops from Mattel
  const newsDrops = [
    {
      id: 1,
      title: "'71 Datsun 510 Wagon",
      series: 'Red Line Club Exclusive',
      date: 'Dec 15, 2024',
      time: '9:00 AM PT',
      price: '$29.99',
      rarity: 'Ultra Rare',
      limited: '20,000 units',
      image: datsun510
    },
    {
      id: 2,
      title: "'55 Chevy Bel Air Gasser",
      series: 'Car Culture: Track Day',
      date: 'Dec 22, 2024',
      time: '12:00 PM PT',
      price: '$7.99',
      rarity: 'Premium',
      limited: null,
      image: chevyBelAir
    },
    {
      id: 3,
      title: "Custom '67 Mustang",
      series: 'Legends Tour Winner',
      date: 'Jan 5, 2025',
      time: '10:00 AM PT',
      price: '$39.99',
      rarity: 'Limited Edition',
      limited: '10,000 units',
      image: mustang67
    },
    {
      id: 4,
      title: 'Fast & Furious 5-Pack',
      series: 'Entertainment Collection',
      date: 'Jan 12, 2025',
      time: '9:00 AM PT',
      price: '$24.99',
      rarity: 'Collector Set',
      limited: null,
      image: fastFuriousPack
    }
  ];

  // Community highlights with YouTube videos
  const communityHighlights = [
    { 
      icon: '🏆', 
      category: 'Collection of the Week', 
      user: '@VintageVibes', 
      title: '1968 Redline Collection',
      videoId: 'j763lJolHGo',
      isShort: true
    },
    { 
      icon: '🔧', 
      category: 'Best Custom Build', 
      user: '@GarageKing', 
      title: 'Rust-to-Glory Camaro',
      videoId: 'QqeLbTSnDDA',
      isShort: true
    },
    { 
      icon: '📹', 
      category: 'Top Video', 
      user: '@TrackMaster', 
      title: '100ft Track Race',
      videoId: '6qGjA4pam7g',
      isShort: false
    }
  ];

  return (
    <section className="hws-section">
      <div className="hws-container">
        {/* Section Header */}
        <motion.div 
          className="hws-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="hws-badge">⭐ SPOTLIGHT & NEWS</span>
          <h2 className="hws-title">What's <span className="hws-accent">Hot</span></h2>
          <p className="hws-subtitle">Featured builds, upcoming drops, and community highlights</p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="hws-bento-grid">
          {/* Featured Spotlight - Large Card */}
          <motion.div 
            className="hws-bento-card hws-spotlight-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="hws-spotlight-badge">🌟 CREATOR SPOTLIGHT</div>
            
            <div className="hws-spotlight-visual">
              <div className="hws-spotlight-glow"></div>
              <img src={trackImage} alt="Ultimate Neon City Track Build" className="hws-spotlight-track-image" />
            </div>

            <div className="hws-spotlight-content">
              <div className="hws-spotlight-author">
                <span className="hws-author-avatar">{spotlight.avatar}</span>
                <span className="hws-author-name">{spotlight.username}</span>
              </div>
              
              <h3 className="hws-spotlight-title">{spotlight.title}</h3>
              <p className="hws-spotlight-desc">{spotlight.description}</p>
              
              <div className="hws-spotlight-tags">
                {spotlight.tags.map((tag, i) => (
                  <span key={i} className="hws-tag">{tag}</span>
                ))}
              </div>

              <div className="hws-spotlight-stats">
                <span><strong>{spotlight.stats.views}</strong> views</span>
                <span><strong>{spotlight.stats.likes}</strong> likes</span>
                <span><strong>{spotlight.stats.comments}</strong> comments</span>
              </div>
            </div>
          </motion.div>

          {/* News Drops Column */}
          <div className="hws-drops-column">
            <motion.div 
              className="hws-bento-card hws-drops-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="hws-drops-header">
                <h4>📅 Upcoming Drops</h4>
                <span className="hws-drops-count">{newsDrops.length} scheduled</span>
              </div>

              <div className="hws-drops-list">
                {newsDrops.map((drop, index) => (
                  <motion.div 
                    key={drop.id}
                    className="hws-drop-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <img src={drop.image} alt={drop.title} className="hws-drop-image" />
                    <div className="hws-drop-info">
                      <span className="hws-drop-title">{drop.title}</span>
                      <span className="hws-drop-series">{drop.series}</span>
                      <div className="hws-drop-meta">
                        <span className="hws-drop-date">{drop.date}</span>
                        <span className="hws-drop-price">{drop.price}</span>
                      </div>
                    </div>
                    <div className={`hws-drop-rarity hws-rarity-${drop.rarity.toLowerCase().replace(' ', '-')}`}>
                      {drop.rarity}
                    </div>
                  </motion.div>
                ))}
              </div>

              <button className="hws-drops-cta" onClick={() => setShowAlertModal(true)}>
                Set Drop Alerts
                <span>🔔</span>
              </button>
            </motion.div>
          </div>

          {/* Community Highlights - Video Cards Row */}
          <motion.div 
            className="hws-video-highlights-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="hws-video-section-title">🎬 Community Highlights</h4>
            <div className="hws-video-cards-row">
              {communityHighlights.map((item, index) => (
                <motion.div 
                  key={index}
                  className="hws-video-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (0.15 * index) }}
                >
                  <div className="hws-video-wrapper">
                    <span className="hws-video-category-pill">
                      <span className="hws-pill-icon">{item.icon}</span>
                      {item.category}
                    </span>
                    <iframe
                      src={`https://www.youtube.com/embed/${item.videoId}?rel=0&modestbranding=1`}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="hws-video-iframe"
                    ></iframe>
                  </div>
                  <div className="hws-video-info">
                    <h5 className="hws-video-title">{item.title}</h5>
                    <span className="hws-video-user">{item.user}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats Card */}
          <motion.div 
            className="hws-bento-card hws-stats-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="hws-stats-title">Community Stats</h4>
            <div className="hws-stats-grid">
              <div className="hws-stat-item">
                <span className="hws-stat-value">2.4M</span>
                <span className="hws-stat-label">Collectors</span>
              </div>
              <div className="hws-stat-item">
                <span className="hws-stat-value">156K</span>
                <span className="hws-stat-label">Posts</span>
              </div>
              <div className="hws-stat-item">
                <span className="hws-stat-value">89K</span>
                <span className="hws-stat-label">Track Builds</span>
              </div>
              <div className="hws-stat-item">
                <span className="hws-stat-value">1.2M</span>
                <span className="hws-stat-label">Cars Shared</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Drop Alerts Modal */}
      <AnimatePresence>
        {showAlertModal && (
          <motion.div
            className="hws-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !alertSuccess && setShowAlertModal(false)}
          >
            <motion.div
              className="hws-modal hws-alert-modal"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {!alertSuccess ? (
                <>
                  <div className="hws-alert-header">
                    <div className="hws-alert-icon">🔔</div>
                    <h3>Set Drop Alerts</h3>
                    <p>Never miss a release! Get notified when new drops go live.</p>
                    <button className="hws-modal-close" onClick={() => setShowAlertModal(false)}>×</button>
                  </div>
                  
                  <form className="hws-alert-form" onSubmit={handleAlertSubmit}>
                    <div className="hws-form-group">
                      <label htmlFor="alert-name">
                        <span className="hws-label-icon">👤</span>
                        Your Name
                      </label>
                      <input
                        id="alert-name"
                        type="text"
                        placeholder="Enter your name"
                        value={alertForm.name}
                        onChange={(e) => setAlertForm({ ...alertForm, name: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="hws-form-group">
                      <label htmlFor="alert-email">
                        <span className="hws-label-icon">📧</span>
                        Email Address
                      </label>
                      <input
                        id="alert-email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={alertForm.email}
                        onChange={(e) => setAlertForm({ ...alertForm, email: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="hws-alert-preview">
                      <h5>You'll be alerted for:</h5>
                      <ul>
                        <li><span>🚗</span> Red Line Club Exclusives</li>
                        <li><span>⭐</span> Super Treasure Hunts</li>
                        <li><span>🏆</span> Convention Releases</li>
                        <li><span>🔥</span> Limited Edition Drops</li>
                      </ul>
                    </div>
                    
                    <button type="submit" className="hws-alert-submit">
                      <span>Enable Alerts</span>
                      <span className="hws-submit-icon">🔔</span>
                    </button>
                  </form>
                  
                  <p className="hws-alert-disclaimer">
                    We'll only send alerts for new drops. No spam, ever.
                  </p>
                </>
              ) : (
                <motion.div 
                  className="hws-alert-success"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <div className="hws-success-icon">✅</div>
                  <h3>Alerts Enabled!</h3>
                  <p>You'll get notified at <strong>{alertForm.email}</strong></p>
                  <div className="hws-success-bells">
                    <span>🔔</span><span>🔔</span><span>🔔</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HotWheelsSpotlight;

