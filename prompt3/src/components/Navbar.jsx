import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  const isLanding = location.pathname === '/';
  const isUno = location.pathname === '/uno';
  const isHotWheels = location.pathname === '/hotwheels';

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
        <Link to="/" className="nav-logo">
          <span className="logo-mattel">MATTEL</span>
          <span className="logo-divider">×</span>
          <span className="logo-ai">AI LAB</span>
        </Link>
        
        <div className="nav-links">
          <Link 
            to="/uno" 
            className={`nav-link nav-link-uno ${isUno ? 'active' : ''}`}
          >
            <span className="link-icon">🃏</span>
            UNO
          </Link>
          <Link 
            to="/hotwheels" 
            className={`nav-link nav-link-hw ${isHotWheels ? 'active' : ''}`}
          >
            <span className="link-icon">🏎️</span>
            Hot Wheels
          </Link>
        </div>

        <div className="nav-badge">
          <span className="badge-text">Powered by Opus 4.5</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

