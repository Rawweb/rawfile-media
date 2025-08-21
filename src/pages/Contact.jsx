import React from 'react';
import ContactHero from '@sections/Contact/ContactHero';
import ContactInfoSection from '@sections/Contact/ContactInfoSection';
import TestimonialsSection from '@sections/Home/TestimonialsSection';

const Contact = () => {
  return (
    <div className="relative">
      <ContactHero />
      <ContactInfoSection />
      <TestimonialsSection />
    </div>
  );
};

export default Contact;
