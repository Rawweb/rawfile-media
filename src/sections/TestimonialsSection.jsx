import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { motion, useMotionValue, animate } from "framer-motion";

const TestimonialsSection = () => {
  const x = useMotionValue(0); // track position
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Chinedu Okafor",
      location: "Awka, Anambra State",
      rating: 5,
      review:
        "Rawfile’s photography made my event unforgettable. Every moment was captured beautifully.",
    },
    {
      id: 2,
      name: "Amaka Nwosu",
      location: "Asaba, Delta State",
      rating: 4,
      review:
        "The pictures were absolutely stunning. He has a way of bringing emotions alive in photos.",
    },
    {
      id: 3,
      name: "Obinna Eze",
      location: "Enugu, Enugu State",
      rating: 5,
      review:
        "Fantastic experience! From the session to the final photos, everything was perfect.",
    },
    {
      id: 4,
      name: "Ngozi Ibeh",
      location: "Owerri, Imo State",
      rating: 5,
      review:
        "I was amazed by the attention to detail. The photos speak louder than words!",
    },
    {
      id: 5,
      name: "Kelechi Umeh",
      location: "Aba, Abia State",
      rating: 4,
      review:
        "Creative, professional, and truly talented. Highly recommended for any occasion.",
    },
    {
      id: 6,
      name: "Tolu Adebayo",
      location: "Lagos, Nigeria",
      rating: 5,
      review:
        "The photoshoot exceeded my expectations. Every detail was captured perfectly.",
    },
    {
      id: 7,
      name: "Ifeanyi Nnaji",
      location: "Nnewi, Anambra State",
      rating: 5,
      review: "Absolutely amazing work! My family and I love every single shot.",
    },
    {
      id: 8,
      name: "Chisom Aniekwe",
      location: "Nsugbe, Anambra State",
      rating: 4,
      review:
        "He turned simple moments into timeless memories. I’ll definitely book again.",
    },
    {
      id: 9,
      name: "Adaeze Okeke",
      location: "Ifite, Awka",
      rating: 5,
      review:
        "Rawfile has a special gift. The photos feel alive, like you’re reliving the day again.",
    },
  ];

  // Auto scroll animation
  useEffect(() => {
    if (!isHovered) {
      animationRef.current = animate(x, -1000, {
        ease: "linear",
        duration: 30,
        repeat: Infinity,
      });
    } else {
      animationRef.current?.stop();
    }
  }, [isHovered, x]);

  // Track active testimonial index (for dots)
  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      const cardWidth = 320; // ~width of one card + gap
      const index = Math.abs(Math.round(latest / cardWidth)) % testimonials.length;
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [x, testimonials.length]);

  return (
    <section className="container section-heading">
      {/* TOP */}
      <div className="flex flex-col gap-4 md:flex-row items-start justify-between md:items-center mt-20 border-b border-dark-midLight pb-8">
        <div>
          <p className="text-grey-midDark uppercase text-sm">testimonials</p>
          <h1 className="uppercase text-2xl md:text-3xl font-bold leading-tight">
            what my clients say
          </h1>
          <p className="text-xs mt-2 text-grey-dark">Total Reviews</p>
          <p>{testimonials.length}</p>
        </div>

        <Link to="/testimonials" className="button flex items-center gap-2 ">
          View All Testimonials
          <span>
            <FaArrowRight className="size-3" />
          </span>
        </Link>
      </div>

      {/* BOTTOM - Auto Scroll + Drag/Swipe */}
      <motion.div
        ref={carouselRef}
        className="pt-12 flex gap-6 cursor-grab active:cursor-grabbing"
        style={{ x }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        dragElastic={0.2}
      >
        {[...testimonials, ...testimonials].map((testimonial, idx) => (
          <div
            key={idx}
            className="relative min-w-[280px] sm:min-w-[300px] max-w-[350px] border border-dark-midLight rounded-xl p-6 space-y-4 overflow-hidden bg-dark-dark"
          >
            {/* Overlay / mask */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-dark-midLight/50 to-transparent rounded-bl-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-bl from-dark-midLight/50 to-transparent rounded-tr-[150px] pointer-events-none" />

            {/* Heading */}
            <div className="flex justify-between items-center gap-4 relative z-10">
              <div>
                <h1 className="text-grey-midLight text-sm">
                  {testimonial.name}
                </h1>
                <p className="text-xs text-grey-dark">{testimonial.location}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 border bg-dark-dark border-dark-midLight rounded-full p-2">
                  <a href="#" className="btn size-6 border border-dark-light">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="btn size-6 border border-dark-light">
                    <FaTwitter />
                  </a>
                  <a href="#" className="btn size-6 border border-dark-light">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 items-center text-yellow-400">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <TiStarFullOutline key={index} className="size-5" />
              ))}
              {Array.from({ length: 5 - testimonial.rating }).map((_, index) => (
                <TiStarFullOutline
                  key={`empty-${index}`}
                  className="size-5 text-grey-dark"
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-grey-midLight text-sm relative z-10">
              {testimonial.review}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-yellow-400" : "bg-grey-dark"
            }`}
            onClick={() => {
              animationRef.current?.stop();
              x.set(-index * 320); // jump to testimonial
              setActiveIndex(index);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
