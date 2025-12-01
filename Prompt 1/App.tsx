import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { TeddyBlog } from './pages/TeddyBlog';
import { LesleyBlog } from './pages/LesleyBlog';

// ScrollToTop component to handle scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="antialiased text-slate-900 bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/teddy" element={<TeddyBlog />} />
            <Route path="/blog/lesley" element={<LesleyBlog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

