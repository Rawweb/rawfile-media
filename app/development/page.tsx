import Container from '@/app/components/Container';
import DevHero from '@/app/development/hero';
import ProjectCard from '@/app/development/project-card';
import { projects } from '@/app/lib/projects';
import Link from 'next/link';

const tools = [
 'Next.js 16', 'TypeScript', 'React', 'Tailwind', 'Node', 'Express', 'MongoDB', 'Vercel', 'Motion'
]

export default function Page() {
  return (
    <div>
      <DevHero />

      {/* projects */}
      <Container className='py-16'>
        <div className='flex items-baseline justify-between gap-3 mb-8'>
          <h2 className='font-black font-display text-2xl md:text-3xl'>
            FEATURED PROJECTS
          </h2>
          <p className='text-muted text-xs font-mono tracking-[.1em]'>
            04 hand-picked · full archive below
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[22px]'>
          {projects.slice(0, 4).map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i === 0}/>
          ))}
        </div>
        {/* view all */}
        <div className='text-center mt-10 pb-10'>
          <Link
            href='/development/projects'
            className='inline-block font-mono text-steel text-xs border border-steel rounded-sm px-6 py-4 tracking-[.14em] hover:bg-steel hover:text-ink transition-colors'
          >
            VIEW ALL PROJECTS →
          </Link>
        </div>

        {/* tools */}
        <div className='pt-10 border-t border-white/10 space-y-4'>
          <p className='font-mono font-bold text-sm text-muted tracking-[.10em]'>TOOLS I REACH FOR</p>

          <div className='flex gap-4 flex-wrap'>
            {tools.map((tool) => (
              <div key={tool} className=' text-steel border border-white/10 rounded-md px-3 py-1.5'>{tool}</div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
