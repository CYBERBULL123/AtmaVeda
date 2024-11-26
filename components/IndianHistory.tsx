'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaOm, FaLandmark, FaBook, FaBuilding, FaCogs, FaChalkboardTeacher, FaGlobe } from 'react-icons/fa'

interface IndianHistoryProps {
  onNavigate: (section: string) => void
}

const historicalEvents = [
  { 
    id: 'vedic', 
    year: '1500 BCE', 
    title: 'Vedic Period', 
    icon: FaBook, 
    description: `
      <div>
        <h>Vedic Period (1500 BCE - 500 BCE)</h>
        <p>The Vedic Period marks the foundation of Indian civilization, with the composition of the four Vedas: Rigveda, Samaveda, Yajurveda, and Atharvaveda, which laid the spiritual and philosophical foundations of India.</p>
        
        <h3>🌟 Key Highlights:</h3>
        <ul>
          <li><strong>Emergence of the Caste System (Varna System):</strong> A social structure based on division of labor divided society into four primary varnas: Brahmins (priests and scholars), Kshatriyas (warriors and rulers), Vaishyas (merchants and agriculturists), and Shudras (laborers and service providers).</li>
          <li><strong>Rituals and Spiritual Knowledge:</strong> The Vedas formed the basis for Vedic religion, with sacred rituals (yajnas) and sacrifices central to religious practices.</li>
          <li><strong>Development of Sanskrit:</strong> The Vedas were composed in Sanskrit, which became the sacred and literary language, setting the foundation for classical Indian literature.</li>
        </ul>
        
        <h3>🧘‍♂️ Philosophical Foundations:</h3>
        <ul>
          <li><strong>Dharma:</strong> Duty, <strong>Karma:</strong> Action and its consequences, and <strong>Moksha:</strong> Liberation were central to Vedic philosophy.</li>
          <li>The <strong>Upanishads</strong> marked a shift towards metaphysical questions, focusing on <strong>Brahman</strong> (the universal soul) and <strong>Atman</strong> (the individual soul), leading to the development of Vedanta philosophy.</li>
        </ul>
        
        <h3>🌾 Society and Economy:</h3>
        <ul>
          <li><strong>Shift from Nomadic to Settled Life:</strong> Transition from nomadic pastoralism to settled agrarian communities.</li>
          <li><strong>Agricultural Advancements:</strong> Introduction of iron tools revolutionized agriculture and facilitated trade and settlements.</li>
        </ul>
        
        <h3>🎭 Cultural Developments:</h3>
        <ul>
          <li><strong>Indian Music and Dance:</strong> Laid the foundation for oral traditions tied to religious rituals.</li>
          <li><strong>Worship of Nature Gods:</strong> Indra (thunder), Agni (fire), Varuna (cosmic order), and Surya (sun).</li>
        </ul>
        
        <h3>📜 Legacy:</h3>
        <p>The Vedic Period established the foundations of Hindu philosophy, religion, and social structures that influenced India for millennia. The cultural, philosophical, and religious developments set the stage for traditions like the <strong>Mahabharata</strong>, <strong>Ramayana</strong>, and teachings of <strong>Buddhism</strong> and <strong>Jainism</strong>.</p>
      </div>
    `
  },
  { 
    id: 'mahajanapada', 
    year: '600 BCE', 
    title: 'Mahajanapada Era', 
    icon: FaLandmark, 
    description: `
      <div>
        <h1>🌟 Mahajanapada Era (600 BCE - 321 BCE)</h1>
        <p>The Mahajanapada period saw the rise of 16 powerful states, known as Mahajanapadas, which played a crucial role in the political, social, and cultural development of ancient India. 🌍</p>

        <h2>Key Features:</h2>

        <h3>1. 🏛️ Political Structure</h3>
        <ul>
          <li>16 major states or republics</li>
          <li>Transition from tribal systems to more complex political organizations</li>
          <li>Emergence of new forms of government, including republics and monarchies</li>
        </ul>

        <h3>2. 💰 Economic Developments</h3>
        <ul>
          <li>Growth of trade and commerce</li>
          <li>Use of punch-marked coins 💸</li>
          <li>Urbanization and the rise of cities 🏙️</li>
        </ul>

        <h3>3. 🧑‍🤝‍🧑 Social Changes</h3>
        <ul>
          <li>Strengthening of the caste system</li>
          <li>Rise of new religious movements (Buddhism and Jainism) 🕉️</li>
          <li>Challenges to traditional Vedic practices 📜</li>
        </ul>

        <h3>4. 🎭 Cultural Advancements</h3>
        <ul>
          <li>Development of new philosophical ideas 💭</li>
          <li>Advancements in literature and arts 🎨</li>
          <li>Evolution of regional languages and dialects 🗣️</li>
        </ul>

        <h2>Notable Mahajanapadas:</h2>
        <ol>
          <li><strong>Magadha</strong>: Became the most powerful, later forming the core of the Mauryan Empire 💪</li>
          <li><strong>Kosala</strong>: Known for its cultural significance and mentioned in epic literature 📚</li>
          <li><strong>Kuru</strong>: Associated with the epic Mahabharata 🏹</li>
          <li><strong>Panchala</strong>: Another kingdom featured in the Mahabharata 📖</li>
          <li><strong>Gandhara</strong>: Known for its distinct art style and strategic location 🎨📍</li>
        </ol>

        <h2>Legacy:</h2>
        <p>The Mahajanapada era laid the foundation for the political and cultural unification of India under the Mauryan Empire 🏛️. It was a period of great intellectual and spiritual ferment, giving rise to new religious and philosophical traditions that would shape Indian culture for millennia to come 🌱.</p>
      </div>
    `
  },
  { 
    id: 'maurya', 
    year: '322 BCE', 
    title: 'Maurya Empire', 
    icon: FaLandmark, 
    description: `
      # Maurya Empire (322 BCE - 185 BCE)

      The Maurya Empire unified most of the Indian subcontinent under one ruler and saw the rise of Ashoka, whose policies spread Buddhism across Asia.

      ## Key Features:

      ### 1. Political Unification
      - First empire to unite most of the Indian subcontinent
      - Centralized administration with a sophisticated bureaucracy
      - Efficient taxation system and strong military

      ### 2. Ashoka's Reign (268-232 BCE)
      - Conversion to Buddhism after the Kalinga War
      - Promotion of Buddhist values and non-violence (ahimsa)
      - Establishment of rock and pillar edicts across the empire

      ### 3. Economic Prosperity
      - Thriving trade networks, both internal and external
      - Standardization of weights, measures, and currency
      - Development of infrastructure, including roads and irrigation systems

      ### 4. Cultural Achievements
      - Patronage of art and architecture (e.g., Pillars of Ashoka)
      - Spread of Buddhism to Central Asia and Southeast Asia
      - Advancements in science, mathematics, and astronomy

      ## Notable Rulers:
      1. **Chandragupta Maurya**: Founder of the empire
      2. **Bindusara**: Expanded the empire further south
      3. **Ashoka**: Greatest Mauryan emperor, known for his Buddhist conversion and edicts

      ## Legacy:
      The Maurya Empire set a precedent for centralized rule in India and played a crucial role in the spread of Buddhism. Ashoka's principles of dharma (righteous living) and religious tolerance influenced Indian political thought for centuries to come.
    `
  },
  { 
    id: 'gupta', 
    year: '320 CE', 
    title: 'Gupta Empire', 
    icon: FaBuilding, 
    description: `
      # Gupta Empire (320 CE - 550 CE)

      The Gupta period is often referred to as the Golden Age of India due to its advancements in science, art, mathematics, and literature.

      ## Key Achievements:

      ### 1. Scientific Advancements
      - Aryabhata's work on astronomy and the concept of zero
      - Varahamihira's contributions to trigonometry
      - Advancements in metallurgy and medicine

      ### 2. Mathematical Innovations
      - Development of the decimal system
      - Brahmagupta's work on negative numbers and zero
      - Advancements in algebra and arithmetic

      ### 3. Literary and Artistic Flourishing
      - Kalidasa's famous works like Shakuntala and Meghaduta
      - Development of classical Sanskrit literature
      - Advancements in sculpture and painting (Ajanta Caves)

      ### 4. Architectural Marvels
      - Construction of grand temples and monasteries
      - Development of the Gupta style of architecture
      - Iconic structures like the Iron Pillar of Delhi

      ## Notable Rulers:
      1. **Chandragupta I**: Founder of the Gupta Empire
      2. **Samudragupta**: Known for his military conquests and patronage of arts
      3. **Chandragupta II**: Oversaw the zenith of the Gupta Empire

      ## Legacy:
      The Gupta period's contributions to science, mathematics, literature, and art had a lasting impact on Indian culture and beyond. Many of the advancements made during this era laid the foundation for future developments in various fields.
    `
  },
  { 
    id: 'medieval', 
    year: '750 CE', 
    title: 'Medieval India', 
    icon: FaCogs, 
    description: `
      # Medieval India (750 CE - 1526 CE)

      During the medieval period, numerous regional powers flourished, including the Chola and Rajput kingdoms, and India saw the rise of Islamic rule.

      ## Key Developments:

      ### 1. Regional Kingdoms
      - Rise of powerful dynasties like Cholas, Chalukyas, and Rajputs
      - Development of regional languages and literature
      - Flourishing of distinct architectural styles

      ### 2. Islamic Influence
      - Establishment of Delhi Sultanate (1206-1526)
      - Introduction of Islamic art, architecture, and culture
      - Syncretic developments in music, literature, and cuisine

      ### 3. Religious Movements
      - Bhakti movement in Hinduism
      - Rise of Sikhism under Guru Nanak
      - Sufi traditions in Islam

      ### 4. Economic and Trade Developments
      - Expansion of international trade
      - Advancements in textile production and metallurgy
      - Development of new agricultural techniques

      ## Notable Dynasties and Rulers:
      1. **Chola Dynasty**: Known for their naval power and temple architecture
      2. **Delhi Sultanate**: Five dynasties that ruled from Delhi
      3. **Vijayanagara Empire**: Last great Hindu empire of South India

      ## Legacy:
      The medieval period saw a rich intermingling of cultures, resulting in unique art forms, architectural styles, and religious syncretism that continue to influence Indian culture today.
    `
  },
  { 
    id: 'mughal', 
    year: '1526 CE', 
    title: 'Mughal Empire', 
    icon: FaBuilding, 
    description: `
      # Mughal Empire (1526 CE - 1857 CE)

      The Mughal Empire, founded by Babur, brought a period of prosperity, with major advancements in architecture, culture, and administration.

      ## Key Features:

      ### 1. Administrative Reforms
      - Centralized bureaucracy and revenue system
      - Land revenue system (zabt) introduced by Akbar
      - Integration of Hindu nobles into the administration

      ### 2. Architectural Marvels
      - Taj Mahal, built by Shah Jahan
      - Red Fort and Jama Masjid in Delhi
      - Fatehpur Sikri, Akbar's capital city

      ### 3. Cultural Synthesis
      - Development of Indo-Islamic architecture
      - Patronage of arts, music, and literature
      - Promotion of Persian language and culture

      ### 4. Economic Prosperity
      - Expansion of international trade
      - Development of textiles and handicrafts industry
      - Agricultural reforms and land development

      ## Notable Rulers:
      1. **Babur**: Founder of the Mughal Empire
      2. **Akbar**: Known for his religious tolerance and administrative reforms
      3. **Shah Jahan**: Builder of the Taj Mahal
      4. **Aurangzeb**: Last great Mughal emperor, known for his military campaigns

      ## Legacy:
      The Mughal period left an indelible mark on Indian culture, art, and architecture. Many Mughal traditions and practices continue to influence Indian society and governance to this day.
    `
  },
  { 
    id: 'colonial', 
    year: '1757 CE', 
    title: 'Colonial India', 
    icon: FaGlobe, 
    description: `
      # Colonial India (1757 CE - 1947 CE)

      India was colonized by the British East India Company, leading to significant social, political, and economic changes, and sparking the independence movement.

      ## Key Developments:

      ### 1. Political Changes
      - Transition from Company rule to British Crown rule (1858)
      - Introduction of Western-style education and legal system
      - Emergence of Indian political consciousness and nationalism

      ### 2. Economic Transformations
      - De-industrialization of traditional Indian industries
      - Development of railways and modern infrastructure
      - Integration of India into the global capitalist economy

      ### 3. Social Reforms
      - Abolition of practices like sati and child marriage
      - Introduction of Western education and English language
      - Rise of social reform movements

      ### 4. Independence Movement
      - Formation of Indian National Congress (1885)
      - Non-cooperation and Civil Disobedience movements
      - Partition of India and Pakistan (1947)

      ## Notable Figures:
      1. **Mahatma Gandhi**: Leader of the Indian independence movement
      2. **Jawaharlal Nehru**: First Prime Minister of independent India
      3. **Subhas Chandra Bose**: Founder of the Indian National Army

      ## Legacy:
      The colonial period dramatically reshaped Indian society, politics, and economy. It led to the birth of modern India and Pakistan, with lasting impacts on South Asian geopolitics and culture.
    `
  },
  { 
    id: 'independence', 
    year: '1947 CE', 
    title: 'Indian Independence', 
    icon: FaChalkboardTeacher, 
    description: `
      # Indian Independence (1947 CE)

      In 1947, India gained independence after a prolonged struggle against British colonial rule, leading to the formation of the Republic of India.

      ## Key Events:

      ### 1. Partition of India
      - Division of British India into India and Pakistan
      - Mass migration and communal violence
      - Challenges of integrating princely states

      ### 2. Formation of Government
      - Jawaharlal Nehru becomes the first Prime Minister
      - Drafting of the Indian Constitution (1950)
      - Adoption of democratic and secular principles

      ### 3. Economic Policies
      - Implementation of Five-Year Plans
      - Focus on industrialization and self-reliance
      - Land reforms and agricultural development

      ### 4. Foreign Policy
      - Non-Aligned Movement
      - Panchsheel (Five Principles of Peaceful Coexistence)
      - Relations with neighboring countries

      ## Notable Figures:
      1. **Sardar Vallabhbhai Patel**: Instrumental in integrating princely states
      2. **Dr. B.R. Ambedkar**: Chief architect of the Indian Constitution
      3. **Maulana Abul Kalam Azad**: First Minister of Education

      ## Legacy:
      Indian Independence marked the end of colonial rule and the beginning of a new era of self-governance, democracy, and development in South Asia.
    `
  },
  { 
    id: 'modern', 
    year: '1950 CE - Present', 
    title: 'Modern India', 
    
icon: FaOm, 
    description: `
      # Modern India (1950 CE - Present)

      Modern India has become a global economic and technological powerhouse, making strides in space exploration, IT, and democratic governance.

      ## Key Developments:

      ### 1. Economic Reforms
      - Liberalization of the economy in 1991
      - Growth of IT and service sectors
      - Emergence as one of the world's fastest-growing economies

      ### 2. Technological Advancements
      - Development of indigenous space program (ISRO)
      - Growth of IT hubs like Bangalore and Hyderabad
      - Digital India initiative

      ### 3. Social Changes
      - Rapid urbanization and middle-class growth
      - Advancements in education and literacy rates
      - Women's empowerment and changing social norms

      ### 4. Global Role
      - Increasing influence in international affairs
      - Participation in G20 and BRICS
      - Climate change initiatives and renewable energy focus

      ## Notable Achievements:
      1. **Green Revolution**: Achieving food self-sufficiency
      2. **Space Program**: Mars Orbiter Mission (Mangalyaan)
      3. **Nuclear Capability**: Becoming a nuclear power

      ## Challenges:
      - Population growth and resource management
      - Income inequality and poverty alleviation
- Environmental concerns and sustainable development

      ## Legacy:
      Modern India continues to evolve as a diverse, democratic nation, balancing tradition with modernity and playing an increasingly significant role on the global stage.
    `
  }
]

export default function IndianHistory({ onNavigate }: IndianHistoryProps) {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  // Function to handle event click and show event details
  const handleEventClick = (eventId: string) => {
    setSelectedEvent(eventId);
  };

  // Function to handle navigation back to the main page
  const handleBackToMain = () => {
    setSelectedEvent(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 text-amber-900 p-10"
      style={{
        backgroundImage: "url('/path-to-your-ancient-india-map.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header Section */}
      <nav className="flex justify-between items-center mb-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl text-amber-800 hover:text-amber-600"
          onClick={() => onNavigate('vedabase')}
        >
          Vedabase
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl text-amber-800 hover:text-amber-600"
          onClick={() => onNavigate('vedagpt')}
        >
          VedaGPT
        </motion.button>
      </nav>

      {/* Main Content */}
      {selectedEvent === null ? (
        <div>
          <h1 className="text-4xl font-bold text-center mb-12 text-amber-800">Indian History</h1>

          {/* Event Timeline */}
          <div className="grid grid-cols-3 gap-12 mb-12">
            {historicalEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="flex flex-col items-center space-y-2 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                onClick={() => handleEventClick(event.id)}
              >
                <div className="flex justify-center items-center w-24 h-24 rounded-full bg-orange-100 text-orange-500 text-4xl shadow-md">
                  <event.icon />
                </div>
                <div className="text-sm font-semibold">{event.year}</div>
                <div className="text-xs text-center">{event.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative">
          {/* Display Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 right-0 bottom-0 p-10 bg-amber-50 rounded-lg shadow-lg z-10"
          >
            <button
              onClick={handleBackToMain}
              className="absolute top-5 left-5 text-amber-800 text-xl hover:text-amber-600"
            >
              &larr; Back to History
            </button>
            <div className="flex flex-col items-center">
              <div className="w-36 h-36 bg-orange-100 rounded-full flex justify-center items-center text-orange-500 text-5xl shadow-md">
                {
                  historicalEvents
                    .find(event => event.id === selectedEvent)
                    ?.icon ? 
                    historicalEvents.find(event => event.id === selectedEvent)?.icon()
                    : null
                }
              </div>
              <h2 className="text-6xl font-semibold mt-6 text-amber-800">
                {historicalEvents.find(event => event.id === selectedEvent)?.title}
              </h2>
              {/* Render description with improved styling without left border lines */}
              <div
                className="mt-6 text-amber-700 text-lg text-left leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{
                  __html: `
                    <div class="pl-4 mb-6">
                      ${historicalEvents.find(event => event.id === selectedEvent)?.description || ''}
                    </div>
                    <style>
                      h, h1, h2, h3 {
                        color: #d97706;
                        font-weight: bold;
                        margin-bottom: 0.5em;
                        font-size: 1.5rem;
                      }
                      ul {
                        list-style: disc;
                        padding-left: 1.5em;
                        margin-bottom: 1.5em;
                      }
                      p {
                        margin-bottom: 1em;
                        line-height: 1.75;
                      }
                      blockquote {
                        font-style: italic;
                        color: #a16207;
                        background-color: #fff7ed;
                        padding: 1em;
                        margin: 1.5em 0;
                        border-radius: 0.5em;
                      }
                    </style>
                  `,
                }}
              />
              </div>

          </motion.div>

          {/* Background Blur Effect */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-0"></div>
        </div>
      )}

      <motion.div
        animate={{ rotate: [0, -15, 15, 0] }} // Rotates left (-15deg) and right (15deg)
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="fixed bottom-4 right-4 text-6xl text-orange-500" // Made it larger with text-9xl
      >
        <FaOm />
      </motion.div>
    </motion.div>
  );
}


