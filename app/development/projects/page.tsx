import Container from '@/app/components/Container';
import Link from 'next/link';
import ProjectGrid from './project-grid';
import { projects } from '@/app/lib/projects';

export const metadata = { title: 'Project archive' };

export default function ProjectArchive() {
  return (
    <Container className='py-16'>
      <div className='pb-10 flex flex-col gap-3 items-center'>
        <p className='font-mono text-xs text-steel tracking-[.08em] uppercase'>
          Work
        </p>
        <h1 className='font-display font-bold text-4xl md:text-6xl leading-[.95] text-paper'>
          Projects
        </h1>
      </div>

      {/* grid */}
      <div className='pt-10'>
        <ProjectGrid projects={projects} />
      </div>
    </Container>
  );
}
