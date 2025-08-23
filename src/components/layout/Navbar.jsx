import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoFilter } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '@components/ui/ThemeToggle';

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
      className="fixed top-0 inset-x-0 z-50 bg-absolute-white/95 dark:bg-dark-dark/90 dark:text-grey-light backdrop-blur border-b border-dark-midLight"
    >
      {/* Floating Purple Orb */}
      <motion.div
        className="absolute -top-10 left-1/3 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl pointer-events-none"
        animate={{ x: [0, 100, -100, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Container */}
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
                    isActive
                      ? 'bg-purple-midLight/60'
                      : 'hover:bg-purple-midLight/60'
                  }`}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Desktop Contact Button */}
        <div className="flex gap-2 items-center">
          <Link
            to="/contact"
            className="button hidden md:block hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition"
          >
            Contact Me
          </Link>
          {/* Dark Mode Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden ">
          {/* Dark Mode Toggle */}
          <div>
           <ThemeToggle /> 
          </div>
          <button
            onClick={() => setMobileOpen(prev => !prev)}
            className="transition"
          >
            {mobileOpen ? (
              <MdClose className="size-7 text-purple-400" />
            ) : (
              <IoFilter className="size-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden dark:bg-dark-dark border-b border-dark-midDark overflow-hidden relative"
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
                        ? 'bg-purple-midLight/60 dark:text-grey-light'
                        : 'hover:bg-purple-midLight/60 dark:hover:text-grey-light'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

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
                  onClick={() => setMobileOpen(false)}
                  className="button block text-center"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
