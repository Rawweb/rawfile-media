import Container from '@/app/components/Container';
import Image from 'next/image';
import Link from 'next/link';

const stack = [
  {
    heading: 'Shipped in production',
    items: [
      'React',
      'JavaScript',
      'Tailwind',
      'Framer Motion',
      'Node',
      'Express',
      'MongoDB',
    ],
  },
  {
    heading: 'Building with now',
    items: ['Next.js', 'TypeScript'],
  },
  {
    heading: 'Learning',
    items: ['PostgreSQL'],
  },
];

export default function DevAbout() {
  return (
    <main>
      <Container className='py-10'>
        {/* breadcrumb */}
        <Link
          href='/development'
          className='flex gap-2 font-mono items-center text-xs text-muted tracking-[.08em] hover:text-steel transition-colors'
        >
          ← work
        </Link>
        <div className='grid grid-cols-1 md:grid-cols-[.85fr_1.15fr] gap-12 py-14 items-start'>
          {/* left */}
          <div>
            <div className='relative aspect-[4/5] rounded-lg overflow-hidden border border-white/10'>
              <Image
                src='/profile-img.jpg'
                alt='Kingsley Chibuikem, developer and photographer'
                fill
                sizes='(max-width: 768px) 100vw, 40vw'
                className='object-cover'
              />
              <span className='absolute left-3.5 bottom-3.5 font-mono text-[11px] text-paper bg-black/50 px-2 py-1 rounded-sm z-10'>
                ~/rawfile · whoami
              </span>
            </div>

            {/* under the portrait */}
            <div className='mt-5 space-y-4'>
              <a
                href='/kingsley-chibuikem-cv.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-between w-full font-mono text-xs uppercase tracking-[.14em] border border-white/10 rounded-sm px-5 py-4 hover:border-steel hover:text-steel transition-colors'
              >
                Download CV
                <span>↓</span>
              </a>

              <div className='font-mono text-[11px] text-muted space-y-2'>
                <p className='flex justify-between'>
                  <span>Based in</span>
                  <span className='text-paper'>Anambra, NG</span>
                </p>
                <p className='flex justify-between'>
                  <span>Available</span>
                  <span className='text-steel'>Remote · Contract</span>
                </p>
                <p className='flex justify-between'>
                  <span>Replies in</span>
                  <span className='text-paper'>Under 24h</span>
                </p>
              </div>
            </div>
          </div>
          {/* right - about me */}
          <div className='space-y-5'>
            <h1 className='text-2xl md:text-3xl font-black font-display'>
              The person in the <span className='text-steel'>editor</span>.
            </h1>

            <p className='text-muted'>
              In 2021 I watched AI edit a photograph and understood where my
              income was heading. So I picked up a second craft before I needed
              it. I enrolled at university for the certificate and taught myself
              everything else in parallel: Udemy courses, YouTube, and a long
              run of broken builds.
            </p>

            <p className='text-muted'>
              Since then I&apos;ve shipped six production systems. A job portal
              that scores graduates against roles and names the skills
              they&apos;re missing. A registration platform that validates
              prerequisites before a student can submit. A quiz engine where the
              rules live on the server, so no attempt, retake, or timer can be
              bypassed from the browser.
            </p>

            <p className='text-muted'>
              <span className='text-paper font-medium'>
                Photography is why I care about the front end.
              </span>{' '}
              Seven years of framing shots taught me spacing, hierarchy, and
              when something is one element too busy. I don&apos;t hand a design
              off to someone else. I build what I designed.
            </p>

            <p className='text-muted'>
              I&apos;m not a backend specialist. I write the APIs my
              applications need: auth, protected routes, data models, validation
              that actually holds. The deep infrastructure work belongs to
              someone who does it every day.
            </p>

            {/* stack */}
            <div className='pt-4 space-y-6'>
              {stack.map((group) => (
                <div key={group.heading}>
                  <h2 className='font-mono text-[11px] uppercase tracking-[.14em] text-steel mb-3'>
                    {group.heading}
                  </h2>
                  <div className='flex flex-wrap gap-2'>
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className='font-mono text-[11px] text-paper/70 border border-white/10 rounded px-2.5 py-1.5'
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* availability */}
            <div className='pt-6 border-t border-white/10'>
              <p className='font-mono text-xs text-muted tracking-[.08em]'>
                Open to remote contracts, freelance builds, and agency work.
              </p>
              <Link
                href='/development/contact'
                className='inline-block mt-4 font-mono text-xs uppercase tracking-[.14em] bg-steel text-ink rounded-sm px-6 py-4 hover:brightness-110 transition-all'
              >
                Start a project →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
