'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaOm, FaPaperPlane, FaHome, FaHistory, FaSun, FaMoon, FaCog } from 'react-icons/fa'
import { GiLotus, GiMeditation, GiSandsOfTime } from 'react-icons/gi'
import { RiMentalHealthFill } from 'react-icons/ri'

interface VedaGPTProps {
  onNavigate: (section: string) => void
}

export default function VedaGPT({ onNavigate }: VedaGPTProps) {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [theme, setTheme] = useState<'daylight' | 'divine'>('divine')
  const [sound, setSound] = useState<'mantra' | 'ambient' | 'off'>('off')

  useEffect(() => {
    setTimeout(() => {
      setMessages([{ text: "Namaste! I'm VedaGPT, your spiritual guide. How may I assist you on your journey?", isUser: false }])
    }, 1000)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }])
      setInput('')
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setMessages(prev => [
          ...prev,
          { text: "Your question resonates with the universe. Let me guide you further.", isUser: false },
        ])
      }, 2000)
    }
  }

  const toggleTheme = () => setTheme(prev => (prev === 'daylight' ? 'divine' : 'daylight'))

  const toggleSound = () => setSound(prev => (prev === 'off' ? 'mantra' : prev === 'mantra' ? 'ambient' : 'off'))

  return (
    <div className={`min-h-screen p-8 ${theme === 'daylight' ? 'bg-amber-100' : 'bg-gradient-to-b from-indigo-900 to-purple-900'} text-amber-900 transition-colors duration-500`}>
      <nav className="flex justify-between items-center mb-8 space-x-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center text-lg font-semibold text-amber-100 hover:text-amber-300 space-x-2"
          onClick={() => onNavigate('vedabase')}
        >
          <FaHome />
          <span>VedaBase</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center text-lg font-semibold text-amber-100 hover:text-amber-300 space-x-2"
          onClick={() => onNavigate('history')}
        >
          <FaHistory />
          <span>Indian History</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-3xl text-amber-500 hover:text-amber-600 transition duration-300"
          onClick={toggleTheme}
        >
          {theme === 'daylight' ? <FaSun /> : <FaMoon />}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-3xl text-amber-500 hover:text-amber-600 transition duration-300"
          onClick={toggleSound}
        >
          {sound === 'off' ? <FaCog /> : sound === 'mantra' ? <FaOm /> : <GiMeditation />}
        </motion.button>
      </nav>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-center mb-12 text-amber-500"
      >
        VedaGPT
      </motion.h1>

      <div className="max-w-2xl mx-auto mb-12 h-96 overflow-y-auto p-4 rounded-lg bg-amber-50 bg-opacity-20 backdrop-blur-md">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}
            >
              <span
                className={`inline-block p-4 rounded-lg shadow-md ${
                  message.isUser
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-600 text-white'
                    : 'bg-white bg-opacity-20 backdrop-blur-md text-amber-100'
                }`}
              >
                {message.text}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-amber-300 text-center"
          >
            <GiMeditation className="inline-block text-4xl animate-pulse" />
            <span className="ml-2">Contemplating...</span>
          </motion.div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your spiritual question..."
            className="w-full py-3 px-5 rounded-lg bg-amber-100 text-indigo-900 placeholder-indigo-700 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-lg"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-500 hover:text-orange-600"
          >
            <FaPaperPlane size={24} />
          </motion.button>
        </div>
      </form>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-8">
        <motion.button
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="text-4xl text-amber-500 hover:text-amber-600 transition duration-300"
        >
          <GiLotus />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="text-4xl text-amber-500 hover:text-amber-600 transition duration-300"
        >
          <RiMentalHealthFill />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="text-4xl text-amber-500 hover:text-amber-600 transition duration-300"
        >
          <FaOm />
        </motion.button>
      </div>

      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="fixed bottom-4 right-4 text-6xl text-orange-500"
      >
        <GiSandsOfTime />
      </motion.div>
    </div>
  )
}
