import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/app/components/Container';
import { projects } from '@/app/lib/projects';

// tells Next every valid slug at build time - faster and better
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// sets the title and desc for the specific project
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.blurb };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();
  return (
    <Container className='py-14'>
      <div className='space-y-4 border-b border-b-white/10 pb-10'>
        {/* back */}
        <Link
          href='/development/projects'
          className='font-mono text-xs text-muted tracking-[.08em] hover:text-steel transition-colors'
        >
          ← All projects
        </Link>

        {/* hero */}
        <h1 className='font-display font-black text-4xl md:text-6xl uppercase leading-[.95] mt-4'>
          {project.title}
        </h1>
        <p className='text-muted text-lg max-w-[60ch]'>{project.blurb}</p>

        {/* meta */}
        <div className='flex flex-wrap gap-x-9 gap-y-4 mt-7 font-mono text-xs text-muted tracking-[.06em]'>
          <span>
            Role
            <b className='block text-paper font-medium mt-1'>{project.role}</b>
          </span>
          <span>
            Year
            <b className='block text-paper font-medium mt-1'>{project.year}</b>
          </span>
          <span>
            Stack
            <b className='block text-steel font-medium mt-1'>
              {project.tags.join(' · ')}
            </b>
          </span>
        </div>
      </div>

      {/* big shot */}
      <div className='relative aspect-[16/9] border border-white/10 rounded-[10px] overflow-hidden my-9'>
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} interface`}
            fill
            sizes='(max-width: 768px) 100vw, 1100px'
            priority
            className='object-cover object-top'
          />
        ) : (
          <div className={`absolute inset-0 ${project.gradient}`} />
        )}
      </div>

      {/* cta */}
      {(project.url || project.repos) && (
        <div className='flex flex-wrap gap-3 mb-11'>
          {project.url && (
            <a
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block font-mono text-xs uppercase tracking-[.08em] bg-steel text-ink rounded-sm px-6 py-4 hover:brightness-110 transition-all'
            >
              View live site ↗
            </a>
          )}

          {project.repos?.map((r) => (
            <a
              key={r.url}
              href={r.url}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block font-mono text-xs uppercase tracking-[.08em] border border-white/10 rounded-sm px-6 py-4 hover:border-steel hover:text-steel transition-colors'
            >
              {r.label} code ↗
            </a>
          ))}
        </div>
      )}

      {/* body */}
      {project.description && (
        <p className='text-paper/85 text-lg leading-relaxed max-w-[65ch] mb-12'>
          {project.description}
        </p>
      )}

      {/* problem / solution */}
      {(project.problem || project.solution) && (
        <div className='grid md:grid-cols-2 gap-5 pb-14'>
          {project.problem && (
            <div className='bg-surface border border-white/10 rounded-[10px] p-7'>
              <div className='flex items-center gap-3 mb-4'>
                <span className='font-mono text-[11px] text-muted border border-white/15 rounded px-2 py-1'>
                  01
                </span>
                <h2 className='font-mono text-xs uppercase tracking-[.14em] text-muted'>
                  The problem
                </h2>
              </div>
              <p className='text-paper/70 leading-relaxed'>{project.problem}</p>
            </div>
          )}

          {project.solution && (
            <div className='bg-surface border border-steel/25 rounded-[10px] p-7'>
              <div className='flex items-center gap-3 mb-4'>
                <span className='font-mono text-[11px] text-steel border border-steel/35 rounded px-2 py-1'>
                  02
                </span>
                <h2 className='font-mono text-xs uppercase tracking-[.14em] text-steel'>
                  What I built
                </h2>
              </div>
              <p className='text-paper/70 leading-relaxed'>
                {project.solution}
              </p>
            </div>
          )}
        </div>
      )}
    </Container>
  );
}
