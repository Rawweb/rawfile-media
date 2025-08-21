import React from "react";
import { motion } from "framer-motion";

const brands = [
  "GTBANK",
  "ZENITH BANK",
  "ACCESS BANK",
  "UBA",
  "INNOSON MOTORS",
  "GLOBACOM",
  "MTN NIGERIA",
  "DANGOTE GROUP",
  "NIGERIAN BREWERIES",
  "FILMHOUSE CINEMAS",
  "AIRTEL NIGERIA",
  "PEPSI NIGERIA",
];

const Brands = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24, filter: 'blur(2px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.6, ease: 'easeOut', delay },
    viewport: { once: true, amount: 0.45 },
  });

  return (
    <section className="py-12 overflow-hidden">
      <div className="container">
        {/* heading */}
        <motion.p className="uppercase text-[11px] tracking-[3px] text-grey-midDark mb-8 text-center" {...fadeUp(0.2)}>
          Brands I Have Worked With
        </motion.p>

        {/* marquee row */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-12 whitespace-nowrap text-grey-midDark text-sm md:text-base font-semibold tracking-wide bg-dark-midDark py-2 md:py-3 lg:py-4 border-b border-t border-dark-midLight"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {brands.map((brand, i) => (
              <span
                key={i}
                className="uppercase opacity-70 hover:opacity-100 transition-colors duration-300"
              >
                {brand}
              </span>
            ))}
            {/* duplicate for seamless loop */}
            {brands.map((brand, i) => (
              <span
                key={`dup-${i}`}
                className="uppercase opacity-70 hover:opacity-100 transition-colors duration-300"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
