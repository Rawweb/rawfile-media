import React from 'react';
import { TiStarFullOutline } from 'react-icons/ti';
import { FaFacebookF, FaTiktok, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Chinedu Okafor',
      location: 'Awka, Anambra State',
      rating: 5,
      review:
        'Rawfile’s photography made my event unforgettable. Every moment was captured beautifully.',
    },
    {
      id: 2,
      name: 'Amaka Nwosu',
      location: 'Asaba, Delta State',
      rating: 4,
      review:
        'The pictures were absolutely stunning. He has a way of bringing emotions alive in photos.',
    },
    {
      id: 3,
      name: 'Obinna Eze',
      location: 'Enugu, Enugu State',
      rating: 5,
      review:
        'Fantastic experience! From the session to the final photos, everything was perfect.',
    },
    {
      id: 4,
      name: 'Ngozi Ibeh',
      location: 'Owerri, Imo State',
      rating: 5,
      review:
        'I was amazed by the attention to detail. The photos speak louder than words!',
    },
    {
      id: 5,
      name: 'Kelechi Umeh',
      location: 'Aba, Abia State',
      rating: 4,
      review:
        'Creative, professional, and truly talented. Highly recommended for any occasion.',
    },
    {
      id: 6,
      name: 'Tolu Adebayo',
      location: 'Lagos, Nigeria',
      rating: 5,
      review:
        'The photoshoot exceeded my expectations. Every detail was captured perfectly.',
    },
    {
      id: 7,
      name: 'Ifeanyi Nnaji',
      location: 'Nnewi, Anambra State',
      rating: 5,
      review:
        'Absolutely amazing work! My family and I love every single shot.',
    },
    {
      id: 8,
      name: 'Chisom Aniekwe',
      location: 'Nsugbe, Anambra State',
      rating: 4,
      review:
        'He turned simple moments into timeless memories. I’ll definitely book again.',
    },
    {
      id: 9,
      name: 'Adaeze Okeke',
      location: 'Ifite, Awka',
      rating: 5,
      review:
        'Rawfile has a special gift. The photos feel alive, like you’re reliving the day again.',
    },
  ];

  // Variants
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24, filter: 'blur(2px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.6, ease: 'easeOut', delay },
    viewport: { once: true, amount: 0.4 },
  });

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="container py-16 mt-20">
      {/* HERO */}
      <motion.div className="text-center mb-12" {...fadeUp(0)}>
        <h1 className="uppercase text-3xl md:text-4xl font-bold dark:text-white">
          What My Clients Say
        </h1>
        <p className="dark:text-grey-midLight mt-2">
          Real stories and feedback from amazing people I’ve worked with.
        </p>
      </motion.div>

      {/* STATS */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-8 mb-12 text-center"
        {...fadeUp(0.1)}
      >
        <motion.div {...fadeUp(0.15)}>
          <h2 className="text-3xl font-bold text-purple-light">4.8</h2>
          <p className="text-grey-dark">Average Rating</p>
        </motion.div>
        <motion.div {...fadeUp(0.2)}>
          <h2 className="text-3xl font-bold text-purple-light">
            {testimonials.length}
          </h2>
          <p className="text-grey-dark">Total Reviews</p>
        </motion.div>
        <motion.div {...fadeUp(0.25)}>
          <h2 className="text-3xl font-bold text-purple-light">100%</h2>
          <p className="text-grey-dark">Client Satisfaction</p>
        </motion.div>
      </motion.div>

      {/* GRID OF TESTIMONIALS */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {testimonials.map(testimonial => (
          <motion.div
            key={testimonial.id}
            variants={card}
            className="relative border border-dark-midLight rounded-xl p-6 bg:bg-dark-dark space-y-4 overflow-hidden"
          >
            {/* Overlay / mask */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-dark-midLight/40 to-transparent rounded-bl-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-bl from-dark-midLight/40 to-transparent rounded-tr-[150px] pointer-events-none" />

            {/* Name + Location */}
            <div className="relative z-10">
              <h1 className="dark:text-grey-midLight text-sm font-semibold">
                {testimonial.name}
              </h1>
              <p className="text-xs dark:text-grey-dark">
                {testimonial.location}
              </p>
            </div>

            {/* Stars */}
            <div className="flex gap-1 items-center text-yellow-light relative z-10">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <TiStarFullOutline key={i} className="size-5" />
              ))}
              {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                <TiStarFullOutline
                  key={`empty-${i}`}
                  className="size-5 dark:text-grey-dark"
                />
              ))}
            </div>

            {/* Review */}
            <p className="dark:text-grey-midLight text-sm relative z-10">
              {testimonial.review}
            </p>

            {/* Social Links */}
            <div className="flex gap-2 relative z-10">
              <a
                href="https://web.facebook.com/Rawimagix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="btn size-6 border border-dark-light flex items-center justify-center rounded-full"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/rawfilefotografy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="btn size-6 border border-dark-light flex items-center justify-center rounded-full"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@rawfilefotografy?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on TikTok"
                className="btn size-6 border border-dark-light flex items-center justify-center rounded-full"
              >
                <FaTiktok />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* LOAD MORE / PAGINATION */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <button className="px-6 py-3 rounded-xl bg-purple-light font-semibold hover:bg-purple-midLight text-grey-light transition">
          Load More
        </button>
      </motion.div>
    </section>
  );
};

export default TestimonialsPage;
