import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [footerRef, footerVisible] = useScrollAnimation({ threshold: 0.3 });

  const isLanding = location.pathname === '/final-website';
  const isUno = location.pathname === '/final-website/uno';
  const isHotWheels = location.pathname === '/final-website/hotwheels';

  // Generate navigation links based on current page
  // Use native <a> tags for hash navigation to ensure proper scrolling
  const getNavLink = (hash, label) => {
    if (isLanding) {
      return <a href={hash}>{label}</a>;
    }
    // For UNO/Hot Wheels pages, use native anchor with full path for proper navigation + scroll
    return <a href={`/final-website${hash}`}>{label}</a>;
  };

  return (
    <footer className="site-footer" ref={footerRef}>
      <div className={`site-footer-content scroll-animate fade-up ${footerVisible ? 'visible' : ''}`}>
        {/* Brand Section */}
        <div className="site-footer-brand">
          <span className="site-footer-logo">{t('footer.mattelAiLab')}</span>
          <p>{t('footer.empowering')}</p>
        </div>

        {/* Navigation Links */}
        <div className="site-footer-nav">
          <h4 className="site-footer-heading">{t('footer.explore')}</h4>
          <nav className="site-footer-links">
            {getNavLink('#overview', t('footer.overview'))}
            {getNavLink('#features', t('footer.features'))}
            {getNavLink('#faq', t('footer.faq'))}
            {getNavLink('#team', t('footer.team'))}
          </nav>
        </div>

        {/* Brand Experiences */}
        <div className="site-footer-brands">
          <h4 className="site-footer-heading">{t('footer.experiences')}</h4>
          <nav className="site-footer-links">
            {/* Show Home link on UNO and Hot Wheels pages */}
            {(isUno || isHotWheels) && (
              <Link to="/final-website" className="site-footer-brand-link">
                {t('footer.home')}
              </Link>
            )}
            {!isUno && (
              <Link to="/final-website/uno" className="site-footer-brand-link">
                UNO<sup>®</sup>
              </Link>
            )}
            {!isHotWheels && (
              <Link to="/final-website/hotwheels" className="site-footer-brand-link">
                Hot Wheels<sup>®</sup>
              </Link>
            )}
          </nav>
        </div>

        {/* Quick Links */}
        <div className="site-footer-quick">
          <h4 className="site-footer-heading">{t('footer.more')}</h4>
          <nav className="site-footer-links">
            <Link to="/">{t('footer.backToPrompts')}</Link>
            <a href="https://about.mattel.com/" target="_blank" rel="noopener noreferrer">{t('footer.aboutMattel')}</a>
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={`site-footer-bottom scroll-animate fade-up delay-200 ${footerVisible ? 'visible' : ''}`}>
        <div className="site-footer-note">
          <p>{t('footer.educationalPrototype')}</p>
        </div>
        <div className="site-footer-copyright">
          <p>©2025 Mattel. UNO<sup>®</sup> and Hot Wheels<sup>®</sup> are registered trademarks of Mattel, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

