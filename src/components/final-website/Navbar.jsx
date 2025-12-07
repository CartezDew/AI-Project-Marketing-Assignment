import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, BookOpen, ChevronDown, FileText, HelpCircle, Sparkles } from 'lucide-react';
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
    window.addEventListener('scroll', handleScroll);
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
                <Link to="/final-website" className="fnav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                  <Home size={16} /> Home
                </Link>
              )}
              
              {/* Overview link */}
              {(isUno || isHotWheels) ? (
                <Link to="/final-website#overview" className="fnav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                  <BookOpen size={16} /> {t('nav.overview')}
                </Link>
              ) : (
                <a href="#overview" className="fnav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                  <BookOpen size={16} /> {t('nav.overview')}
                </a>
              )}

              {/* Features link - Links to "What We're Creating" section */}
              {(isUno || isHotWheels) ? (
                <Link to="/final-website#features" className="fnav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                  <Sparkles size={16} /> Features
                </Link>
              ) : (
                <a href="#features" className="fnav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                  <Sparkles size={16} /> Features
                </a>
              )}

              {/* FAQ link - Added with ID scroll support */}
              {(isUno || isHotWheels) ? (
                <Link to="/final-website#faq" className="fnav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                  <HelpCircle size={16} /> FAQ
                </Link>
              ) : (
                <a href="#faq" className="fnav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                  <HelpCircle size={16} /> FAQ
                </a>
              )}

              {/* Team link */}
              {(isUno || isHotWheels) ? (
                <Link to="/final-website#team" className="fnav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                  <Users size={16} /> {t('nav.team')}
                </Link>
              ) : (
                <a href="#team" className="fnav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                  <Users size={16} /> {t('nav.team')}
                </a>
              )}

              {/* Back to Prompts */}
              <Link to="/" className="fnav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                <FileText size={16} /> {t('nav.backToPrompts')}
              </Link>
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
