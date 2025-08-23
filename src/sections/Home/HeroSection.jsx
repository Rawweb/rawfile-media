import React from 'react';
import { motion } from 'framer-motion';
import Cta from '@components/ui/Cta';
import MarqueeItems from '@components/ui/MarqueeItems';
import spiralBg from '@assets/spiralBg.png';
import tall from '@assets/tall.jpg';
import tall2 from '@assets/tall-2.jpg';
import tall3 from '@assets/tall-3.jpg';
import big from '@assets/big.jpg';
import big2 from '@assets/big-2.jpg';
import tall4 from '@assets/tall-4.jpg';
import small2 from '@assets/small-2.jpg';
import small3 from '@assets/small-3.jpg';

const HeroSection = () => {
  const images = [
    {
      src: tall2,
      col: 'col-span-2',
      row: 'row-span-3',
      alt: 'Tall left feature image',
    },
    {
      src: tall4,
      col: 'col-span-2',
      row: 'row-span-2',
      alt: 'Top wide feature image',
    },
    {
      src: tall3,
      col: 'col-span-1',
      row: 'row-span-1',
      alt: 'Top right small image',
    },
    {
      src: tall,
      col: 'col-span-1',
      row: 'row-span-2',
      alt: 'Middle right tall image',
    },
    {
      src: small2,
      col: 'col-span-2',
      row: 'row-span-2',
      alt: 'Bottom wide image',
    },
    {
      src: big,
      col: 'col-span-1',
      row: 'row-span-1',
      alt: 'Bottom left filler',
    },
    {
      src: big2,
      col: 'col-span-1',
      row: 'row-span-1',
      alt: 'Bottom middle filler',
    },
    {
      src: small3,
      col: 'col-span-1',
      row: 'row-span-1',
      alt: 'Bottom right filler',
    },
  ];

  return (
    <section className="relative pt-20">
      {/* ---------------------- Hero Heading ---------------------- */}
      <div className="relative section-heading overflow-hidden">
        <img
          src={spiralBg}
          alt="background spiral"
          className="absolute inset-0 m-auto opacity-10 pointer-events-none select-none size-64"
        />

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-start justify-between md:items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 70,
                damping: 20,
                duration: 0.8,
              }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <p className="text-grey-midDark uppercase mb-2 text-sm md:text-base">
                stunning photography by
              </p>
              <h1 className="uppercase text-3xl md:text-4xl font-bold leading-tight">
                Kingsley Rawfile
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.4,
                type: 'spring',
                stiffness: 80,
                damping: 15,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Cta />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ---------------------- Marquee ---------------------- */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="overflow-hidden text-grey-midLight bg-dark-midDark border border-dark-midLight border-l-0 border-r-0 relative"
      >
        <MarqueeItems />
      </motion.div>

      {/* ---------------------- Collage Grid ---------------------- */}
      <div className="container relative border-b border-dark-midDark dark:border-dark-midLight pb-8">
        <motion.div
          className="grid gap-2 grid-cols-5 auto-rows-[80px] md:auto-rows-[120px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`rounded-lg overflow-hidden ${img.col} ${img.row} relative`}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 40 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { type: 'spring', stiffness: 70, damping: 18 },
                },
              }}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1 }}
            >
              <motion.img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
