'use client';

import { motion } from 'framer-motion';
import { FaOm, FaLinkedin, FaGlobe, FaGithub, FaMedium } from 'react-icons/fa';

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

      {/* Divine Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="mt-4 text-xl md:text-2xl text-amber-600 font-light"
      >
        ॐ शांति शांति शांति
      </motion.div>

      {/* Crafted By Text */}
      <motion.p
        className="text-2xl md:text-3xl text-amber-800 font-semibold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        Crafted with Devotion by <span className="text-orange-600">Aditya Pandey</span>
      </motion.p>

      {/* Social Connect Section */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {[
          { href: "https://www.linkedin.com/in/aditya-pandey-896109224", icon: FaLinkedin, label: "LinkedIn" },
          { href: "https://aadi-web-1.onrender.com/", icon: FaGlobe, label: "Website" },
          { href: "https://github.com/CYBERBULL123", icon: FaGithub, label: "GitHub" },
          { href: "https://cyberbull.medium.com/", icon: FaMedium, label: "Medium" },
        ].map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            className="relative flex flex-col items-center group"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <link.icon className="text-4xl md:text-5xl text-orange-600 group-hover:text-orange-800" />
            <motion.span
              className="mt-2 text-sm text-orange-800 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            >
              {link.label}
            </motion.span>
          </motion.a>
        ))}
      </div>
    </footer>
  );
}
