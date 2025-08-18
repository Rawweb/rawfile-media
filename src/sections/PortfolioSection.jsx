import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import portfolio from '../assets/portfolio.jpg';
import portfolio1 from '../assets/portfolio-1.jpg';
import portfolio3 from '../assets/portfolio-3.jpg';

const projects = [
  {
    name: 'Faces of Resilience',
    date: 'March 2022',
    image: portfolio,
  },
  {
    name: 'A Wedding Tale',
    date: 'April 2025',
    image: portfolio1,
  },
  {
    name: 'Product Elegance',
    date: 'January 2020',
    image: portfolio3,
  },
];

const PortfolioCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="container section-heading">
      {/* TOP */}
      <div className="flex flex-col gap-4 md:flex-row items-start justify-between md:items-center mt-20 border-b border-dark-midLight pb-8">
        <div>
          <p className="text-grey-midDark uppercase text-sm">portfolio</p>
          <h1 className="uppercase text-2xl md:text-3xl font-bold leading-tight">
            explore my photography work
          </h1>
        </div>

        <Link to="/projects" className="button flex items-center gap-2">
          View More
        </Link>
      </div>

      {/* BOTTOM - DESKTOP*/}
      <div className="hidden md:grid md:grid-cols-3 gap-8 pt-12">
        {projects.map((item, index) => (
          <div
            key={index}
            className="rounded-xl rounded-bl-none rounded-br-none overflow-hidden group bg-dark-midDark"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Details */}
            <div className="flex items-start justify-between pt-4 bg-dark-dark">
              <div>
                <h3 className="text-grey-light text-xs font-semibold">
                  {item.name}
                </h3>
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

      {/* Mobile Carousel */}
      <div className="md:hidden relative pt-12">
        {/* Slider Wrapper */}
        <div className="overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((item, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 rounded-xl overflow-hidden group bg-dark-midDark"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-80 object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex items-center justify-between p-4 bg-dark-dark">
                  <div>
                    <h3 className="text-grey-light text-sm font-semibold">
                      {item.name}
                    </h3>
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
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-4 px-4 py-2 border border-dark-midLight rounded-full">
            <button
              onClick={() => setCurrentIndex(prev => Math.max(prev - 1, 0))}
              disabled={currentIndex === 0}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition duration-300
          ${
            currentIndex === 0
              ? 'bg-dark-midLight text-white opacity-40 cursor-not-allowed'
              : 'bg-dark-midLight hover:bg-purple-midDark text-white'
          }`}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() =>
                setCurrentIndex(prev => Math.min(prev + 1, projects.length - 1))
              }
              disabled={currentIndex === projects.length - 1}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition duration-300
          ${
            currentIndex === projects.length - 1
              ? 'bg-dark-midLight text-white opacity-40 cursor-not-allowed'
              : 'bg-dark-midLight hover:bg-purple-midDark text-white'
          }`}
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
