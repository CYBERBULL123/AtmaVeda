'use client'

import { motion } from 'framer-motion'

interface CallToActionProps {
  onGetStarted: () => void
}

export default function CallToAction({ onGetStarted }: CallToActionProps) {
  return (
    <section className="py-12 text-center">
      <motion.button
        onClick={onGetStarted}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-orange-500 text-white font-bold py-3 px-6 rounded-full text-xl shadow-lg hover:bg-orange-600 transition duration-300"
      >
        Discover the Divine – Get Started
      </motion.button>
    </section>
  )
}

