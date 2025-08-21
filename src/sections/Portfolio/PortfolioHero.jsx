import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import portfolioHero from '@assets/portfolio-hero.jpg';
import portfolioCard from '@assets/portfolio-hero-card.png';
import Brands from '@components/ui/Brands';

const PortfolioHero = () => {
  // same fadeUp helper as AboutHero
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24, filter: 'blur(2px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.6, ease: 'easeOut', delay },
    viewport: { once: true, amount: 0.45 },
  });

  const slideLeft =(delay = 0) => ({
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.9, ease: 'easeOut', delay },
    viewport: { once: true, amount: 0.5 },
  })
  
  const slideRight = (delay = 0) => ({
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.9, ease: 'easeOut', delay },
    viewport: { once: true, amount: 0.5 },
  })

  return (
    <section className="section-heading relative">
      {/* MOBILE HERO IMAGE */}
      <div className="container md:hidden">
        <motion.div className="relative w-full rounded-2xl overflow-hidden mb-6" {...slideLeft(0.2)}>
          <img
            src={portfolioHero}
            alt=""
            className="w-full h-auto aspect-[4/3] object-cover"
          />

          {/* small star puck on mobile */}
          <div className="absolute left-3 -bottom-4">
            <div className="size-14 rounded-full border border-dark-midLight/70 bg-dark-dark/50 backdrop-blur-sm flex items-center justify-center">
              <Star className="opacity-80" size={16} />
            </div>
          </div>
        </motion.div>

        {/* stacked text on mobile */}
        <motion.div className="mt-6" {...slideRight(0.2)}>
          <p className="text-grey-midDark uppercase text-sm mb-2">Portfolio</p>
          <h1 className="uppercase text-2xl font-bold leading-tight text-white">
            Visual Poetry in Pixels
          </h1>
          <p className="mt-3 text-grey-dark text-sm leading-7">
            Step into a visual journey that encapsulates the essence of my lens.
            Each photograph in this portfolio is a narrative, a frozen moment in
            time, and a testament to the artistry and passion poured into every
            frame.
          </p>
        </motion.div>
      </div>

      {/* ---------- DESKTOP MASKED HERO + ANIMATIONS ---------- */}
      <div className="container hidden md:block">
        <div className="relative w-full aspect-[1200/420]">
          {/* masked photo */}
          <motion.div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url(${portfolioHero})`,
              WebkitMaskImage: `url(${portfolioCard})`,
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskSize: '100% 100%',
              WebkitMaskPosition: 'center',
              maskImage: `url(${portfolioCard})`,
              maskRepeat: 'no-repeat',
              maskSize: '100% 100%',
              maskPosition: 'center',
            }}
            {...fadeUp(0.4)}
          />

          {/* HEADING -TEXT OVERLAY (desktop only) */}
          <motion.div
            className="absolute z-10 top-[0%] lg:top-[3%] xl:top-[3.5%] left-[0%] md:w-[500px] lg:w-[650px] xl:w-[800px]"
            {...fadeUp(0.4)}
          >
            <p className="text-grey-midDark uppercase text-sm mb-2 md:hidden">
              Portfolio
            </p>
            <h1 className="uppercase text-2xl xl:text-4xl font-bold leading-tight text-white" {...fadeUp(0.2)}>
              Visual Poetry in Pixels
            </h1>
            <motion.p className="mt-2 xl:mt-3 text-grey-dark text-sm lg:text-base xl:text-lg leading-tight" {...fadeUp(0.2)}>
              Step into a visual journey that encapsulates the essence of my
              lens. Each photograph in this portfolio is a narrative, a frozen
              moment in time, and a testament to the artistry and passion poured
              into every frame.
            </motion.p>
          </motion.div>

          {/* star puck */}
          <motion.div
            className="absolute z-10"
            style={{
              width: 'clamp(56px, 6vw, 96px)',
              height: 'clamp(56px, 6vw, 96px)',
              left: '3%',
              bottom: '0%',
              transform: 'translate(-50%, 0)',
            }}
            {...fadeUp(0.2)}
          >
            <motion.div
              className="w-full h-full rounded-full border border-dark-midLight bg-black/50 backdrop-blur-sm flex items-center justify-center"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            >
              <Star className="opacity-80" />
            </motion.div>
          </motion.div>

          {/* right caption */}
          <motion.div
            className="absolute z-10 bottom-[9%] right-[1.5%] lg:right-[4%] max-w-[140px] text-[11px] lg:text-[13px] leading-relaxed tracking-wide text-grey-midDark"
            {...fadeUp(0.25)}
          >
            SCROLL DOWN TO SEE <br /> THE WORKS
          </motion.div>
        </div>
      </div>

      <Brands/>
    </section>
  );
};

export default PortfolioHero;
