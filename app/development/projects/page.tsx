import Container from '@/app/components/Container';
import Link from 'next/link';
import ProjectGrid from './project-grid';
import { projects } from '@/app/lib/projects';

export const metadata = { title: 'Project archive' };

export default function ProjectArchive() {
  return (
    <Container className='py-16'>
      <div className='space-y-4 border-b border-b-white/10 pb-10'>
        {/* breadcrumb */}
        <div className='flex gap-2 font-mono items-center text-xs text-muted tracking-[.08em]'>
          <Link
            href='/development'
            className='hover:text-steel transition-colors'
          >
            Work
          </Link>
          <span>/ All projects</span>
        </div>

        {/* headline */}
        <h1 className='font-black font-display text-4xl md:text-6xl leading-[.95] text-steel'>
          PROJECT ARCHIVE
        </h1>

        {/* description */}
        <p className='text-muted md:text-lg max-w-[60ch]'>
          Everything I&apos;ve shipped, newest first. Client work, university
          systems, and tools built to solve a problem I actually had.
        </p>
      </div>

      {/* grid */}
      <div className='pt-10'>
        <ProjectGrid projects={projects} />
      </div>
    </Container>
  );
}
