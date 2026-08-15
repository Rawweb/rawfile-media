import Image from 'next/image';
import Link from 'next/link';
import Container from '../Container';

export default function AboutTeaser() {
  return (
    <Container className='grid grid-cols-1 items-center gap-10 border-b border-ink/10 py-16 md:py-24 lg:grid-cols-[460px_minmax(0,1fr)] lg:gap-20'>
      {/* portrait */}
      <div className='relative w-full shrink-0 lg:w-[460px]'>
        <div className='relative aspect-[4/5] overflow-hidden'>
          <Image
            src='/profile-img.jpg'
            alt='Kingsley Chibuikem'
            fill
            sizes='(max-width: 768px) 100vw, 460px'
            className='object-cover object-top'
          />
        </div>
        <span className='absolute bottom-3 left-3 font-mono text-[10px] text-paper bg-ink/50 px-2 py-1'>
          SELF · IMG_0001.RAW
        </span>
      </div>

      {/* text */}
      <div className='flex max-w-3xl flex-col gap-6'>
        <p className='font-mono text-[11px] text-amber tracking-[.22em]'>
          THE PERSON BEHIND THE LENS
        </p>
        <h2 className='font-display-photo text-3xl font-semibold leading-tight text-ink lg:text-5xl'>
          I'm Kingsley, and I shoot to remember things the way they felt.
        </h2>
        <p className='max-w-2xl font-sans text-base font-light leading-relaxed text-muted'>
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
    </Container>
  );
}
