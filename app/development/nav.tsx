'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '../components/Container';
import { useEffect, useState } from 'react';
import { isActive, type NavLink } from '@/app/lib/nav';

const navLinks: NavLink[] = [
  {
    href: '/development',
    label: 'work',
    exact: true,
    match: ['/development/projects'],
  },
  { href: '/development/about', label: 'about' },
  { href: '/development/contact', label: 'contact' },
];

export default function DevNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-md'>
      <Container className='flex items-center justify-between h-[66px] '>
        <Link
          href='/'
          className='font-display font-black text-sm tracking-[.03em] whitespace-nowrap'
        >
          RAWFILE
          <span className='font-mono font-normal text-steel text-[11px] ml-2 pl-2 border-l border-white/10 tracking-[.14em]'>
            DEVELOPMENT
          </span>
        </Link>

        {/* nav links */}
        <nav className='hidden md:flex gap-6 font-mono uppercase text-xs tracking-[.1em]'>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors border-b pb-1 ${
                isActive(pathname, item)
                  ? 'text-steel border-steel'
                  : 'text-muted border-transparent hover:text-paper'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label='Toggle menu'
          aria-expanded={open}
          className='md:hidden border border-white/10 rounded-lg w-10 h-10 flex items-center justify-center text-paper hover:text-steel hover:border-steel transition-colors'
        >
          {open ? '✕' : '☰'}
        </button>
      </Container>
      {open && (
        <nav className='md:hidden border-t border-white/10 bg-ink flex flex-col'>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`transition-colors px-6 py-4 border-b border-white/10 font-mono uppercase text-xs tracking-[.1em] ${
                isActive(pathname, item)
                  ? 'text-steel'
                  : 'text-muted hover:text-paper'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
