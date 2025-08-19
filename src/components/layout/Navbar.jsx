import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoFilter } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <motion.nav
      initial={{ boxShadow: '0 0 0 rgba(168,85,247,0.0)' }}
      animate={{
        boxShadow: [
          '0 0 0 rgba(168,85,247,0.0)',
          '0 0 20px rgba(168,85,247,0.25)',
          '0 0 0 rgba(168,85,247,0.0)',
        ],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="sticky top-0 z-50 bg-dark-dark text-grey-light border-b border-dark-midLight overflow-hidden"
    >
      {/* Floating Purple Orb */}
      <motion.div
        className="absolute -top-10 left-1/3 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl pointer-events-none"
        animate={{ x: [0, 100, -100, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container relative flex justify-between items-center py-5 border-r border-l border-dark-midLight">
        {/* Logo with shimmer + glow */}
        <motion.div
          animate={{
            textShadow: [
              '0 0 0px rgba(168,85,247,0)',
              '0 0 15px rgba(168,85,247,0.8)',
              '0 0 0px rgba(168,85,247,0)',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Link
            to="/"
            className="relative text-2xl uppercase font-bold tracking-wide bg-gradient-to-r from-purple-300 via-purple-500 to-purple-300 bg-clip-text text-transparent"
          >
            rawfile
            {/* shimmer sweep overlay */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              style={{
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
              }}
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden gap-2 md:flex relative">
          {navLinks.map(link => {
            const isActive = location.pathname === link.path;
            return (
              <div key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={`py-2 px-4 rounded-md transition duration-300 ${
                    isActive ? 'bg-purple-midLight/20' : 'hover:bg-purple-midLight/20'
                  }`}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Desktop Contact Button */}
        <motion.div
          animate={{
            boxShadow: [
              '0 0 0 rgba(168,85,247,0)',
              '0 0 15px rgba(168,85,247,0.4)',
              '0 0 0 rgba(168,85,247,0)',
            ],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Link
            to="/contact"
            className="button hidden md:block hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(prev => !prev)}
          className="md:hidden block transition"
        >
          {mobileOpen ? (
            <MdClose className="size-7 text-purple-400" />
          ) : (
            <IoFilter className="size-7" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-dark border-b border-dark-midDark overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {navLinks.map(link => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`py-2 px-4 rounded-md transition duration-300 ${
                      isActive
                        ? 'bg-purple-midLight/20 text-grey-light'
                        : 'hover:bg-purple-midLight/20 hover:text-grey-light'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <motion.button
                animate={{
                  boxShadow: [
                    '0 0 0 rgba(168,85,247,0)',
                    '0 0 15px rgba(168,85,247,0.4)',
                    '0 0 0 rgba(168,85,247,0)',
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                onClick={() => setMobileOpen(false)}
                className="button"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
