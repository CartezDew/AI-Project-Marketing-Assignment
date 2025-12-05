import React, { useState, useEffect } from 'react';
import './Hero.css';
import unoImg from '../../assets/final-website/hero-images/uno.webp';
import hotwheelsImg from '../../assets/final-website/hero-images/hotwheels.webp';
import familyImg from '../../assets/final-website/hero-images/family.webp';
import aiIcon from '../../assets/icons/ai-icon.webp';
import unoCardIcon from '../../assets/icons/Uno-card.webp';
import hotwheelsIcon from '../../assets/icons/Hotwheels-icon.webp';

const Hero = () => {
  // Countdown timer state (for visual flair like the reference)
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 8,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) { days = 0; hours = 0; minutes = 0; seconds = 0; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="fwh-section">
      {/* Colorful Top Accent Bar */}
      <div className="fwh-accent-bar">
        <div className="fwh-accent-segment fwh-accent-red"></div>
        <div className="fwh-accent-segment fwh-accent-orange"></div>
        <div className="fwh-accent-segment fwh-accent-yellow"></div>
        <div className="fwh-accent-segment fwh-accent-green"></div>
        <div className="fwh-accent-segment fwh-accent-blue"></div>
      </div>

      {/* Background Pattern */}
      <div className="fwh-bg-pattern"></div>

      {/* Floating Doodles - More playful and scattered */}
      <div className="fwh-doodle fwh-doodle-star-1">✦</div>
      
      {/* Hot Wheels Icon Doodle - below star-1 */}
      <img src={hotwheelsIcon} alt="" className="fwh-doodle fwh-doodle-car" />

      {/* Draw 2 UNO Card Doodle */}
      <div className="fwh-doodle fwh-doodle-uno-card">
        <svg viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="46" height="66" rx="6" stroke="#C8102E" strokeWidth="3" fill="#C8102E"/>
          <ellipse cx="25" cy="35" rx="18" ry="25" fill="#FEFEFE"/>
          <text x="25" y="30" textAnchor="middle" fill="#C8102E" fontSize="12" fontWeight="bold" fontFamily="Arial Black">+2</text>
          <rect x="18" y="38" width="14" height="18" rx="2" fill="#FFD53D" stroke="#1a1a1a" strokeWidth="1"/>
          <rect x="21" y="42" width="14" height="18" rx="2" fill="#00A651" stroke="#1a1a1a" strokeWidth="1"/>
        </svg>
      </div>

      {/* AI Icon Doodles */}
      <img src={aiIcon} alt="" className="fwh-doodle fwh-doodle-ai-1" />
      <img src={aiIcon} alt="" className="fwh-doodle fwh-doodle-ai-2" />

      <div className="fwh-doodle fwh-doodle-star-2">✧</div>
      <div className="fwh-doodle fwh-doodle-star-3">★</div>
      <div className="fwh-doodle fwh-doodle-star-4">✦</div>
      <div className="fwh-doodle fwh-doodle-star-5">✧</div>
      <div className="fwh-doodle fwh-doodle-burst-1">✺</div>
      <div className="fwh-doodle fwh-doodle-burst-2">✹</div>
      
      {/* Hand-drawn style SVG doodles */}
      <div className="fwh-doodle fwh-doodle-loop">
        <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 30 Q 35 5, 60 30 T 110 30" stroke="#FFD53D" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="2 6"/>
        </svg>
      </div>
      
      <div className="fwh-doodle fwh-doodle-squiggle">
        <svg viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 5 C 5 20, 45 35, 25 50 S 5 80, 25 95" stroke="#4A8CFF" strokeWidth="3" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="fwh-doodle fwh-doodle-spiral">
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 30 C 30 20, 40 20, 40 30 C 40 45, 20 45, 20 30 C 20 10, 50 10, 50 30 C 50 55, 10 55, 10 30" stroke="#FF5E5E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="fwh-doodle fwh-doodle-arrow">
        <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 20 Q 25 5, 50 20 L 70 20 M 60 12 L 70 20 L 60 28" stroke="#00A651" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Fun "let's play!" script text */}
      <div className="fwh-doodle fwh-doodle-script">
        <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 25 Q 10 10, 20 25 Q 25 35, 35 20 L 40 25 M 45 15 L 45 30 M 50 22 Q 55 15, 65 22 Q 70 28, 75 22 Q 80 15, 90 25" stroke="#FF6B00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="fwh-container">
        {/* Content First */}
        <div className="fwh-content">
          {/* Eyebrow Badge */}
          <div className="fwh-eyebrow">
        
            <span>Play Studio</span>
            <span className="fwh-eyebrow-dot">•</span>
            <span className="fwh-eyebrow-highlight">Games & Collectibles</span>
          </div>

          <h1 className="fwh-title">
            A New Way to{' '}
            <span className="fwh-title-highlight">
              Play
              <svg className="fwh-underline-svg" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0 8 Q 25 2, 50 8 T 100 6" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
            {' '}& {' '}
            <span className="fwh-title-highlight-hw">
              Create
              <svg className="fwh-underline-svg fwh-underline-blue" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0 6 Q 30 12, 50 4 T 100 8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          <p className="fwh-subtitle">
            Discover new UNO rule variations and dive into Hot Wheels custom car designs, track concepts, and collector showcases—all powered by AI and community creativity.
          </p>

          <div className="fwh-ctas">
            <a href="#uno" className="fwh-cta-btn fwh-cta-primary">
              <img src={unoCardIcon} alt="" className="fwh-btn-icon-img" />
              Let's Play UNO
              <span className="fwh-btn-sparkle">✨</span>
            </a>
            <a href="#hotwheels" className="fwh-cta-btn fwh-cta-secondary">
              <span className="fwh-btn-text"> Explore Hot Wheels Collections</span>
              <span className="fwh-btn-arrow">→</span>
            </a>
          </div>

          {/* Countdown Timer - Playful addition */}
          <div className="fwh-countdown">
            <div className="fwh-countdown-label">Next UNO Community Meetup</div>
            <div className="fwh-countdown-timer">
              <div className="fwh-countdown-block">
                <span className="fwh-countdown-number">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="fwh-countdown-unit">Days</span>
              </div>
              <span className="fwh-countdown-sep">:</span>
              <div className="fwh-countdown-block">
                <span className="fwh-countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="fwh-countdown-unit">Hours</span>
              </div>
              <span className="fwh-countdown-sep">:</span>
              <div className="fwh-countdown-block">
                <span className="fwh-countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="fwh-countdown-unit">Minutes</span>
              </div>
              <span className="fwh-countdown-sep">:</span>
              <div className="fwh-countdown-block">
                <span className="fwh-countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="fwh-countdown-unit">Seconds</span>
              </div>
            </div>
          </div>

          {/* Stats Callouts */}
          <div className="fwh-stats">
            <div className="fwh-stat-item">
              <span className="fwh-stat-number">50+</span>
              <span className="fwh-stat-label">YEARS OF PLAY</span>
            </div>
            <div className="fwh-stat-divider"></div>
            <div className="fwh-stat-item">
              <span className="fwh-stat-number fwh-stat-blue">2</span>
              <span className="fwh-stat-label">ICONIC BRANDS</span>
            </div>
            <div className="fwh-stat-divider"></div>
            <div className="fwh-stat-item">
              <span className="fwh-stat-number fwh-stat-green">∞</span>
              <span className="fwh-stat-label">POSSIBILITIES</span>
            </div>
          </div>
        </div>

        {/* Image Pills Below Content */}
        <div className="fwh-pills">
          {/* Yellow Pill - UNO */}
          <div className="fwh-pill fwh-pill-yellow">
            <div className="fwh-pill-border"></div>
            <div className="fwh-pill-doodle fwh-pill-doodle-star">✦</div>
            <div className="fwh-pill-doodle fwh-pill-doodle-plus">+</div>
            <img src={unoImg} alt="UNO game night experience" className="fwh-pill-image" />
            <div className="fwh-pill-label">
              <span>UNO</span>
            </div>
          </div>

          {/* Red Pill - Hot Wheels */}
          <div className="fwh-pill fwh-pill-red">
            <div className="fwh-pill-border"></div>
            <div className="fwh-pill-doodle fwh-pill-doodle-burst">✺</div>
            <div className="fwh-pill-doodle fwh-pill-doodle-lines">
              <svg viewBox="0 0 30 20" fill="none">
                <path d="M5 10 L 25 10 M 5 5 L 20 5 M 5 15 L 22 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <img src={hotwheelsImg} alt="Hot Wheels collector experience" className="fwh-pill-image" />
            <div className="fwh-pill-label">
              <span>HOT WHEELS</span>
            </div>
          </div>

          {/* Blue Pill - Family */}
          <div className="fwh-pill fwh-pill-blue">
            <div className="fwh-pill-border"></div>
            <div className="fwh-pill-doodle fwh-pill-doodle-sparkle">✧</div>
            <div className="fwh-pill-doodle fwh-pill-doodle-heart">♥</div>
            <img src={familyImg} alt="Family playing together" className="fwh-pill-image" />
            <div className="fwh-pill-label">
              <span>FAMILY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Doodles */}
      <div className="fwh-doodle fwh-doodle-star-bottom">★</div>
      <div className="fwh-doodle fwh-doodle-star-bottom-2">✦</div>
      <div className="fwh-doodle fwh-doodle-wave">
        <svg viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 15 Q 25 0, 50 15 T 100 15 T 150 15" stroke="#FF5E5E" strokeWidth="3" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
      
      {/* Confetti dots */}
      <div className="fwh-confetti fwh-confetti-1"></div>
      <div className="fwh-confetti fwh-confetti-2"></div>
      <div className="fwh-confetti fwh-confetti-3"></div>
      <div className="fwh-confetti fwh-confetti-4"></div>
      <div className="fwh-confetti fwh-confetti-5"></div>
      <div className="fwh-confetti fwh-confetti-6"></div>
    </section>
  );
};

export default Hero;
