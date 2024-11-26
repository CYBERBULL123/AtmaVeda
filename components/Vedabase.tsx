'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaOm, FaSearch, FaBook, FaLightbulb, FaCalendarAlt,  FaPrayingHands, FaLandmark, FaUserAstronaut, FaYinYang } from 'react-icons/fa'

interface VedabaseProps {
  onNavigate: (section: string) => void
}

const scriptures = [
  {
    id: 'vedas',
    title: 'Vedas',
    icon: FaBook,
    content: 'The Vedas are a large body of religious texts originating in ancient India.',
    parts: ['Rigveda', 'Samaveda', 'Yajurveda', 'Atharvaveda'],
  },
  {
    id: 'upanishads',
    title: 'Upanishads',
    icon: FaBook,
    content: 'The Upanishads are late Vedic Sanskrit texts of religious teaching and ideas.',
    parts: ['Isha Upanishad', 'Kena Upanishad', 'Katha Upanishad', 'Mundaka Upanishad'],
  },
  {
    id: 'bhagavad-gita',
    title: 'Bhagavad Gita',
    icon: FaBook,
    content: 'The Bhagavad Gita is a 700-verse Hindu scripture that is part of the epic Mahabharata.',
    parts: [
      'Chapter 1: Arjuna’s Dilemma',
      'Chapter 2: Sankhya Yoga',
      'Chapter 3: Karma Yoga',
      'Chapter 4: Jnana Karma Sanyasa Yoga',
      'Chapter 5: Karma Sanyasa Yoga',
      'Chapter 6: Dhyana Yoga',
      'Chapter 7: Jnana Vijnana Yoga',
      'Chapter 8: Aksara Brahma Yoga',
      'Chapter 9: Raja Vidya Raja Guhya Yoga',
      'Chapter 10: Vibhuti Yoga',
      'Chapter 11: Visvarupa Darshana Yoga',
      'Chapter 12: Bhakti Yoga',
      'Chapter 13: Kshetra Kshetragna Vibhaga Yoga',
      'Chapter 14: Gunatraya Vibhaga Yoga',
      'Chapter 15: Purusottama Yoga',
      'Chapter 16: Daivasura Sampad Vibhaga Yoga',
      'Chapter 17: Shraddhatraya Vibhaga Yoga',
      'Chapter 18: Moksha Sanyasa Yoga'
    ]
  },
  {
    id: 'puranas',
    title: 'Puranas',
    icon: FaBook,
    content: 'The Puranas are a vast genre of Indian literature about a wide range of topics.',
    parts: ['Vishnu Purana', 'Bhagavata Purana', 'Shiva Purana', 'Devi Purana'],
  },
  {
    id: 'spiritual-places',
    title: 'Spiritual Places',
    icon: FaLandmark,
    content: 'India is home to numerous sacred and spiritual sites that attract millions of pilgrims each year.',
    parts: [
      'Varanasi (Kashi)',
      'Vrindavan',
      'Rishikesh',
      'Haridwar',
      'Tirupati',
      'Kedarnath',
      'Amritsar (Golden Temple)',
      'Shirdi (Sai Baba)',
      'Somnath Temple',
      'Badarinath'
    ],
  },
  {
    id: 'sanatan-dharma',
    title: 'Sanatan Dharma',
    icon: FaOm,
    content: 'Sanatan Dharma refers to the eternal and universal order, encompassing the philosophical, ethical, and spiritual principles of Hinduism.',
    parts: ['Dharma', 'Karma', 'Moksha', 'Samsara', 'Bhakti'],
  },
  {
    id: 'divine-powers',
    title: 'Divine Powers',
    icon: FaPrayingHands,
    content: 'Divine powers in Hinduism represent the various abilities and energies attributed to deities that govern the cosmos and life.',
    parts: [
      'Shakti (Power of Creation)',
      'Brahman (Supreme Consciousness)',
      'Ishvara (Personal God)',
      'Maya (Illusion)',
      'Prana (Life Force)',
      'Kundalini (Spiritual Energy)',
      'Bhakti (Devotion)',
      'Karma (Action and Consequences)'
    ],
  },
  {
    id: 'deities',
    title: 'Deities',
    icon: FaYinYang,
    content: 'The Hindu pantheon includes a wide array of deities, each representing different aspects of life and the universe.',
    parts: [
      'Brahma (The Creator)',
      'Vishnu (The Preserver)',
      'Shiva (The Destroyer)',
      'Lakshmi (Goddess of Wealth)',
      'Saraswati (Goddess of Knowledge)',
      'Durga (Goddess of Strength)',
      'Ganesha (God of Beginnings)',
      'Kali (Goddess of Destruction and Transformation)',
      'Hanuman (The Monkey God)',
      'Krishna (The Divine Playmaker)'
    ],
  },
  {
    id: 'spiritual-concepts',
    title: 'Spiritual Concepts',
    icon: FaLightbulb,
    content: 'Hinduism is rich with philosophical concepts that shape its spiritual practices.',
    parts: [
      'Atman (Soul)',
      'Brahman (Universal Consciousness)',
      'Moksha (Liberation)',
      'Karma (Action and Consequences)',
      'Samsara (Cycle of Rebirth)',
      'Yoga (Union)',
      'Dharma (Cosmic Order)',
      'Bhakti (Devotion)',
      'Jnana (Knowledge)',
      'Kundalini (Awakening of Spiritual Energy)'
    ],
  },
  {
    id: 'festivals',
    title: 'Hindu Festivals',
    icon: FaCalendarAlt,
    content: 'Festivals are an important part of Hindu culture and spiritual practice, celebrating the divine and seasonal cycles.',
    parts: [
      'Diwali (Festival of Lights)',
      'Holi (Festival of Colors)',
      'Navratri (Nine Nights Festival)',
      'Durga Puja',
      'Ganesh Chaturthi',
      'Makar Sankranti',
      'Rama Navami',
      'Janmashtami',
      'Kumbh Mela',
      'Raksha Bandhan'
    ],
  }
];

export default function Vedabase({ onNavigate }: VedabaseProps) {
  const [selectedScripture, setSelectedScripture] = useState<string | null>(null)
  const [selectedPart, setSelectedPart] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [aiInsight, setAiInsight] = useState('')

  useEffect(() => {
    if (selectedPart) {
      // Simulating AI-powered insights for selected parts
      const insights = {
        'Rigveda': 'Rigveda focuses on hymns dedicated to various deities like Agni and Indra.',
        'Sankhya Yoga': 'Sankhya Yoga discusses the path of knowledge and self-realization.',
        'Vishnu Purana': 'Vishnu Purana elaborates on the ten avatars of Vishnu and creation cycles.',
      }
      setAiInsight(insights[selectedPart] || 'Dive deeper into the essence of this scripture.')
    }
  }, [selectedPart])

  const handlePartClick = (part: string) => {
    setSelectedPart(part)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 text-amber-900 p-8"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <nav className="flex justify-between items-center mb-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl text-amber-800 hover:text-amber-600"
          onClick={() => onNavigate('vedagpt')}
        >
          VedaGPT
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl text-amber-800 hover:text-amber-600"
          onClick={() => onNavigate('history')}
        >
          Indian History
        </motion.button>
      </nav>

      <h1 className="text-4xl font-bold text-center mb-8 text-amber-800">VedaBase</h1>

      <div className="relative mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search the ancient wisdom..."
          className="w-full py-2 px-4 rounded-full bg-white bg-opacity-50 text-amber-900 placeholder-amber-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-700" />
      </div>

      {!selectedScripture && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {scriptures.map((scripture) => (
            <motion.div
              key={scripture.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-75 rounded-lg p-6 shadow-lg cursor-pointer border-2 border-amber-200"
              onClick={() => setSelectedScripture(scripture.id)}
            >
              <div className="flex items-center mb-4">
                <scripture.icon className="text-3xl text-orange-500 mr-4" />
                <h2 className="text-2xl font-semibold text-amber-800">{scripture.title}</h2>
              </div>
              <p className="text-amber-700">{scripture.content}</p>
            </motion.div>
          ))}
        </div>
      )}

      {selectedScripture && !selectedPart && (
        <div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-lg text-amber-800 hover:text-amber-600 mb-4"
            onClick={() => setSelectedScripture(null)}
          >
            ← Back to VedaBase
          </motion.button>
          <h2 className="text-3xl font-bold text-amber-800 mb-6">
            {scriptures.find((scripture) => scripture.id === selectedScripture)?.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scriptures
              .find((scripture) => scripture.id === selectedScripture)
              ?.parts.map((part) => (
                <motion.div
                  key={part}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white bg-opacity-75 rounded-lg p-4 shadow-md cursor-pointer border-2 border-amber-200"
                  onClick={() => handlePartClick(part)}
                >
                  <h3 className="text-xl font-semibold text-amber-700">{part}</h3>
                </motion.div>
              ))}
          </div>
        </div>
      )}

      {selectedPart && (
        <div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-lg text-amber-800 hover:text-amber-600 mb-4"
            onClick={() => setSelectedPart(null)}
          >
            ← Back to Parts
          </motion.button>
          <h2 className="text-3xl font-bold text-amber-800 mb-6">{selectedPart}</h2>
          <div className="bg-white bg-opacity-75 rounded-lg p-6 shadow-lg border-2 border-amber-200">
            <h3 className="text-2xl font-semibold text-amber-800 mb-4">AI-Powered Insight</h3>
            <p className="text-amber-700">{aiInsight}</p>
          </div>
        </div>
      )}
    </motion.div>
  )
}
