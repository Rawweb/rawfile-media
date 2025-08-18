import React from 'react';
import Cta from '../components/ui/Cta';
import MarqueeItems from '../components/ui/MarqueeItems';
import spiralBg from '../assets/spiralBg.png';
import tall from '../assets/tall.jpg';
import tall2 from '../assets/tall-2.jpg';
import tall3 from '../assets/tall-3.jpg';

import big from '../assets/big.jpg';
import big2 from '../assets/big-2.jpg';

import tall4 from '../assets/tall-4.jpg';
import small2 from '../assets/small-2.jpg';
import small3 from '../assets/small-3.jpg';

const HeroSection = () => {
  // 📌 Collage image configuration (src, grid spans, alt labels)
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
    <div>
      {/* ---------------------- Hero Heading ---------------------- */}
      <div className="relative border-b border-dark-midDark section-heading overflow-hidden">
        <img
          src={spiralBg}
          alt="background spiral"
          className="absolute inset-0 m-auto opacity-10 pointer-events-none select-none size-64"
        />

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-start justify-between md:items-center gap-6">
            <div>
              <p className="text-grey-midDark uppercase mb-2 text-sm md:text-base">
                stunning photography by
              </p>
              <h1 className="uppercase text-3xl md:text-4xl font-bold leading-tight">
                Kingsley Rawfile
              </h1>
            </div>
            <Cta />
          </div>
        </div>
      </div>

      {/* ---------------------- Marquee ---------------------- */}
      <div className="overflow-hidden text-grey-midLight bg-dark-midDark border border-dark-midLight border-l-0 border-r-0">
        <MarqueeItems />
      </div>

      {/* ---------------------- Collage Grid ---------------------- */}
      <div className="container">
        <div className="grid gap-2 grid-cols-5 auto-rows-[80px] md:auto-rows-[120px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`rounded-lg overflow-hidden ${img.col} ${img.row}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
