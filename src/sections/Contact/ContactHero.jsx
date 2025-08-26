import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { FaFacebookF, FaTiktok, FaInstagram } from 'react-icons/fa';
import contactCard from '@assets/contact-hero-card.png';
import contactHero from '@assets/contact-hero.jpg';

const ContactHero = () => {
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

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24, filter: 'blur(2px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.6, ease: 'easeOut', delay },
    viewport: { once: true, amount: 0.45 },
  });

  return (
    <section className="section-heading relative pt-32">
      {/* MOBILE HERO IMAGE */}
      <div className="container md:hidden">
        <motion.div
          className="relative w-full rounded-2xl overflow-hidden mb-6"
          {...slideLeft(0.2)}
        >
          <img
            src={contactHero}
            alt=""
            className="w-full h-auto aspect-[4/3] object-cover"
          />

          {/* Small Star Puck on Mobile */}
          <div className="absolute left-3 -bottom-4">
            <div className="size-14 rounded-full border border-dark-midLight/70 bg-dark-dark/50 backdrop-blur-sm flex items-center justify-center">
              <Star className="opacity-80" size={16} />
            </div>
          </div>
        </motion.div>

        {/* Stacked Text on Mobile */}
        <motion.div className="mt-6" {...slideRight(0.2)}>
          <motion.p
            className="text-grey-midDark uppercase text-sm mb-2"
            {...fadeUp(0.4)}
          >
            Contact
          </motion.p>
          <motion.h1
            className="uppercase text-2xl font-bold leading-tight dark:text-white"
            {...fadeUp(0.4)}
          >
            Get in Touch with Me
          </motion.h1>
          <p className="mt-3 text-grey-dark text-sm leading-7">
            Step into a world of timeless photography with Kingsley Rawfile.
            Explore our range of photography services, each crafted to tell your
            unique story through captivating images. Whether it's the magic of
            portraits, the emotion of events, or the allure of commercial
            photography, we're here to bring your vision to life.
          </p>
        </motion.div>
      </div>

      {/* DESKTOP MASKED HERO + ANIMATION */}
      <div className="container hidden md:block">
        <div className="relative w-full aspect-[1200/420]">
          {/* Masked Photo */}
          <motion.div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url(${contactHero})`,
              WebkitMaskImage: `url(${contactCard})`,
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskSize: '100% 100%',
              WebkitMaskPosition: 'center',
              maskImage: `url(${contactCard})`,
              maskRepeat: 'no-repeat',
              maskSize: '100% 100%',
              maskPosition: 'center',
            }}
            {...fadeUp(0.4)}
          ></motion.div>

          {/* HEADING -TEXT OVERLAY (Desktop Only) */}
          <motion.div
            className="absolute z-10 top-[25%] lg:top-[30%] xl:top-[32%] left-[1%] md:w-[470px] lg:w-[650px] xl:w-[800px]"
            {...fadeUp(0.4)}
          >
            <p className="text-grey-midDark uppercase text-sm md:hidden">
              contact me
            </p>
            <motion.h1
              className="uppercase text-2xl xl:text-4xl font-bold leading-tight dark:text-white"
              {...fadeUp(0.2)}
            >
              Get in Touch with Me
            </motion.h1>
            <motion.p
              className="mt-2 xl:mt-3 text-grey-dark text-sm lg:text-base xl:text-lg leading-tight"
              {...fadeUp(0.2)}
            >
              Step into the world of Kingsley Rawfile, where every portrait,
              event, and commercial shoot is crafted to capture emotion and tell
              your story. Together, we’ll turn your vision into timeless
              photography.
            </motion.p>
          </motion.div>

          {/* SOCIAL BUTTONS */}
          <motion.div
            className="flex items-center justify-between gap-2 xl:border 2xl:w-[200px] xl:border-dark-midLight rounded-full p-2 absolute xl:right-[1%] lg:right-[0%] md:-right-[1%] 2xl:top-[14%] xl:top-[12.5%] lg:top-[11%] md:top-[10%]"
            {...slideRight(0.6)}
          >
            <a
              href="https://web.facebook.com/Rawimagix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="p-2 dark:bg-dark-midLight border border-dark-dark rounded-full dark:hover:bg-purple-midLight hover:bg-purple-midLight hover:text-absolute-white lg:size-10 flex items-center justify-center transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/rawfilefotografy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="p-2 dark:bg-dark-midLight border border-dark-dark rounded-full dark:hover:bg-purple-midLight hover:bg-purple-midLight hover:text-absolute-white lg:size-10 flex items-center justify-center transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@rawfilefotografy?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on TikTok"
              className="p-2 dark:bg-dark-midLight border border-dark-dark rounded-full dark:hover:bg-purple-midLight hover:bg-purple-midLight hover:text-absolute-white lg:size-10 flex items-center justify-center transition duration-300"
            >
              <FaTiktok />
            </a>
          </motion.div>

          {/* RIGHT CAPTION */}
          <motion.div
            className="absolute z-10 bottom-[2.5%] right-[1%] lg:right-[2%] max-w-[140px] text-[11px] lg:text-[13px] leading-relaxed tracking-wide text-grey-midDark"
            {...fadeUp(0.4)}
          >
            SCROLL DOWN TO SEE <br /> THE WORKS
          </motion.div>
        </div>
      </div>
    </section>
  );
};
``;
export default ContactHero;
