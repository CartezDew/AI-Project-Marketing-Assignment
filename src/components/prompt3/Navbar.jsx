import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Prompt3Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  const isLanding = location.pathname === '/prompt3';
  const isUno = location.pathname === '/prompt3/uno';
  const isHotWheels = location.pathname === '/prompt3/hotwheels';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let navTheme = 'nav-default';
  if (isUno) navTheme = 'nav-uno';
  if (isHotWheels) navTheme = 'nav-hw';

  return (
    <nav className={`navbar ${navTheme} ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/prompt3" className="nav-logo">
          <span className="logo-mattel">MATTEL</span>
          <span className="logo-divider">×</span>
          <span className="logo-ai">AI LAB</span>
        </Link>
        
        <div className="nav-links">
          <Link 
            to="/prompt3/uno" 
            className={`nav-link nav-link-uno ${isUno ? 'active' : ''}`}
          >
            <span className="link-icon">🃏</span>
            UNO
          </Link>
          <Link 
            to="/prompt3/hotwheels" 
            className={`nav-link nav-link-hw ${isHotWheels ? 'active' : ''}`}
          >
            <span className="link-icon">🏎️</span>
            Hot Wheels
          </Link>
        </div>

        <Link to="/" className="nav-back-link">
          ← Back to Prompts
        </Link>
      </div>
    </nav>
  );
};

export default Prompt3Navbar;
