import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import TestimonialsPage from './pages/TestimonialsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen bg-dark-dark text-grey-light">
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
    </Router>
  );
}

export default App;
 