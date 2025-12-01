import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4' : 'bg-transparent py-6'
  }`;

  const linkClass = "text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors";
  const activeLinkClass = "text-sm font-medium text-slate-900";

  const isHome = location.pathname === '/';

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight text-slate-900">
          MATTEL <span className="font-normal text-slate-500">COLLECTIVE</span>
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className={isHome ? activeLinkClass : linkClass}>Home</Link>
          <Link to="/blog/teddy" className={location.pathname.includes('teddy') ? activeLinkClass : linkClass}>UNO Zone</Link>
          <Link to="/blog/lesley" className={location.pathname.includes('lesley') ? activeLinkClass : linkClass}>Collector's Hub</Link>
        </div>

        <div className="flex gap-4">
           {/* Mobile menu placeholder */}
           <button className="md:hidden text-slate-900">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
             </svg>
           </button>
        </div>
      </div>
    </nav>
  );
};

