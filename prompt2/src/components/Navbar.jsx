import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isUno = location.pathname === '/uno';
  const isHotWheels = location.pathname === '/hotwheels';

  let navClass = 'navbar';
  if (isUno) navClass += ' navbar-uno';
  if (isHotWheels) navClass += ' navbar-hw';

  return (
    <nav className={navClass}>
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          <span className="brand-mattel">MATTEL</span> 
          <span className="brand-lab">x AI LAB</span>
        </Link>
        <div className="navbar-links">
          <Link to="/uno" className={`nav-link ${isUno ? 'active' : ''}`}>UNO Community</Link>
          <Link to="/hotwheels" className={`nav-link ${isHotWheels ? 'active' : ''}`}>HW Collectors</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

