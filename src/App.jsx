import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import Loader from '@components/layout/Loader';

import Home from '@pages/Home';
import About from '@pages/About';
import Portfolio from '@pages/Portfolio';
import Services from '@pages/Services';
import Contact from '@pages/Contact';
import TestimonialsPage from '@pages/TestimonialsPage';
import ThankYou from '@pages/ThankYou';
import Booking from '@pages/Booking';
import PrivacyPolicy from '@pages/PrivacyPolicy';
import TermsAndConditions from '@pages/TermsAndConditions';
import Project from '@pages/Projects';

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
      window.scrollTo({ top: 0, behavior: 'auto' }); // instead of 'instant'
    }, [pathname]);
    return null;
  }

  return (
    <Router>
      <Toaster
        position="top-right"
        expand
        richColors
        theme="dark" // optional: matches my dark UI
        duration={4000} // optional: default toast duration
        toastOptions={{
          style: { fontSize: '14px' },
        }}
      />
      {loading ? (
        <Loader />
      ) : (
        <div className="relative">
          <Navbar />
          <ScrollToTop />
          <main
            className="min-h-screen bg-absolute-white text-dark-dark 
  dark:bg-dark-dark dark:text-grey-light"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/book-us" element={<Booking />} />
              <Route path='/privacy' element={<PrivacyPolicy />} />
              <Route path='/terms' element={<TermsAndConditions />} />
              <Route path="/projects" element={<Project />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
