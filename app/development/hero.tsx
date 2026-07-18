import Link from 'next/link';
import Container from '../components/Container';
import Terminal from './terminal';

export default function DevHero() {
  return (
    <section className='border-b border-b-white/10'>
      <Container
        className='grid grid-cols-1 md:grid-cols-[1.5fr_.85fr] gap-12 items-center py-16
      '
      >
        {/* left */}
        <div className='space-y-4'>
          {/* kicker */}
          <p className='font-mono text-xs tracking-[.22em] text-steel'>
            NEXT BUILD ✓ 0 ERRORS .
            <span className='text-muted'>AVAILABLE FOR FREELANCE</span>
          </p>

          {/* headlines */}
          <h1 className='font-black font-display text-4xl md:text-6xl leading-[.98]'>
            IDEAS, <span className='text-steel'>COMPILED</span> AND SHIPPED.
          </h1>

          {/* description */}
          <p className='text-muted max-w-[46ch]'>
            I design and build fast, clean websites and web apps, with an eye
            trained behind a camera and code that holds up in production.
          </p>

          {/* stackline */}
          <p className='font-mono text-xs'>
            core stack →{' '}
            <span className='text-steel'>
              Next.js · TypeScript · React · Node
            </span>
          </p>

          {/* button */}
          <div className='flex flex-col sm:flex-row gap-5'>
            <Link
              href='/development/projects'
              className='font-mono text-xs text-ink bg-steel rounded-sm px-6 py-4 tracking-[.14em] hover:brightness-110 transition-all w-fit'
            >
              VIEW ALL PROJECTS
            </Link>
            <Link
              href='/development/contact'
              className='font-mono text-xs bg-transparent border border-white/10 rounded-sm px-6 py-4 tracking-[.14em] hover:border-steel hover:text-steel transition-colors w-fit'
            >
              START A PROJECT
            </Link>
          </div>
        </div>

        {/* right */}
        <Terminal />
      </Container>
    </section>
  );
}
