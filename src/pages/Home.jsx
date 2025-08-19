import React from 'react';

import HeroSection from '../sections/Home/HeroSection';
import AboutSection from '../sections/Home/AboutSection';
import ServicesSection from '../sections/Home/ServicesSection';
import FaqSection from '../sections/Home/FaqSection';
import PortfolioSection from '../sections/Home/PortfolioSection';
import TestimonialsSection from '../sections/Home/TestimonialsSection';

const Home = () => {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <FaqSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
