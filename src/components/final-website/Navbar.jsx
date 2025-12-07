import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, BookOpen, ChevronDown, FileText, HelpCircle, Sparkles, Compass, Gamepad2, ExternalLink } from 'lucide-react';
import './Navbar.css';
import mattelLogo from '../../assets/logos/Mattel_logo.webp';
import unoLogo from '../../assets/logos/Uno_logo.webp';
import hotwheelsLogo from '../../assets/logos/hotwheels_logo.png';
import LanguageDropdown from './LanguageDropdown';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageDropdown.css';

const FinalWebsiteNavbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t } = useLanguage();
  const dropdownRef = useRef(null);
  
  const isLanding = location.pathname === '/final-website';
  const isUno = location.pathname === '/final-website/uno';
  const isHotWheels = location.pathname === '/final-website/hotwheels';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  // Close dropdown when route changes
  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  let navTheme = 'fnav-default';
  if (isUno) navTheme = 'fnav-uno';
  if (isHotWheels) navTheme = 'fnav-hw';

  return (
    <nav className={`fnav-navbar ${navTheme} ${scrolled ? 'scrolled' : ''}`}>
      <div className="fnav-inner">
        <Link to="/final-website" className="fnav-logo">
          <img src={mattelLogo} alt="Mattel" className="fnav-logo-img" />
          <span className="fnav-logo-divider">×</span>
          <span className="fnav-logo-ai">AI LAB</span>
        </Link>
        
        {/* Right Side Navigation */}
        <div className="fnav-right-group">
          {/* Language Dropdown */}
          <LanguageDropdown />

          <span className="fnav-divider">|</span>

          {/* About Dropdown */}
          <div 
            className="fnav-dropdown-container"
            ref={dropdownRef}
          >
            <button 
              className={`fnav-dropdown-trigger ${dropdownOpen ? 'active' : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {t('nav.about')} <ChevronDown size={16} className={dropdownOpen ? 'rotated' : ''} />
            </button>
            
            <div className={`fnav-dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
              {/* Home button - only show on UNO and Hot Wheels pages */}
              {(isUno || isHotWheels) && (
                <Link to="/final-website" className="fnav-dropdown-item fnav-dropdown-home" onClick={() => setDropdownOpen(false)}>
                  <Home size={16} /> Home
                </Link>
              )}

              {/* EXPLORE SECTION */}
              <div className="fnav-dropdown-section">
                <div className="fnav-dropdown-header">
                  <Compass size={14} />
                  <span>Explore</span>
                </div>
                <div className="fnav-dropdown-links">
                  {(isUno || isHotWheels) ? (
                    <a href="/final-website#overview" className="fnav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                      <BookOpen size={15} /> {t('nav.overview')}
                    </a>
                  ) : (
                    <a href="#overview" className="fnav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                      <BookOpen size={15} /> {t('nav.overview')}
                    </a>
                  )}
                  {(isUno || isHotWheels) ? (
                    <a href="/final-website#features" className="fnav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                      <Sparkles size={15} /> Features
                    </a>
                  ) : (
                    <a href="#features" className="fnav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                      <Sparkles size={15} /> Features
                    </a>
                  )}
                  {(isUno || isHotWheels) ? (
                    <a href="/final-website#faq" className="fnav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                      <HelpCircle size={15} /> FAQ
                    </a>
                  ) : (
                    <a href="#faq" className="fnav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                      <HelpCircle size={15} /> FAQ
                    </a>
                  )}
                  {(isUno || isHotWheels) ? (
                    <a href="/final-website#team" className="fnav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                      <Users size={15} /> {t('nav.team')}
                    </a>
                  ) : (
                    <a href="#team" className="fnav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                      <Users size={15} /> {t('nav.team')}
                    </a>
                  )}
                </div>
              </div>

              {/* EXPERIENCES SECTION */}
              <div className="fnav-dropdown-section">
                <div className="fnav-dropdown-header">
                  <Gamepad2 size={14} />
                  <span>Experiences</span>
                </div>
                <div className="fnav-dropdown-links fnav-dropdown-brands">
                  {/* Hide UNO link when on UNO page */}
                  {!isUno && (
                    <Link to="/final-website/uno" className="fnav-dropdown-item fnav-dropdown-brand-uno" onClick={() => setDropdownOpen(false)}>
                      <img src={unoLogo} alt="UNO card game logo" className="fnav-dropdown-brand-img" />
                      <span>UNO<sup>®</sup></span>
                    </Link>
                  )}
                  {/* Hide Hot Wheels link when on Hot Wheels page */}
                  {!isHotWheels && (
                    <Link to="/final-website/hotwheels" className="fnav-dropdown-item fnav-dropdown-brand-hw" onClick={() => setDropdownOpen(false)}>
                      <img src={hotwheelsLogo} alt="Hot Wheels logo" className="fnav-dropdown-brand-img fnav-dropdown-hw-img" />
                      <span>Hot Wheels<sup>®</sup></span>
                    </Link>
                  )}
                </div>
              </div>

              {/* MORE SECTION */}
              <div className="fnav-dropdown-section fnav-dropdown-section-more">
                <div className="fnav-dropdown-header">
                  <ExternalLink size={14} />
                  <span>More</span>
                </div>
                <div className="fnav-dropdown-links">
                  <Link to="/" className="fnav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                    <FileText size={15} /> {t('nav.backToPrompts')}
                  </Link>
                  <a href="https://about.mattel.com/" target="_blank" rel="noopener noreferrer" className="fnav-dropdown-item">
                    <ExternalLink size={15} /> About Mattel
                  </a>
                </div>
              </div>

              {/* Footer accent */}
              <div className="fnav-dropdown-footer">
                <span className="fnav-dropdown-accent fnav-accent-red"></span>
                <span className="fnav-dropdown-accent fnav-accent-orange"></span>
                <span className="fnav-dropdown-accent fnav-accent-yellow"></span>
                <span className="fnav-dropdown-accent fnav-accent-green"></span>
                <span className="fnav-dropdown-accent fnav-accent-blue"></span>
              </div>
            </div>
          </div>

          <span className="fnav-divider">|</span>

          {/* Brand Icons - Hide current page's icon */}
          <div className="fnav-brand-icons">
            {!isUno && (
            <Link 
              to="/final-website/uno" 
                className="fnav-icon-btn fnav-icon-uno"
              title="UNO Experience"
            >
              <img src={unoLogo} alt="UNO" className="fnav-icon-img" />
            </Link>
            )}
            {!isHotWheels && (
            <Link 
              to="/final-website/hotwheels" 
                className="fnav-icon-btn fnav-icon-hw"
              title="Hot Wheels Experience"
            >
              <img src={hotwheelsLogo} alt="Hot Wheels" className="fnav-icon-img" />
            </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Colorful Bottom Border - Only on Landing Page, Hidden on Scroll */}
      {isLanding && (
        <div className={`fnav-bottom-border ${scrolled ? 'hidden' : ''}`}>
          <div className="fnav-border-segment fnav-border-red"></div>
          <div className="fnav-border-segment fnav-border-orange"></div>
          <div className="fnav-border-segment fnav-border-yellow"></div>
          <div className="fnav-border-segment fnav-border-green"></div>
          <div className="fnav-border-segment fnav-border-blue"></div>
        </div>
      )}
    </nav>
  );
};

export default FinalWebsiteNavbar;
