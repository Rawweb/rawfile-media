import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import aboutHero from '@assets/about-hero.jpg';
import aboutHero1 from '@assets/about-hero1.jpg';
import heroCard from '@assets/about-hero-card.png';

const AboutHero = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24, filter: 'blur(2px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.6, ease: 'easeOut', delay },
    viewport: { once: true, amount: 0.5 },
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

  const bounce = (delay = 0) => ({
    initial: { opacity: 0, scale: 0.8, y: 8 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.15 },
    viewport: { once: true, amount: 0.45 },
  });

  // Floating animation (y oscillates up/down)
  const floatAnim = {
    animate: { y: [0, -6, 0] },
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    },
  };

   // Parent motion config
  const parentMotion = {
    variants: {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.15 },
      },
    },
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount: 0.3 },
  };

  // Child motion config
  const childMotion = {
    variants: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      },
    },
  };

  const stats = [
    { k: '7+', v: 'Years in Business' },
    { k: '2000+', v: 'Happy Clients' },
    { k: '10+', v: 'Photography Awards' },
    { k: '05+', v: 'International Shoots' },
    { k: '10,000+', v: 'Social Media Followers' },
    { k: '92%', v: 'Client Retention Rate' },
  ];

 

  return (
    <section className="section-heading relative pt-28">
      {/* ---------- MOBILE HERO IMAGE (no mask) ---------- */}
      <div className="container md:hidden">
        <motion.div
          className="relative w-full rounded-2xl overflow-hidden mb-6"
          {...slideLeft(0.2)}
        >
          <img
            src={aboutHero}
            alt=""
            className="w-full h-auto aspect-[4/3] object-cover"
          />

          {/* small star puck on mobile */}
          <div className="absolute left-3 -bottom-4">
            <div className="size-14 rounded-full border border-dark-midLight/70 bg-black/50 backdrop-blur-sm flex items-center justify-center">
              <Star className="opacity-80" size={16} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ---------- Heading + badges ---------- */}
      <div className="container">
        <motion.p
          className="text-grey-midDark uppercase text-sm mb-2"
          {...fadeUp(0.4)}
        >
          About
        </motion.p>

        <div className="relative mb-6">
          <motion.h1
            className="uppercase text-2xl md:text-3xl font-bold leading-tight"
            {...fadeUp(0.4)}
          >
            Kingsley Rawfile
          </motion.h1>

          {/* background accent – desktop only */}
          <motion.div
            className="absolute right-0 -top-6 h-16 w-[55%] hidden md:block rounded-[14px] overflow-hidden"
            {...fadeUp(0.4)}
          >
            <img
              src={aboutHero1}
              alt=""
              className="h-full w-full object-cover opacity-80"
            />
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-8"
          {...parentMotion}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-dark-midLight dark:bg-dark-dark/60 px-4 py-4"
              {...childMotion}
            >
              <p className="text-2xl md:text-[28px] font-bold">{s.k}</p>
              <p className="mt-1 text-[11px] md:text-xs text-grey-midDark">
                {s.v}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* DESKTOP MASKED HERO + ANIMATIONS */}
      <motion.div
        className="container hidden md:block"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.45 }}
      >
        <div className="relative w-full aspect-[1200/420]">
          {/* masked photo */}
          <motion.div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url(${aboutHero})`,
              WebkitMaskImage: `url(${heroCard})`,
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskSize: '100% 100%',
              WebkitMaskPosition: 'center',
              maskImage: `url(${heroCard})`,
              maskRepeat: 'no-repeat',
              maskSize: '100% 100%',
              maskPosition: 'center',
            }}
            {...fadeUp(0.4)}
          />

          {/* star puck – outer (enter) */}
          <motion.div
            className="absolute z-10"
            style={{
              width: 'clamp(56px, 6vw, 96px)',
              height: 'clamp(56px, 6vw, 96px)',
              left: '3.0%',
              bottom: '0%',
              transform: 'translate(-50%, 0)',
            }}
            {...bounce(0.4)}
          >
            {/* star puck – inner (float loop) */}
            <motion.div
              className="w-full h-full rounded-full border border-dark-midLight bg-black/50 backdrop-blur-sm flex items-center justify-center"
              {...floatAnim}
            >
              <Star className="opacity-80" />
            </motion.div>
          </motion.div>

          {/* right caption – desktop only */}
          <motion.div
            className="absolute z-10 bottom-[9%] right-[1.5%] lg:right-[4%] max-w-[140px] text-[11px] lg:text-[13px] leading-relaxed tracking-wide text-grey-midDark"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.45 }}
          >
            SCROLL DOWN TO SEE <br /> MY JOURNEY
          </motion.div>
        </div>
      </motion.div>

      {/* ---------- Divider + bio ---------- */}
      <div className="container border border-dark-midLight rounded-xl border-t-0 pb-6 shadow-sm shadow-purple-dark/30 ">
        <div className="h-px w-full bg-dark-midLight/50 my-10" />
        <motion.div {...fadeUp(0.4)}>
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-3 uppercase dark:text-grey-midLight">
            My Biography
          </h2>
          <div className="space-y-2 text-sm md:text-[15px] leading-7  text-justify text-grey-dark">
            <p>
              Kingsley Rawfile&apos;s love affair with photography began at a
              young age, nurtured by captivating landscapes and vibrant
              cultures. His passion for storytelling through imagery led to a
              journey that spans over 15 years.
            </p>
            <p>
              Driven by curiosity to find beauty in everyday moments, Kingsley
              honed his craft meticulously. A background in digital media set
              the foundation, but it&apos;s his keen eye for detail and ability
              to capture raw emotion that truly sets him apart.
            </p>
            <p>
              This journey is more than taking pictures; it&apos;s about the
              essence of the human spirit, the fleeting magic of nature, and the
              feelings that define our lives. With each click, he weaves stories
              that transcend time and space.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
