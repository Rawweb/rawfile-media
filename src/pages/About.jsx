import React from 'react';
import AboutHero from '@sections/About/AboutHero';
import JourneySection from '@sections/About/JourneySection';
import TestimonialsSection from '@sections/Home/TestimonialsSection';

const About = () => {
  return <div className="relative">
    <AboutHero/>
    <JourneySection/>
    <TestimonialsSection/>
  </div>;
};

export default About;
