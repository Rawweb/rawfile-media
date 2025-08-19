import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@assets/logo.svg'; // your logo

const Loader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish?.();
    }, 2500); // loader duration (2.5s)
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-black via-neutral-900 to-black"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 0.9,
          filter: 'blur(8px)',
          transition: { duration: 0.6, ease: 'easeInOut' },
        }}
      >
        {/* Film grain overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="grain"></div>
        </div>

        {/* Logo */}
        <motion.img
          src={Logo}
          alt="Loader Logo"
          className="w-[160px] md:w-[220px] object-contain relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: [0, 1, 0.8, 1],
            scale: [0.95, 1, 0.98, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
