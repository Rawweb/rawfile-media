import { motion } from 'framer-motion';

const brands = [
  'GTBANK',
  'ZENITH BANK',
  'ACCESS BANK',
  'UBA',
  'INNOSON MOTORS',
  'GLOBACOM',
  'MTN NIGERIA',
  'DANGOTE GROUP',
  'NIGERIAN BREWERIES',
  'FILMHOUSE CINEMAS',
  'AIRTEL NIGERIA',
  'PEPSI NIGERIA',
];

export default function Brands() {
  return (
    <section className="py-12 overflow-hidden">
      <div className="container">
        <p className="uppercase text-[11px] tracking-[3px] text-grey-midDark mb-8 text-center">
          Brands I Have Worked With
        </p>

        {/* Stationary wrapper holds bg/border so it never “slides off” */}
        <div
          className="relative overflow-hidden bg-grey-light dark:bg-dark-midDark
                        border-y border-dark-midLight text-grey-midDark"
        >
          <div className="flex gap-12 py-2 md:py-3 lg:py-4">
            {/* track A */}
            <motion.ul
              className="flex gap-12 whitespace-nowrap shrink-0 will-change-transform"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
            >
              {brands.concat(brands).map((b, i) => (
                <li
                  key={i}
                  className="uppercase text-sm md:text-base font-semibold tracking-wide opacity-70 hover:opacity-100 transition"
                >
                  {b}
                </li>
              ))}
            </motion.ul>

            {/* track B (optional for assistive tech you can hide it) */}
            <ul
              className="flex gap-12 whitespace-nowrap shrink-0"
              aria-hidden="true"
            >
              {brands.concat(brands).map((b, i) => (
                <li
                  key={`dup-${i}`}
                  className="uppercase text-sm md:text-base font-semibold tracking-wide opacity-70"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
