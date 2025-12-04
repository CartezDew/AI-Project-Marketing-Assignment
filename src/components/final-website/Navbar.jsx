import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const FinalWebsiteNavbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
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
          <span className="fnav-logo-mattel">MATTEL</span>
          <span className="fnav-logo-divider">×</span>
          <span className="fnav-logo-ai">AI LAB</span>
        </Link>
        
        <div className="fnav-links">
          <Link 
            to="/final-website/uno" 
            className={`fnav-link fnav-link-uno ${isUno ? 'active' : ''}`}
          >
            <span className="fnav-link-icon">🃏</span>
            UNO
          </Link>
          <Link 
            to="/final-website/hotwheels" 
            className={`fnav-link fnav-link-hw ${isHotWheels ? 'active' : ''}`}
          >
            <span className="fnav-link-icon">🏎️</span>
            Hot Wheels
          </Link>
        </div>

        <Link to="/" className="fnav-back-link">
          ← Back to Prompts
        </Link>
      </div>
    </nav>
  );
};

export default FinalWebsiteNavbar;
