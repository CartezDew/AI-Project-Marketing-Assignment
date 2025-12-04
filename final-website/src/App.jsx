import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import UnoExperience from './pages/UnoExperience';
import HotWheelsExperience from './pages/HotWheelsExperience';

/* ScrollToTop ensures each route starts at the top */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/uno" element={<UnoExperience />} />
          <Route path="/hotwheels" element={<HotWheelsExperience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

