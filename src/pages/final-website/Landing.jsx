import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hero from '../../components/final-website/Hero';
import Overview from '../../components/final-website/Overview';
import WhatWereCreating from '../../components/final-website/WhatWereCreating';
import FAQ from '../../components/final-website/FAQ';
import TeamSection from '../../components/final-website/TeamSection';
import Footer from '../../components/final-website/Footer';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Landing.css';

// Import logos and icons
import unoLogo from '../../assets/logos/Uno_logo.webp';
import hotwheelsLogo from '../../assets/logos/hotwheels_logo.png';
import unoCardIcon from '../../assets/icons/Uno-card.webp';
import aiIcon from '../../assets/icons/ai-icon.webp';

const FinalWebsiteLanding = () => {
  const { t } = useLanguage();
  const location = useLocation();
  
  // Scroll animations for brand selection
  const [brandRef, brandVisible] = useScrollAnimation({ threshold: 0.15 });

  // Set page title
  useEffect(() => {
    document.title = 'Mattel × AI Lab | Home';
    return () => { document.title = 'Mattel × AI Lab'; };
  }, []);

  // Handle hash navigation - scroll to section when navigating from other pages
  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const elementId = location.hash.replace('#', '');
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.hash]);
  
  return (
    <div className="landing-page">
      {/* New Conference-Style Hero Section */}
      <Hero />

      {/* Mattel Overview Section */}
      <Overview />

      {/* Brand Selection */}
      <section className="landing-brand-selection" ref={brandRef}>
        {/* Background Elements */}
        <div className="landing-sel-bg">
          <div className="landing-sel-blob landing-sel-blob-1"></div>
          <div className="landing-sel-blob landing-sel-blob-2"></div>
          <div className="landing-sel-doodle landing-sel-doodle-star">✦</div>
          <div className="landing-sel-doodle landing-sel-doodle-burst">✺</div>
          <div className="landing-sel-doodle landing-sel-doodle-spark">✧</div>
          {/* Floating AI Icons */}
          <img src={aiIcon} alt="AI technology icon" className="landing-sel-ai landing-sel-ai-1" />
          <img src={aiIcon} alt="AI technology icon" className="landing-sel-ai landing-sel-ai-2" />
          <img src={aiIcon} alt="AI technology icon" className="landing-sel-ai landing-sel-ai-3" />
        </div>

        <div className="landing-selection-header">
          <span className={`landing-sel-badge scroll-animate fade-up ${brandVisible ? 'visible' : ''}`}>{t('brandSelection.pickAdventure')}</span>
          <h2 className={`scroll-animate fade-up delay-100 ${brandVisible ? 'visible' : ''}`}>{t('brandSelection.chooseExperience')} <span className="landing-sel-highlight">{t('brandSelection.experience')}</span></h2>
          <p className={`scroll-animate fade-up delay-200 ${brandVisible ? 'visible' : ''}`}>{t('brandSelection.eachBrand')}</p>
        </div>

        <div className="landing-brand-cards">
          {/* UNO Card */}
          <Link to="/final-website/uno" className={`landing-brand-card landing-card-uno scroll-animate slide-left delay-300 ${brandVisible ? 'visible' : ''}`}>
            <div className="landing-card-glow"></div>
            <div className="landing-card-inner">
              <img src={unoLogo} alt="UNO Logo" className="landing-card-logo" />
              <p className="landing-card-tagline">{t('brandSelection.worldsNo1Card')}</p>
              <span className="landing-card-cta landing-cta-uno">
                <img src={unoCardIcon} alt="UNO card" className="landing-cta-icon-img" />
                {t('brandSelection.letsPlay')}
                <span className="landing-cta-sparkle">✨</span>
              </span>
            </div>
          </Link>

          {/* Hot Wheels Card */}
          <Link to="/final-website/hotwheels" className={`landing-brand-card landing-card-hw scroll-animate slide-right delay-300 ${brandVisible ? 'visible' : ''}`}>
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
        <div className={`landing-sel-bottom-accent scroll-animate fade-up delay-500 ${brandVisible ? 'visible' : ''}`}>
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

      {/* FAQ Section */}
      <FAQ />

      {/* Team Section */}
      <TeamSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FinalWebsiteLanding;
