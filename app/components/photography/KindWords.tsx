import Container from '../Container';

const testimonials = [
  {
    quote:
      'Kingsley is creatative, professional, and truly talent4ed. Highly recommend for any occasion.',
    name: 'DIMMA.',
    context: 'Portrait session, Enugu',
  },
  {
    quote:
      'Creative, professional, and truly talented. Highly recommended for any photography services.',
    name: 'MMESOMA A.',
    context: 'Editorial',
  },
  {
    quote: `He caught moments at our wedding we didn't even know happened. He made our event unforgettable.`,
    name: 'LOTANNA BLESSING',
    context: 'Full-day event coverage',
  },
];

export default function KindWords() {
  return (
    <section className='py-16 md:py-24 border-b border-ink/10'>
      <Container>
        <div className='flex items-end justify-between mb-10 md:mb-14'>
          <h2 className='font-display-photo text-2xl md:text-3xl font-semibold text-ink'>
            Kind Words
          </h2>
          <span className='font-mono text-[11px] text-muted tracking-[.14em]'>
            from real shoots
          </span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className='flex flex-col gap-5 border border-ink/10 rounded-sm p-6 md:p-8'
            >
              <span className='font-display-photo text-3xl text-amber leading-none'>
                ❝
              </span>
              <p className='font-sans font-light text-sm text-ink leading-relaxed flex-1'>
                {t.quote}
              </p>
              <div>
                <p className='font-mono text-[11px] text-amber tracking-[.14em]'>
                  {t.name}
                </p>
                <p className='font-mono text-[11px] text-muted mt-1'>
                  {t.context}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}