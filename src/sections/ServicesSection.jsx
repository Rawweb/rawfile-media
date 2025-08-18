import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { GiLaserSparks } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import tall3 from '../assets/tall-3.jpg';

const ServicesSection = () => {
  return (
    <section className="container section-heading">
      {/* TOP */}
      <div className="flex flex-col gap-4 md:flex-row items-start justify-between md:items-center mt-20 border-b border-dark-midLight pb-8">
        <div>
          <div>
            <p className="text-grey-midDark uppercase text-sm">services</p>
            <h1 className="uppercase text-2xl md:text-3xl font-bold leading-tight">
              my photography services
            </h1>
          </div>
        </div>

        <Link to="/services" className="button flex items-center gap-2 ">
          View More
          <span>
            <FaArrowRight className="size-3" />
          </span>
        </Link>
      </div>

      {/* BOTTOM */}
      <div className="pt-12 flex flex-col md:flex-row gap-5 items-center">
        {/* LEFT PANEL - SERVICES LIST */}
        <div className="space-y-6 flex-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl uppercase text-grey-midLight">events</h1>
            <button className="flex items-center gap-2 bg-purple-dark hover:bg-purple-midDark text-white px-6 py-2 rounded-full transition duration-300 hover:shadow-[0_0_20px_rgba(174,161,247,0.9)] animate-purple-glow">
              <FiArrowUpRight className="size-5" />
            </button>
          </div>
          <p className="text-grey-midDark text-sm leading-relaxed">
            Our event photography service is dedicated to capturing the magic of
            your special occasions. Whether it's a wedding, corporate event, or
            milestone celebration, we're there to document every heartfelt
            moment. We blend into the background, ensuring natural and candid
            shots that reflect the emotions of the day.
          </p>
          {/* SERVICE HIGHLIGHTS */}
          <div className="space-y-3">
            <h1 className="text-sm text-grey-midLight">Service Highlights</h1>
            <div className="highlight-btn">
              <GiLaserSparks className="text-purple-dark" />
              <p>
                Coverage for weddings, parties, corporate functions, and more.
              </p>
            </div>

            <div className="highlight-btn">
              <GiLaserSparks className="text-purple-dark" />
              <p>Skilled photographers who know how to seize the moment.</p>
            </div>

            <div className="highlight-btn">
              <GiLaserSparks className="text-purple-dark" />
              <p>A mix of candid and posed shots for a comprehensive story.</p>
            </div>

            <div className="highlight-btn">
              <GiLaserSparks className="text-purple-dark" />
              <p>Quick turnaround for you to relive the day's highlights.</p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL - IMAGE */}
        <div className="w-full md:flex-1">
          <div className="w-full overflow-hidden rounded-t-[20px] rounded-bl-[100px] rounded-br-[20px]">
            <img
              src={tall3}
              alt="custom"
              className="w-full h-[350px] sm:h-[450px] md:h-[550px] object-cover rounded-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
