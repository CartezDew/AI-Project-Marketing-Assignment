import React, { useState, useEffect } from 'react';
import './Overview.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Overview = () => {
  // Scroll animations
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 });
  const [hwRef, hwVisible] = useScrollAnimation({ threshold: 0.15 });
  const [unoRef, unoVisible] = useScrollAnimation({ threshold: 0.15 });
  const [ctaRef, ctaVisible] = useScrollAnimation({ threshold: 0.2 });
  // Live deck counter - starts at ~400 million (approximate total UNO decks sold)
  // Increments by 1 every 17 seconds to simulate real-time sales
  const [decksSold, setDecksSold] = useState(400000000);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  
  useEffect(() => {
    // Timer that counts up every second
    const timerInterval = setInterval(() => {
      setSecondsElapsed(prev => {
        if (prev >= 16) {
          // Reset to 0 and increment decks sold
          setDecksSold(d => d + 1);
          return 0;
        }
        return prev + 1;
      });
    }, 1000); // Every 1 second
    
    return () => clearInterval(timerInterval);
  }, []);
  const highlights = [
    {
      id: 'leadership',
      icon: '🌍',
      title: 'Global Leadership',
      color: '#C8102E',
      stats: '#1',
      statsLabel: 'Global Toy Company',
      points: [
        'Leading in dolls, vehicles, action figures & preschool toys',
        'Products sold in 195+ countries worldwide',
        'Reaching millions of families every year'
      ]
    },
    {
      id: 'brands',
      icon: '⭐',
      title: 'Iconic Brand Portfolio',
      color: '#FFD53D',
      stats: '10+',
      statsLabel: 'Legendary Brands',
      points: [
        'Barbie®, Hot Wheels®, Fisher-Price®, UNO®',
        'Thomas & Friends™, American Girl®, MEGA®',
        'Multi-generational fanbases with deep cultural impact'
      ]
    },
    {
      id: 'innovation',
      icon: '💡',
      title: 'Innovation & Design',
      color: '#4A8CFF',
      stats: '75+',
      statsLabel: 'Years of Innovation',
      points: [
        'Leader in toy innovation and immersive play',
        'Technology integration & digital-first experiences',
        'Collectible culture and community building'
      ]
    },
    {
      id: 'entertainment',
      icon: '🎬',
      title: 'Entertainment Powerhouse',
      color: '#FF6B00',
      stats: '$1.4B+',
      statsLabel: 'Barbie Movie Box Office',
      points: [
        'Movies, TV, digital games & live experiences',
        'Barbie The Movie - highest-grossing film of 2023',
        'Publishing, streaming & consumer products'
      ]
    },
    {
      id: 'sustainability',
      icon: '🌱',
      title: 'Sustainability & Purpose',
      color: '#00A651',
      stats: '2030',
      statsLabel: 'Sustainability Goal',
      points: [
        'Mattel PlayBack toy recycling program',
        '100% recycled/recyclable plastics commitment',
        'Diversity & inclusion in brand storytelling'
      ]
    },
    {
      id: 'community',
      icon: '🏆',
      title: 'Fan Communities',
      color: '#9B59B6',
      stats: '8B+',
      statsLabel: 'Hot Wheels Cars Made',
      points: [
        'Hot Wheels Red Line Club collectors',
        'Barbie Signature & UNO competitive play',
        'Global creator challenges & events'
      ]
    }
  ];

  const brands = [
    'Barbie®', 'Hot Wheels®', 'Fisher-Price®', 'UNO®', 
    'Thomas & Friends™', 'American Girl®', 'MEGA®', 
    'Matchbox®', 'Masters of the Universe®'
  ];

  return (
    <section className="ov-section" id="overview">
      {/* Section Header */}
      <div className="ov-header" ref={headerRef}>
        <div className="ov-header-shape">
          <svg viewBox="0 0 1200 400" preserveAspectRatio="none" className="ov-shape-svg">
            <defs>
              <linearGradient id="headerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E8F4FD" />
                <stop offset="50%" stopColor="#D1E9FC" />
                <stop offset="100%" stopColor="#B8DCFA" />
              </linearGradient>
              <linearGradient id="headerGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4A8CFF" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#0057B8" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path d="M0,0 L1200,0 L1200,320 Q1000,380 600,350 Q200,320 0,380 Z" fill="url(#headerGrad1)" />
            <circle cx="100" cy="80" r="120" fill="url(#headerGrad2)" />
            <circle cx="1100" cy="100" r="150" fill="url(#headerGrad2)" />
            <ellipse cx="600" cy="350" rx="400" ry="80" fill="url(#headerGrad2)" />
          </svg>
          <div className="ov-shape-dots"></div>
          <div className="ov-shape-ring ov-ring-1"></div>
          <div className="ov-shape-ring ov-ring-2"></div>
        </div>
        <div className="ov-header-content">
          <span className={`ov-eyebrow scroll-animate fade-up ${headerVisible ? 'visible' : ''}`}>About The Company</span>
          <h2 className={`ov-title scroll-animate fade-up delay-100 ${headerVisible ? 'visible' : ''}`}>
            The World of <span className="ov-title-highlight">Mattel</span>
          </h2>
          <p className={`ov-subtitle scroll-animate fade-up delay-200 ${headerVisible ? 'visible' : ''}`}>
            A leading global toy and family entertainment company, creating innovative products 
            that inspire fans, entertain audiences, and develop children through play.
          </p>
        </div>
      </div>

      {/* Brand Marquee */}
      <div className="ov-marquee-wrapper">
        <div className="ov-marquee">
          <div className="ov-marquee-content">
            {[...brands, ...brands].map((brand, index) => (
              <span key={index} className="ov-brand-tag">{brand}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="ov-grid" ref={gridRef}>
        {highlights.map((item, index) => (
          <div 
            key={item.id} 
            className={`ov-card scroll-animate fade-up stagger-${index + 1} ${gridVisible ? 'visible' : ''}`}
            style={{ '--card-accent': item.color }}
          >
            <div className="ov-card-header">
              <span className="ov-card-icon">{item.icon}</span>
              <div className="ov-card-stats">
                <span className="ov-stats-number">{item.stats}</span>
                <span className="ov-stats-label">{item.statsLabel}</span>
              </div>
            </div>
            
            <h3 className="ov-card-title">{item.title}</h3>
            
            <ul className="ov-card-points">
              {item.points.map((point, idx) => (
                <li key={idx}>
                  <span className="ov-point-bullet" style={{ background: item.color }}></span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="ov-card-glow" style={{ background: item.color }}></div>
          </div>
        ))}
      </div>

      {/* ========== HOT WHEELS SPOTLIGHT ========== */}
      <div className="ov-hw-spotlight" ref={hwRef}>
        <div className="ov-hw-bg">
          <div className="ov-hw-track-line ov-hw-track-1"></div>
          <div className="ov-hw-track-line ov-hw-track-2"></div>
        </div>
        
        <div className="ov-spotlight-container">
          <div className={`ov-spotlight-badge scroll-animate fade-up ${hwVisible ? 'visible' : ''}`}>
            <span>🏎️</span>
            <span>BRAND SPOTLIGHT</span>
          </div>
          
          <h3 className={`ov-hw-title scroll-animate fade-up delay-100 ${hwVisible ? 'visible' : ''}`}>HOT WHEELS</h3>
          <p className={`ov-hw-tagline scroll-animate fade-up delay-200 ${hwVisible ? 'visible' : ''}`}>One of the best-selling toys ever created</p>

          <div className={`ov-hw-stats-row scroll-animate fade-up delay-300 ${hwVisible ? 'visible' : ''}`}>
            <div className="ov-hw-stat">
              <span className="ov-hw-stat-num">1968</span>
              <span className="ov-hw-stat-label">Year Launched</span>
            </div>
            <div className="ov-hw-stat ov-hw-stat-hero">
              <span className="ov-hw-stat-num">6B+</span>
              <span className="ov-hw-stat-label">Cars Produced</span>
            </div>
            <div className="ov-hw-stat">
              <span className="ov-hw-stat-num">20K+</span>
              <span className="ov-hw-stat-label">Models</span>
            </div>
            <div className="ov-hw-stat">
              <span className="ov-hw-stat-num">50+</span>
              <span className="ov-hw-stat-label">Years</span>
            </div>
          </div>

          <div className={`ov-hw-rlc scroll-animate fade-up delay-400 ${hwVisible ? 'visible' : ''}`}>
            <div className="ov-rlc-inner">
              <div className="ov-rlc-badge">🏆 RED LINE CLUB</div>
              <p>Premium membership for serious collectors. Limited-edition drops, behind-the-scenes content, and voting on new releases.</p>
            </div>
          </div>

          <p className={`ov-hw-community scroll-animate fade-up delay-500 ${hwVisible ? 'visible' : ''}`}>
            From kids to hobbyists to hardcore adult collectors — a <strong>global community</strong> united by car culture.
          </p>
        </div>
      </div>

      {/* ========== UNO SPOTLIGHT ========== */}
      <div className="ov-uno-spotlight" ref={unoRef}>
        <div className="ov-uno-bg">
          <div className="ov-uno-float-card ov-ufc-1"></div>
          <div className="ov-uno-float-card ov-ufc-2"></div>
          <div className="ov-uno-float-card ov-ufc-3"></div>
          <div className="ov-uno-float-card ov-ufc-4"></div>
        </div>

        <div className="ov-spotlight-container">
          <div className={`ov-spotlight-badge ov-uno-badge scroll-animate fade-up ${unoVisible ? 'visible' : ''}`}>
            <span>🎴</span>
            <span>BRAND SPOTLIGHT</span>
          </div>

          <div className={`ov-uno-card-stack scroll-animate scale-up delay-100 ${unoVisible ? 'visible' : ''}`}>
            {/* Red Draw 2 Card */}
            <div className="ov-uno-mini ov-um-red">
              <span className="ov-um-corner ov-um-corner-tl">+2</span>
              <div className="ov-um-oval">
                <span className="ov-um-symbol">+2</span>
              </div>
              <span className="ov-um-corner ov-um-corner-br">+2</span>
            </div>
            {/* Yellow 9 Card */}
            <div className="ov-uno-mini ov-um-yellow">
              <span className="ov-um-corner ov-um-corner-tl">9</span>
              <div className="ov-um-oval">
                <span className="ov-um-number">9</span>
              </div>
              <span className="ov-um-corner ov-um-corner-br">9</span>
            </div>
            {/* Green Skip Card */}
            <div className="ov-uno-mini ov-um-green">
              <span className="ov-um-corner ov-um-corner-tl">⊘</span>
              <div className="ov-um-oval">
                <span className="ov-um-symbol ov-um-skip">⊘</span>
              </div>
              <span className="ov-um-corner ov-um-corner-br">⊘</span>
            </div>
            {/* Blue 4 Card */}
            <div className="ov-uno-mini ov-um-blue">
              <span className="ov-um-corner ov-um-corner-tl">4</span>
              <div className="ov-um-oval">
                <span className="ov-um-number">4</span>
              </div>
              <span className="ov-um-corner ov-um-corner-br">4</span>
            </div>
          </div>

          <h3 className={`ov-uno-title scroll-animate fade-up delay-200 ${unoVisible ? 'visible' : ''}`}>UNO</h3>
          <p className={`ov-uno-tagline scroll-animate fade-up delay-300 ${unoVisible ? 'visible' : ''}`}>The World's #1 Card Game</p>

          <div className={`ov-uno-hero-stat scroll-animate fade-up delay-400 ${unoVisible ? 'visible' : ''}`}>
            <span className="ov-uno-big-num">17</span>
            <span className="ov-uno-big-unit">decks sold every minute</span>
            
            {/* Live Counter */}
            <div className="ov-uno-live-counter">
              <div className="ov-uno-live-dot"></div>
              <span className="ov-uno-live-label">Total Sold:</span>
              <span className="ov-uno-live-num">{decksSold.toLocaleString()}</span>
            </div>
            
            {/* Timer counting to 17 seconds */}
            <div className="ov-uno-timer">
              <div className="ov-uno-timer-bar">
                <div 
                  className="ov-uno-timer-fill" 
                  style={{ width: `${(secondsElapsed / 17) * 100}%` }}
                ></div>
              </div>
              <span className="ov-uno-timer-text">{secondsElapsed}s / 17s</span>
            </div>
          </div>

          <div className={`ov-uno-stats-grid scroll-animate fade-up delay-500 ${unoVisible ? 'visible' : ''}`}>
            <div className="ov-uno-tile ov-ut-red">
              <span className="ov-ut-num">80+</span>
              <span className="ov-ut-label">Countries</span>
            </div>
            <div className="ov-uno-tile ov-ut-yellow">
              <span className="ov-ut-num">600+</span>
              <span className="ov-ut-label">Editions</span>
            </div>
            <div className="ov-uno-tile ov-ut-green">
              <span className="ov-ut-num">2-10</span>
              <span className="ov-ut-label">Players</span>
            </div>
            <div className="ov-uno-tile ov-ut-blue">
              <span className="ov-ut-num">7+</span>
              <span className="ov-ut-label">Ages</span>
            </div>
          </div>

          <div className={`ov-uno-callout scroll-animate fade-up delay-600 ${unoVisible ? 'visible' : ''}`}>
            <strong>Say "UNO!" or draw two.</strong>
            <span>Fast. Social. Unpredictable. The game that brings everyone together.</span>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="ov-cta-section" ref={ctaRef}>
        <div className={`ov-cta-content scroll-animate blur-in ${ctaVisible ? 'visible' : ''}`}>
          <div className="ov-cta-badge">
            <span className="ov-badge-icon">🏅</span>
            <span>Award-Winning Innovation</span>
          </div>
          <p className="ov-cta-text">
            Recipient of numerous <strong>Toy of the Year</strong> awards. 
            Consistently recognized for product design, innovation, and safety.
          </p>
          <div className="ov-cta-divider"></div>
          <p className="ov-culture-text">
            Mattel brands actively shape <em>fashion, gaming, nostalgia, and pop culture</em> — 
            inspiring both kids and adults across generations.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="ov-deco ov-deco-star-1">✦</div>
      <div className="ov-deco ov-deco-star-2">★</div>
      <div className="ov-deco ov-deco-burst">✺</div>
    </section>
  );
};

export default Overview;
