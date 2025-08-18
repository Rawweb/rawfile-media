import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

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
    question:
      'How long does it take to receive the edited photos after a session?',
    answer:
      'For regular photo sessions (such as portraits or lifestyle shoots), edited photos are usually delivered within 48–72 hours. For larger projects like events or commercial photography, delivery typically takes 1–2 weeks. Please note that these timelines may vary depending on the season and workload.',
  },
  {
    question: 'How do you handle cancellations or rescheduling?',
    answer:
      'For event coverage (such as weddings or corporate photography), cancellations or rescheduling should be communicated at least 2 months in advance to allow proper adjustments. For studio or regular sessions, please provide at least 7 days’ notice. Deposits are non-refundable, but they can be applied to a future session if rescheduled within the agreed timeframe.',
  },
  {
    question: 'Do you offer customized photography packages?',
    answer:
      'Yes, packages can be tailored to your specific needs. Whether you require extended coverage, additional locations, or special edits, I can create a package that fits your vision and budget.',
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="container section-heading">
      {/* TOP */}
      <div className="flex flex-col gap-4 md:flex-row items-start justify-between md:items-center mt-20 border-b border-dark-midLight pb-8">
        <div>
          <p className="text-grey-midDark uppercase text-sm">FAQ's</p>
          <h1 className="uppercase text-2xl md:text-3xl font-bold leading-tight">
            frequently asked questions
          </h1>
        </div>
      </div>

      {/* FAQ Grid */}
      <div className="grid md:grid-cols-2 gap-6 pt-12">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-dark-midLight pb-4 cursor-pointer"
          >
            {/* Question Row */}
            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-semibold uppercase text-grey-midLight">
                {faq.question}
              </h3>
              <div className="w-5 h-5 flex items-center justify-center rounded-full border border-dark-midLight">
                {activeIndex === index ? (
                  <FiChevronUp className="size-4" />
                ) : (
                  <FiChevronDown className="size-4" />
                )}
              </div>
            </div>

            {/* Answer with transition */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                activeIndex === index ? 'max-h-40 mt-3' : 'max-h-0'
              }`}
            >
              <p className="text-sm text-grey-midDark leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
