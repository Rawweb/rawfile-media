import React, { useCallback, useState } from 'react';
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import serviceCard from '@assets/service-card.png';
import portraitImage from '@assets/portrait-image.jpg';
import portraitImage1 from '@assets/portrait-image1.jpg';
import portraitImage2 from '@assets/portrait-image2.jpg';
import { GiLaserSparks } from 'react-icons/gi';

const portraitImages = [portraitImage, portraitImage1, portraitImage2];

const Portrait = () => {
  const [current, setCurrent] = useState(0);
  const prev = useCallback(
    () =>
      setCurrent(
        current => (current - 1 + portraitImages.length) % portraitImages.length
      ),
    []
  );
  const next = useCallback(
    () => setCurrent(current => (current + 1) % portraitImages.length),
    []
  );

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
    <section className="relative ">
      <div className="container section-heading border-b border-t border-dark-midLight">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT */}
          <motion.div
            className="space-y-4 order-2 md:order-1"
            {...slideLeft(0.4)}
          >
            <motion.h1
              className="uppercase tracking-wider text-lg  dark:text-grey-midLight"
              {...fadeUp(0.7)}
            >
              Portrait Photography
            </motion.h1>

            <p className="text-[14px] leading-relaxed text-grey-midDark">
              Our portrait photography service is all about showcasing your
              unique personality. Whether you need a professional headshot, a
              family portrait, or a personal photoshoot, we create images that
              reflect your true self. We work closely with you to bring out your
              best angles and expressions, ensuring every portrait tells your
              story.
            </p>

            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-wider dark:text-grey-midLight text-grey-dark dark:hover:text-purple-midLight hover:text-purple-midLight transition duration-300"
            >
              View Projects
              <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="relative order-1 md:order-2 w-full min-w-0"
            {...slideRight(0.4)}
          >
            {/* Masked frame */}
            <div className="rounded-lg ring-1 ring-white/10">
              <div
                className="relative w-full overflow-hidden"
                style={{
                  WebkitMaskImage: `url(${serviceCard})`,
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskSize: '100% 100%',
                  WebkitMaskPosition: 'center',
                  maskImage: `url(${serviceCard})`,
                  maskRepeat: 'no-repeat',
                  maskSize: '100% 100%',
                  maskPosition: 'center',
                }}
              >
                {/* Image stage */}
                <div className="relative aspect-[21/14] lg:aspect-[21/9] w-full ">
                  {portraitImages.map((src, idx) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                        idx === current ? 'opacity-100' : 'opacity-0'
                      }`}
                      draggable={false}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Centered nav pill */}
            <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2">
              <div className="pointer-events-auto flex items-center gap-1 rounded-full dark:bg-dark-midDark px-2 py-2 shadow-[0_6px_20px_rgba(0,0,0,0.45)] ring-1 ring-grey-midLight/20">
                <button
                  aria-label="Previous"
                  onClick={prev}
                  className="grid lg:size-9 size-6 place-items-center rounded-full dark:bg-dark-midDark ring-1 dark:ring-grey-midLight/20 ring-dark-dark transition dark:hover:bg-purple-midLight hover:bg-purple-midLight hover:text-absolute-white duration-300"
                  type="button"
                >
                  <FiChevronLeft className="dark:text-slate-200" />
                </button>
                <button
                  aria-label="Next"
                  onClick={next}
                  className="grid lg:size-9 size-6 place-items-center rounded-full dark:bg-dark-midDark ring-1 dark:ring-grey-midLight/20 ring-dark-dark transition dark:hover:bg-purple-midLight hover:bg-purple-midLight hover:text-absolute-white duration-300"
                  type="button"
                >
                  <FiChevronRight className="dark:text-slate-200" />
                </button>
              </div>
            </div>

            {/* (Optional) SR-only live region so screen readers know slide changed */}
            <span className="sr-only" aria-live="polite">
              Slide {current + 1} of {portraitImages.length}
            </span>
          </motion.div>
        </div>
      </div>

      {/* PRICE SECTIONS */}
      {/* Individual Sessions */}
      <div className="container section-heading grid gap-10 md:grid-cols-12 border-b border-dark-midLight">
        {/* LEFT COLUMN */}
        <motion.div
          className="md:col-span-5 w-full min-w-0 space-y-2"
          {...slideLeft(0.4)}
        >
          <p className="dark:text-grey-midLight">Individual Session</p>
          <div className="flex gap-2 items-center justify-between md:justify-normal">
            <motion.h1 className="text-5xl font-bold" {...fadeUp(0.7)}>
              ₦250
            </motion.h1>
            <Link
              to="/book-us"
              className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-wider text-grey-dark dark:text-grey-midLight dark:hover:text-purple-midLight hover:text-purple-midLight transition duration-300"
            >
              Book a Session
              <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          className="md:col-span-7 w-full min-w-0"
          {...slideRight(0.4)}
        >
          {/* SERVICE HIGHLIGHTS */}
          <motion.div className="space-y-3" {...parentMotion}>
            {[
              'Perfect for professional headshots, social media, or personal branding.',
              'Expert posing guidance to bring out your best angles.',
              'Studio or outdoor location of your choice.',
              'Additional retouched images available on request.',
            ].map((text, i) => (
              <motion.div key={i} className="highlight-btn" {...childMotion}>
                <GiLaserSparks className="text-purple-light" />
                <p>{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Family Sessions */}
      <div className="container section-heading grid gap-10 md:grid-cols-12 border-b border-dark-midLight">
        {/* LEFT COLUMN */}
        <motion.div
          className="md:col-span-5 w-full min-w-0 space-y-2"
          {...slideLeft(0.4)}
        >
          <p className="dark:text-grey-midLight">Family Session</p>
          <div className="flex gap-2 items-center justify-between md:justify-normal">
            <motion.h1 className="text-5xl font-bold" {...fadeUp(0.7)}>
              ₦250
            </motion.h1>
            <Link
              to="/book-us"
              className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-wider text-grey-dark dark:text-grey-midLight dark:hover:text-purple-midLight hover:text-purple-midLight transition duration-300"
            >
              Book a Session
              <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          className="md:col-span-7 w-full min-w-0"
          {...slideRight(0.4)}
        >
          {/* SERVICE HIGHLIGHTS */}
          <motion.div className="space-y-3" {...parentMotion}>
            {[
              'Create timeless memories with your loved ones in a relaxed setting.',
              'Skilled photographers who know how to seize the moment.',
              'Choice of outdoor or in-home location for a personal touch.',
              'Additional retouched images available on request.',
            ].map((text, i) => (
              <motion.div key={i} className="highlight-btn" {...childMotion}>
                <GiLaserSparks className="text-purple-light" />
                <p>{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Couple Sessions */}
      <div className="container section-heading grid gap-10 md:grid-cols-12 border-b border-dark-midLight">
        {/* LEFT COLUMN */}
        <motion.div
          className="md:col-span-5 w-full min-w-0 space-y-2"
          {...slideLeft(0.4)}
        >
          <p className="dark:text-grey-midLight">Couple Session</p>
          <div className="flex gap-2 items-center justify-between md:justify-normal">
            <motion.h1 className="text-5xl font-bold" {...fadeUp(0.7)}>
              ₦250
            </motion.h1>
            <Link
              to="/book-us"
              className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-wider text-grey-dark dark:text-grey-midLight  dark:hover:text-purple-midLight hover:text-purple-midLight transition duration-300"
            >
              Book a Session
              <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          className="md:col-span-7 w-full min-w-0"
          {...slideRight(0.4)}
        >
          {/* SERVICE HIGHLIGHTS */}
          <motion.div className="space-y-3" {...parentMotion}>
            {[
              'Celebrate your love story with intimate, candid, and posed shots.',
              '2–3 outfit changes for variety and personality.',
              'Romantic studio or an outdoor location to match your style.',
              'Additional retouched images available on request.',
            ].map((text, i) => (
              <motion.div key={i} className="highlight-btn" {...childMotion}>
                <GiLaserSparks className="text-purple-light" />
                <p>{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portrait;
