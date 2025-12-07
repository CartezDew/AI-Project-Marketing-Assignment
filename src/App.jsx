import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import './styles/ScrollAnimations.css';

// Language Provider
import { LanguageProvider } from './context/LanguageContext';

// Main Prompts Page
import PromptsPage from './PromptsPage';

// Prompt 1 & 2 Wrappers (for static sites)
import Prompt1Wrapper from './pages/Prompt1Wrapper';
import Prompt2Wrapper from './pages/Prompt2Wrapper';
import './pages/PromptWrapper.css';

// Prompt3 Pages
import Prompt3Landing from './pages/prompt3/Landing';
import Prompt3UnoExperience from './pages/prompt3/UnoExperience';
import Prompt3HotWheelsExperience from './pages/prompt3/HotWheelsExperience';
import Prompt3Navbar from './components/prompt3/Navbar';

// Final Website Pages  
import FinalWebsiteLanding from './pages/final-website/Landing';
import FinalWebsiteUnoExperience from './pages/final-website/UnoExperience';
import FinalWebsiteHotWheelsExperience from './pages/final-website/HotWheelsExperience';
import FinalWebsiteNavbar from './components/final-website/Navbar';

// Import CSS for sub-pages
import './pages/prompt3/Landing.css';
import './pages/prompt3/UnoExperience.css';
import './pages/prompt3/HotWheelsExperience.css';
import './components/prompt3/Navbar.css';
import './components/prompt3/UnoHouseRulesWidget.css';
import './components/prompt3/HotWheelsCollectorsHub.css';

import './pages/final-website/Landing.css';
import './pages/final-website/UnoExperience.css';
import './pages/final-website/HotWheelsExperience.css';
import './components/final-website/Navbar.css';
import './components/final-website/Hero.css';
import './components/final-website/UnoHouseRulesWidget.css';
import './components/final-website/HotWheelsCollectorsHub.css';
import './components/final-website/HotWheelsSpotlight.css';
import './components/final-website/HotWheelsCommunity.css';
import './components/final-website/Avatar3D.css';

// ScrollToTop ensures each route starts at the top instantly (no scroll animation)
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  // Use useLayoutEffect to scroll before paint
  React.useLayoutEffect(() => {
    // Force scroll to top using multiple methods for maximum compatibility
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);
  
  return null;
};

// Layout wrapper for Prompt3 pages
const Prompt3Layout = ({ children }) => {
  const { pathname } = useLocation();
  
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);
  
  return (
    <div className="app-wrapper">
      <Prompt3Navbar />
      {children}
    </div>
  );
};

// Layout wrapper for Final Website pages
const FinalWebsiteLayout = ({ children }) => {
  const { pathname, hash } = useLocation();
  
  React.useLayoutEffect(() => {
    // If there's a hash, scroll to that element after a brief delay
    if (hash) {
      // Small timeout to ensure the DOM has rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // No hash - scroll to top
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname, hash]);
  
  return (
    <div className="app-wrapper">
      <FinalWebsiteNavbar />
      {children}
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Main Prompts Comparison Page */}
          <Route path="/" element={<PromptsPage />} />
          
          {/* Prompt 1 - Wrapped static site */}
          <Route path="/prompt1" element={<Prompt1Wrapper />} />
          
          {/* Prompt 2 - Wrapped static site */}
          <Route path="/prompt2" element={<Prompt2Wrapper />} />
          
          {/* Prompt3 Routes */}
          <Route path="/prompt3" element={<Prompt3Layout><Prompt3Landing /></Prompt3Layout>} />
          <Route path="/prompt3/uno" element={<Prompt3Layout><Prompt3UnoExperience /></Prompt3Layout>} />
          <Route path="/prompt3/hotwheels" element={<Prompt3Layout><Prompt3HotWheelsExperience /></Prompt3Layout>} />
          
          {/* Final Website Routes */}
          <Route path="/final-website" element={<FinalWebsiteLayout><FinalWebsiteLanding /></FinalWebsiteLayout>} />
          <Route path="/final-website/uno" element={<FinalWebsiteLayout><FinalWebsiteUnoExperience /></FinalWebsiteLayout>} />
          <Route path="/final-website/hotwheels" element={<FinalWebsiteLayout><FinalWebsiteHotWheelsExperience /></FinalWebsiteLayout>} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
