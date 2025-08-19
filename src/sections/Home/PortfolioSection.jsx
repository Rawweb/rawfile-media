import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import portfolio from '@assets/portfolio.jpg';
import portfolio1 from '@assets/portfolio-1.jpg';
import portfolio3 from '@assets/portfolio-3.jpg';

const projects = [
  { name: 'Faces of Resilience', date: 'March 2022', image: portfolio },
  { name: 'A Wedding Tale', date: 'April 2025', image: portfolio1 },
  { name: 'Product Elegance', date: 'January 2020', image: portfolio3 },
];

const PortfolioCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="container section-heading relative">
      {/* TOP */}
      <motion.div
        className="flex flex-col gap-4 md:flex-row items-start justify-between md:items-center mt-20 border-b border-dark-midLight pb-8 relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 70, damping: 20 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div>
          <p className="text-grey-midDark uppercase text-sm">portfolio</p>
          <h1 className="uppercase text-2xl md:text-3xl font-bold leading-tight">
            explore my photography work
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <Link to="/projects" className="button flex items-center gap-2">
            View More
            <span>
              <FaArrowRight className="size-3" />
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* BOTTOM - DESKTOP GRID */}
      <motion.div
        className="hidden md:grid md:grid-cols-3 gap-8 pt-12 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {projects.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-xl rounded-bl-none rounded-br-none overflow-hidden group bg-dark-midDark relative"
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 30 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 70 } },
            }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <motion.img
                src={item.image}
                alt={item.name}
                className="w-full h-72 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Details */}
            <div className="flex items-start justify-between pt-4 bg-dark-dark p-3">
              <div>
                <h3 className="text-grey-light text-xs font-semibold">{item.name}</h3>
                <p className="text-grey-midDark text-xs">{item.date}</p>
              </div>
              <Link
                to="/projects"
                className="flex items-center gap-1 text-grey-light text-xs uppercase hover:text-purple-midLight transition"
              >
                View Project <FiArrowUpRight />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Carousel */}
      <div className="md:hidden relative pt-12">
        <motion.div
          className="overflow-hidden rounded-xl relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((item, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 rounded-xl overflow-hidden group bg-dark-midDark relative"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-dark-dark">
                  <div>
                    <h3 className="text-grey-light text-sm font-semibold">{item.name}</h3>
                    <p className="text-grey-midDark text-xs">{item.date}</p>
                  </div>
                  <Link
                    to="/projects"
                    className="flex items-center gap-1 text-grey-light text-xs uppercase hover:text-purple-midLight transition"
                  >
                    View Project <FiArrowUpRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-4 px-4 py-2 border border-dark-midLight rounded-full">
            <button
              onClick={goPrev}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-midLight hover:bg-purple-midLight text-white transition"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={goNext}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-midLight hover:bg-purple-midLight text-white transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCards;
