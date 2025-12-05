import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe2, 
  Sparkles, 
  Brush, 
  Zap, 
  Rocket,
  Users,
  Trophy,
  Heart,
  Star,
  UsersRound,
  Dices,
  Newspaper,
  Languages
} from 'lucide-react';
import './WhatWereCreating.css';

// Import AI icon
import aiIconImg from '../../assets/icons/ai-icon.webp';
import { useLanguage } from '../../context/LanguageContext';

const WhatWereCreating = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);
  const { t } = useLanguage();

  const features = [
    {
      id: 1,
      icon: <Dices size={32} strokeWidth={2.5} />,
      title: t('whatWereCreating.feature1Title'),
      description: t('whatWereCreating.feature1Desc'),
      color: "#fff",
      gradient: "linear-gradient(145deg, #C8102E 0%, #E63946 100%)"
    },
    {
      id: 2,
      icon: <Globe2 size={32} strokeWidth={2.5} />,
      title: t('whatWereCreating.feature2Title'),
      description: t('whatWereCreating.feature2Desc'),
      color: "#fff",
      gradient: "linear-gradient(145deg, #0057B8 0%, #4A8CFF 100%)"
    },
    {
      id: 3,
      icon: "ai-image",
      title: t('whatWereCreating.feature3Title'),
      description: t('whatWereCreating.feature3Desc'),
      color: "#1a1a1a",
      gradient: "linear-gradient(145deg, #FFD53D 0%, #FFE066 100%)"
    },
    {
      id: 4,
      icon: <Sparkles size={32} strokeWidth={2.5} />,
      title: t('whatWereCreating.feature4Title'),
      description: t('whatWereCreating.feature4Desc'),
      color: "#fff",
      gradient: "linear-gradient(145deg, #00A651 0%, #00C853 100%)"
    },
    {
      id: 5,
      icon: <Newspaper size={32} strokeWidth={2.5} />,
      title: t('whatWereCreating.feature5Title'),
      description: t('whatWereCreating.feature5Desc'),
      color: "#fff",
      gradient: "linear-gradient(145deg, #FF6B00 0%, #FF8C42 100%)"
    },
    {
      id: 6,
      icon: <UsersRound size={32} strokeWidth={2.5} />,
      title: t('whatWereCreating.feature6Title'),
      description: t('whatWereCreating.feature6Desc'),
      color: "#fff",
      gradient: "linear-gradient(145deg, #4A8CFF 0%, #6BA3FF 100%)"
    },
    {
      id: 7,
      icon: <Brush size={32} strokeWidth={2.5} />,
      title: t('whatWereCreating.feature7Title'),
      description: t('whatWereCreating.feature7Desc'),
      color: "#fff",
      gradient: "linear-gradient(145deg, #C8102E 0%, #FF6B00 100%)"
    },
    {
      id: 8,
      icon: <Zap size={32} strokeWidth={2.5} />,
      title: t('whatWereCreating.feature8Title'),
      description: t('whatWereCreating.feature8Desc'),
      color: "#fff",
      gradient: "linear-gradient(145deg, #00A651 0%, #4A8CFF 100%)"
    },
    {
      id: 9,
      icon: <Rocket size={32} strokeWidth={2.5} />,
      title: t('whatWereCreating.feature9Title'),
      description: t('whatWereCreating.feature9Desc'),
      color: "#1a1a1a",
      gradient: "linear-gradient(145deg, #FFD53D 0%, #FF6B00 100%)"
    },
    {
      id: 10,
      icon: <Languages size={32} strokeWidth={2.5} />,
      title: t('whatWereCreating.feature10Title'),
      description: t('whatWereCreating.feature10Desc'),
      color: "#fff",
      gradient: "linear-gradient(145deg, #9B59B6 0%, #8E44AD 100%)"
    }
  ];

  // Auto-rotate every 4 seconds
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, features.length]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const getCardStyle = (index) => {
    const diff = index - activeIndex;
    const totalCards = features.length;
    
    // Handle wrapping for infinite feel
    let adjustedDiff = diff;
    if (diff > totalCards / 2) adjustedDiff = diff - totalCards;
    if (diff < -totalCards / 2) adjustedDiff = diff + totalCards;

    const isActive = index === activeIndex;
    const translateX = adjustedDiff * 280; // spacing between cards
    const scale = isActive ? 1 : 0.85;
    const opacity = Math.abs(adjustedDiff) > 2 ? 0 : 1 - Math.abs(adjustedDiff) * 0.15;
    const zIndex = 10 - Math.abs(adjustedDiff);

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity,
      zIndex
    };
  };

  return (
    <section className="wwc-section">
      {/* Background Elements */}
      <div className="wwc-bg">
        <div className="wwc-bg-gradient"></div>
        <div className="wwc-bg-pattern"></div>
        <div className="wwc-bg-glow wwc-glow-1"></div>
        <div className="wwc-bg-glow wwc-glow-2"></div>
      </div>

      {/* Header */}
      <div className="wwc-header">
        <div className="wwc-badge">
          <Star size={14} />
          <span>{t('whatWereCreating.badge')}</span>
        </div>
        <h2 className="wwc-title">
          {t('whatWereCreating.title')}<br />
          <span className="wwc-title-highlight">{t('whatWereCreating.titleHighlight')}</span>
        </h2>
        <p className="wwc-subtitle">
          {t('whatWereCreating.subtitle')}
        </p>
        <p className="wwc-tagline">
          {t('whatWereCreating.tagline')}
        </p>
      </div>

      {/* Section Label */}
      <div className="wwc-section-label">
        <Trophy size={18} />
        <span>{t('whatWereCreating.sectionLabel')}</span>
      </div>

      {/* Netflix-Style Carousel */}
      <div 
        className="wwc-carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="wwc-carousel" ref={carouselRef}>
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`wwc-card ${index === activeIndex ? 'wwc-card-active' : ''}`}
              style={getCardStyle(index)}
              onClick={() => handleCardClick(index)}
            >
              <div 
                className="wwc-card-bg"
                style={{ background: feature.gradient }}
              ></div>
              <div className="wwc-card-content">
                <div className="wwc-card-icon" style={{ color: feature.color }}>
                  {feature.icon === "ai-image" ? (
                    <img src={aiIconImg} alt="AI" className="wwc-card-icon-img" />
                  ) : (
                    feature.icon
                  )}
                </div>
                <h3 className="wwc-card-title">{feature.title}</h3>
                <p className="wwc-card-desc">{feature.description}</p>
              </div>
              <div className="wwc-card-shine"></div>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="wwc-indicators">
          {features.map((_, index) => (
            <button
              key={index}
              className={`wwc-indicator ${index === activeIndex ? 'wwc-indicator-active' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="wwc-indicator-fill"></div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="wwc-bottom">
        <div className="wwc-bottom-icons">
          <Heart size={20} className="wwc-bottom-icon" />
          <Users size={20} className="wwc-bottom-icon" />
          <Sparkles size={20} className="wwc-bottom-icon" />
        </div>
        <p className="wwc-bottom-text">
          {t('whatWereCreating.bottomText')}
        </p>
      </div>
    </section>
  );
};

export default WhatWereCreating;

