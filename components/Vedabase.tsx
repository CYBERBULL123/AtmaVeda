'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaOm, FaSearch, FaBook, FaLightbulb, FaCalendarAlt, FaPrayingHands, FaLandmark, FaYinYang, FaSpinner } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

interface VedabaseProps {
  onNavigate: (section: string) => void;
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
  const [selectedScripture, setSelectedScripture] = useState<string | null>(null);
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [aiContent, setAiContent] = useState<{ [key: string]: string }>({});
  const [loadingParts, setLoadingParts] = useState<{ [key: string]: boolean }>({});
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  const generateContent = async (part: string, lang: 'en' | 'hi' = 'en') => {
    setLoadingParts(prev => ({ ...prev, [part]: true }));
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ part, language: lang })
      });
      
      const data = await res.json();
      if (res.ok) {
        setAiContent(prev => ({ ...prev, [part]: data.content }));
      } else {
        setAiContent(prev => ({ ...prev, [part]: data.error }));
      }
    } catch (error) {
      setAiContent(prev => ({ ...prev, [part]: "Failed to connect with divine wisdom. Please try again later." }));
    }
    setLoadingParts(prev => ({ ...prev, [part]: false }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 text-amber-900 p-8"
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

      {/* Language Toggle */}
      <div className="flex justify-end mb-4">
        <label className="mr-2 text-amber-800 font-semibold">Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as 'en' | 'hi')}
          className="py-2 px-4 rounded bg-white bg-opacity-50 text-amber-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>

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
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="flex items-center mb-4"
              >
                <scripture.icon className="text-3xl text-orange-500 mr-4" />
                <h2 className="text-2xl font-semibold text-amber-800">{scripture.title}</h2>
              </motion.div>
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
            {scriptures.find((s) => s.id === selectedScripture)?.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scriptures
              .find((s) => s.id === selectedScripture)
              ?.parts.map((part) => (
                <motion.div
                  key={part}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white bg-opacity-75 rounded-lg p-4 shadow-md cursor-pointer border-2 border-amber-200"
                  onClick={() => setSelectedPart(part)}
                >
                  <h3 className="text-xl font-semibold text-amber-700">{part}</h3>
                </motion.div>
              ))}
          </div>
        </div>
      )}

      {selectedPart && (
        <div className="space-y-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-lg text-amber-800 hover:text-amber-600"
            onClick={() => setSelectedPart(null)}
          >
            ← Back to Parts
          </motion.button>

          <div className="bg-white/80 rounded-xl p-6 shadow-2xl border-2 border-amber-200">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                {selectedPart}
              </h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => generateContent(selectedPart, language)}
                disabled={loadingParts[selectedPart]}
                className={`px-6 py-2 rounded-full ${
                  loadingParts[selectedPart]
                    ? 'bg-amber-200 cursor-not-allowed'
                    : 'bg-amber-600 hover:bg-amber-700'
                } text-white font-semibold flex items-center gap-2`}
              >
                {loadingParts[selectedPart] ? (
                  <>
                    <FaSpinner className="animate-spin bg-orange-300" />
                    <span className="text-amber-800 ml-2">Channeling Wisdom...</span>
                  </>
                ) : (
                  <>
                    <FaLightbulb />
                    Generate Divine Insights
                  </>
                )}
              </motion.button>
            </div>

            {aiContent[selectedPart] ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-lg max-w-none p-4 bg-amber-50 rounded-lg shadow-inner"
              >
                <ReactMarkdown
                  components={{
                    h3: ({ children }) => (
                      <h3 className="text-amber-800 text-xl font-bold mb-4 flex items-center gap-2">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-amber-700 mb-4 leading-relaxed">
                        {children}
                      </p>
                    ),
                    strong: ({ children }) => (
                      <strong className="text-amber-800">{children}</strong>
                    )
                  }}
                >
                  {aiContent[selectedPart]}
                </ReactMarkdown>
              </motion.div>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="text-6xl text-amber-500 animate-pulse-slow">🕉</div>
                <p className="text-amber-700 text-lg">
                  Click below to unveil sacred knowledge about {selectedPart}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}
