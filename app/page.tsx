import Link from 'next/link';
import ApertureCursor from './components/ApertureCursor';

export default function Home() {
  return (
    <main className='bg-ink min-h-screen flex flex-col'>
      <header className='text-paper'>
        <nav className='flex justify-between items-center border-b border-b-muted font-mono font-medium px-8 py-3.5 md:px-16 text-[8px] md:text-xs tracking-[.14em]'>
          <div className='flex items-center gap-3'>
            <div className='bg-amber h-2 w-2 md:h-2.5 md:w-2.5 rounded-full dot-live' />
            AVAILABLE FOR WORK
          </div>

          <p className='text-muted'>ANAMBRA, NG · {new Date().getFullYear()}</p>
        </nav>
        <div className='py-6 flex flex-col justify-center items-center font-sans space-y-2'>
          <h1 className='text-2xl md:text-[40px] font-black text-amber font-display'>
            RAWFILE <span className='text-steel'>MEDIA</span>
          </h1>
          <p className='text-muted text-[10px] md:text-xs tracking-[.3em] '>
            WHERE IDEAS COME TO LIFE
          </p>
        </div>
      </header>
      <ApertureCursor />
      {/* panel */}
      <div className='flex flex-1 flex-col md:flex-row items-stretch justify-center split'>
        {/* left */}
        <Link
          href='/photography'
          data-aperture
          data-world='photo'
          className='portal-photo px-8 md:px-16 flex-1 flex flex-col items-start justify-center half min-h-[44vh] md:min-h-0 overflow-hidden md:cursor-none'
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
          <button className='font-mono bg-amber-deep rounded-sm px-6 py-3 uppercase tracking-[.14em] text-paper text-xs transition-transform hover:translate-x-1'>
            ENTER GALLERY →
          </button>
        </Link>

        {/* right */}
        <Link
          href='/development'
          data-aperture
          data-world='dev'
          className='relative portal-dev px-8 md:px-16 flex-1 flex flex-col items-start justify-center half min-h-[44vh] md:min-h-0 overflow-hidden md:cursor-none'
        >
          <pre className='absolute inset-0 p-11 font-mono text-[13px] leading-[2] text-steel opacity-10 pointer-events-none whitespace-pre'>
            {`export default function Studio(){
  return <Site fast clean alive />
}`}
          </pre>

          <div className='relative z-10'>
            <div className='mb-4 text-ice bg-black/30 uppercase border w-fit px-4 py-2 rounded-sm font-mono border-steel/35 text-xs tracking-[.14em]'>
              .TSX · IN THE EDITOR
            </div>
            <h1 className='mb-2 text-[28px] md:text-[54px] font-black text-paper font-display'>
              DEVELOPMENT
            </h1>
            <p className='text-muted max-w-xs mb-4'>
              Fast, clean websites built with a photographer's eye.
            </p>
            <button className='font-mono bg-steel rounded-sm px-6 py-3 uppercase tracking-[.14em] text-ink text-xs transition-transform hover:translate-x-1'>
              ENTER CASE STUDIES →
            </button>
          </div>
        </Link>
      </div>

      {/* footer */}
      <footer className='py-3'>
        <p className='text-muted text-[10px] md:text-xs text-center font-mono tracking-[.14em]'>
          CHOOSE A SIDE · BOTH ARE THE SAME STUDIO
        </p>
      </footer>
    </main>
  );
}
