import React, { useCallback, useState } from 'react';
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import serviceCard from '@assets/service-card.png';
import eventImage from '@assets/event-image.jpg';
import eventImage1 from '@assets/event-image1.jpg';
import eventImage2 from '@assets/event-image2.jpg';
import { GiLaserSparks } from 'react-icons/gi';

const eventImages = [eventImage, eventImage1, eventImage2];

const Events = () => {
  const [current, setCurrent] = useState(0);
  const prev = useCallback(
    () =>
      setCurrent(
        current => (current - 1 + eventImages.length) % eventImages.length
      ),
    []
  );
  const next = useCallback(
    () => setCurrent(current => (current + 1) % eventImages.length),
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
              Events Photography
            </motion.h1>

            <p className="text-[14px] leading-relaxed text-grey-midDark">
              Our event photography service is dedicated to capturing the magic
              of your special occasions. Whether it's a wedding, corporate
              event, or milestone celebration, we're there to document every
              heartfelt moment. We blend into the background, ensuring natural
              and candid shots that reflect the emotions of the day.
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
                  {eventImages.map((src, idx) => (
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
              Slide {current + 1} of {eventImages.length}
            </span>
          </motion.div>
        </div>
      </div>

      {/* PRICE SECTIONS */}
      {/* Wedding Coverage */}
      <div className="container section-heading grid gap-10 md:grid-cols-12 border-b border-dark-midLight">
        {/* LEFT COLUMN */}
        <motion.div
          className="md:col-span-5 w-full min-w-0 space-y-2"
          {...slideLeft(0.4)}
        >
          <p className="dark:text-grey-midLight">Wedding Session</p>
          <h1 className="text-2xl font-bold uppercase">Starting From</h1>
          <div className="flex gap-2 items-center justify-between md:justify-normal">
            <motion.h1 className="text-5xl font-bold" {...fadeUp(0.7)}>
              ₦500K
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
              'Full-day coverage of your wedding ceremony & reception.',
              'Candid & posed shots to capture genuine emotions.',
              'Optional pre-wedding (engagement) or post-wedding shoots.',
              'Indoor, outdoor, or destination coverage available.',
              'Professional retouching & curated photo album.',
              'High-resolution digital gallery & print options.',
              'Family & group portraits beautifully composed.',
              'Creative direction to tell your unique love story.',
            ].map((text, i) => (
              <motion.div key={i} className="highlight-btn" {...childMotion}>
                <GiLaserSparks className="text-purple-light" />
                <p>{text}</p>
              </motion.div>
            ))}

            {/* Quick chips to specify Milestone types */}
            <div className="flex flex-wrap gap-2 pt-3">
              {[
                { label: 'Traditional Wedding', slug: 'traditional' },
                { label: 'White Wedding', slug: 'white' },
                { label: 'Engagement Shoot', slug: 'engagement' },
                { label: 'Pre-Wedding Session', slug: 'pre-wedding' },
                { label: 'Destination Wedding', slug: 'destination' },
                { label: 'Post-Wedding Shoot', slug: 'post-wedding' },
              ].map(tag => (
                <Link
                  key={tag.slug}
                  to={`/book-us?type=milestone&sub=${tag.slug}`}
                  className="px-3 py-1 rounded-full border border-dark-midLight/60 text-xs
                 dark:text-grey-midLight hover:border-purple-midLight hover:text-purple-midLight
                 transition-colors duration-200"
                >
                  {tag.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Party Coverage */}
      <div className="container section-heading grid gap-10 md:grid-cols-12 border-b border-dark-midLight">
        {/* LEFT COLUMN */}
        <motion.div
          className="md:col-span-5 w-full min-w-0 space-y-2"
          {...slideLeft(0.4)}
        >
          <p className="dark:text-grey-midLight">Party Coverage</p>
          <h1 className="text-2xl font-bold uppercase">Starting From</h1>
          <div className="flex gap-2 items-center justify-between md:justify-normal">
            <motion.h1 className="text-5xl font-bold" {...fadeUp(0.7)}>
              ₦300k
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
              'Comprehensive coverage of birthdays, anniversaries & social events.',
              'Candid and group shots to capture energy & fun.',
              'Indoor, outdoor, or venue-based photography available.',
              'Professional editing & retouching of selected images.',
              'High-resolution digital gallery for easy sharing.',
              'Special attention to décor, details & atmosphere.',
              'Optional highlight video add-on.',
            ].map((text, i) => (
              <motion.div key={i} className="highlight-btn" {...childMotion}>
                <GiLaserSparks className="text-purple-light" />
                <p>{text}</p>
              </motion.div>
            ))}

            {/* Quick chips to specify Milestone types */}
            <div className="flex flex-wrap gap-2 pt-3">
              {[
                { label: 'Birthday Party', slug: 'birthday' },
                { label: 'Bridal Shower', slug: 'bridal-shower' },
                { label: 'Baby Shower', slug: 'baby-shower' },
                { label: 'House Party', slug: 'house-party' },
                { label: 'Corporate Party', slug: 'corporate-party' },
              ].map(tag => (
                <Link
                  key={tag.slug}
                  to={`/book-us?type=milestone&sub=${tag.slug}`}
                  className="px-3 py-1 rounded-full border border-dark-midLight/60 text-xs
                 dark:text-grey-midLight hover:border-purple-midLight hover:text-purple-midLight
                 transition-colors duration-200"
                >
                  {tag.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Milestone Coverage */}
      <div className="container section-heading grid gap-10 md:grid-cols-12 border-b border-dark-midLight">
        {/* LEFT COLUMN */}
        <motion.div
          className="md:col-span-5 w-full min-w-0 space-y-2"
          {...slideLeft(0.4)}
        >
          <p className="dark:text-grey-midLight">Milestones</p>
          <div className="flex gap-2 items-center justify-between md:justify-normal">
            <motion.h1 className="text-5xl font-bold" {...fadeUp(0.7)}>
              Custom Pricing
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
              'Capture life’s unforgettable milestones — graduations, dedications, retirements & anniversaries.',
              'Candid and posed portraits to preserve genuine emotions.',
              'On-location coverage at schools, halls, homes, or outdoor venues.',
              'Family & group portraits included for lasting memories.',
              'Professional editing & retouching for a polished look.',
              'High-resolution digital gallery for easy sharing & printing.',
              'Tailored packages based on event size and duration.',
            ].map((text, i) => (
              <motion.div key={i} className="highlight-btn" {...childMotion}>
                <GiLaserSparks className="text-purple-light" />
                <p>{text}</p>
              </motion.div>
            ))}

            {/* Optional: quick chips to specify Milestone types */}
            <div className="flex flex-wrap gap-2 pt-3">
              {[
                { label: 'Convocation', slug: 'convocation' },
                { label: 'Child Dedication', slug: 'child-dedication' },
                { label: 'Anniversary', slug: 'anniversary' },
                { label: 'Retirement', slug: 'retirement' },
                { label: 'Achievement Award', slug: 'achievement' },
                { label: 'Naming Ceremony', slug: 'naming' },
              ].map(tag => (
                <Link
                  key={tag.slug}
                  to={`/book-us?type=milestone&sub=${tag.slug}`}
                  className="px-3 py-1 rounded-full border border-dark-midLight/60 text-xs
                 dark:text-grey-midLight hover:border-purple-midLight hover:text-purple-midLight
                 transition-colors duration-200"
                >
                  {tag.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
