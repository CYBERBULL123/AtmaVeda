'use client';

import { motion } from 'framer-motion';
import { FaOm } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="py-12 text-center">
      {/* Main Title */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center mb-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-amber-900 tracking-wide">
          AtmaVeda
        </h1>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="ml-4 text-5xl md:text-7xl text-orange-500"
        >
          <FaOm />
        </motion.div>
      </motion.div>

      {/* Gateway to Eternal Wisdom with Divine Animation */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="text-2xl md:text-3xl text-amber-800 font-semibold relative inline-block"
      >
        <span className="relative z-10">Gateway to Eternal Wisdom 🌠</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-300 blur-lg opacity-50 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 text-lg md:text-xl text-amber-700 font-medium leading-relaxed"
      >
        Explore the Vedas, seek divine guidance, and uncover India's spiritual legacy
      </motion.p>
    </header>
  );
}
