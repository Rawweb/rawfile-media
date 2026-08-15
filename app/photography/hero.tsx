import Image from 'next/image';
import Link from 'next/link';

export default function PhotoHero() {
  return (
    <div className='relative -mt-[66px] min-h-screen flex flex-col justify-end'>
      {/* background image */}
      <Image
        src='/hero-2.jpg'
        alt='Photography by Rawfile Media'
        fill
        priority
        className='object-cover object-center'
      />

      {/* overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink/40' />

      {/* content */}
      <div className='relative z-10 px-8 md:px-16 pb-16 md:pb-24 max-w-2xl'>
        <p className='font-mono text-[10px] md:text-xs text-paper/70 tracking-[.22em] mb-4'>
          RAWFILE MEDIA · PHOTOGRAPHY
        </p>
        <h1 className='font-display-photo font-semibold text-4xl md:text-6xl text-paper leading-[.98] mb-4'>
          Moments,
          <br />
          Developed with
          <br />
          Intent.
        </h1>
        <p className='font-sans font-light text-sm md:text-base text-paper/70 max-w-[40ch] mb-8 leading-relaxed'>
          Portraits, products, and events across Lagos and beyond, shot honestly
          and finished with care.
        </p>
        <Link
          href='/photography/gallery'
          className='inline-block font-mono text-xs text-ink bg-amber px-6 py-4 tracking-[.14em] hover:brightness-110 active:brightness-95 transition-all'
        >
          SEE THE WORK ↓
        </Link>
      </div>
    </div>
  );
}
