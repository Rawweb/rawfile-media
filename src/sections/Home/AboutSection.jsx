import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import { GiNinjaStar } from 'react-icons/gi';
import { motion, useScroll, useTransform } from 'framer-motion';
import rawfileImage from '@assets/rawfile.png';

const AboutSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

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
    <section ref={sectionRef} className="container section-heading relative">
      {/* 🔮 Soft gradient accent with parallax */}
      <motion.div
        style={{ y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="absolute top-40 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-purple-600 via-pink-500 to-transparent blur-[160px] rounded-full pointer-events-none"
      />

      {/* TOP */}
      <motion.div
        className="flex flex-col gap-4 md:flex-row items-start justify-between md:items-center mt-20 border-b border-dark-midLight pb-8 relative z-10"
        {...fadeUp(0.4)}
      >
        <div>
          <motion.p
            className="text-grey-midDark uppercase text-sm"
            {...fadeUp(0.4)}
          >
            about
          </motion.p>
          <motion.h1
            className="uppercase text-2xl md:text-3xl font-bold leading-tight"
            {...fadeUp(0.4)}
          >
            I am Kingsley
          </motion.h1>
        </div>

        <motion.div className="relative" {...fadeUp(0.4)}>
          <Link to="/about" className="button flex items-center gap-2 ">
            Learn More
            <span>
              <FaArrowRight className="size-3" />
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* BOTTOM */}
      <div className="pt-12 flex flex-col md:flex-row gap-5 items-center relative z-10">
        {/* LEFT IMAGE */}
        <motion.div className="w-full md:flex-1 relative" {...slideLeft(0.2)}>
          <div className="relative w-full rounded-[40px] overflow-hidden">
            <div className="absolute -top-4 -left-4 w-20 h-20 dark:bg-black bg-absolute-white/90 rounded-br-[100px] " />
            <div className="absolute -bottom-4 -right-4 w-40 h-40 dark:bg-black bg-absolute-white rounded-tl-[100px]" />

            <motion.img
              src={rawfileImage}
              alt=""
              className="w-full h-[350px] sm:h-[450px] md:h-[550px] object-cover rounded-[40px]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>

        {/* RIGHT PANEL */}
        <motion.div
          className="flex-1 border border-dark-midLight rounded-[30px] flex flex-col gap-8 dark:bg-dark-dark/30 backdrop-blur-sm relative"
          {...slideRight(0.2)}
        >
          {/* INTRODUCTION */}
          <div className="border-b border-dark-midLight pb-6 p-6">
            <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
              <span className="text-purple-light">
                <GiNinjaStar />
              </span>
              Introduction
            </h3>
            <p className="text-grey-midDark text-sm leading-relaxed">
              Growing up in Anambra, Nigeria, I learned to see beauty where
              others might overlook it, the laughter of family gatherings, the
              colors of daily life, and the quiet poetry of simple moments. That
              early curiosity became a lifelong calling; to turn the ordinary
              into the extraordinary through photography. Each click of the
              shutter is my way of honoring life’s stories, whether it’s a
              portrait, a celebration, or a fleeting glance that deserves to be
              remembered. Photography, for me, isn’t just about images; it’s
              about creating memories that live on long after the moment has
              passed.
            </p>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="p-6">
            <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
              <span className="text-purple-light">
                <GiNinjaStar />
              </span>
              Contact Information
            </h3>
            <div className="flex flex-col lg:flex-row justify-between gap-5 mb-6">
              <p className="flex flex-col ">
                <span className="text-grey-dark mb-1">Email</span>
                <span className="text-base text-grey-midDark">
                  rawfilefotografy@gmail.com
                </span>
              </p>
            </div>

            {/* SOCIAL + BUTTONS */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              {/* Social */}
              <motion.div
                className="flex items-center gap-2 border border-dark-midLight rounded-full p-2 relative"
                {...fadeUp(0.4)}
              >
                <a href="#" className="btn">
                  <FaFacebookF />
                </a>
                <a href="#" className="btn">
                  <FaTwitter />
                </a>
                <a href="#" className="btn">
                  <FaLinkedinIn />
                </a>
              </motion.div>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto text-sm xl:text-base relative"
                {...fadeUp(0.4)}
              >
                <Link to="/contact" className="button w-full sm:w-auto">
                  Let&apos;s Work
                </Link>
                <Link className="button w-full sm:w-auto">Download CV</Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
