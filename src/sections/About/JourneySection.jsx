import React from 'react';
import { motion } from 'framer-motion';

const JourneySection = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24, filter: 'blur(2px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.6, ease: 'easeOut', delay },
    viewport: { once: true, amount: 0.45 },
  });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

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

  const journey = [
    {
      year: '2018',
      description:
        'In March 2018, Rawfile embarked on his creative journey as a professional photo retoucher at G24 Studios, where he dedicated a year to mastering the art of image enhancement and post-production. This period laid a strong foundation for his transition into full-time photography the following year.',
    },
    {
      year: '2019',
      description:
        'In August 2019, Rawfile transitioned from retouching into actively capturing images, marking the official start of his photography career. While serving as the manager at De Prime Studio, he balanced leadership responsibilities with hands-on experience behind the camera, further deepening his craft.',
    },
    {
      year: '2020',
      description:
        'In January 2020, Rawfile concluded his time at De Prime Studio and briefly joined Hush Multimedia, where he worked for two months refining his craft. Shortly after, he accepted a lucrative offer from Velox Studio, a pivotal move that marked the beginning of his recognition and growing popularity as a photographer.',
    },
    {
      year: '2021',
      description:
        'In August 2021, Rawfile was promoted to Senior Manager, entrusted with greater responsibilities that included overseeing operations, coordinating projects, and managing payroll. This role further strengthened his leadership experience while broadening his influence in the industry.',
    },
    {
      year: '2022',
      description:
        'In June 2022, Rawfile purchased his first professional camera and transitioned from Velox Studio to embark on a full-time freelance career. This marked a defining moment of independence, where he began building his personal brand and establishing himself as a dedicated freelance photographer.',
    },
    {
      year: '2024',
      description:
        'By 2024, Rawfile had made remarkable progress, covering diverse projects across multiple states including the FCT, Lagos, and Delta. His expanding footprint and consistent body of work reflected not only growth in skill but also in recognition, establishing him as a trusted name in photography across Nigeria.',
    },
  ];

  return (
    <section className="container section-heading relative">
      <div className="mt-20">
        {/* TOP */}
        <div className="border-b border-dark-midLight pb-8">
          <motion.p
            className="text-grey-midDark uppercase text-sm mb-2"
            {...fadeUp(0.4)}
          >
            journey
          </motion.p>
          <motion.h1
            className="uppercase text-2xl md:text-3xl font-bold leading-tight"
            {...fadeUp(0.4)}
          >
            RAWFILE&apos;S JOURNEY - A TIMELINE
          </motion.h1>
        </div>

        {/* GRID OF CARDS */}
        <motion.div
          {...parentMotion}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {journey.map((item, i) => (
            <motion.div {...childMotion}
              key={i}
              
              className="group relative border border-dark-midLight rounded-xl p-6 bg-dark-dark space-y-4 overflow-hidden transition duration-300 hover:border-purple-light"
            >
              {/* Overlay / mask for subtle design consistency */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-dark-midLight/40 to-transparent rounded-bl-[150px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-bl from-dark-midLight/40 to-transparent rounded-tr-[150px] pointer-events-none" />

              {/* Year */}
              <div className="relative z-10">
                <h2 className="text-lg md:text-xl font-bold text-grey-midLight group-hover:text-purple-light transition">
                  YEAR - {item.year}
                </h2>
              </div>

              {/* Description */}
              <p className="text-grey-dark text-sm relative z-10 leading-relaxed text-justify">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
