import Link from 'next/link';
import Container from '../components/Container';

type FooterLink = { href?: string; label: string };
type FooterColumn = { heading: string; links: FooterLink[] };

const footerColumns: FooterColumn[] = [
  {
    heading: 'Explore',
    links: [
      { href: '/development', label: 'Work' },
      { href: '/development/projects', label: 'All projects' },
      { href: '/development/about', label: 'About' },
      { href: '/', label: 'Studio home' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      {
        href: 'mailto:rawfile.webdev@gmail.com',
        label: 'rawfile.webdev@gmail.com',
      },
      { href: '/development/contact', label: 'Start a project' },
      { label: 'Anambra, Nigeria' },
    ],
  },
  {
    heading: 'Follow',
    links: [
      { href: 'https://github.com/Rawweb', label: 'GitHub' },
      {
        href: 'https://www.linkedin.com/in/kingsleychibuikem',
        label: 'LinkedIn',
      },
      { href: 'https://x.com/Rawfilek', label: 'X' },
    ],
  },
];

// helper that picks links
function FooterItem({ link }: { link: FooterLink }) {
  const cls =
    'block text-sm text-muted py-1 hover:text-paper transition-colors';

  if (!link.href) return <span className={cls}>{link.label}</span>;

  const isExternal =
    link.href.startsWith('http') || link.href.startsWith('mailto:');
  if (isExternal) {
    return (
      <a
        href={link.href}
        className={cls}
        target='_blank'
        rel='noopener noreferrer'
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={cls}>
      {link.label}
    </Link>
  );
}
export default function DevFooter() {
  return (
    <footer className='bg-surface border-t border-t-white/10'>
      <Container className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-4 md:gap-8 py-10'>
        <div className='space-y-2'>
          <h1 className='font-black font-display text-xl'>
            RAWFILE <span className='text-steel'>MEDIA</span>
          </h1>
          <p className='text-muted text-[11px] tracking-[.22em] font-mono'>
            WHERE IDEAS COME TO LIFE
          </p>
        </div>

        {footerColumns.map((col) => (
          <div key={col.heading}>
            <h6 className='font-mono text-[11px] uppercase tracking-[.16em] text-steel mb-3.5'>
              {col.heading}
            </h6>
            {col.links.map((link) => (
              <FooterItem key={link.label} link={link} />
            ))}
          </div>
        ))}
      </Container>
      {/* footer - copyright */}
      <Container>
        <div className='flex items-center justify-between border-t border-t-white/10 py-4 text-muted text-xs font-mono'>
          <p>&copy; {new Date().getFullYear()} Rawfile Media</p>
          <p>DEVELOPMENT · .TSX</p>
        </div>
      </Container>
    </footer>
  );
}
