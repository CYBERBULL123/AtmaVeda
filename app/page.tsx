'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import Introduction from '@/components/Introduction'
import Features from '@/components/Features'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'
import Vedabase from '@/components/Vedabase'
import VedaGPT from '@/components/VedaGPT'
import IndianHistory from '@/components/IndianHistory'

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const handleGetStarted = () => {
    setActiveSection('vedabase')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-orange-200 text-amber-900">
      <AnimatePresence>
        {!activeSection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="container mx-auto px-4"
          >
            <Header />
            <Introduction />
            <Features />
            <CallToAction onGetStarted={handleGetStarted} />
            <Footer />
          </motion.div>
        )}
        {activeSection === 'vedabase' && <Vedabase onNavigate={setActiveSection} />}
        {activeSection === 'vedagpt' && <VedaGPT onNavigate={setActiveSection} />}
        {activeSection === 'history' && <IndianHistory onNavigate={setActiveSection} />}
      </AnimatePresence>
    </div>
  )
}

