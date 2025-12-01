import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-page">
      <header className="landing-hero">
        <h1 className="landing-title">Empowering Generations Through Play</h1>
        <p className="landing-subtitle">
          Welcome to the <strong>Mattel x AI Brand Lab</strong>. Explore how artificial intelligence is shaping 
          the future of digital experiences for our most iconic brands.
        </p>
      </header>

      <section className="brand-split">
        {/* UNO Card */}
        <Link to="/uno" className="brand-card brand-card-uno">
          <div className="card-content">
            <h2 className="card-title">UNO Community</h2>
            <p className="card-desc">Social, fast, and unpredictable. Join the global game night.</p>
            <span className="card-cta">Enter Experience &rarr;</span>
          </div>
          <div className="card-bg-decoration uno-circle"></div>
        </Link>

        {/* Hot Wheels Card */}
        <Link to="/hotwheels" className="brand-card brand-card-hw">
          <div className="card-content">
            <h2 className="card-title">Hot Wheels Collectors</h2>
            <p className="card-desc">High-speed design and collector culture. Ignite your challenger spirit.</p>
            <span className="card-cta">Enter Experience &rarr;</span>
          </div>
          <div className="card-bg-decoration hw-lines"></div>
        </Link>
      </section>
      
      <footer className="landing-footer">
        <p>Mattel x AI Brand Lab Prototype | Educational Use Only</p>
      </footer>
    </div>
  );
};

export default Landing;

