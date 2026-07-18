import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='bg-ink text-paper min-h-screen flex flex-col items-center justify-center px-8 text-center'>
      <p className='font-mono text-xs uppercase tracking-[.24em] text-muted mb-6'>
        Error · 404
      </p>
      <h1 className='font-display font-black text-[clamp(40px,10vw,90px)] uppercase leading-none'>
        Frame not <span className='text-amber'>found</span>
      </h1>
      <p className='text-muted mt-6 max-w-md'>
        This shot never made it out of the darkroom. The page you're looking for
        doesn't exist, or it moved.
      </p>
      <div className='flex flex-wrap gap-3 justify-center mt-10 font-mono text-xs uppercase tracking-[.1em]'>
        <Link
          href='/'
          className='bg-amber text-ink rounded-sm px-6 py-3 transition-transform hover:translate-x-1'
        >
          ⌂ Studio home
        </Link>
        <Link
          href='/photography'
          className='border border-white/25 rounded-sm px-6 py-3 hover:text-amber hover:border-amber transition-colors'
        >
          Photography →
        </Link>
        <Link
          href='/development'
          className='border border-white/25 rounded-sm px-6 py-3 hover:text-steel hover:border-steel transition-colors'
        >
          Development →
        </Link>
      </div>
      <p className='font-mono text-[11px] text-muted mt-12 tracking-[.14em]'>
        IMG_0404.RAW · UNRECOVERABLE
      </p>
    </main>
  );
}
