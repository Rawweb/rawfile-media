import React, { useState, useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioGrid = ({
  title,
  subtitle,
  projects,
  viewMoreLink = '/projects',
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const scrollRef = useRef(null);

  // Drag state refs for desktop scroll
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = e => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };
  const handleMouseUp = () => (isDragging.current = false);
  const handleMouseLeave = () => (isDragging.current = false);
  const handleMouseMove = e => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1; // multiplier for speed
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Arrows
  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
      scrollRef.current?.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };
  const goNext = () => {
    if (currentIndex < projects.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
      scrollRef.current?.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  // Reusable fade-up animation
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24, filter: 'blur(2px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.6, ease: 'easeOut', delay },
    viewport: { once: true, amount: 0.5 },
  });

  return (
    <section
      className={`container section-heading relative pb-20 ${className}`}
    >
      {/* TOP */}
      <div className="flex flex-col gap-4 md:flex-row items-start justify-between md:items-center pb-8 relative">
        <motion.div {...fadeUp(0)}>
          <p className="text-grey-midDark uppercase text-sm">{subtitle}</p>
          <h1 className="uppercase text-2xl md:text-3xl font-bold leading-tight">
            {title}
          </h1>
        </motion.div>

        {/* Desktop controls */}
        <motion.div
          className="hidden md:flex items-center gap-4 px-4 py-2 rounded-full"
          {...fadeUp(0.1)}
        >
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-midLight hover:bg-purple-midLight text-white transition disabled:opacity-40"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={goNext}
            disabled={currentIndex === projects.length - 1}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-midLight hover:bg-purple-midLight text-white transition disabled:opacity-40"
          >
            <FaChevronRight />
          </button>
        </motion.div>
      </div>

      {/* DESKTOP GRID (scrollable + draggable + stagger motion) */}
      <motion.div
        ref={scrollRef}
        className="hidden md:flex gap-4 overflow-x-auto scroll-smooth scrollbar-blue mt-12 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {projects.map((item, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-full md:w-1/3 border border-dark-midLight"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-96 object-cover"
            />
            <div className="flex flex-col lg:flex-row items-start justify-between pt-4 gap-2 bg-dark-dark p-3">
              <div>
                <h3 className="text-grey-light text-sm xl:text-base font-semibold uppercase">
                  {item.name}
                </h3>
                <p className="text-grey-midDark text-xs mt-1">{item.date}</p>
              </div>
              <Link
                to={viewMoreLink}
                className="w-full lg:w-32 flex items-center justify-between gap-1 text-grey-light btn-primary uppercase transition"
              >
                View Project <FiArrowUpRight />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* MOBILE CAROUSEL (animated slide only) */}
      <div className="md:hidden relative pt-12">
        <div className="overflow-hidden rounded-xl relative h-[28rem]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ x: direction > 0 ? 300 : -300 }}
              animate={{ x: 0 }}
              exit={{ x: direction > 0 ? -300 : 300 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <div className="border border-dark-midLight h-full">
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].name}
                  className="w-full h-96 object-cover"
                />
                <div className="flex items-start justify-between pt-4 bg-dark-dark p-3">
                  <div>
                    <h3 className="text-grey-light font-semibold uppercase">
                      {projects[currentIndex].name}
                    </h3>
                    <p className="text-grey-midDark text-xs mt-1">
                      {projects[currentIndex].date}
                    </p>
                  </div>
                  <Link
                    to={viewMoreLink}
                    className="flex items-center gap-1 text-grey-light button uppercase transition"
                  >
                    View Project <FiArrowUpRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile arrows */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-4 px-4 py-2 rounded-full">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-midLight hover:bg-purple-midLight text-white transition disabled:opacity-40"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={goNext}
              disabled={currentIndex === projects.length - 1}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-midLight hover:bg-purple-midLight text-white transition disabled:opacity-40"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
