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

  let navTheme = 'fnav-default';
  if (isUno) navTheme = 'fnav-uno';
  if (isHotWheels) navTheme = 'fnav-hw';

  return (
    <nav className={`fnav-navbar ${navTheme} ${scrolled ? 'scrolled' : ''}`}>
      <div className="fnav-inner">
        <Link to="/" className="fnav-logo">
          <span className="fnav-logo-mattel">MATTEL</span>
          <span className="fnav-logo-divider">×</span>
          <span className="fnav-logo-ai">AI LAB</span>
        </Link>
        
        <div className="fnav-links">
          <Link 
            to="/uno" 
            className={`fnav-link fnav-link-uno ${isUno ? 'active' : ''}`}
          >
            <span className="fnav-link-icon">🃏</span>
            UNO
          </Link>
          <Link 
            to="/hotwheels" 
            className={`fnav-link fnav-link-hw ${isHotWheels ? 'active' : ''}`}
          >
            <span className="fnav-link-icon">🏎️</span>
            Hot Wheels
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
