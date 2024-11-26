'use client';

import { motion } from 'framer-motion';
import { FaOm } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-16 text-center">
      {/* Large Om Icon with Divine Glow */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="relative inline-block mb-6"
      >
        <FaOm className="text-[6rem] md:text-[10rem] text-orange-500" />
        <motion.div
          className="absolute inset-0 rounded-full bg-orange-300 blur-lg opacity-40"
          initial={{ scale: 0.8 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Crafted By Text */}
      <p className="text-2xl md:text-3xl text-amber-800 font-semibold">
        Crafted with Devotion by <span className="text-orange-600">Aditya Pandey</span>
      </p>

      {/* Divine Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="mt-4 text-xl md:text-2xl text-amber-600 font-light"
      >
        ॐ शांति शांति शांति
      </motion.div>
    </footer>
  );
}
