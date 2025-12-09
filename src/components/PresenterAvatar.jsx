import React from 'react';
import { motion } from 'framer-motion';
import cartezImage from '../assets/team/Lesley_Gonzalez.webp';
import './PresenterAvatar.css';

const PresenterAvatar = () => {
  return (
    <motion.div 
      className="presenter-avatar-container"
      role="img"
      aria-label="Lesley Gonzalez - Presenter"
      initial={{ opacity: 0, scale: 0, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.5 
      }}
    >
      {/* Pulsing glow rings */}
      <div className="presenter-glow-ring presenter-glow-ring-1"></div>
      <div className="presenter-glow-ring presenter-glow-ring-2"></div>
      <div className="presenter-glow-ring presenter-glow-ring-3"></div>
      
      {/* Main avatar with bounce */}
      <motion.div 
        className="presenter-avatar-wrapper"
        animate={{ 
          y: [0, -6, 0, -3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          repeatDelay: 1
        }}
      >
        <div className="presenter-avatar-glow"></div>
        <img 
          src={cartezImage} 
          alt="Lesley Gonzalez - Presenter" 
          className="presenter-avatar-image"
        />
        
        {/* Talking indicator dots */}
        <div className="presenter-talking-indicator">
          <span className="talking-dot"></span>
          <span className="talking-dot"></span>
          <span className="talking-dot"></span>
        </div>
      </motion.div>
      
      {/* Name tag */}
      <div className="presenter-name-tag">
        <span className="presenter-name">Lesley Gonzalez</span>
        <span className="presenter-role">Presenter</span>
      </div>
    </motion.div>
  );
};

export default PresenterAvatar;

