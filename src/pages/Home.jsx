import React from 'react';

import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import FaqSection from '../sections/FaqSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />

      <FaqSection />
    </div>
  );
};

export default Home;
