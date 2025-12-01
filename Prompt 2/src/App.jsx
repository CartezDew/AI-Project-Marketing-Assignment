import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import UnoExperience from './pages/UnoExperience';
import HotWheelsExperience from './pages/HotWheelsExperience';

function App() {
  return (
    <Router>
      <div className="app-container">
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

