import React from 'react';
import UnoHouseRulesWidget from '../../components/final-website/UnoHouseRulesWidget';
import { useLanguage } from '../../context/LanguageContext';
import './UnoExperience.css';

const FinalWebsiteUnoExperience = () => {
  const { t } = useLanguage();
  
  return (
    <div className="uno-experience">
      {/* Hero Section */}
      <section className="uno-hero">
        <div className="uno-hero-cards-bg">
          <div className="uno-floating-card uno-fc-1"></div>
          <div className="uno-floating-card uno-fc-2"></div>
          <div className="uno-floating-card uno-fc-3"></div>
          <div className="uno-floating-card uno-fc-4"></div>
        </div>
        
        <div className="uno-hero-content">
          <div className="uno-hero-eyebrow">
            <span className="uno-eyebrow-icon">🃏</span>
            <span>{t('uno.worldsNo1')}</span>
          </div>
          
          <h1 className="uno-hero-title">
            {t('uno.everyGameNight')}
            <br />
            <span className="uno-title-accent">{t('uno.deservesToBe')}</span>
            <br />
            <span className="uno-title-wild">{t('uno.wild')}</span>
          </h1>
          
          <p className="uno-hero-desc">
            {t('uno.heroDesc')}
          </p>
          
          <div className="uno-hero-ctas">
            <button className="uno-cta-primary">{t('uno.joinCommunity')}</button>
            <button className="uno-cta-secondary">{t('uno.learnRules')}</button>
          </div>
        </div>
      </section>

      {/* Persona Section */}
      <section className="uno-section uno-section-persona">
        <div className="uno-section-container">
          <div className="uno-persona-card">
            <div className="uno-persona-avatar">
              <span>T</span>
            </div>
            <div className="uno-persona-content">
              <span className="uno-persona-label">Meet Our Player</span>
              <h3 className="uno-persona-name">Teddy, 10</h3>
              <p className="uno-persona-bio">
                "I love playing UNO with my family every Friday night! My favorite 
                move is saving my Wild Draw 4 until someone's about to win. 
                The look on their face is SO funny!"
              </p>
              <div className="uno-persona-interests">
                <span className="uno-interest">🎮 Roblox</span>
                <span className="uno-interest">🎬 MrBeast</span>
                <span className="uno-interest">🎯 Challenges</span>
              </div>
            </div>
          </div>
          
          <div className="uno-persona-quote">
            <blockquote>
              "UNO isn't just a game—it's where memories happen."
            </blockquote>
          </div>
        </div>
      </section>

      {/* House Rules Widget Section */}
      <section className="uno-section uno-section-widget">
        <div className="uno-section-container">
          <div className="uno-widget-intro">
            <h2>{t('uno.createPerfect')}</h2>
            <p>
              {t('uno.standardRules')}
            </p>
          </div>
          
          <UnoHouseRulesWidget />
        </div>
      </section>

      {/* Video Content Section */}
      <section className="uno-section uno-section-videos">
        <div className="uno-section-container">
          <div className="uno-section-header">
            <h2>Community Highlights</h2>
            <p>Watch how players around the world are making UNO their own.</p>
          </div>
          
          <div className="uno-video-grid">
            <div className="uno-video-card uno-video-featured">
              <div className="uno-video-thumbnail">
                <div className="uno-play-button">
                  <span>▶</span>
                </div>
              </div>
              <div className="uno-video-info">
                <h4>Ultimate UNO Tournament Finals</h4>
                <span className="uno-video-meta">2.3M views • Community Event</span>
              </div>
            </div>
            
            <div className="uno-video-card">
              <div className="uno-video-thumbnail small">
                <div className="uno-play-button small">
                  <span>▶</span>
                </div>
              </div>
              <div className="uno-video-info">
                <h4>Top 10 House Rules</h4>
                <span className="uno-video-meta">890K views</span>
              </div>
            </div>
            
            <div className="uno-video-card">
              <div className="uno-video-thumbnail small">
                <div className="uno-play-button small">
                  <span>▶</span>
                </div>
              </div>
              <div className="uno-video-info">
                <h4>Family Game Night Tips</h4>
                <span className="uno-video-meta">1.2M views</span>
              </div>
            </div>
          </div>
          
          <p className="uno-video-note">
            📺 Videos curated from YouTube creators and official UNO channels
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="uno-section uno-section-cta">
        <div className="uno-section-container">
          <div className="uno-cta-card">
            <h2>{t('uno.readyToPlay')}</h2>
            <p>{t('uno.joinUnoComm')}</p>
            <button className="uno-cta-button">{t('uno.getStarted')}</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinalWebsiteUnoExperience;
