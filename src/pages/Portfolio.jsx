import React from 'react';
import PortfolioHero from '@sections/Portfolio/PortfolioHero';
import PortraitsSection from '@sections/Portfolio/PortraitsSection';
import EventsSection from '@sections/Portfolio/EventsSection';
import CommercialsSection from '@sections/Portfolio/CommercialsSection';
import FaqSection from '@sections/Home/FaqSection';
import TestimonialsSection from '@sections/Home/TestimonialsSection';

const Portfolio = () => {
  return (
    <div className="relative">
      <PortfolioHero />
      <PortraitsSection />
      <EventsSection />
      <CommercialsSection />
      <FaqSection/>
      <TestimonialsSection/>
    </div>
  );
};

export default Portfolio;
