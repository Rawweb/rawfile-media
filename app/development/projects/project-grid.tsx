'use client';
import { useState } from 'react';
import ProjectCard from '@/app/development/project-card';
import type { Project } from '@/app/lib/projects';

const STEP = 6;

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [visible, setVisible] = useState(STEP);
  const shown = projects.slice(0, visible);
  const hasMore = visible < projects.length;

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[22px]'>
        {shown.map((p, i) => (
          <ProjectCard key={p.slug} project={p} priority={i === 0} />
        ))}
      </div>

      {hasMore && (
        <div className='text-center mt-10'>
          <button
            onClick={() => setVisible(visible + STEP)}
            className='inline-block font-mono text-xs text-steel border border-steel rounded-sm px-6 py-4 tracking-[.14em] hover:bg-steel hover:text-ink transition-colors'
          >
            LOAD MORE ↓
          </button>
          <span className='block font-mono text-[11px] text-muted mt-3'>
            {shown.length} of {projects.length}
          </span>
        </div>
      )}
    </>
  );
}
