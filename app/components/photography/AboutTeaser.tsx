import Image from 'next/image';
import Link from 'next/link';

export default function AboutTeaser() {
  return (
    <section className='px-8 md:px-16 py-16 md:py-24 flex flex-col md:flex-row gap-10 md:gap-16 items-start border-b border-ink/10'>
      {/* portrait */}
      <div className='relative w-full md:w-[320px] flex-shrink-0'>
        <div className='relative aspect-[4/5] overflow-hidden'>
          <Image
            src='/profile-img.jpg'
            alt='Kingsley Chibuikem'
            fill
            sizes='(max-width: 768px) 100vw, 320px'
            className='object-cover object-top'
          />
        </div>
        <span className='absolute bottom-3 left-3 font-mono text-[10px] text-paper bg-ink/50 px-2 py-1'>
          SELF · IMG_0001.RAW
        </span>
      </div>

      {/* text */}
      <div className='flex flex-col gap-5 max-w-lg'>
        <p className='font-mono text-[11px] text-amber tracking-[.22em]'>
          THE PERSON BEHIND THE LENS
        </p>
        <h2 className='font-display-photo font-semibold text-2xl md:text-3xl text-ink leading-snug'>
          I'm Kingsley, and I shoot to remember things the way they felt.
        </h2>
        <p className='font-sans font-light text-sm text-muted leading-relaxed'>
          Eight years behind the camera, from retouching desks to full-time
          freelance, learning that good light and a real moment beat a hundred
          rushed shots.
        </p>
        <Link
          href='/photography/about'
          className='font-mono text-[11px] text-amber tracking-[.14em] hover:brightness-110 active:brightness-95 transition-all w-fit'
        >
          READ MY FULL STORY →
        </Link>
      </div>
    </section>
  );
}
