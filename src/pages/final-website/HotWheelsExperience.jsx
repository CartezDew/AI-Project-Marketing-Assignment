import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import HotWheelsCollectorsHub from '../../components/final-website/HotWheelsCollectorsHub';
import HotWheelsSpotlight from '../../components/final-website/HotWheelsSpotlight';
import HotWheelsCommunity from '../../components/final-website/HotWheelsCommunity';
import Avatar3D from '../../components/final-website/Avatar3D';
import { useLanguage } from '../../context/LanguageContext';
import heroImage from '../../assets/hotwheels/hero-image.webp';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};
// Car images
import chevyBelAir from '../../assets/hotwheels/55-Chevy-Bel-Air-Gasser.webp';
import datsun510 from '../../assets/hotwheels/71 Datsun 510 Wagon hot wheels.webp';
import mustang67 from '../../assets/hotwheels/Custom-67-Mustang.webp';
import fastFuriousPack from '../../assets/hotwheels/Fast-Furious-5-Pack.webp';

// Build styles data
const buildStyles = [
  { id: 'speed', name: 'Speed Racer', icon: '🏎️', color: '#FF6B6B', vibe: 'Fast & Futuristic' },
  { id: 'retro', name: 'Retro Cruiser', icon: '🚗', color: '#F9CA24', vibe: 'Nostalgic Vibes' },
  { id: 'offroad', name: 'Off-Road', icon: '🛻', color: '#6AB04C', vibe: 'Wild Adventure' },
  { id: 'fantasy', name: 'Fantasy Drifter', icon: '🐉', color: '#BE2EDD', vibe: 'Creative & Bold' },
  { id: 'garage', name: 'Garage Builder', icon: '🔧', color: '#FD9644', vibe: 'DIY Spirit' },
  { id: 'collector', name: 'Collector Pro', icon: '🏆', color: '#4BCFFA', vibe: 'Premium Taste' },
];

// Workshop data
const workshops = [
  { id: 1, city: 'Berlin', country: 'Germany', flag: '🇩🇪', date: 'Dec 12, 2025', theme: 'Winter Speed Festival', spots: 60 },
  { id: 2, city: 'Johannesburg', country: 'South Africa', flag: '🇿🇦', date: 'Jan 15, 2026', theme: 'Track Building Mastery', spots: 45 },
  { id: 3, city: 'Kigali', country: 'Rwanda', flag: '🇷🇼', date: 'Jan 28, 2026', theme: 'Customization Basics', spots: 30 },
  { id: 4, city: 'Shanghai', country: 'China', flag: '🇨🇳', date: 'Feb 8, 2026', theme: 'Collector Showcase', spots: 100 },
  { id: 5, city: 'Atlanta', country: 'GA, USA', flag: '🇺🇸', date: 'Feb 22, 2026', theme: 'Racing Championships', spots: 75 },
  { id: 6, city: 'New Orleans', country: 'LA, USA', flag: '🇺🇸', date: 'Mar 5, 2026', theme: 'Vintage Restoration', spots: 50 },
  { id: 7, city: 'Kingston', country: 'Jamaica', flag: '🇯🇲', date: 'Mar 18, 2026', theme: 'Island Speed Fest', spots: 40 },
  { id: 8, city: 'São Paulo', country: 'Brazil', flag: '🇧🇷', date: 'Apr 2, 2026', theme: 'Ultimate Build-Off', spots: 80 },
];

// Virtual Workshops data
const virtualWorkshops = [
  { 
    id: 1, 
    title: 'Track Building Masterclass', 
    instructor: 'Mike "LoopKing" Chen',
    date: 'Dec 14, 2025', 
    time: '2:00 PM EST',
    duration: '90 mins',
    level: 'All Levels',
    description: 'Learn pro techniques for building epic tracks with loops, jumps, and boosters. Live Q&A included!',
    spots: 150,
    registered: 89
  },
  { 
    id: 2, 
    title: 'Custom Paint & Restoration', 
    instructor: 'Sarah "PaintPro" Martinez',
    date: 'Dec 18, 2025', 
    time: '6:00 PM EST',
    duration: '2 hours',
    level: 'Intermediate',
    description: 'Master spectraflame techniques, wheel swaps, and interior detailing. Bring your project car!',
    spots: 75,
    registered: 62
  },
  { 
    id: 3, 
    title: 'Collectors Investment Guide', 
    instructor: 'David "VaultKeeper" Ross',
    date: 'Dec 21, 2025', 
    time: '1:00 PM EST',
    duration: '60 mins',
    level: 'Advanced',
    description: 'Discover which releases to watch for in 2026, grading tips, and market analysis for serious collectors.',
    spots: 200,
    registered: 178
  },
];

const FinalWebsiteHotWheelsExperience = () => {
  const { t } = useLanguage();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredBuild, setHoveredBuild] = useState(null);
  const [selectedBuild, setSelectedBuild] = useState(null);
  const [showWorkshopsModal, setShowWorkshopsModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [signupForm, setSignupForm] = useState({ name: '', email: '' });
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [registeringWorkshop, setRegisteringWorkshop] = useState(null);
  const [workshopRegistrationForm, setWorkshopRegistrationForm] = useState({ 
    name: '', 
    email: '', 
    placeOfOrigin: '' 
  });
  const stageRef = useRef(null);

  // Handle signup form submission
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupForm.name.trim() && signupForm.email.trim()) {
      // Simulate signup success
      setSignupSuccess(true);
      setTimeout(() => {
        setShowSignupModal(false);
        setSignupSuccess(false);
        setSignupForm({ name: '', email: '' });
      }, 2500);
    }
  };

  // Handle workshop registration
  const handleWorkshopRegister = (workshop) => {
    setRegisteringWorkshop(workshop);
    setWorkshopRegistrationForm({ name: '', email: '', placeOfOrigin: '' });
  };

  // Handle workshop registration form submission
  const handleWorkshopRegistrationSubmit = (e) => {
    e.preventDefault();
    if (
      workshopRegistrationForm.name.trim() && 
      workshopRegistrationForm.email.trim() && 
      workshopRegistrationForm.placeOfOrigin.trim()
    ) {
      // Close modal and reset form
      setShowWorkshopsModal(false);
      setRegisteringWorkshop(null);
      setWorkshopRegistrationForm({ name: '', email: '', placeOfOrigin: '' });
    }
  };

  // Countdown timer state - next workshop countdown
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Calculate countdown to next workshop (Dec 12, 2025 - Berlin, Germany)
  useEffect(() => {
    const targetDate = new Date('2025-12-12T10:00:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;
      
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        setCountdown({ days, hours, minutes, seconds });
      } else {
        // Event has passed, show zeros
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  // Track mouse for avatar
  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Get accent color based on hover/selection - default to Hot Wheels orange
  const accentColor = selectedBuild 
    ? buildStyles.find(b => b.id === selectedBuild)?.color 
    : hoveredBuild 
      ? buildStyles.find(b => b.id === hoveredBuild)?.color 
      : '#FF6B00';
  
  const upcomingDrops = [
    { id: 1, name: "'71 Datsun 510", series: "Red Line Club", date: "Dec 15", rarity: "Ultra Rare", image: datsun510 },
    { id: 2, name: "Fast & Furious 5-Pack", series: "Car Culture", date: "Dec 22", rarity: "Premium", image: fastFuriousPack },
    { id: 3, name: "Custom '67 Mustang", series: "Legends Tour", date: "Jan 5", rarity: "Limited", image: mustang67 },
  ];

  const spotlightCar = {
    name: "'55 Chevy Bel Air Gasser",
    series: "Red Line Club Exclusive",
    desc: "Spectraflame blue finish with Real Riders wheels. Only 15,000 produced worldwide.",
    stats: { produced: "15,000", year: "2024", value: "$45+" },
    image: chevyBelAir
  };

  return (
    <div className="hw-experience">
      <section className="hw-hero">
        <div className="hw-hero-overlay"></div>
        <div className="hw-hero-speed-lines"></div>
        
        {/* Racing Car Animation */}
        <div className="hw-racing-car-track">
          <div className="hw-racing-car">
            <span className="hw-racing-car-emoji">🏎️</span>
            <div className="hw-car-fire-trail">
              <span></span><span></span><span></span><span></span><span></span>
              <span></span><span></span>
            </div>
          </div>
        </div>
        
        <div className="hw-hero-grid">
          <motion.div 
            className="hw-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="hw-hero-badge" variants={fadeInDown}>
              <span className="hw-badge-icon">🏁</span>
              <span>{t('hotWheels.since1968')}</span>
            </motion.div>
            
            <motion.h1 className="hw-hero-title" variants={fadeInUp}>
              <span className="hw-title-line-1">{t('hotWheels.challengeAccepted')}</span>
              <span className="hw-title-line-2">{t('hotWheels.accepted')}</span>
            </motion.h1>
            
            <motion.p className="hw-hero-tagline" variants={fadeInUp}>
              {t('hotWheels.tagline')}
            </motion.p>
            
            <motion.div className="hw-hero-actions" variants={fadeInUp}>
              <motion.button 
                className="hw-btn-primary"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 107, 0, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hotWheels.startCollecting')}
              </motion.button>
              <motion.a 
                href="#collectors-workshop" 
                className="hw-btn-ghost"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="hw-btn-wrench">🔧</span>
                Collectors Workshop
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hw-hero-image-wrapper"
            initial={{ opacity: 0, x: 100, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className="hw-hero-image-pill"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="hw-pill-icon">🏎️</span>
              <span className="hw-pill-text">Building since age 6</span>
            </motion.div>
            <img 
              src={heroImage} 
              alt="Hot Wheels Collection" 
              className="hw-hero-image"
            />
          </motion.div>
        </div>
      </section>

      {/* Collector Identity Section */}
      <motion.section 
        className="hw-avatar-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Decorative Background */}
        <div className="hw-avatar-bg">
          <div className="hw-avatar-bg-grid"></div>
          <div className="hw-avatar-bg-glow" style={{ background: `radial-gradient(circle at 50% 50%, ${accentColor}30 0%, transparent 60%)` }}></div>
        </div>

        <motion.div className="hw-avatar-header" variants={fadeInUp}>
          <span className="hw-avatar-eyebrow">🏁 Discover Your Collector DNA</span>
          <h2 className="hw-avatar-title">
            What's Your <span className="hw-avatar-accent">Ride Style</span>?
          </h2>
          <p className="hw-avatar-subtitle">Hover over the styles to see what fits you best</p>
        </motion.div>
        
        <div className="hw-avatar-stage" ref={stageRef}>
          {/* Decorative Rings */}
          <div className="hw-orbit-ring hw-orbit-ring-1"></div>
          <div className="hw-orbit-ring hw-orbit-ring-2"></div>
          <div className="hw-orbit-ring hw-orbit-ring-3"></div>

          {/* Build Options */}
          {buildStyles.map((build, index) => {
            const positions = ['top-left', 'top-right', 'right', 'bottom-right', 'bottom-left', 'left'];
            const isHovered = hoveredBuild === build.id;
            const isSelected = selectedBuild === build.id;
            
            return (
              <button
                key={build.id}
                className={`hw-build-option hw-build-${positions[index]} ${isHovered ? 'hovered' : ''} ${isSelected ? 'selected' : ''}`}
                style={{ 
                  '--build-color': build.color,
                  borderColor: isHovered || isSelected ? build.color : undefined
                }}
                onMouseEnter={() => setHoveredBuild(build.id)}
                onMouseLeave={() => setHoveredBuild(null)}
                onClick={() => {
                  const newSelection = build.id === selectedBuild ? null : build.id;
                  setSelectedBuild(newSelection);
                  // Scroll to community blog section when selecting a build
                  if (newSelection) {
                    setTimeout(() => {
                      const communitySection = document.getElementById('community-blog-section');
                      if (communitySection) {
                        communitySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 300);
                  }
                }}
              >
                <span className="hw-build-glow" style={{ background: build.color }}></span>
                <span className="hw-build-icon">{build.icon}</span>
                <span className="hw-build-name">{build.name}</span>
                {(isHovered || isSelected) && (
                  <span className="hw-build-vibe">{build.vibe}</span>
                )}
                {isSelected && <span className="hw-build-check">✓</span>}
              </button>
            );
          })}
          
          {/* Center Avatar */}
          <div className="hw-avatar-center">
            <div 
              className="hw-avatar-glow" 
              style={{ 
                background: `radial-gradient(circle, ${accentColor}60 0%, ${accentColor}30 30%, ${accentColor}10 50%, transparent 70%)`
              }}
            ></div>
            <div className="hw-avatar-ring" style={{ borderColor: `${accentColor}40` }}></div>
            <div className="hw-avatar-frame">
              <Avatar3D mousePos={mousePos} />
            </div>
          </div>
        </div>

        {/* Collector Card */}
        <motion.div 
          className="hw-collector-card"
          variants={fadeInUp}
        >
          <div className="hw-collector-card-inner">
            <div className="hw-collector-badge">
              <span className="hw-badge-star">⭐</span>
              <span>Featured Collector</span>
            </div>
            <h3 className="hw-collector-name">Lesley Alejandra Gonzalez</h3>
            <p className="hw-collector-tagline">"Building dreams, one car at a time"</p>
            <div className="hw-collector-stats">
              <div className="hw-collector-stat">
                <span className="hw-stat-num">12</span>
                <span className="hw-stat-label">Collection</span>
              </div>
              <div className="hw-collector-stat">
                <span className="hw-stat-num">3</span>
                <span className="hw-stat-label">Rare Finds</span>
              </div>
              <div className="hw-collector-stat">
                <span className="hw-stat-num">3yr</span>
                <span className="hw-stat-label">Member</span>
              </div>
            </div>
            <div className="hw-collector-interests">
              <span className="hw-interest-tag">🎓 Grad Student</span>
              <span className="hw-interest-tag">✈️ Traveler</span>
              <span className="hw-interest-tag">🏆 Collector</span>
            </div>
          </div>
        </motion.div>
        
        {/* Selected Style Display */}
        <AnimatePresence>
          {selectedBuild && (
            <motion.div 
              className="hw-selected-style" 
              style={{ '--selected-color': buildStyles.find(b => b.id === selectedBuild)?.color }}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="hw-selected-inner">
                <span className="hw-selected-icon">{buildStyles.find(b => b.id === selectedBuild)?.icon}</span>
                <div className="hw-selected-info">
                  <span className="hw-selected-label">Your Style</span>
                  <span className="hw-selected-name">{buildStyles.find(b => b.id === selectedBuild)?.name}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      <section className="hw-section-personas">
        <div className="hw-section-container">
          <motion.div 
            className="hw-personas-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="hw-persona-panel hw-panel-builders"
              variants={fadeInLeft}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(255, 107, 0, 0.3)' }}
            >
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
            </motion.div>
            
            <motion.div 
              className="hw-persona-panel hw-panel-collectors"
              variants={fadeInRight}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(255, 193, 7, 0.3)' }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Collectors Workshop Section */}
      <section className="hw-section-workshop" id="collectors-workshop">
        <div className="hw-workshop-bg">
          <div className="hw-workshop-grid-pattern"></div>
          <div className="hw-workshop-glow hw-glow-1"></div>
          <div className="hw-workshop-glow hw-glow-2"></div>
        </div>
        
        <div className="hw-section-container">
          <motion.div 
            className="hw-workshop-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
          >
            <motion.span className="hw-workshop-eyebrow" variants={fadeInDown}>
              <span className="hw-eyebrow-icon">🔧</span>
              NEXT COLLECTORS WORKSHOP
            </motion.span>
            <motion.h2 className="hw-workshop-title" variants={fadeInUp}>Build. Create. Connect.</motion.h2>
            <motion.p className="hw-workshop-subtitle" variants={fadeInUp}>Join fellow enthusiasts worldwide for hands-on building experiences</motion.p>
          </motion.div>
          
          {/* Countdown Timer */}
          <motion.div 
            className="hw-countdown"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="hw-countdown-item"
              whileHover={{ scale: 1.1 }}
            >
              <span className="hw-countdown-number">{String(countdown.days).padStart(2, '0')}</span>
              <span className="hw-countdown-label">DAYS</span>
            </motion.div>
            <span className="hw-countdown-separator">:</span>
            <motion.div 
              className="hw-countdown-item"
              whileHover={{ scale: 1.1 }}
            >
              <span className="hw-countdown-number">{String(countdown.hours).padStart(2, '0')}</span>
              <span className="hw-countdown-label">HOURS</span>
            </motion.div>
            <span className="hw-countdown-separator">:</span>
            <motion.div 
              className="hw-countdown-item"
              whileHover={{ scale: 1.1 }}
            >
              <span className="hw-countdown-number">{String(countdown.minutes).padStart(2, '0')}</span>
              <span className="hw-countdown-label">MINS</span>
            </motion.div>
            <span className="hw-countdown-separator">:</span>
            <motion.div 
              className="hw-countdown-item"
              whileHover={{ scale: 1.1 }}
            >
              <span className="hw-countdown-number">{String(countdown.seconds).padStart(2, '0')}</span>
              <span className="hw-countdown-label">SECS</span>
            </motion.div>
          </motion.div>
          
          {/* Workshop Cities Grid */}
          <motion.div 
            className="hw-workshop-cities"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {workshops.map((workshop, index) => (
              <motion.div 
                key={workshop.id} 
                className={`hw-workshop-card ${index === 0 ? 'hw-next-event' : ''}`}
                style={{ '--delay': `${index * 0.1}s` }}
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {index === 0 && <span className="hw-next-badge">NEXT UP</span>}
                <div className="hw-workshop-card-header">
                  <span className="hw-city-flag">{workshop.flag}</span>
                  <div className="hw-city-info">
                    <h4 className="hw-city-name">{workshop.city}</h4>
                    <span className="hw-city-country">{workshop.country}</span>
                  </div>
                </div>
                <div className="hw-workshop-card-body">
                  <div className="hw-workshop-theme">
                    <span className="hw-theme-icon">🏎️</span>
                    <span className="hw-theme-name">{workshop.theme}</span>
                  </div>
                  <div className="hw-workshop-meta">
                    <span className="hw-workshop-date">
                      <span className="hw-meta-icon">📅</span>
                      {workshop.date}
                    </span>
                    <span className="hw-workshop-spots">
                      <span className="hw-meta-icon">👥</span>
                      {workshop.spots} spots
                    </span>
                  </div>
                </div>
                <motion.button 
                  className="hw-workshop-register"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {index === 0 ? 'Register Now' : 'Save Your Spot'}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="hw-workshop-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="hw-workshop-note">Can't make it in person? Virtual workshops available for all events!</p>
            <motion.button 
              className="hw-btn-secondary" 
              onClick={() => setShowWorkshopsModal(true)}
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 107, 0, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              View All Workshops
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="hw-section-hub">
        <div className="hw-section-container">
          <motion.div 
            className="hw-hub-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
          >
            <motion.span className="hw-hub-label" variants={fadeInDown}>COLLECTORS HUB</motion.span>
            <motion.h2 variants={fadeInUp}>The Thrill of the Chase</motion.h2>
            <motion.p variants={fadeInUp}>Stay ahead of the drops. Spotlight your collection. Connect with the community.</motion.p>
          </motion.div>

          <motion.div 
            className="hw-hub-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="hw-hub-card hw-drops-card"
              variants={fadeInLeft}
              whileHover={{ y: -5 }}
            >
              <div className="hw-card-header">
                <h4>📅 Upcoming Drops</h4>
              </div>
              <div className="hw-drops-list">
                {upcomingDrops.map((drop, index) => (
                  <motion.div 
                    key={drop.id} 
                    className="hw-drop-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5, backgroundColor: 'rgba(255, 107, 0, 0.1)' }}
                  >
                    <img src={drop.image} alt={drop.name} className="hw-drop-image" />
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
                  </motion.div>
                ))}
              </div>
              <motion.button 
                className="hw-card-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Full Calendar
              </motion.button>
            </motion.div>

            <motion.div 
              className="hw-hub-card hw-spotlight-card"
              variants={fadeInRight}
              whileHover={{ y: -5 }}
            >
              <div className="hw-card-header">
                <h4>⭐ Car of the Week</h4>
              </div>
              <div className="hw-spotlight-content">
                <motion.img 
                  src={spotlightCar.image} 
                  alt={spotlightCar.name} 
                  className="hw-spotlight-image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="hw-section-builder">
        <div className="hw-section-container">
          <motion.div 
            className="hw-builder-layout"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div className="hw-builder-text" variants={fadeInLeft}>
              <motion.span 
                className="hw-builder-label"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                AI-POWERED
              </motion.span>
              <motion.h2 variants={fadeInUp}>Design Your Dream Build</motion.h2>
              <motion.p variants={fadeInUp}>
                Whether you're planning an epic stunt track or designing the 
                ultimate display shelf, our AI will help you bring it to life.
              </motion.p>
              <motion.div 
                className="hw-builder-features"
                variants={staggerContainer}
              >
                <motion.div className="hw-feature" variants={staggerItem} whileHover={{ x: 10 }}>
                  <span className="hw-feature-icon">🎯</span>
                  <span>Custom recommendations</span>
                </motion.div>
                <motion.div className="hw-feature" variants={staggerItem} whileHover={{ x: 10 }}>
                  <span className="hw-feature-icon">📦</span>
                  <span>Parts list included</span>
                </motion.div>
                <motion.div className="hw-feature" variants={staggerItem} whileHover={{ x: 10 }}>
                  <span className="hw-feature-icon">💡</span>
                  <span>Pro tips from collectors</span>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <HotWheelsCollectorsHub />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Spotlight & News Drops Section */}
      <HotWheelsSpotlight />

      {/* Community Blog Section */}
      <div id="community-blog-section">
        <HotWheelsCommunity selectedBuildStyle={selectedBuild} />
      </div>

      <motion.section 
        className="hw-section-cta"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hw-section-container">
          <motion.div 
            className="hw-cta-banner"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="hw-cta-content">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {t('hotWheels.joinCommunity')}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {t('hotWheels.getEarlyAccess')}
              </motion.p>
            </div>
            <motion.button 
              className="hw-cta-button" 
              onClick={() => setShowSignupModal(true)}
              whileHover={{ scale: 1.08, boxShadow: '0 0 40px rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {t('hotWheels.signUpNow')}
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="landing-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="landing-footer-content">
          <motion.div 
            className="landing-footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="landing-footer-logo">{t('footer.mattelAiLab')}</span>
            <p>{t('footer.empowering')}</p>
          </motion.div>
          <motion.div 
            className="landing-footer-note"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p>{t('footer.educationalPrototype')}</p>
          </motion.div>
        </div>
      </motion.footer>

      {/* Virtual Workshops Modal */}
      <AnimatePresence>
        {showWorkshopsModal && (
          <motion.div
            className="hw-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowWorkshopsModal(false)}
          >
            <motion.div
              className="hw-modal hw-workshops-modal"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="hw-modal-header">
                <div className="hw-modal-title-group">
                  <span className="hw-modal-badge">🖥️ VIRTUAL</span>
                  <h3>
                    {registeringWorkshop ? 'Register for Workshop' : 'Upcoming Virtual Workshops'}
                  </h3>
                </div>
                <button 
                  className="hw-modal-close" 
                  onClick={() => {
                    setShowWorkshopsModal(false);
                    setRegisteringWorkshop(null);
                    setWorkshopRegistrationForm({ name: '', email: '', placeOfOrigin: '' });
                  }}
                >
                  ×
                </button>
              </div>
              
              <div className="hw-modal-body">
                {!registeringWorkshop ? (
                  <>
                    <p className="hw-modal-intro">Join from anywhere in the world! All workshops include live Q&A and downloadable resources.</p>
                    
                    <div className="hw-virtual-workshops-list">
                      {virtualWorkshops.map((workshop, index) => (
                        <motion.div 
                          key={workshop.id} 
                          className="hw-virtual-workshop-card"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="hw-vw-header">
                            <h4 className="hw-vw-title">{workshop.title}</h4>
                            <span className={`hw-vw-level hw-level-${workshop.level.toLowerCase().replace(' ', '-')}`}>
                              {workshop.level}
                            </span>
                          </div>
                          
                          <p className="hw-vw-instructor">
                            <span className="hw-vw-instructor-icon">👨‍🏫</span>
                            {workshop.instructor}
                          </p>
                          
                          <p className="hw-vw-description">{workshop.description}</p>
                          
                          <div className="hw-vw-details">
                            <span className="hw-vw-detail">
                              <span className="hw-vw-detail-icon">📅</span>
                              {workshop.date}
                            </span>
                            <span className="hw-vw-detail">
                              <span className="hw-vw-detail-icon">⏰</span>
                              {workshop.time}
                            </span>
                            <span className="hw-vw-detail">
                              <span className="hw-vw-detail-icon">⏱️</span>
                              {workshop.duration}
                            </span>
                          </div>
                          
                          <div className="hw-vw-footer">
                            <div className="hw-vw-spots">
                              <div className="hw-vw-spots-bar">
                                <div 
                                  className="hw-vw-spots-fill" 
                                  style={{ width: `${(workshop.registered / workshop.spots) * 100}%` }}
                                ></div>
                              </div>
                              <span className="hw-vw-spots-text">
                                {workshop.spots - workshop.registered} spots left
                              </span>
                            </div>
                            <button 
                              className="hw-vw-register-btn"
                              onClick={() => handleWorkshopRegister(workshop)}
                            >
                              Register Free
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </>
                ) : (
                  <motion.div
                    className="hw-workshop-registration-form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="hw-wr-workshop-info">
                      <h4 className="hw-wr-title">{registeringWorkshop.title}</h4>
                      <p className="hw-wr-instructor">with {registeringWorkshop.instructor}</p>
                      <div className="hw-wr-meta">
                        <span>📅 {registeringWorkshop.date}</span>
                        <span>⏰ {registeringWorkshop.time}</span>
                        <span>⏱️ {registeringWorkshop.duration}</span>
                      </div>
                    </div>

                    <form onSubmit={handleWorkshopRegistrationSubmit} className="hw-wr-form">
                      <div className="hw-form-group">
                        <label htmlFor="wr-name">
                          <span className="hw-label-icon">👤</span>
                          Full Name <span className="hw-required">*</span>
                        </label>
                        <input
                          id="wr-name"
                          type="text"
                          placeholder="Enter your full name"
                          value={workshopRegistrationForm.name}
                          onChange={(e) => setWorkshopRegistrationForm({ ...workshopRegistrationForm, name: e.target.value })}
                          required
                        />
                      </div>
                      
                      <div className="hw-form-group">
                        <label htmlFor="wr-email">
                          <span className="hw-label-icon">📧</span>
                          Email Address <span className="hw-required">*</span>
                        </label>
                        <input
                          id="wr-email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={workshopRegistrationForm.email}
                          onChange={(e) => setWorkshopRegistrationForm({ ...workshopRegistrationForm, email: e.target.value })}
                          required
                        />
                      </div>
                      
                      <div className="hw-form-group">
                        <label htmlFor="wr-origin">
                          <span className="hw-label-icon">🌍</span>
                          Place of Origin <span className="hw-required">*</span>
                        </label>
                        <input
                          id="wr-origin"
                          type="text"
                          placeholder="City, Country (e.g., Berlin, Germany)"
                          value={workshopRegistrationForm.placeOfOrigin}
                          onChange={(e) => setWorkshopRegistrationForm({ ...workshopRegistrationForm, placeOfOrigin: e.target.value })}
                          required
                        />
                      </div>
                      
                      <button type="submit" className="hw-wr-submit-btn">
                        <span>Complete Registration</span>
                        <span className="hw-submit-arrow">→</span>
                      </button>
                    </form>
                  </motion.div>
                )}
              </div>
              
              {!registeringWorkshop && (
                <div className="hw-modal-footer">
                  <p className="hw-modal-note">🎁 All registrants receive exclusive digital collector cards!</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Signup Modal */}
      <AnimatePresence>
        {showSignupModal && (
          <motion.div
            className="hw-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !signupSuccess && setShowSignupModal(false)}
          >
            <motion.div
              className="hw-modal hw-signup-modal"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {!signupSuccess ? (
                <>
                  <div className="hw-signup-header">
                    <div className="hw-signup-icon">🏎️</div>
                    <h3>Join the Collectors Club</h3>
                    <p>Get exclusive drops, early access, and community perks!</p>
                    <button className="hw-modal-close" onClick={() => setShowSignupModal(false)}>×</button>
                  </div>
                  
                  <form className="hw-signup-form" onSubmit={handleSignupSubmit}>
                    <div className="hw-form-group">
                      <label htmlFor="signup-name">
                        <span className="hw-label-icon">👤</span>
                        Your Name
                      </label>
                      <input
                        id="signup-name"
                        type="text"
                        placeholder="Enter your name"
                        value={signupForm.name}
                        onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="hw-form-group">
                      <label htmlFor="signup-email">
                        <span className="hw-label-icon">📧</span>
                        Email Address
                      </label>
                      <input
                        id="signup-email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={signupForm.email}
                        onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="hw-signup-perks">
                      <h5>What you'll get:</h5>
                      <ul>
                        <li><span>🎯</span> Early access to limited drops</li>
                        <li><span>🏆</span> Exclusive collector badges</li>
                        <li><span>📅</span> Workshop invitations</li>
                        <li><span>🎁</span> Members-only giveaways</li>
                      </ul>
                    </div>
                    
                    <button type="submit" className="hw-signup-submit">
                      <span>Join Now</span>
                      <span className="hw-submit-arrow">→</span>
                    </button>
                  </form>
                  
                  <p className="hw-signup-disclaimer">
                    By signing up, you agree to receive updates from Hot Wheels Collectors Club. 
                    You can unsubscribe anytime.
                  </p>
                </>
              ) : (
                <motion.div 
                  className="hw-signup-success"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <div className="hw-success-icon">🎉</div>
                  <h3>Welcome to the Club!</h3>
                  <p>Check your inbox for your welcome gift!</p>
                  <div className="hw-success-confetti">
                    <span>🏎️</span><span>⭐</span><span>🏆</span><span>🔥</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FinalWebsiteHotWheelsExperience;
