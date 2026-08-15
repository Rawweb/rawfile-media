import Image from 'next/image';
import Link from 'next/link';
import Container from '../Container';

const categories = [
  {
    label: 'Portrait',
    slug: 'portrait',
    image: '/categories/portrait.jpg',
  },
  {
    label: 'Events',
    slug: 'events',
    image: '/categories/events.jpg',
  },
  {
    label: 'Outdoor',
    slug: 'outdoor',
    image: '/categories/outdoor.jpg',
  },
  {
    label: 'Editorial',
    slug: 'editorial',
    image: '/categories/editorial.jpg',
  },
];

export default function WhatIShoot() {
  return (
    <section className='py-16 md:py-24 border-b border-ink/10'>
      <Container>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4'>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/photography/gallery?category=${cat.slug}`}
              className='group relative block aspect-square overflow-hidden'
            >
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                sizes='(max-width: 768px) 50vw, 25vw'
                className='object-cover object-top transition-transform duration-500 group-hover:scale-105 group-active:scale-100'
              />
              <div className='absolute inset-0 bg-ink/40 group-hover:bg-ink/50 transition-colors duration-300' />
              <span className='absolute inset-0 flex items-center justify-center font-display-photo text-lg font-light tracking-wide text-paper md:text-xl'>
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
