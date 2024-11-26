'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaOm, FaPaperPlane } from 'react-icons/fa'

interface VedaGPTProps {
  onNavigate: (section: string) => void
}

export default function VedaGPT({ onNavigate }: VedaGPTProps) {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([])
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }])
      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Namaste! I'm VedaGPT, your spiritual guide. How may I assist you on your journey?", isUser: false },
        ])
      }, 1000)
      setInput('')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen text-amber-100 p-8"
      style={{
        backgroundImage: "url('https://i.ibb.co/7QjxX08/Ox-Ima-Gen-2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}
    >
      <nav className="flex justify-between items-center mb-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-3xl font-extrabold text-amber-100 hover:text-amber-300 transition duration-300"
          onClick={() => onNavigate('vedabase')}
        >
          VedaBase
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-3xl font-extrabold text-amber-100 hover:text-amber-300 transition duration-300"
          onClick={() => onNavigate('history')}
        >
          Indian History
        </motion.button>
      </nav>

      <h1 className="text-5xl font-extrabold text-center mb-12 text-amber-100">VedaGPT</h1>

      <div className="max-w-2xl mx-auto" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}
          >
            <span
              className={`inline-block p-4 rounded-lg ${
                message.isUser
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-600 text-white'
                  : 'bg-gray-500 text-white bg-opacity-30 backdrop-blur-md'
              }`}
            >
              {message.text}
            </span>
          </motion.div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-4">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your spiritual question..."
            className="w-full py-3 px-5 rounded-full bg-amber-100 text-indigo-900 placeholder-indigo-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-500 hover:text-orange-600"
          >
            <FaPaperPlane />
          </button>
        </div>
      </form>

      <motion.div
        animate={{ rotate: [0, -15, 15, 0] }} // Rotates left (-15deg) and right (15deg)
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="fixed bottom-4 right-4 text-9xl text-orange-500" // Made it larger with text-9xl
      >
        <FaOm />
      </motion.div>
    </motion.div>
  )
}
