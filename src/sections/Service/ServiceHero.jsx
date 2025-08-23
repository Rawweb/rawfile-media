import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import serviceCard from '@assets/service-hero-card.png';
import serviceHero from '@assets/service-hero.jpg';

const ServiceHero = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24, filter: 'blur(2px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.6, ease: 'easeOut', delay },
    viewport: { once: true, amount: 0.45 },
  });

  const slideLeft = (delay = 0) => ({
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.9, ease: 'easeOut', delay },
    viewport: { once: true, amount: 0.5 },
  });

  const slideRight = (delay = 0) => ({
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.9, ease: 'easeOut', delay },
    viewport: { once: true, amount: 0.5 },
  });
  return (
    <section className="section-heading relative pt-28">
      {/* MOBILE HERO IMAGE */}
      <div className="container md:hidden">
        <motion.div
          className="relative w-full rounded-2xl overflow-hidden mb-6"
          {...slideLeft(0.2)}
        >
          <img
            src={serviceHero}
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
          <p className="text-grey-midDark uppercase text-sm mb-2">Services</p>
          <h1 className="uppercase text-2xl font-bold leading-tight dark:text-white">
            Diverse Photography Offerings
          </h1>
          <p className="mt-3 text-grey-dark text-sm leading-7">
            Unlock the full spectrum of professional photography services
            tailored to your vision. From timeless portraits to captivating
            event coverage, I bring a unique blend of creativity and technical
            expertise to each project.
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
              backgroundImage: `url(${serviceHero})`,
              WebkitMaskImage: `url(${serviceCard})`,
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskSize: '100% 100%',
              WebkitMaskPosition: 'center',
              maskImage: `url(${serviceCard})`,
              maskRepeat: 'no-repeat',
              maskSize: '100% 100%',
              maskPosition: 'center',
            }}
            {...fadeUp(0.4)}
          />

          {/* HEADING -TEXT OVERLAY (desktop only) */}
          <div className="absolute z-10 top-[1%] lg:top-[3%] xl:top-[3.5%] left-[15%] md:w-[600px] lg:w-[800px] xl:w-[900px]">
            <motion.p
              className="text-grey-midDark uppercase text-sm mb-2 md:hidden"
              {...fadeUp(0.2)}
            >
              Portfolio
            </motion.p>
            <motion.h1
              className="uppercase text-xl lg:text-2xl xl:text-4xl font-bold leading-tight darktext-white"
              {...fadeUp(0.2)}
            >
              Visual Poetry in Pixels
            </motion.h1>
            <motion.p
              className="mt-2 xl:mt-3 text-grey-dark text-xs lg:text-base xl:text-lg leading-tight"
              {...fadeUp(0.2)}
            >
              Step into a visual journey that encapsulates the essence of my
              lens. Each photograph in this portfolio is a narrative, a moment
              in time, and a testament to the artistry and passion poured into
              every frame.
            </motion.p>
          </div>

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
            className="absolute z-10 bottom-[4%] right-[1.5%] lg:right-[4%] max-w-[140px] text-[11px] lg:text-[13px] leading-relaxed tracking-wide text-grey-midDark"
            {...fadeUp(0.25)}
          >
            SCROLL DOWN TO SEE <br /> THE WORKS
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
