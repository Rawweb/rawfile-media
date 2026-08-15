import Image from 'next/image';
import Link from 'next/link';

const shots = [
  { src: '/gallery/shot-1-tall.jpg', alt: 'Portrait session' },
  { src: '/gallery/shot-5-square.jpg', alt: 'Event coverage' },
  { src: '/gallery/shot-3-portrait.jpg', alt: 'Editorial shoot' },
  { src: '/gallery/shot-4-tall.jpg', alt: 'Product shoot' },
  { src: '/gallery/shot-2-tall.jpg', alt: 'Portrait session' },
  { src: '/gallery/shot-6-square.jpg', alt: 'Street photography' },
];

export default function SelectedWork() {
  return (
    <section className='px-8 md:px-16 py-16 md:py-24 border-b border-ink/10'>
      {/* header */}
      <div className='text-center mb-10 md:mb-14'>
        <p className='font-mono text-[11px] text-muted tracking-[.22em] mb-3'>
          SELECTED WORK
        </p>
        <h2 className='font-display-photo font-light text-3xl md:text-4xl text-ink'>
          A glimpse into recent projects
        </h2>
      </div>

      {/* masonry */}
      <div className='columns-2 md:columns-3 gap-3 md:gap-4'>
        {shots.map((shot, i) => (
          <div
            key={i}
            className='break-inside-avoid mb-3 md:mb-4 overflow-hidden'
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={600}
              height={750}
              className='w-full h-auto object-cover'
            />
          </div>
        ))}
      </div>

      {/* link */}
      <div className='text-center mt-10 md:mt-14'>
        <Link
          href='/photography/gallery'
          className='font-mono text-[11px] text-amber tracking-[.14em] hover:brightness-110 active:brightness-95 transition-all'
        >
          View full gallery →
        </Link>
      </div>
    </section>
  );
}
