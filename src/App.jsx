import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import Loader from '@components/layout/Loader';

import Home from '@pages/Home';
import About from '@pages/About';
import Portfolio from '@pages/Portfolio';
import Services from '@pages/Services';
import Contact from '@pages/Contact';
import TestimonialsPage from '@pages/TestimonialsPage';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600); // match duration in Loader
    return () => clearTimeout(timer);
  }, []);

  // Keep scroll position sane on route change
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);
    return null;
  }

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative overflow-hidden">
          <Navbar />
          <ScrollToTop/>
          <main className="min-h-screen bg-dark-dark text-grey-light overflow-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
