import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { GiNinjaStar } from 'react-icons/gi';
import { motion, useScroll, useTransform } from 'framer-motion';
import rawfileImage from '../assets/rawfile.png';

const AboutSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 70, damping: 20 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div>
          <p className="text-grey-midDark uppercase text-sm">about</p>
          <h1 className="uppercase text-2xl md:text-3xl font-bold leading-tight">
            I am Kingsley
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
        <motion.div
          className="w-full md:flex-1 relative"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="relative w-full rounded-[40px] overflow-hidden">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-black rounded-br-[100px]" />
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-black rounded-tl-[100px]" />

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
          className="flex-1 border border-dark-midLight rounded-[30px] flex flex-col gap-8 bg-dark-dark/30 backdrop-blur-sm relative"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
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
              My journey as a photographer has been a lifelong quest to capture
              the extraordinary in the ordinary, to freeze fleeting moments in
              time, and to share the world’s beauty as I see it. Based in the
              enchanting landscapes of the USA, I find inspiration in every
              corner of this diverse and vibrant country. Join me as we embark
              on a visual odyssey, where each photograph tells a story, and
              every frame is a piece of my heart.
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
                <span className="text-grey-midDark mb-1">Email</span>
                <span className="text-base text-grey-light">
                  rawfilefotografy@gmail.com
                </span>
              </p>
            </div>

            {/* SOCIAL + BUTTONS */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              {/* Social */}
              <motion.div
                className="flex items-center gap-2 border border-dark-midLight rounded-full p-2 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <a href="#" className="btn"><FaFacebookF /></a>
                <a href="#" className="btn"><FaTwitter /></a>
                <a href="#" className="btn"><FaLinkedinIn /></a>
              </motion.div>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto text-sm xl:text-base relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
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
