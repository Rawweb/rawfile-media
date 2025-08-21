import React from 'react'
import ContactHero from '@sections/Contact/ContactHero'
import ContactInfoSection from '@sections/Contact/ContactInfoSection'

const Contact = () => {
  return (
     <div className="relative">
      <ContactHero />
      <ContactInfoSection/>
    </div>
  )
}

export default Contact