import React from 'react';
import ServiceHero from '@sections/Service/ServiceHero';
import Portrait from '@sections/Service/Portrait';
import Events from '@sections/Service/Events';
import FaqSection from '@sections/Home/FaqSection';

const Services = () => {
  return (
    <div className="relative">
      <ServiceHero />
      <Portrait/>
      <Events/>
      <FaqSection/>
    </div>
  );
};

export default Services;
``;
