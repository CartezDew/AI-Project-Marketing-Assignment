import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './TeamSection.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

// Import team images
import akendaiImg from '../../assets/team/Akendai_Kouassi.webp';
import kethelyImg from '../../assets/team/Kethely_Veloso.webp';
import camilaImg from '../../assets/team/Camilla_Ojeda.webp';
import lesleyImg from '../../assets/team/Lesley_Gonzalez.webp';
import cartezImg from '../../assets/team/Cartez_Dewberry.webp';

// Import AI icon
import aiIcon from '../../assets/icons/ai-icon.webp';

// Import group photo
import groupPhoto from '../../assets/team/group-photo.webp';

const TeamSection = () => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  
  // Scroll animations
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [bottomRef, bottomVisible] = useScrollAnimation({ threshold: 0.3 });
  
  // Framer Motion refs
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" });
  
  // Card animation variants
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
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setShowModal(true);
      setEmail('');
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const teamMembers = [
    {
      id: 1,
      name: "Akendai Kouassi",
      role: "Chief Strategy Officer",
      abbr: "CSO",
      image: akendaiImg,
      color: "#C8102E",
      contributions: [
        "Led AI ideation and early content brainstorming",
        "Shaped the strategic direction for website narratives",
        "Supported full-content drafting across all sections"
      ]
    },
    {
      id: 2,
      name: "Kethely Veloso",
      role: "Chief Audience & Insights Officer",
      abbr: "CAIO",
      image: kethelyImg,
      color: "#0057B8",
      contributions: [
        "Conducted audience research and created detailed persona profiles",
        "Grounded the website content in real user needs",
        "Informed content tone, messaging, and brand alignment"
      ]
    },
    {
      id: 3,
      name: "Camila Ojeda",
      role: "Chief Content Officer",
      abbr: "CCO",
      image: camilaImg,
      color: "#FFD53D",
      contributions: [
        "Developed the AI-driven content outline and CTAs",
        "Structured narrative flow for brand, hero, and feature sections",
        "Collaborated on full content drafting with the team"
      ]
    },
    {
      id: 4,
      name: "Lesley Gonzalez",
      role: "Chief Creative & Media Officer",
      abbr: "CCMO",
      image: lesleyImg,
      color: "#00A651",
      contributions: [
        "Led all AI editing and content refinement",
        "Image generation",
        "Edited and assembled the full team presentation",
        "Ensured brand consistency and storytelling clarity across sections"
      ]
    },
    {
      id: 5,
      name: "Cartez Dewberry",
      role: "Chief Digital Experience Officer",
      abbr: "CDXO",
      image: cartezImg,
      color: "#FF6B00",
      contributions: [
        "Created all core AI prompts for content, visuals, and features",
        "Built and optimized the complete website (UI/UX, SEO, accessibility)",
        "Delivered the Optimization Report and integrated advanced components"
      ]
    }
  ];

  return (
    <section className="team-section" id="team">
      {/* Background Elements */}
      <div className="team-bg">
        <div className="team-bg-gradient"></div>
        
        {/* Floating Emoji Doodles */}
        <div className="team-doodle team-doodle-star-1">✦</div>
        <div className="team-doodle team-doodle-star-2">✧</div>
        <div className="team-doodle team-doodle-star-3">★</div>
        <div className="team-doodle team-doodle-burst">✺</div>
        <div className="team-doodle team-doodle-spark">✦</div>
        <div className="team-doodle team-doodle-plus">+</div>
        
        {/* Floating AI Icons */}
        <img src={aiIcon} alt="" className="team-ai-icon team-ai-1" />
        <img src={aiIcon} alt="" className="team-ai-icon team-ai-2" />
        <img src={aiIcon} alt="" className="team-ai-icon team-ai-3" />
        
        {/* SVG Doodles - Squiggle */}
        <div className="team-doodle team-doodle-squiggle">
          <svg viewBox="0 0 100 40" fill="none">
            <path d="M5 20 Q 25 5, 50 20 T 95 20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        
        {/* SVG Doodles - Dashed Circle */}
        <div className="team-doodle team-doodle-loop">
          <svg viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="8 6"/>
          </svg>
        </div>
        
        {/* SVG Doodles - Arrow */}
        <div className="team-doodle team-doodle-arrow">
          <svg viewBox="0 0 80 40" fill="none">
            <path d="M5 20 L 55 20 M 45 10 L 55 20 L 45 30" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {/* SVG Doodles - Zigzag */}
        <div className="team-doodle team-doodle-zigzag">
          <svg viewBox="0 0 80 50" fill="none">
            <path d="M5 40 L 20 10 L 35 40 L 50 10 L 65 40 L 75 15" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {/* SVG Doodles - Spiral */}
        <div className="team-doodle team-doodle-spiral">
          <svg viewBox="0 0 60 60" fill="none">
            <path d="M30 30 C 30 25, 35 25, 35 30 C 35 38, 22 38, 22 30 C 22 18, 42 18, 42 30 C 42 45, 15 45, 15 30" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        
        {/* SVG Doodles - Underline Swish */}
        <div className="team-doodle team-doodle-swish">
          <svg viewBox="0 0 120 30" fill="none">
            <path d="M5 20 Q 30 5, 60 15 T 115 10" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        
        {/* SVG Doodles - Confetti Dots */}
        <div className="team-doodle team-doodle-dots">
          <svg viewBox="0 0 50 50" fill="none">
            <circle cx="10" cy="10" r="4" fill="currentColor"/>
            <circle cx="30" cy="15" r="3" fill="currentColor"/>
            <circle cx="45" cy="8" r="5" fill="currentColor"/>
            <circle cx="20" cy="35" r="4" fill="currentColor"/>
            <circle cx="40" cy="40" r="3" fill="currentColor"/>
          </svg>
        </div>
        
        {/* SVG Doodles - Lightning Bolt */}
        <div className="team-doodle team-doodle-bolt">
          <svg viewBox="0 0 40 60" fill="none">
            <path d="M25 5 L 10 28 L 20 28 L 15 55 L 35 25 L 22 25 Z" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="team-header" ref={headerRef}>
        <span className={`team-badge scroll-animate fade-up ${headerVisible ? 'visible' : ''}`}>👥 Our Team</span>
        <h2 className={`team-title scroll-animate fade-up delay-100 ${headerVisible ? 'visible' : ''}`}>Meet the <span className="team-title-highlight">Team</span></h2>
        <p className={`team-subtitle scroll-animate fade-up delay-200 ${headerVisible ? 'visible' : ''}`}>
          The creative minds behind the Mattel × AI Brand Lab
        </p>
      </div>

      {/* Team Cards Grid */}
      <motion.div 
        className="team-grid" 
        ref={gridRef}
        variants={containerVariants}
        initial="hidden"
        animate={isGridInView ? "visible" : "hidden"}
      >
        {teamMembers.map((member) => (
          <motion.div 
            key={member.id} 
            className={`team-card ${expandedCard === member.id ? 'showing-contrib' : ''}`}
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            <div 
              className="team-card-accent" 
              style={{ background: member.color }}
            ></div>
            <div className="team-card-image-container">
              <img 
                src={member.image} 
                alt={member.name} 
                className="team-card-image"
              />
              <div 
                className="team-card-badge"
                style={{ background: member.color }}
              >
                {member.abbr}
              </div>
              
              {/* Contributions Overlay - Inside Image Container */}
              <div 
                className={`team-contrib-overlay ${expandedCard === member.id ? 'visible' : ''}`}
                style={{ '--overlay-color': member.color }}
              >
                <button 
                  className="contrib-close-btn"
                  onClick={() => toggleCard(member.id)}
                  aria-label="Close contributions"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <div className="contrib-content">
                  <span className="contrib-label">Key Contributions</span>
                  <ul className="contrib-list">
                    {member.contributions.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="team-card-info">
              <h3 className="team-card-name">{member.name}</h3>
              <p className="team-card-role">{member.role}</p>
              
              {/* Toggle Button */}
              <button 
                className="team-card-toggle"
                onClick={() => toggleCard(member.id)}
                style={{ '--toggle-color': member.color }}
                aria-label={expandedCard === member.id ? "Hide contributions" : "Show contributions"}
              >
                <span className="toggle-text">
                  {expandedCard === member.id ? 'Hide' : 'Contributions'}
                </span>
                <svg 
                  className={`toggle-arrow ${expandedCard === member.id ? 'up' : 'down'}`}
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Team Group Photo Section */}
      <motion.div 
        className="team-group-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="team-group-container">
          {/* Decorative frame elements */}
          <div className="team-group-frame">
            <div className="frame-corner frame-tl"></div>
            <div className="frame-corner frame-tr"></div>
            <div className="frame-corner frame-bl"></div>
            <div className="frame-corner frame-br"></div>
          </div>

          {/* Floating Doodles - Upper Left & Right */}
          <div className="team-group-doodle team-group-doodle-star-tl">✨</div>
          <div className="team-group-doodle team-group-doodle-plus-tl">+</div>
          <div className="team-group-doodle team-group-doodle-star-tr">⭐</div>
          
          {/* Group Photo */}
          <div className="team-group-image-wrapper">
            <img 
              src={groupPhoto} 
              alt="Our Amazing Team Together" 
              className="team-group-image"
            />
            
            {/* Gradient Overlay */}
            <div className="team-group-overlay"></div>
            
            {/* Cutout Text Pill */}
            <div className="team-group-pill">
              <div className="pill-inner">
                <span className="pill-text pill-text-creativity">Creativity</span>
                <span className="pill-divider">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                </span>
                <span className="pill-text pill-text-strategy">Strategy</span>
                <span className="pill-divider">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                </span>
                <span className="pill-text pill-text-innovation">Innovation</span>
              </div>
            </div>
          </div>
          
          {/* Caption */}
          <p className="team-group-caption">
            <span className="caption-emoji">🎉</span>
            The Innovators Powering This AI Experience
            <span className="caption-emoji">✨</span>
          </p>
        </div>
      </motion.div>

      {/* Newsletter CTA */}
      <div className="team-newsletter" ref={bottomRef}>
        <p className={`team-newsletter-text scroll-animate fade-up ${bottomVisible ? 'visible' : ''}`}>Stay updated with the latest from Mattel × AI Lab</p>
        <form className={`team-newsletter-form scroll-animate fade-up delay-200 ${bottomVisible ? 'visible' : ''}`} onSubmit={handleSubmit}>
          <input
            type="email"
            className="team-newsletter-input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="team-newsletter-btn">
            Join
          </button>
        </form>
      </div>

      {/* Thank You Modal */}
      {showModal && (
        <div className="team-modal-overlay" onClick={closeModal}>
          <div className="team-modal" onClick={(e) => e.stopPropagation()}>
            <button className="team-modal-close" onClick={closeModal}>×</button>
            <div className="team-modal-icon">🎉</div>
            <h3 className="team-modal-title">Thank You!</h3>
            <p className="team-modal-text">
              You've successfully joined our newsletter. Get ready for exciting updates from Mattel × AI Lab!
            </p>
            <button className="team-modal-btn" onClick={closeModal}>Got it!</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;

