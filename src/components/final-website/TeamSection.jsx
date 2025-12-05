import React, { useState } from 'react';
import './TeamSection.css';

// Import team images
import akendaiImg from '../../assets/team/Akendai_Kouassi.webp';
import kethelyImg from '../../assets/team/Kethely_Veloso.webp';
import camilaImg from '../../assets/team/Camilla_Ojeda.webp';
import lesleyImg from '../../assets/team/Lesley_Gonzalez.webp';
import cartezImg from '../../assets/team/Cartez_Dewberry.webp';

// Import AI icon
import aiIcon from '../../assets/icons/ai-icon.webp';

const TeamSection = () => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

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
      <div className="team-header">
        <span className="team-badge">👥 Our Team</span>
        <h2 className="team-title">Meet the <span className="team-title-highlight">Team</span></h2>
        <p className="team-subtitle">
          The creative minds behind the Mattel × AI Brand Lab
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className={`team-card ${expandedCard === member.id ? 'showing-contrib' : ''}`}
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
          </div>
        ))}
      </div>

      {/* Bottom Accent */}
      <div className="team-bottom-text">
        <span>Creativity</span>
        <span className="team-dot">•</span>
        <span>Strategy</span>
        <span className="team-dot">•</span>
        <span>Innovation</span>
      </div>

      {/* Newsletter CTA */}
      <div className="team-newsletter">
        <p className="team-newsletter-text">Stay updated with the latest from Mattel × AI Lab</p>
        <form className="team-newsletter-form" onSubmit={handleSubmit}>
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

