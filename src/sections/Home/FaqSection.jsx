import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What type of photography do you specialize in?',
    answer:
      'I specialize in Portrait, Landscape, Event, and Lifestyle photography — capturing moments that tell unique stories.',
  },
  {
    question: 'How can I book a photography session with you?',
    answer:
      'You can book a session through my Contact page or by emailing me directly. Once we confirm details, a deposit will secure your date.',
  },
  {
    question: 'What equipment do you use for your photography?',
    answer:
      'I use professional-grade cameras, prime lenses, and lighting equipment to ensure the best possible results for each shoot.',
  },
  {
    question: 'Can I request a specific location for a shoot?',
    answer:
      "Absolutely! Whether it's a studio, outdoor space, or a unique location, I'm happy to accommodate your preferences.",
  },
  {
    question: 'What is your editing process like?',
    answer:
      'I carefully select the best shots, then enhance them using professional editing tools while keeping the images natural and authentic.',
  },
  {
    question: 'Are digital files included in your photography packages?',
    answer:
      'Yes, high-resolution digital files are included in all packages. Additional prints or albums are available as add-ons.',
  },
  {
    question: 'Do you offer prints of your photographs?',
    answer:
      'Yes, prints are available upon request. You can let me know your preferred size and format, and I’ll provide options and pricing details.',
  },
  {
    question: 'How long does it take to receive the edited photos after a session?',
    answer:
      'For regular photo sessions, edited photos are delivered within 48–72 hours. For larger projects like events, delivery usually takes 1–2 weeks.',
  },
  {
    question: 'How do you handle cancellations or rescheduling?',
    answer:
      'For events, cancellations or rescheduling should be communicated at least 2 months in advance. For regular sessions, 7 days’ notice is required. Deposits are non-refundable but can be applied to a future session.',
  },
  {
    question: 'Do you offer customized photography packages?',
    answer:
      'Yes, packages can be tailored to your specific needs — extended coverage, additional locations, or special edits can all be included.',
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Variants for staggered entrance
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

  return (
    <section className="container section-heading relative">
      {/* TOP */}
      <motion.div
        className="flex flex-col gap-4 md:flex-row items-start justify-between md:items-center mt-20 border-b border-dark-midLight pb-8 relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 70 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div>
          <p className="text-grey-midDark uppercase text-sm">FAQ's</p>
          <h1 className="uppercase text-2xl md:text-3xl font-bold leading-tight">
            frequently asked questions
          </h1>
        </div>
      </motion.div>

      {/* FAQ Grid */}
      <motion.div
        className="grid md:grid-cols-2 gap-6 pt-12 relative"
        {...parentMotion}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            {...childMotion}
            className="border-b border-dark-midLight pb-4 cursor-pointer relative"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question Row */}
            <div className="flex justify-between items-center">
              <h3 className="font-semibold uppercase text-grey-midLight">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-5 flex items-center justify-center rounded-full border border-dark-midLight"
              >
                {activeIndex === index ? (
                  <FiChevronUp className="size-4" />
                ) : (
                  <FiChevronDown className="size-4" />
                )}
              </motion.div>
            </div>

            {/* Answer with smooth expand */}
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="mt-3"
                >
                  <p className="text-sm text-grey-midDark leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FaqSection;
