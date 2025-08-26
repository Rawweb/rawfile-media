import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 24, filter: 'blur(2px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.6, type: 'spring', ease: 'easeOut', delay: d },
});

export default function ThankYou() {
  const { state } = useLocation() || {};
  const name = state?.name;
  const email = state?.email;
  const session = state?.session;
  const variant = state?.variant;
  const date = state?.date;
  const time = state?.time;

  // your studio’s inbox
  const OWNER_EMAIL =
    import.meta.env.VITE_BUSINESS_EMAIL || 'rawfile.webdev@gmail.com';

  return (
    <section className="relative min-h-[70vh] flex items-center pt-28">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(600px_300px_at_30%_10%,rgba(175,164,248,0.18),transparent_60%)]" />

      <div className="container">
        <motion.div
          className="mx-auto max-w-2xl rounded-2xl border dark:border-dark-midLight border-dark-dark dark:bg-dark-dark p-8 md:p-10 backdrop-blur shadow-lg"
          {...fadeUp(0.1)}
        >
          <div className="flex items-start gap-3">
            <FiCheckCircle
              className="mt-1 shrink-0 text-purple-light"
              size={28}
            />
            <div>
              <motion.h1
                className="text-2xl  font-semibold tracking-wide dark:text-grey-light"
                {...fadeUp(0.15)}
              >
                Thank you{name ? `, ${name.split(' ')[0]}` : ''}! 🎉
              </motion.h1>
              <motion.p
                className="mt-2 text-[15px] leading-7 dark:text-grey-midLight text-grey-dark"
                {...fadeUp(0.25)}
              >
                We’ve received your{' '}
                {session ? (
                  <b>
                    {[session, variant]
                      .filter(Boolean)
                      .join(' — ')
                      .toLowerCase()}
                  </b>
                ) : (
                  'message'
                )}{' '}
                request.
                {email && (
                  <>
                    {' '}
                    A confirmation has been sent to <b>{OWNER_EMAIL}</b>.
                  </>
                )}{' '}
                We’ll get back to you shortly.
              </motion.p>

              {(session || date || time) && (
                <motion.div
                  className="mt-5 grid gap-2 text-sm dark:text-grey-midDark"
                  {...fadeUp(0.35)}
                >
                  {session && (
                    <div>
                      <span className="dark:text-grey-midLight text-dark-light font-bold">
                        Session:
                      </span>{' '}
                      {session}
                    </div>
                  )}

                  {variant && (
                    <div>
                      {' '}
                      <span className="dark:text-grey-midLight text-dark-light font-bold">
                        Session Type:
                      </span>{' '}
                      {variant}
                    </div>
                  )}

                  {date && (
                    <div>
                      <span className="dark:text-grey-midLight text-dark-light font-bold">
                        Preferred Date:
                      </span>{' '}
                      {date}
                    </div>
                  )}
                  {time && (
                    <div>
                      <span className="dark:text-grey-midLight text-dark-light font-bold">
                        Preferred Time:
                      </span>{' '}
                      {time}
                    </div>
                  )}
                </motion.div>
              )}

              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                {...fadeUp(0.45)}
              >
                <Link
                  to="/"
                  className="group inline-flex items-center gap-2 rounded-full border dark:border-white/10 border-dark-midDark px-4 py-2 text-[12px] uppercase tracking-wider dark:text-grey-midLight transition dark:hover:bg-white/5 hover:text-purple-midLight"
                >
                  Go Home
                  <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center gap-2 rounded-full bg-purple-light px-4 py-2 text-[12px] uppercase tracking-wider text-white transition hover:bg-purple-midLight hover:shadow-[0_0_18px_rgba(174,161,247,0.7)]"
                >
                  View Portfolio
                  <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
