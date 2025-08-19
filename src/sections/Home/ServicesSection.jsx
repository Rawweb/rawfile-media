import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { GiLaserSparks } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // ✅ added
import tall3 from '../../assets/tall-3.jpg';

const ServicesSection = () => {
  return (
    <section className="container section-heading relative">
      {/* TOP */}
      <motion.div
        className="flex flex-col gap-4 md:flex-row items-start justify-between md:items-center mt-20 border-b border-dark-midLight pb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          type: 'spring',
          stiffness: 70,
          damping: 20,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div>
          <p className="text-grey-midDark uppercase text-sm">services</p>
          <h1 className="uppercase text-2xl md:text-3xl font-bold leading-tight">
            my photography services
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/services" className="button flex items-center gap-2 ">
            View More
            <span>
              <FaArrowRight className="size-3" />
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* BOTTOM */}
      <div className="pt-12 flex flex-col md:flex-row gap-5 items-center">
        {/* LEFT PANEL - SERVICES LIST */}
        <motion.div
          className="space-y-6 flex-1"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <h1 className="text-xl uppercase text-grey-midLight">events</h1>
            <button className="flex items-center gap-2 bg-purple-light hover:bg-purple-midLight text-white px-6 py-2 rounded-full transition duration-300 hover:shadow-[0_0_20px_rgba(174,161,247,0.9)] animate-purple-glow">
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
          <motion.div
            className="space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.15 }}
          >
            {[
              'Coverage for weddings, parties, corporate functions, and more.',
              'Skilled photographers who know how to seize the moment.',
              'A mix of candid and posed shots for a comprehensive story.',
              "Quick turnaround for you to relive the day's highlights.",
            ].map((text, i) => (
              <motion.div
                key={i}
                className="highlight-btn"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <GiLaserSparks className="text-purple-light" />
                <p>{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT PANEL - IMAGE */}
        <motion.div
          className="w-full md:flex-1"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="w-full overflow-hidden rounded-t-[20px] rounded-bl-[100px] rounded-br-[20px]">
            <motion.img
              src={tall3}
              alt="custom"
              className="w-full h-[350px] sm:h-[450px] md:h-[550px] object-cover rounded-[40px]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
