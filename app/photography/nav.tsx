'use client';

import Link from 'next/link';
import Container from '../components/Container';
import { usePathname } from 'next/navigation';
import { isActive, NavLink } from '../lib/nav';
import { useEffect, useState } from 'react';

const navLinks: NavLink[] = [
  { href: '/photography', label: 'home', exact: true },
  { href: '/photography/gallery', label: 'gallery' },
  { href: '/photography/about', label: 'about' },
  { href: '/photography/contact', label: 'contact' },
];

export default function PhotoNav() {
  const pathname = usePathname();
  const isHomePage = pathname === '/photography';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isHomePage
          ? scrolled
            ? 'bg-ink/50 backdrop-blur-md border-paper/15 shadow-lg shadow-ink/10'
            : 'bg-transparent border-transparent'
          : 'bg-paper border-ink/10'
      }`}
    >
      <Container className='flex items-center justify-between h-[66px]'>
        <Link
          href='/photography'
          className={`font-display-photo font-bold tracking-[.03em] text-sm whitespace-nowrap uppercase ${
            isHomePage ? 'text-paper' : 'text-ink'
          }`}
        >
          Rawfile
          <span
            className={`text-amber font-light capitalize text-[11px] font-sans ml-2 pl-2 border-l tracking-[.14em] ${
              isHomePage ? 'border-paper/25' : 'border-ink/15'
            }`}
          >
            photography
          </span>
        </Link>
        <nav className='hidden md:flex gap-6 font-sans capitalize text-xs tracking-[.1em]'>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors border-b pb-1 ${
                isActive(pathname, item)
                  ? 'text-amber border-amber'
                  : `${isHomePage ? 'text-paper' : 'text-ink'} border-transparent hover:text-amber active:text-amber`
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
          className={`md:hidden border rounded-lg w-10 h-10 flex items-center justify-center hover:text-amber hover:border-amber active:scale-95 active:border-amber transition-all ${
            isHomePage ? 'border-paper/40 text-paper' : 'border-ink/15 text-ink'
          }`}
        >
          {open ? '✕' : '☰'}
        </button>
      </Container>

      {open && (
        <nav
          className={`md:hidden border-t flex flex-col ${
            isHomePage
              ? 'border-paper/15 bg-ink/50 backdrop-blur-md'
              : 'border-ink/10 bg-paper'
          }`}
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`transition-colors px-6 py-4 border-b font-sans capitalize text-xs tracking-[.1em] ${
                isHomePage ? 'border-paper/15' : 'border-ink/10'
              } ${
                isActive(pathname, item)
                  ? 'text-amber '
                  : `${isHomePage ? 'text-paper' : 'text-ink'} hover:text-amber active:text-amber`
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
