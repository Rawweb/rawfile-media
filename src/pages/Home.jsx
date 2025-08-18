import React from 'react';

import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import FaqSection from '../sections/FaqSection';
import PortfolioSection from '../sections/PortfolioSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <FaqSection />
    </div>
  );
};

export default Home;
