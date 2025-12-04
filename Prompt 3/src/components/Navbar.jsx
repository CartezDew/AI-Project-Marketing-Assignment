import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

// Import logos
import mattelLogo from '../logos/Mattel_logo.svg.png';
import unoLogo from '../logos/Uno_logo.webp';
import hwLogo from '../logos/hotwheels_logo.png';
import aiIcon from '../logos/ai-icon.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setAboutDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={mattelLogo} alt="Mattel" className="logo-mattel" />
          <span className="logo-divider">×</span>
          <span className="logo-text">AI Brand Lab</span>
          <img src={aiIcon} alt="AI" className="logo-ai-icon" />
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Overview
          </Link>
          
          {/* About Dropdown */}
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <span className="nav-link dropdown-trigger">
              About
              <span className="dropdown-arrow">▾</span>
            </span>
            {aboutDropdownOpen && (
              <div className="dropdown-menu">
                {isHomePage ? (
                  <>
                    <button onClick={() => scrollToSection('brands')} className="dropdown-item">
                      Brands
                    </button>
                    <button onClick={() => scrollToSection('ai-section')} className="dropdown-item">
                      How AI Helps
                    </button>
                    <button onClick={() => scrollToSection('team')} className="dropdown-item">
                      Our Team
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/" className="dropdown-item">Home</Link>
                    <a href="/" className="dropdown-item">View Prompts</a>
                  </>
                )}
              </div>
            )}
          </div>

          <Link to="/uno" className={`nav-link nav-brand-link uno-link ${location.pathname === '/uno' ? 'active' : ''}`}>
            <img src={unoLogo} alt="UNO" className="nav-brand-icon" />
            UNO
          </Link>
          
          <Link to="/hotwheels" className={`nav-link nav-brand-link hw-link ${location.pathname === '/hotwheels' ? 'active' : ''}`}>
            <img src={hwLogo} alt="Hot Wheels" className="nav-brand-icon" />
            Hot Wheels
          </Link>
        </div>

        {/* CTA Button */}
        <a href="/" className="navbar-cta">
          View Prompts
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
          Overview
        </Link>
        <Link to="/uno" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
          <img src={unoLogo} alt="UNO" className="mobile-brand-icon" />
          UNO Experience
        </Link>
        <Link to="/hotwheels" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
          <img src={hwLogo} alt="Hot Wheels" className="mobile-brand-icon" />
          Hot Wheels
        </Link>
        <a href="/" className="mobile-cta" onClick={() => setMobileMenuOpen(false)}>
          View Prompts
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
