import Link from 'next/link';

export default function Home() {
  return (
    <main className='bg-ink h-screen flex flex-col'>
      <header className='text-paper'>
        <nav className='flex justify-between items-center border-b border-b-muted font-mono font-medium px-8 py-3.5 md:px-16 text-xs tracking-[.14em]'>
          <div className='flex items-center gap-3'>
            <div className='bg-amber h-2.5 w-2.5 rounded-full animate-pulse' />
            AVAILABLE FOR WORK
          </div>

          <p className='text-muted'>ANAMBRA, NG · 2026</p>
        </nav>
        <div className='py-6 flex flex-col justify-center items-center font-sans space-y-2'>
          <h1 className='text-2xl md:text-[40px] font-black text-amber font-display'>
            RAWFILE <span className='text-steel'>MEDIA</span>
          </h1>
          <p className='text-muted text-xs tracking-[.3em] '>
            WHERE IDEAS COME TO LIFE
          </p>
        </div>
      </header>

      {/* panel */}
      <div className='flex flex-1 flex-col md:flex-row items-stretch justify-center'>
        {/* left */}
        <Link
          href='/photography'
          className='portal-photo px-8 md:px-16 flex-1 flex md:flex-col items-center md:items-start justify-center'
        >
          <div className='mb-4 text-amber-brown bg-paper uppercase border w-fit px-4 py-2 rounded-sm font-mono border-amber-brown text-xs tracking-[.14em]'>
            .RAW · BEHIND THE LENS
          </div>
          <h1 className='mb-2 text-[28px] md:text-[54px] font-black text-ink font-display'>
            PHOTOGRAPHY
          </h1>
          <p className='text-muted max-w-xs mb-4'>
            Portraits, products, and moments, developed with intent
          </p>
          <button className='font-mono bg-amber-deep rounded-sm px-6 py-3 uppercase tracking-[.14em] text-paper text-xs'>
            ENTER GALLERY
          </button>
        </Link>

        {/* right */}
        <Link
          href='/development'
          className='portal-dev px-8 md:px-16 flex-1 flex md:flex-col items-center md:items-start justify-center'
        >
          <div className='mb-4 text-steel bg-black/30 uppercase border w-fit px-4 py-2 rounded-sm font-mono border-steel text-xs tracking-[.14em]'>
            .TSX · IN THE EDITOR
          </div>
          <h1 className='mb-2 text-[28px] md:text-[54px] font-black text-paper font-display'>
            DEVELOPMENT
          </h1>
          <p className='text-muted max-w-xs mb-4'>
            Fast, clean websites built with a photographer's eye.
          </p>
          <button className='font-mono bg-steel rounded-sm px-6 py-3 uppercase tracking-[.14em] text-ink text-xs'>
            ENTER CASE STUDIES
          </button>
        </Link>
      </div>

      {/* footer */}
      <footer className='py-3'>
        <p className='text-muted text-xs text-center font-mono tracking-[.14em]'>
          CHOOSE A SIDE · BOTH ARE THE SAME STUDIO
        </p>
      </footer>
    </main>
  );
}
