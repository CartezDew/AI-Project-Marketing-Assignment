import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Avatar3D from './Avatar3D';
import './HotWheelsPersonaAvatar.css';

/**
 * Hot Wheels Persona Avatar Section
 * Premium Apple-inspired design with glass morphism
 */
const HotWheelsPersonaAvatar = () => {
  const [selectedCarType, setSelectedCarType] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredOption, setHoveredOption] = useState(null);
  const containerRef = useRef(null);

  // Car types with angles for circular positioning (60° apart, starting from top)
  const carTypes = [
    {
      id: 'speed-racer',
      name: 'Speed Racer',
      icon: '🏎️',
      vibe: 'Fast & Futuristic',
      color: '#FF6B6B',
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #EE5A24 100%)',
      angle: 270 // Top (12 o'clock)
    },
    {
      id: 'retro-cruiser',
      name: 'Retro Cruiser',
      icon: '🚗',
      vibe: 'Nostalgic & Stylish',
      color: '#F9CA24',
      gradient: 'linear-gradient(135deg, #F9CA24 0%, #F0932B 100%)',
      angle: 330 // Top-right (2 o'clock)
    },
    {
      id: 'off-road',
      name: 'Off-Road',
      icon: '🛻',
      vibe: 'Wild & Adventurous',
      color: '#6AB04C',
      gradient: 'linear-gradient(135deg, #6AB04C 0%, #009432 100%)',
      angle: 30 // Bottom-right (4 o'clock)
    },
    {
      id: 'fantasy-drifter',
      name: 'Fantasy Drifter',
      icon: '🐉',
      vibe: 'Creative & Whimsical',
      color: '#BE2EDD',
      gradient: 'linear-gradient(135deg, #BE2EDD 0%, #8854D0 100%)',
      angle: 90 // Bottom (6 o'clock)
    },
    {
      id: 'garage-builder',
      name: 'Garage Builder',
      icon: '🔧',
      vibe: 'DIY & Inventive',
      color: '#FD9644',
      gradient: 'linear-gradient(135deg, #FD9644 0%, #F97F51 100%)',
      angle: 150 // Bottom-left (8 o'clock)
    },
    {
      id: 'collector-pro',
      name: 'Collector Pro',
      icon: '🏆',
      vibe: 'Curated & Premium',
      color: '#4BCFFA',
      gradient: 'linear-gradient(135deg, #4BCFFA 0%, #0ABDE3 100%)',
      angle: 210 // Top-left (10 o'clock)
    }
  ];

  // Track mouse for avatar
  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const accentColor = selectedCarType 
    ? carTypes.find(c => c.id === selectedCarType)?.color 
    : hoveredOption 
      ? carTypes.find(c => c.id === hoveredOption)?.color 
      : '#6366f1';

  const accentGradient = selectedCarType 
    ? carTypes.find(c => c.id === selectedCarType)?.gradient 
    : hoveredOption 
      ? carTypes.find(c => c.id === hoveredOption)?.gradient 
      : 'linear-gradient(135deg, #6366f1 0%, #8B5CF6 100%)';

  return (
    <section className="hwp-section">
      {/* Ambient Background */}
      <div className="hwp-ambient">
        <div className="hwp-ambient-orb hwp-ambient-orb-1"></div>
        <div className="hwp-ambient-orb hwp-ambient-orb-2"></div>
        <div className="hwp-ambient-orb hwp-ambient-orb-3" style={{ background: accentGradient }}></div>
        <div className="hwp-noise"></div>
      </div>

      <div className="hwp-wrapper">
        {/* Header */}
        <motion.header 
          className="hwp-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hwp-eyebrow">Collector Identity</span>
          <h2 className="hwp-headline">
            Choose Your
            <span className="hwp-headline-accent"> Ride Style</span>
          </h2>
          <p className="hwp-subhead">Select a build style that matches your personality</p>
        </motion.header>

        {/* Main Layout */}
        <div className="hwp-stage" ref={containerRef}>
          
          {/* Build Option Cards - Circular Positioning */}
          {carTypes.map((car, index) => {
            const isHovered = hoveredOption === car.id;
            const isSelected = selectedCarType === car.id;
            
            // Calculate position on circle (equally spaced around center)
            const radius = 280; // Distance from center avatar
            const angleRad = (car.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = -Math.sin(angleRad) * radius;

            return (
              <motion.button
                key={car.id}
                className={`hwp-card ${isSelected ? 'selected' : ''}`}
                style={{ 
                  '--card-color': car.color,
                  '--card-gradient': car.gradient,
                  '--card-x': `${x}px`,
                  '--card-y': `${y}px`,
                }}
                onClick={() => setSelectedCarType(car.id)}
                onMouseEnter={() => setHoveredOption(car.id)}
                onMouseLeave={() => setHoveredOption(null)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  scale: 1.08,
                  y: -8,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Glass Layer */}
                <div className="hwp-card-glass"></div>
                
                {/* Glow Effect */}
                <div className="hwp-card-glow"></div>
                
                {/* Content */}
                <div className="hwp-card-content">
                  <span className="hwp-card-icon">{car.icon}</span>
                  <span className="hwp-card-name">{car.name}</span>
                  <AnimatePresence>
                    {(isHovered || isSelected) && (
                      <motion.span 
                        className="hwp-card-vibe"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {car.vibe}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Selection Indicator */}
                {isSelected && (
                  <motion.div 
                    className="hwp-card-check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                )}
              </motion.button>
            );
          })}

          {/* Center Avatar Platform */}
          <motion.div 
            className="hwp-avatar-platform"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Platform Rings */}
            <div className="hwp-platform-ring hwp-platform-ring-1"></div>
            <div className="hwp-platform-ring hwp-platform-ring-2"></div>
            
            {/* Avatar Container */}
            <div className="hwp-avatar-frame">
              <div className="hwp-avatar-inner">
                <Avatar3D mousePos={mousePos} />
              </div>
            </div>

            {/* Profile Info */}
            <div className="hwp-profile">
              <h3 className="hwp-profile-name">Lesley Alejandra Gonzalez</h3>
              <p className="hwp-profile-bio">Student · Traveler · Collector</p>
            </div>
          </motion.div>
        </div>

        {/* Selected Card Detail */}
        <AnimatePresence mode="wait">
          {selectedCarType && (
            <motion.div 
              className="hwp-selection"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              key={selectedCarType}
            >
              <div 
                className="hwp-selection-card"
                style={{ '--selection-gradient': carTypes.find(c => c.id === selectedCarType)?.gradient }}
              >
                <div className="hwp-selection-icon">
                  {carTypes.find(c => c.id === selectedCarType)?.icon}
                </div>
                <div className="hwp-selection-text">
                  <span className="hwp-selection-label">Your Style</span>
                  <h4 className="hwp-selection-name">{carTypes.find(c => c.id === selectedCarType)?.name}</h4>
                  <p className="hwp-selection-vibe">{carTypes.find(c => c.id === selectedCarType)?.vibe}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Traits */}
        <motion.div 
          className="hwp-traits"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {['Gen Z ⚡', 'Creative 🎨', 'Collector 🏆', 'Enthusiast 🏎️'].map((trait, i) => (
            <span key={i} className="hwp-trait-pill">{trait}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HotWheelsPersonaAvatar;
