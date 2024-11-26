'use client';

import { motion } from 'framer-motion';
import { FaBook, FaRobot, FaHistory } from 'react-icons/fa';

const features = [
  {
    title: 'Vedabase',
    description: 'A sacred repository of ancient Vedic texts and philosophies.',
    icon: FaBook,
  },
  {
    title: 'VedaGPT',
    description: 'Your interactive AI guide for divine spiritual wisdom.',
    icon: FaRobot,
  },
  {
    title: 'Indian History Explorer',
    description: 'Discover India’s rich cultural and spiritual legacy.',
    icon: FaHistory,
  },
];

export default function Features() {
  return (
    <section className="py-16">
      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-10 text-amber-800 tracking-wide"
      >
        Explore Our Divine Features
      </motion.h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="relative bg-gradient-to-r from-orange-50 via-yellow-100 to-orange-50 rounded-xl shadow-lg p-8 text-center"
          >
            {/* Icon with Divine Glow */}
            <div className="relative mb-6">
              <feature.icon className="text-5xl text-orange-500 mx-auto" />
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
            </div>
            {/* Feature Title */}
            <h3 className="text-2xl font-semibold text-amber-900 mb-3">
              {feature.title}
            </h3>
            {/* Feature Description */}
            <p className="text-amber-700 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
