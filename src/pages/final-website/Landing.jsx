import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/final-website/Hero';
import Overview from '../../components/final-website/Overview';
import WhatWereCreating from '../../components/final-website/WhatWereCreating';
import TeamSection from '../../components/final-website/TeamSection';
import { useLanguage } from '../../context/LanguageContext';
import './Landing.css';

// Import logos and icons
import unoLogo from '../../assets/logos/Uno_logo.webp';
import hotwheelsLogo from '../../assets/logos/hotwheels_logo.png';
import hotwheelsIcon from '../../assets/icons/Hotwheels-icon.webp';
import unoCardIcon from '../../assets/icons/Uno-card.webp';
import aiIcon from '../../assets/icons/ai-icon.webp';

const FinalWebsiteLanding = () => {
  const { t } = useLanguage();
  
  return (
    <div className="landing-page">
      {/* New Conference-Style Hero Section */}
      <Hero />

      {/* Mattel Overview Section */}
      <Overview />

      {/* Brand Selection */}
      <section className="landing-brand-selection">
        {/* Background Elements */}
        <div className="landing-sel-bg">
          <div className="landing-sel-blob landing-sel-blob-1"></div>
          <div className="landing-sel-blob landing-sel-blob-2"></div>
          <div className="landing-sel-doodle landing-sel-doodle-star">✦</div>
          <div className="landing-sel-doodle landing-sel-doodle-burst">✺</div>
          <div className="landing-sel-doodle landing-sel-doodle-spark">✧</div>
          {/* Floating AI Icons */}
          <img src={aiIcon} alt="" className="landing-sel-ai landing-sel-ai-1" />
          <img src={aiIcon} alt="" className="landing-sel-ai landing-sel-ai-2" />
          <img src={aiIcon} alt="" className="landing-sel-ai landing-sel-ai-3" />
        </div>

        <div className="landing-selection-header">
          <span className="landing-sel-badge">{t('brandSelection.pickAdventure')}</span>
          <h2>{t('brandSelection.chooseExperience')} <span className="landing-sel-highlight">{t('brandSelection.experience')}</span></h2>
          <p>{t('brandSelection.eachBrand')}</p>
        </div>

        <div className="landing-brand-cards">
          {/* UNO Card */}
          <Link to="/final-website/uno" className="landing-brand-card landing-card-uno">
            <div className="landing-card-glow"></div>
            <div className="landing-card-inner">
              <img src={unoLogo} alt="UNO Logo" className="landing-card-logo" />
              <p className="landing-card-tagline">{t('brandSelection.worldsNo1Card')}</p>
              <span className="landing-card-cta landing-cta-uno">
                <img src={unoCardIcon} alt="" className="landing-cta-icon-img" />
                {t('brandSelection.letsPlay')}
                <span className="landing-cta-sparkle">✨</span>
              </span>
            </div>
          </Link>

          {/* Hot Wheels Card */}
          <Link to="/final-website/hotwheels" className="landing-brand-card landing-card-hw">
            <div className="landing-card-glow"></div>
            <div className="landing-card-inner">
              <img src={hotwheelsLogo} alt="Hot Wheels Logo" className="landing-card-logo landing-hw-logo" />
              <p className="landing-card-tagline">{t('brandSelection.challengeAccepted')}</p>
              <span className="landing-card-cta landing-cta-hw">
                {t('brandSelection.startEngines')}
                <span className="landing-cta-arrow">→</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Bottom Accent */}
        <div className="landing-sel-bottom-accent">
          <span>{t('brandSelection.play')}</span>
          <span>•</span>
          <span>{t('brandSelection.collect')}</span>
          <span>•</span>
          <span>{t('brandSelection.create')}</span>
          <span>•</span>
          <span>{t('brandSelection.share')}</span>
        </div>
      </section>

      {/* What We're Creating Section */}
      <WhatWereCreating />

      {/* Team Section */}
      <TeamSection />

      {/* Footer */}
      <footer className="landing-footer">
        <div className="landing-footer-content">
          <div className="landing-footer-brand">
            <span className="landing-footer-logo">{t('footer.mattelAiLab')}</span>
            <p>{t('footer.empowering')}</p>
          </div>
          <div className="landing-footer-note">
            <p>{t('footer.educationalPrototype')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FinalWebsiteLanding;
