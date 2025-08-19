import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const TestimonialsPage = () => {
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

  return (
    <section className="container py-16">
      {/* HERO */}
      <div className="text-center mb-12">
        <h1 className="uppercase text-3xl md:text-4xl font-bold text-white">
          What My Clients Say
        </h1>
        <p className="text-grey-midLight mt-2">
          Real stories and feedback from amazing people I’ve worked with.
        </p>
      </div>

      {/* STATS */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12 text-center">
        <div>
          <h2 className="text-3xl font-bold text-purple-light">4.8</h2>
          <p className="text-grey-dark">Average Rating</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-purple-light">
            {testimonials.length}
          </h2>
          <p className="text-grey-dark">Total Reviews</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-purple-light">100%</h2>
          <p className="text-grey-dark">Client Satisfaction</p>
        </div>
      </div>

      {/* GRID OF TESTIMONIALS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative border border-dark-midLight rounded-xl p-6 bg-dark-dark space-y-4 overflow-hidden"
          >
            {/* Overlay / mask */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-dark-midLight/40 to-transparent rounded-bl-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-bl from-dark-midLight/40 to-transparent rounded-tr-[150px] pointer-events-none" />

            {/* Name + Location */}
            <div className="relative z-10">
              <h1 className="text-grey-midLight text-sm font-semibold">
                {testimonial.name}
              </h1>
              <p className="text-xs text-grey-dark">{testimonial.location}</p>
            </div>

            {/* Stars */}
            <div className="flex gap-1 items-center text-yellow-light relative z-10">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <TiStarFullOutline key={i} className="size-5" />
              ))}
              {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                <TiStarFullOutline
                  key={`empty-${i}`}
                  className="size-5 text-grey-dark"
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-grey-midLight text-sm relative z-10">
              {testimonial.review}
            </p>

            {/* Social Links */}
            <div className="flex gap-2 relative z-10">
              <a
                href="#"
                className="btn size-6 border border-dark-light flex items-center justify-center rounded-full"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="btn size-6 border border-dark-light flex items-center justify-center rounded-full"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="btn size-6 border border-dark-light flex items-center justify-center rounded-full"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* LOAD MORE / PAGINATION */}
      <div className="flex justify-center mt-12">
        <button className="px-6 py-3 rounded-xl bg-purple-light font-semibold hover:bg-purple-midLight text-grey-light transition">
          Load More
        </button>
      </div>
    </section>
  );
};

export default TestimonialsPage;
