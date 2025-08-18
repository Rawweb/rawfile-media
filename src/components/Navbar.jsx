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
    <nav className="bg-dark-dark text-grey-light border-b border-dark-midDark">
      <div className="container flex justify-between items-center py-5 border-r border-l border-dark-midDark">
        {/* Logo */}
        <h1 className="text-2xl uppercase">rawfile</h1>

        {/* Desktop Nav */}
        <div className="hidden gap-1 md:flex">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-2 px-4 rounded-md transition duration-300 ${
                location.pathname === link.path
                  ? 'bg-dark-midLight text-white'
                  : 'hover:bg-dark-midLight'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <button className="button  md:block hidden">Contact Me</button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(prev => !prev)}
          className="md:hidden block transition"
        >
          {mobileOpen ? (
            <MdClose className="size-7" />
          ) : (
            <IoFilter className="size-7" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-dark border-b border-dark-midDark overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2 px-4 rounded-md transition duration-300 ${
                    location.pathname === link.path
                      ? 'bg-dark-light text-white'
                      : 'hover:bg-dark-light'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <button onClick={() => setMobileOpen(false)} className="button">
                Contact Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
