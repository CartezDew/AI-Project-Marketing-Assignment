import React, { useState, useEffect } from 'react';
import './Overview.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import unoCardIcon from '../../assets/icons/Uno-card.webp';

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

      {/* ========== UNO SPOTLIGHT - BENTO GRID LAYOUT ========== */}
      <div className="ov-uno-spotlight" ref={unoRef}>
        {/* Top Creative Border */}
        <div className="ov-uno-border-top">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="ov-uno-wave-top">
            <defs>
              <linearGradient id="unoWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C8102E" />
                <stop offset="25%" stopColor="#FFD53D" />
                <stop offset="50%" stopColor="#00A651" />
                <stop offset="75%" stopColor="#0057B8" />
                <stop offset="100%" stopColor="#C8102E" />
              </linearGradient>
            </defs>
            <path d="M0,40 Q180,0 360,40 T720,40 T1080,40 T1440,40 L1440,80 L0,80 Z" fill="url(#unoWaveGrad)" opacity="0.15"/>
            <path d="M0,50 Q180,20 360,50 T720,50 T1080,50 T1440,50 L1440,80 L0,80 Z" fill="url(#unoWaveGrad)" opacity="0.1"/>
          </svg>
        </div>

        <div className="ov-uno-bg">
          <div className="ov-uno-float-card ov-ufc-1"></div>
          <div className="ov-uno-float-card ov-ufc-2"></div>
          <div className="ov-uno-float-card ov-ufc-3"></div>
          <div className="ov-uno-float-card ov-ufc-4"></div>
        </div>

        {/* Bento Grid Container */}
        <div className="ov-uno-bento">
          {/* Hero Card - Large Left */}
          <div className={`ov-bento-card ov-bento-hero scroll-animate fade-up ${unoVisible ? 'visible' : ''}`}>
            <div className="ov-bento-hero-inner">
              <div className={`ov-spotlight-badge ov-uno-badge`}>
                <img src={unoCardIcon} alt="UNO card game icon" className="ov-uno-badge-icon" />
            <span>BRAND SPOTLIGHT</span>
          </div>

          <div className="ov-uno-card-stack">
            <div className="ov-uno-mini ov-um-red">
              <span className="ov-um-corner ov-um-corner-tl">+2</span>
                  <div className="ov-um-oval"><span className="ov-um-symbol">+2</span></div>
              <span className="ov-um-corner ov-um-corner-br">+2</span>
            </div>
            <div className="ov-uno-mini ov-um-yellow">
              <span className="ov-um-corner ov-um-corner-tl">9</span>
                  <div className="ov-um-oval"><span className="ov-um-number">9</span></div>
              <span className="ov-um-corner ov-um-corner-br">9</span>
            </div>
            <div className="ov-uno-mini ov-um-green">
              <span className="ov-um-corner ov-um-corner-tl">⊘</span>
                  <div className="ov-um-oval"><span className="ov-um-symbol ov-um-skip">⊘</span></div>
              <span className="ov-um-corner ov-um-corner-br">⊘</span>
            </div>
            <div className="ov-uno-mini ov-um-blue">
              <span className="ov-um-corner ov-um-corner-tl">4</span>
                  <div className="ov-um-oval"><span className="ov-um-number">4</span></div>
              <span className="ov-um-corner ov-um-corner-br">4</span>
            </div>
          </div>

          <h3 className="ov-uno-title">UNO</h3>
          <p className="ov-uno-tagline">The World's #1 Card Game</p>
            </div>
            </div>
            
          {/* Live Counter Card - Top Right */}
          <div className={`ov-bento-card ov-bento-counter scroll-animate fade-up delay-100 ${unoVisible ? 'visible' : ''}`}>
            <div className="ov-bento-counter-inner">
              <div className="ov-counter-label">
              </div>
              <div className="ov-uno-big-num">17</div>
              <div className="ov-uno-big-unit">decks sold every minute</div>
            <div className="ov-uno-timer">
              <div className="ov-uno-timer-bar">
                  <div className="ov-uno-timer-fill" style={{ width: `${(secondsElapsed / 17) * 100}%` }}></div>
                </div>
                <span className="ov-uno-timer-text">{secondsElapsed}s / 17s</span>
              </div>
              <div className="ov-counter-total">
                <span className="ov-counter-total-label">Total Sold Worldwide</span>
                <span className="ov-counter-total-num">{decksSold.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Stats Tiles Row */}
          <div className={`ov-bento-card ov-bento-stat ov-bento-stat-red scroll-animate fade-up delay-200 ${unoVisible ? 'visible' : ''}`}>
            <span className="ov-bento-stat-num">80+</span>
            <span className="ov-bento-stat-label">Countries</span>
          </div>

          <div className={`ov-bento-card ov-bento-stat ov-bento-stat-yellow scroll-animate fade-up delay-250 ${unoVisible ? 'visible' : ''}`}>
            <span className="ov-bento-stat-num">600+</span>
            <span className="ov-bento-stat-label">Editions</span>
          </div>

          <div className={`ov-bento-card ov-bento-stat ov-bento-stat-green scroll-animate fade-up delay-300 ${unoVisible ? 'visible' : ''}`}>
            <span className="ov-bento-stat-num">2-10</span>
            <span className="ov-bento-stat-label">Players</span>
          </div>

          <div className={`ov-bento-card ov-bento-stat ov-bento-stat-blue scroll-animate fade-up delay-350 ${unoVisible ? 'visible' : ''}`}>
            <span className="ov-bento-stat-num">7+</span>
            <span className="ov-bento-stat-label">Ages</span>
          </div>

          {/* Callout Card - Wide Bottom */}
          <div className={`ov-bento-card ov-bento-callout scroll-animate fade-up delay-400 ${unoVisible ? 'visible' : ''}`}>
            <div className="ov-bento-callout-inner">
              <div className="ov-callout-quote">"</div>
              <div className="ov-callout-content">
                <strong>Say "UNO!" or draw two.</strong>
                <p>Fast. Social. Unpredictable. The game that brings everyone together.</p>
                <div className="ov-callout-cta">
                  <a href="/final-website/uno" className="ov-callout-btn">
                    <span>Play Now</span>
                    <span className="ov-callout-arrow">→</span>
                  </a>
                </div>
            </div>
            </div>
            </div>

          {/* Feature Pills */}
          <div className={`ov-bento-card ov-bento-features scroll-animate fade-up delay-450 ${unoVisible ? 'visible' : ''}`}>
            <div className="ov-bento-features-inner">
              <span className="ov-feature-pill">🏆 Family Favorite</span>
              <span className="ov-feature-pill">⚡ Quick Games</span>
              <span className="ov-feature-pill">🎉 Party Essential</span>
              <span className="ov-feature-pill">🌟 Since 1971</span>
            </div>
            </div>
          </div>

        {/* Bottom Creative Border */}
        <div className="ov-uno-border-bottom">
          <div className="ov-uno-border-zigzag">
            <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
              <defs>
                <linearGradient id="zigzagGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0057B8" />
                  <stop offset="33%" stopColor="#00A651" />
                  <stop offset="66%" stopColor="#FFD53D" />
                  <stop offset="100%" stopColor="#C8102E" />
                </linearGradient>
              </defs>
              <path d="M0,0 L40,30 L80,0 L120,30 L160,0 L200,30 L240,0 L280,30 L320,0 L360,30 L400,0 L440,30 L480,0 L520,30 L560,0 L600,30 L640,0 L680,30 L720,0 L760,30 L800,0 L840,30 L880,0 L920,30 L960,0 L1000,30 L1040,0 L1080,30 L1120,0 L1160,30 L1200,0 L1240,30 L1280,0 L1320,30 L1360,0 L1400,30 L1440,0 L1440,60 L0,60 Z" fill="url(#zigzagGrad)" opacity="0.12"/>
            </svg>
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
