import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/app/lib/projects';

export default function ProjectCard({
  project,
  priority = false
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/development/projects/${project.slug}`}
      className='group bg-surface border border-white/10 rounded-[10px] overflow-hidden block transition-transform duration-300 hover:-translate-y-1 hover:border-steel/35'
    >
      {/* shot */}
      <div className='relative aspect-[16/10] border-b border-white/10 overflow-hidden'>
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} interface`}
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            priority={priority}
            className='object-cover object-top'
          />
        ) : (
          <div className={`absolute inset-0 ${project.gradient}`} />
        )}

        <div className='absolute top-0 inset-x-0 h-[30px] bg-black/55 backdrop-blur-sm flex items-center gap-1.5 px-3 z-10'>
          <i className='w-2 h-2 rounded-full bg-white/30' />
          <i className='w-2 h-2 rounded-full bg-white/30' />
          <i className='w-2 h-2 rounded-full bg-white/30' />
          <span className='ml-2 font-mono text-[10px] text-white/50'>
            {project.domain}
          </span>
        </div>
      </div>

      {/* body */}
      <div className='p-[22px]'>
        <h3 className='font-display font-bold text-xl mb-1.5'>
          {project.title}
        </h3>
        <p className='text-muted text-sm mb-4'>{project.blurb}</p>

        <div className='flex flex-wrap gap-1.5'>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className='font-mono text-[11px] text-steel border border-steel/35 rounded px-2 py-1'
            >
              {tag}
            </span>
          ))}
        </div>

        <span className='inline-block mt-4 font-mono text-xs uppercase tracking-[.08em] text-steel'>
          View project →
        </span>
      </div>
    </Link>
  );
}
