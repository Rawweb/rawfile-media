import Link from 'next/link';
import Container from '../Container';

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/rawfilefotografy' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kingsleychibuikem' },
  { label: 'WhatsApp', href: 'https://wa.me/2348068226614' },
];

export default function PhotoFooter() {
  return (
    <footer className='py-10 md:py-14'>
      <Container>
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6'>
          <div className='flex flex-col gap-1'>
            <span className='font-display-photo font-semibold text-lg text-ink'>
              Rawfile
            </span>
            <span className='font-mono text-[11px] text-muted tracking-[.14em]'>
              © {new Date().getFullYear()} Rawfile Media
            </span>
          </div>

          <div className='flex items-center gap-6'>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target='_blank'
                rel='noopener noreferrer'
                className='font-mono text-[11px] text-muted tracking-[.14em] hover:text-amber active:text-amber transition-colors'
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
