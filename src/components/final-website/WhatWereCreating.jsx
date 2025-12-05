import React, { useState, useEffect, useRef } from 'react';
import { 
  Gamepad2, 
  Globe2, 
  Sparkles, 
  BookMarked, 
  Brush, 
  Zap, 
  Rocket,
  Users,
  Trophy,
  Heart,
  Star,
  UsersRound,
  Dices,
  Newspaper
} from 'lucide-react';
import './WhatWereCreating.css';

// Import AI icon
import aiIconImg from '../../assets/icons/ai-icon.webp';

const WhatWereCreating = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  const features = [
    {
      id: 1,
      icon: <Dices size={32} strokeWidth={2.5} />,
      title: "Two Worlds, One Destination",
      description: "Explore the joy of UNO game nights and the thrill of Hot Wheels collecting side-by-side—each with its own identity, personality, and community energy.",
      color: "#fff",
      gradient: "linear-gradient(145deg, #C8102E 0%, #E63946 100%)"
    },
    {
      id: 2,
      icon: <Globe2 size={32} strokeWidth={2.5} />,
      title: "Global Community Voices",
      description: "Discover how people around the world play, collect, and create. Learn UNO house rules from different cultures. Connect with Hot Wheels fans sharing track builds and rare finds.",
      color: "#fff",
      gradient: "linear-gradient(145deg, #0057B8 0%, #4A8CFF 100%)"
    },
    {
      id: 3,
      icon: "ai-image",
      title: "Intelligent Experiences",
      description: "AI helps spark creativity: Get new UNO rule variations based on how you like to play. Explore Hot Wheels concepts, track inspirations, and collector content tailored to you.",
      color: "#1a1a1a",
      gradient: "linear-gradient(145deg, #FFD53D 0%, #FFE066 100%)"
    },
    {
      id: 4,
      icon: <Sparkles size={32} strokeWidth={2.5} />,
      title: "Made for Every Fan",
      description: "From kids discovering UNO for the first time to adult collectors curating prized Hot Wheels pieces—this experience meets each user where they are.",
      color: "#fff",
      gradient: "linear-gradient(145deg, #00A651 0%, #00C853 100%)"
    },
    {
      id: 5,
      icon: <Newspaper size={32} strokeWidth={2.5} />,
      title: "Stories & Cultural Insights",
      description: "Each brand features its own editorial hub: UNO Blog with game tips and creator spotlights. Hot Wheels Blog with collector showcases and history deep-dives.",
      color: "#fff",
      gradient: "linear-gradient(145deg, #FF6B00 0%, #FF8C42 100%)"
    },
    {
      id: 6,
      icon: <UsersRound size={32} strokeWidth={2.5} />,
      title: "Play, Collect, Create, Share",
      description: "This space encourages fans to try new things, share ideas, build community, and celebrate what they love. It's an evolving brand lab where fans shape the future of play.",
      color: "#fff",
      gradient: "linear-gradient(145deg, #4A8CFF 0%, #6BA3FF 100%)"
    },
    {
      id: 7,
      icon: <Brush size={32} strokeWidth={2.5} />,
      title: "Brand-True Design",
      description: "UNO stays bold, social, fast-paced. Hot Wheels stays dynamic, high-energy, and collector-focused. Each experience feels unique—while still unmistakably Mattel.",
      color: "#fff",
      gradient: "linear-gradient(145deg, #C8102E 0%, #FF6B00 100%)"
    },
    {
      id: 8,
      icon: <Zap size={32} strokeWidth={2.5} />,
      title: "Interactive Moments",
      description: "House rules generators. Track build inspiration. Collector showcases. Game-night ideas. All crafted to spark imagination and bring communities together.",
      color: "#fff",
      gradient: "linear-gradient(145deg, #00A651 0%, #4A8CFF 100%)"
    },
    {
      id: 9,
      icon: <Rocket size={32} strokeWidth={2.5} />,
      title: "The Heart of the Vision",
      description: "One platform. Two iconic brands. Endless ways to play, collect, and create—together. This is where global play cultures converge.",
      color: "#1a1a1a",
      gradient: "linear-gradient(145deg, #FFD53D 0%, #FF6B00 100%)"
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
          <span>Mattel × AI LAB</span>
        </div>
        <h2 className="wwc-title">
          A New Digital Playground for<br />
          <span className="wwc-title-highlight">Fans, Players & Collectors</span>
        </h2>
        <p className="wwc-subtitle">
          We're creating a space where UNO and Hot Wheels come alive in ways never before possible—powered by creativity, community stories, and intelligent digital experiences.
        </p>
        <p className="wwc-tagline">
          This is where global play cultures, collector passion, and modern technology converge.
        </p>
      </div>

      {/* Section Label */}
      <div className="wwc-section-label">
        <Trophy size={18} />
        <span>What This Platform Brings Together</span>
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
          It's more than a website—it's an evolving brand lab, where fans shape the future of play.
        </p>
      </div>
    </section>
  );
};

export default WhatWereCreating;

