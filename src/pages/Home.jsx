import React from 'react';

import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import FaqSection from '../sections/FaqSection';
import PortfolioSection from '../sections/PortfolioSection';
import TestimonialsSection from '../sections/TestimonialsSection';

const Home = () => {
  return (
    <div>
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
