import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
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

// Shadow Figure SVG Components - Playful silhouettes for each card
const ShadowFigures = {
  // Card 1: Two Worlds, One Destination - Parent & child playing together
  twoWorlds: ({ color = "rgba(255,255,255,0.25)" }) => (
    <svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg" className="wwc-shadow-svg">
      {/* Parent figure - excited pose */}
      <circle cx="50" cy="28" r="14" fill={color} />
      <path d="M50,45 C35,55 30,75 32,100 L25,145 C22,155 40,158 42,148 L50,115 L58,148 C60,158 78,155 75,145 L68,100 C70,75 65,55 50,45" fill={color} />
      <path d="M35,60 L10,45 C5,42 2,52 8,55 L30,70" fill={color} />
      <path d="M65,60 L90,45 C95,42 98,52 92,55 L70,70" fill={color} />
      {/* Child figure - jumping joyfully */}
      <circle cx="130" cy="55" r="11" fill={color} />
      <path d="M130,68 C120,75 118,90 120,105 L115,140 C113,148 127,150 128,142 L130,115 L132,142 C133,150 147,148 145,140 L140,105 C142,90 140,75 130,68" fill={color} />
      <path d="M120,78 L100,65 C95,62 92,70 98,74 L115,85" fill={color} />
      <path d="M140,78 L160,65 C165,62 168,70 162,74 L145,85" fill={color} />
    </svg>
  ),
  
  // Card 2: Global Community Voices - Three diverse figures connected
  globalCommunity: ({ color = "rgba(255,255,255,0.25)" }) => (
    <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" className="wwc-shadow-svg">
      {/* Left person - waving */}
      <circle cx="40" cy="35" r="12" fill={color} />
      <path d="M40,50 C28,58 26,78 28,100 L22,145 C20,153 35,155 37,147 L40,110 L43,147 C45,155 60,153 58,145 L52,100 C54,78 52,58 40,50" fill={color} />
      <path d="M28,62 L8,35 C4,30 -2,38 4,43 L22,68" fill={color} />
      {/* Center person - arms open welcoming */}
      <circle cx="100" cy="28" r="14" fill={color} />
      <path d="M100,45 C85,55 82,78 85,105 L78,150 C75,160 95,162 97,152 L100,118 L103,152 C105,162 125,160 122,150 L115,105 C118,78 115,55 100,45" fill={color} />
      <path d="M85,58 L55,50 C48,48 46,58 54,60 L82,68" fill={color} />
      <path d="M115,58 L145,50 C152,48 154,58 146,60 L118,68" fill={color} />
      {/* Right person - jumping */}
      <circle cx="160" cy="40" r="12" fill={color} />
      <path d="M160,55 C148,63 146,83 148,105 L142,145 C140,153 155,155 157,147 L160,115 L163,147 C165,155 180,153 178,145 L172,105 C174,83 172,63 160,55" fill={color} />
      <path d="M172,67 L190,52 C195,48 200,56 194,60 L174,75" fill={color} />
    </svg>
  ),
  
  // Card 3: Intelligent Experiences - Kid with lightbulb/creative spark
  intelligentExp: ({ color = "rgba(0,0,0,0.2)" }) => (
    <svg viewBox="0 0 150 160" xmlns="http://www.w3.org/2000/svg" className="wwc-shadow-svg">
      {/* Creative kid thinking */}
      <circle cx="75" cy="45" r="15" fill={color} />
      <path d="M75,63 C58,73 55,95 58,125 L50,155 C47,165 68,168 70,158 L75,130 L80,158 C82,168 103,165 100,155 L92,125 C95,95 92,73 75,63" fill={color} />
      {/* Hand pointing up - idea! */}
      <path d="M60,78 L38,55 C33,50 28,58 34,63 L55,85" fill={color} />
      <path d="M90,78 L112,55 C117,50 122,58 116,63 L95,85" fill={color} />
      {/* Sparkle/idea elements */}
      <circle cx="42" cy="25" r="4" fill={color} opacity="0.7" />
      <circle cx="108" cy="25" r="4" fill={color} opacity="0.7" />
      <path d="M75,5 L75,15 M68,8 L82,12 M82,8 L68,12" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
  
  // Card 4: Made for Every Fan - Multi-generational (adult, teen, kid)
  everyFan: ({ color = "rgba(255,255,255,0.25)" }) => (
    <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" className="wwc-shadow-svg">
      {/* Adult - standing proud */}
      <circle cx="50" cy="25" r="14" fill={color} />
      <path d="M50,42 C35,52 32,78 35,110 L28,155 C25,165 45,168 48,158 L50,120 L52,158 C55,168 75,165 72,155 L65,110 C68,78 65,52 50,42" fill={color} />
      {/* Teen - dynamic pose */}
      <circle cx="105" cy="40" r="12" fill={color} />
      <path d="M105,55 C93,63 90,83 93,108 L87,148 C85,156 100,158 102,150 L105,118 L108,150 C110,158 125,156 123,148 L117,108 C120,83 117,63 105,55" fill={color} />
      <path d="M93,68 L78,58 C73,54 68,62 74,66 L90,75" fill={color} />
      {/* Kid - jumping excited */}
      <circle cx="155" cy="58" r="10" fill={color} />
      <path d="M155,70 C145,77 143,92 145,112 L140,145 C138,152 150,154 152,147 L155,120 L158,147 C160,154 172,152 170,145 L165,112 C167,92 165,77 155,70" fill={color} />
      <path d="M145,80 L130,68 C125,64 122,72 128,76 L142,86" fill={color} />
      <path d="M165,80 L180,68 C185,64 188,72 182,76 L168,86" fill={color} />
    </svg>
  ),
  
  // Card 5: Stories & Cultural Insights - Person reading/sharing story
  stories: ({ color = "rgba(255,255,255,0.25)" }) => (
    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" className="wwc-shadow-svg">
      {/* Parent reading to child */}
      <circle cx="55" cy="30" r="14" fill={color} />
      <path d="M55,47 C42,55 38,75 42,100 L38,145 C35,155 52,158 55,148 L58,115 L60,148 C63,158 80,155 77,145 L72,100 C76,75 70,55 55,47" fill={color} />
      {/* Arms holding book */}
      <path d="M68,65 L95,55 L100,75 L70,82" fill={color} />
      {/* Book shape */}
      <rect x="90" y="52" width="25" height="30" rx="2" fill={color} opacity="0.8" />
      {/* Child listening */}
      <circle cx="120" cy="65" r="10" fill={color} />
      <path d="M120,78 C112,84 110,98 112,115 L108,145 C106,152 118,154 120,147 L122,120 L124,147 C126,154 138,152 136,145 L132,115 C134,98 130,84 120,78" fill={color} />
    </svg>
  ),
  
  // Card 6: Play, Collect, Create, Share - Two friends high-fiving
  playShare: ({ color = "rgba(255,255,255,0.25)" }) => (
    <svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg" className="wwc-shadow-svg">
      {/* Friend 1 - reaching for high five */}
      <circle cx="55" cy="35" r="13" fill={color} />
      <path d="M55,50 C42,60 40,82 42,108 L35,150 C32,160 52,162 54,152 L57,118 L60,152 C62,162 82,160 79,150 L72,108 C74,82 70,60 55,50" fill={color} />
      <path d="M68,62 L92,48 C98,44 102,52 96,56 L72,70" fill={color} />
      {/* Friend 2 - reaching for high five */}
      <circle cx="125" cy="35" r="13" fill={color} />
      <path d="M125,50 C112,60 110,82 112,108 L105,150 C102,160 122,162 124,152 L127,118 L130,152 C132,162 152,160 149,150 L142,108 C144,82 140,60 125,50" fill={color} />
      <path d="M112,62 L88,48 C82,44 78,52 84,56 L108,70" fill={color} />
      {/* High-five star burst */}
      <circle cx="90" cy="48" r="5" fill={color} opacity="0.6" />
    </svg>
  ),
  
  // Card 7: Interactive Moments - Kid playing/building track
  interactive: ({ color = "rgba(255,255,255,0.25)" }) => (
    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" className="wwc-shadow-svg">
      {/* Excited kid building */}
      <circle cx="80" cy="40" r="14" fill={color} />
      <path d="M80,57 C65,67 62,90 65,118 L57,155 C54,165 75,168 77,158 L80,125 L83,158 C85,168 106,165 103,155 L95,118 C98,90 95,67 80,57" fill={color} />
      {/* Arms building/creating */}
      <path d="M65,72 L40,58 C34,54 30,62 36,66 L58,80" fill={color} />
      <path d="M95,72 L120,58 C126,54 130,62 124,66 L102,80" fill={color} />
      {/* Track/building pieces */}
      <rect x="25" y="45" width="20" height="8" rx="2" fill={color} opacity="0.6" transform="rotate(-15 35 49)" />
      <rect x="115" y="45" width="20" height="8" rx="2" fill={color} opacity="0.6" transform="rotate(15 125 49)" />
    </svg>
  ),
  
  // Card 8: Heart of the Vision - Family united (parent + 2 kids)
  heartVision: ({ color = "rgba(0,0,0,0.2)" }) => (
    <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" className="wwc-shadow-svg">
      {/* Parent in middle - arms around kids */}
      <circle cx="100" cy="25" r="15" fill={color} />
      <path d="M100,43 C82,55 78,82 82,115 L74,155 C71,165 92,168 95,158 L100,125 L105,158 C108,168 129,165 126,155 L118,115 C122,82 118,55 100,43" fill={color} />
      {/* Arms around children */}
      <path d="M82,58 Q55,55 45,75" stroke={color} strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M118,58 Q145,55 155,75" stroke={color} strokeWidth="10" strokeLinecap="round" fill="none" />
      {/* Left child */}
      <circle cx="45" cy="50" r="11" fill={color} />
      <path d="M45,63 C35,70 33,88 35,108 L30,145 C28,153 42,155 44,148 L46,115 L48,148 C50,155 64,153 62,145 L57,108 C59,88 55,70 45,63" fill={color} />
      {/* Right child */}
      <circle cx="155" cy="50" r="11" fill={color} />
      <path d="M155,63 C145,70 143,88 145,108 L140,145 C138,153 152,155 154,148 L156,115 L158,148 C160,155 174,153 172,145 L167,108 C169,88 165,70 155,63" fill={color} />
    </svg>
  ),
  
  // Card 9: Global Language Support - Figures waving hello in different poses
  globalLanguage: ({ color = "rgba(255,255,255,0.25)" }) => (
    <svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg" className="wwc-shadow-svg">
      {/* Person 1 - waving left hand */}
      <circle cx="55" cy="38" r="12" fill={color} />
      <path d="M55,52 C43,60 40,80 43,105 L37,145 C35,153 50,155 52,148 L55,115 L58,148 C60,155 75,153 73,145 L67,105 C70,80 67,60 55,52" fill={color} />
      <path d="M42,65 L18,42 C13,37 7,45 13,50 L35,72" fill={color} />
      {/* Person 2 - both arms up celebrating */}
      <circle cx="125" cy="38" r="12" fill={color} />
      <path d="M125,52 C113,60 110,80 113,105 L107,145 C105,153 120,155 122,148 L125,115 L128,148 C130,155 145,153 143,145 L137,105 C140,80 137,60 125,52" fill={color} />
      <path d="M113,65 L95,40 C90,34 83,42 90,48 L108,70" fill={color} />
      <path d="M137,65 L155,40 C160,34 167,42 160,48 L142,70" fill={color} />
      {/* Speech bubbles / hello signs */}
      <ellipse cx="28" cy="25" rx="12" ry="8" fill={color} opacity="0.5" />
      <ellipse cx="152" cy="25" rx="12" ry="8" fill={color} opacity="0.5" />
    </svg>
  )
};

const WhatWereCreating = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cardSpacing, setCardSpacing] = useState(280);
  const carouselRef = useRef(null);
  const { t } = useLanguage();
  
  // Read card spacing from CSS custom property (defined in WhatWereCreating.css)
  useEffect(() => {
    const updateSpacing = () => {
      const cssSpacing = getComputedStyle(document.documentElement)
        .getPropertyValue('--wwc-card-spacing')
        .trim();
      const spacingValue = parseInt(cssSpacing, 10);
      if (!isNaN(spacingValue)) {
        setCardSpacing(spacingValue);
      }
    };
    
    updateSpacing();
    window.addEventListener('resize', updateSpacing);
    return () => window.removeEventListener('resize', updateSpacing);
  }, []);
  
  // Animation refs and controls
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const features = [
    {
      id: 1,
      icon: <Dices size={32} strokeWidth={2.5} />,
      title: t('whatWereCreating.feature1Title'),
      description: t('whatWereCreating.feature1Desc'),
      color: "#fff",
      gradient: "linear-gradient(145deg, #C8102E 0%, #E63946 100%)",
      shadowFigure: 'twoWorlds',
      shadowColor: "rgba(255,255,255,0.3)"
    },
    {
      id: 2,
      icon: <Globe2 size={32} strokeWidth={2.5} />,
      title: t('whatWereCreating.feature2Title'),
      description: t('whatWereCreating.feature2Desc'),
      color: "#fff",
      gradient: "linear-gradient(145deg, #0057B8 0%, #4A8CFF 100%)",
      shadowFigure: 'globalCommunity',
      shadowColor: "rgba(255,255,255,0.28)"
    },
    {
      id: 3,
      icon: "ai-image",
      title: t('whatWereCreating.feature3Title'),
      description: t('whatWereCreating.feature3Desc'),
      color: "#1a1a1a",
      gradient: "linear-gradient(145deg, #FFD53D 0%, #FFE066 100%)",
      shadowFigure: 'intelligentExp',
      shadowColor: "rgba(0,0,0,0.15)"
    },
    {
      id: 4,
      icon: <Sparkles size={32} strokeWidth={2.5} />,
      title: t('whatWereCreating.feature4Title'),
      description: t('whatWereCreating.feature4Desc'),
      color: "#fff",
      gradient: "linear-gradient(145deg, #00A651 0%, #00C853 100%)",
      shadowFigure: 'everyFan',
      shadowColor: "rgba(255,255,255,0.28)"
    },
    {
      id: 5,
      icon: <Newspaper size={32} strokeWidth={2.5} />,
      title: t('whatWereCreating.feature5Title'),
      description: t('whatWereCreating.feature5Desc'),
      color: "#fff",
      gradient: "linear-gradient(145deg, #FF6B00 0%, #FF8C42 100%)",
      shadowFigure: 'stories',
      shadowColor: "rgba(255,255,255,0.3)"
    },
    {
      id: 6,
      icon: <UsersRound size={32} strokeWidth={2.5} />,
      title: t('whatWereCreating.feature6Title'),
      description: t('whatWereCreating.feature6Desc'),
      color: "#fff",
      gradient: "linear-gradient(145deg, #4A8CFF 0%, #6BA3FF 100%)",
      shadowFigure: 'playShare',
      shadowColor: "rgba(255,255,255,0.28)"
    },
    {
      id: 8,
      icon: <Zap size={32} strokeWidth={2.5} />,
      title: t('whatWereCreating.feature8Title'),
      description: t('whatWereCreating.feature8Desc'),
      color: "#fff",
      gradient: "linear-gradient(145deg, #00A651 0%, #4A8CFF 100%)",
      shadowFigure: 'interactive',
      shadowColor: "rgba(255,255,255,0.3)"
    },
    {
      id: 9,
      icon: <Rocket size={32} strokeWidth={2.5} />,
      title: t('whatWereCreating.feature9Title'),
      description: t('whatWereCreating.feature9Desc'),
      color: "#1a1a1a",
      gradient: "linear-gradient(145deg, #FFD53D 0%, #FF6B00 100%)",
      shadowFigure: 'heartVision',
      shadowColor: "rgba(0,0,0,0.15)"
    },
    {
      id: 10,
      icon: <Languages size={32} strokeWidth={2.5} />,
      title: t('whatWereCreating.feature10Title'),
      description: t('whatWereCreating.feature10Desc'),
      color: "#fff",
      gradient: "linear-gradient(145deg, #9B59B6 0%, #8E44AD 100%)",
      shadowFigure: 'globalLanguage',
      shadowColor: "rgba(255,255,255,0.32)"
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
    const translateX = adjustedDiff * cardSpacing; // responsive spacing between cards
    const scale = isActive ? 1 : 0.85;
    const opacity = Math.abs(adjustedDiff) > 2 ? 0 : 1 - Math.abs(adjustedDiff) * 0.15;
    const zIndex = 10 - Math.abs(adjustedDiff);

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity,
      zIndex
    };
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const highlightVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1] // Bouncy easing
      }
    }
  };

  const labelVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="wwc-section" id="features" ref={sectionRef}>
      {/* Background Elements */}
      <div className="wwc-bg">
        <div className="wwc-bg-gradient"></div>
        <div className="wwc-bg-pattern"></div>
        <motion.div 
          className="wwc-bg-glow wwc-glow-1"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={glowVariants}
        ></motion.div>
        <motion.div 
          className="wwc-bg-glow wwc-glow-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={glowVariants}
          transition={{ delay: 0.3 }}
        ></motion.div>
      </div>

      {/* Header */}
      <motion.div 
        className="wwc-header"
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="wwc-badge" variants={badgeVariants}>
          <Star size={14} />
          <span>{t('whatWereCreating.badge')}</span>
        </motion.div>
        <motion.h2 className="wwc-title" variants={titleVariants}>
          {t('whatWereCreating.title')}<br />
          <motion.span 
            className="wwc-title-highlight"
            variants={highlightVariants}
          >
            {t('whatWereCreating.titleHighlight')}
          </motion.span>
        </motion.h2>
        <motion.p className="wwc-subtitle" variants={subtitleVariants}>
          {t('whatWereCreating.subtitle')}
        </motion.p>
        <motion.p className="wwc-tagline" variants={taglineVariants}>
          {t('whatWereCreating.tagline')}
        </motion.p>
      </motion.div>

      {/* Section Label */}
      <motion.div 
        className="wwc-section-label"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={labelVariants}
      >
        <Trophy size={18} />
        <span>{t('whatWereCreating.sectionLabel')}</span>
      </motion.div>

      {/* Netflix-Style Carousel */}
      <div 
        className="wwc-carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="wwc-carousel" ref={carouselRef}>
          {features.map((feature, index) => {
            const isActive = index === activeIndex;
            const ShadowComponent = ShadowFigures[feature.shadowFigure];
            
            return (
              <div
                key={feature.id}
                className={`wwc-card ${isActive ? 'wwc-card-active' : ''}`}
                style={getCardStyle(index)}
                onClick={() => handleCardClick(index)}
              >
                <div 
                  className="wwc-card-bg"
                  style={{ background: feature.gradient }}
                ></div>
                
                {/* Shadow Figure - Playful Human Silhouette */}
                {ShadowComponent && (
                  <div className={`wwc-shadow-figure ${isActive ? 'wwc-shadow-active' : 'wwc-shadow-inactive'}`}>
                    <ShadowComponent color={feature.shadowColor} />
                  </div>
                )}
                
                <div className="wwc-card-content">
                  <div className="wwc-card-icon" style={{ color: feature.color }}>
                    {feature.icon === "ai-image" ? (
                      <img src={aiIconImg} alt="AI-powered feature icon" className="wwc-card-icon-img" />
                    ) : (
                      feature.icon
                    )}
                  </div>
                  <h3 className="wwc-card-title">{feature.title}</h3>
                  <p className="wwc-card-desc">{feature.description}</p>
                </div>
                <div className="wwc-card-shine"></div>
              </div>
            );
          })}
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

