import React from 'react';
import './Overview.css';

const Overview = () => {
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
      <div className="ov-header">
        <div className="ov-header-accent"></div>
        <span className="ov-eyebrow">About The Company</span>
        <h2 className="ov-title">
          The World of <span className="ov-title-highlight">Mattel</span>
        </h2>
        <p className="ov-subtitle">
          A leading global toy and family entertainment company, creating innovative products 
          that inspire fans, entertain audiences, and develop children through play.
        </p>
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
      <div className="ov-grid">
        {highlights.map((item) => (
          <div 
            key={item.id} 
            className="ov-card"
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

      {/* Bottom CTA */}
      <div className="ov-cta-section">
        <div className="ov-cta-content">
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

