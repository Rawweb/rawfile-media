import React from "react";
import { GiLaserSparks } from "react-icons/gi";

const MarqueeItems = () => {
  const items = [
    "product photography",
    "wedding photography",
    "landscape photography",
    "portrait photography",
    "event photography",
    "commercial photography",
  ];

  return (
    <div className="overflow-hidden bg-grey-light dark:bg-dark-midDark text-dark-dark dark:text-grey-midLight">
      {/* moving row must be transparent */}
      <div className="flex whitespace-nowrap gap-6 py-4 animate-marquee">
        {[...items, ...items].map((item, i) => (
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
