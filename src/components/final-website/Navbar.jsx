import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, BookOpen, ChevronDown } from 'lucide-react';
import './Navbar.css';
import mattelLogo from '../../assets/logos/Mattel_logo.svg.png';
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
  
  const isLanding = location.pathname === '/final-website';
  const isUno = location.pathname === '/final-website/uno';
  const isHotWheels = location.pathname === '/final-website/hotwheels';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <div className="fnav-dropdown-container">
            <button 
              className="fnav-dropdown-trigger"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
            >
              {t('nav.about')} <ChevronDown size={16} />
            </button>
            
            <div className={`fnav-dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
              <Link to="/" className="fnav-dropdown-item">
                <Home size={16} /> {t('nav.backToPrompts')}
              </Link>
              <a href="#team" className="fnav-dropdown-item">
                <Users size={16} /> {t('nav.team')}
              </a>
              <a href="#overview" className="fnav-dropdown-item">
                <BookOpen size={16} /> {t('nav.overview')}
              </a>
            </div>
          </div>

          <span className="fnav-divider">|</span>

          {/* Brand Icons */}
          <div className="fnav-brand-icons">
            <Link 
              to="/final-website/uno" 
              className={`fnav-icon-btn fnav-icon-uno ${isUno ? 'active' : ''}`}
              title="UNO Experience"
            >
              <img src={unoLogo} alt="UNO" className="fnav-icon-img" />
            </Link>
            <Link 
              to="/final-website/hotwheels" 
              className={`fnav-icon-btn fnav-icon-hw ${isHotWheels ? 'active' : ''}`}
              title="Hot Wheels Experience"
            >
              <img src={hotwheelsLogo} alt="Hot Wheels" className="fnav-icon-img" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Colorful Bottom Border - Hidden on Scroll */}
      <div className={`fnav-bottom-border ${scrolled ? 'hidden' : ''}`}>
        <div className="fnav-border-segment fnav-border-red"></div>
        <div className="fnav-border-segment fnav-border-orange"></div>
        <div className="fnav-border-segment fnav-border-yellow"></div>
        <div className="fnav-border-segment fnav-border-green"></div>
        <div className="fnav-border-segment fnav-border-blue"></div>
      </div>
    </nav>
  );
};

export default FinalWebsiteNavbar;
