import Container from '@/app/components/Container';
import DevContactForm from './contact-form';

const socialLinks = [
  { href: 'https://github.com/Rawweb', label: 'GITHUB' },
  { href: 'https://www.linkedin.com/in/kingsleychibuikem', label: 'LINKEDIN' },
  { href: 'https://x.com/Rawfilek', label: 'X' },
];

export default function DevContact() {
  return (
    <main>
      <Container className='py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
        {/* left - text */}
        <div className='space-y-4'>
          <h1 className='text-4xl md:text-6xl font-black font-display'>
            LET'S <span className='text-steel'>BUILD</span>.
          </h1>
          <p className='text-muted max-w-sm'>
            Tell me what you need and roughly when, and I'll come back with an
            approach and a timeline.
          </p>

          <a
            href='mailto:rawfile.webdev@gmail.com'
            className='border-b border-steel font-mono text-sm'
          >
            rawfile.webdev@gmail.com
          </a>

          {/* social links */}
          <div className='flex items-center gap-4 mt-4'>
            {socialLinks.map((link) => (
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={link.href}
                key={link.href}
                className='font-mono text-xs text-muted tracking-[.14em] hover:text-paper transition-colors'
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* right - form */}
        <div>
          <DevContactForm />
        </div>
      </Container>
    </main>
  );
}
