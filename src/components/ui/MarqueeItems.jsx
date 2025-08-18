import React from 'react';
import { GiLaserSparks } from 'react-icons/gi';

const MarqueeItems = () => {
  const marqueeItems = [
    'product photography',
    'wedding photography',
    'landscape photography',
    'portrait photography',
    'event photography',
    'commercial photography',
    'landscape photography',
    'wedding photography',
    'landscape photography',
    'portrait photography',
    'event photography',
    'commercial photography',
    'product photography',
  ];
  return (
    <div>
      <div className="flex gap-6 animate-marquee whitespace-nowrap py-4">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <GiLaserSparks className="text-purple-midLight size-5" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeItems;
