import Container from '@/app/components/Container';
import DevHero from '@/app/development/hero';
import ProjectCard from '@/app/development/project-card';
import { projects } from '@/app/lib/projects';
import Link from 'next/link';

const tools = [
  'Next.js 16',
  'TypeScript',
  'React',
  'Tailwind',
  'Node',
  'Express',
  'MongoDB',
  'Vercel',
  'Motion',
];

export default function Page() {
  return (
    <div>
      <DevHero />

      {/* projects */}
      <Container className='py-16'>
        <p className='font-mono text-muted text-center mb-8 text-xs tracking-[.22em]'>
          FEATURED PROJECTS
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-[22px]'>
          {projects.slice(0, 3).map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i === 0} />
          ))}
        </div>
        {/* view all */}
        <div className='text-center mt-10 pb-10'>
          <Link
            href='/development/projects'
            className='inline-block font-mono text-steel text-xs px-6 py-4 tracking-[.14em] hover:brightness-110 active:brightness-95 transition-all'
          >
            VIEW ALL PROJECTS →
          </Link>
        </div>

        {/* tools */}
        <div className='py-10 border border-r-0 border-l-0 border-white/10 space-y-6'>
          <p className='font-mono font-bold text-xs text-muted tracking-[.10em] text-center'>
            TOOLS I REACH FOR
          </p>

          <div className='flex gap-4 flex-wrap'>
            {tools.map((tool) => (
              <div
                key={tool}
                className='font-mono  text-steel bg-steel/10 border border-white/10 rounded-md px-3 py-1.5 text-sm'
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* cta */}
        <div className='pt-10 text-center'>
          <h2 className='font-bold text-paper text-2xl tracking-[.05em] mb-2'>
            Have a project?
          </h2>
          <p className='text-muted text-sm'>Let's build something together</p>
          <div className='mt-6'>
            <Link
              href='/development/contact'
              className=' font-mono text-xs bg-steel text-surface px-6 py-3 uppercase tracking-[.14em] hover:brightness-115 active:brightness-95 transition-all'
            >
              GET IN CONTACT →
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
