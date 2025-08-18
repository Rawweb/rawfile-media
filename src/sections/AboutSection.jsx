import React from 'react';
import {
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import { GiNinjaStar } from 'react-icons/gi';
import rawfileImage from '../assets/rawfile.png'

const AboutSection = () => {
  return (
    <div className="container section-heading">
      {/* TOP */}
      <div className="flex flex-col gap-4 md:flex-row items-start justify-between md:items-center mt-20 border-b border-dark-midLight pb-8">
        <div>
          <p className="text-grey-midDark uppercase text-sm">about</p>
          <h1 className="uppercase text-2xl md:text-3xl font-bold leading-tight">
            I am Kingsley
          </h1>
        </div>

        <button className="button flex items-center gap-2 ">
          Learn More
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>

      {/* BOTTOM */}
      <div className="pt-12 flex flex-col md:flex-row gap-5 items-center">
        {/* LEFT IMAGE */}
        <div className="w-full md:flex-1">
          <div className="relative w-full rounded-[40px] overflow-hidden">
            {/* Masks */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-black rounded-br-[100px]" />
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-black rounded-tl-[100px]" />

            <img
              src={rawfileImage}
              alt=""
              className="w-full h-[350px] sm:h-[450px] md:h-[550px] object-cover rounded-[40px]"
            />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 border border-dark-midLight rounded-[30px] flex flex-col gap-8">
          {/* INTRODUCTION */}
          <div className=" border-b border-dark-midLight pb-6 p-6">
            <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
              <span className="text-purple-midDark">
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
              <span className="text-purple-midDark">
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
              <div className="flex items-center gap-2 border border-dark-midLight rounded-full p-2">
                <a href="#" className="btn">
                  <FaFacebookF />
                </a>
                <a href="#" className="btn">
                  <FaTwitter />
                </a>
                <a href="#" className="btn">
                  <FaLinkedinIn />
                </a>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto text-sm xl:text-base">
                <button className="button w-full sm:w-auto">
                  Let&apos;s Work
                </button>
                <button className="button w-full sm:w-auto">Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
