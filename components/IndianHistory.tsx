'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaOm, FaLandmark, FaBook, FaBuilding, FaCogs, FaChalkboardTeacher, FaGlobe } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown';

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
        <h1>Vedic Period (1500 BCE - 500 BCE)</h1>
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
      <h1>🏛️ <strong>The Mahajanapadas Period (600 BCE - 321 BCE)</strong></h1>
      <p>The <strong>Mahajanapadas Period</strong> marks a significant transition in Indian history from tribal societies to more structured state-based governance, with the emergence of 16 powerful kingdoms and republics. This era also saw the rise of new philosophical and religious movements, such as <strong>Buddhism</strong> and <strong>Jainism</strong>, that challenged the existing social and religious systems.</p>

      <hr>

      <h2>🏰 <strong>Key Mahajanapadas and Rise of Kingdoms</strong></h2>
      <p>The Mahajanapadas were 16 powerful kingdoms and republics, each playing a pivotal role in the political and cultural landscape of ancient India.</p>
      <table border="1" cellspacing="0" cellpadding="5">
          <tr>
              <th><strong>Mahajanapada</strong></th>
              <th><strong>Capital</strong></th>
              <th><strong>Significance</strong></th>
              <th><strong>Key Figures</strong></th>
          </tr>
          <tr>
              <td><strong>Magadha</strong></td>
              <td>Rajgir, Pataliputra</td>
              <td>One of the most powerful, eventually founded the <strong>Maurya Empire</strong>.</td>
              <td>Bimbisara, Ajatashatru</td>
          </tr>
          <tr>
              <td><strong>Kosala</strong></td>
              <td>Ayodhya</td>
              <td>Birthplace of <strong>Lord Rama</strong>, significant in early Vedic and epic traditions.</td>
              <td>King Dasharatha, Rama</td>
          </tr>
          <tr>
              <td><strong>Vatsa</strong></td>
              <td>Kausambi</td>
              <td>Prominent kingdom known for its strategic location.</td>
              <td>King Udayana</td>
          </tr>
          <tr>
              <td><strong>Avanti</strong></td>
              <td>Ujjain, Mahishmati</td>
              <td>Important trade center in the northwest.</td>
              <td>King Pradyota</td>
          </tr>
          <tr>
              <td><strong>Vrijji Confederacy</strong></td>
              <td>Vaishali</td>
              <td>Early republic, democratic governance, birthplace of <strong>Lord Mahavira</strong>.</td>
              <td>Lichchhavis, Vajjis</td>
          </tr>
          <tr>
              <td><strong>Malla Republics</strong></td>
              <td>Kushinagara, Pava</td>
              <td>Significant for being the site where <strong>Buddha</strong> passed away.</td>
              <td>Mallas</td>
          </tr>
          <tr>
              <td><strong>Kashi</strong></td>
              <td>Varanasi</td>
              <td>Prominent center of Vedic learning and culture.</td>
              <td>King Udayana</td>
          </tr>
          <tr>
              <td><strong>Anga</strong></td>
              <td>Champa</td>
              <td>Known for its trade and influence in the east.</td>
              <td>King Srenika</td>
          </tr>
          <tr>
              <td><strong>Gandhara</strong></td>
              <td>Taxila</td>
              <td>Center of ancient learning and trade, famous for Gandhara art.</td>
              <td>King Porus</td>
          </tr>
          <tr>
              <td><strong>Kuru</strong></td>
              <td>Hastinapura</td>
              <td>Associated with the <strong>Mahabharata</strong> and significant in Vedic traditions.</td>
              <td>King Shantanu, Dhritarashtra</td>
          </tr>
          <tr>
              <td><strong>Panchala</strong></td>
              <td>Kampilya, Ahichhatra</td>
              <td>Known for its role in the Mahabharata, important in early history.</td>
              <td>King Drupada</td>
          </tr>
          <tr>
              <td><strong>Chedi</strong></td>
              <td>Shaktimati</td>
              <td>Known for its association with the epic <strong>Mahabharata</strong>.</td>
              <td>King Shishupala</td>
          </tr>
          <tr>
              <td><strong>Kekaya</strong></td>
              <td>Vausali</td>
              <td>Northern kingdom famous in epic tales and literature.</td>
              <td>King Kambhoja</td>
          </tr>
          <tr>
              <td><strong>Malloi</strong></td>
              <td>Malla</td>
              <td>Important center of trade and culture.</td>
              <td>King Malaya</td>
          </tr>
          <tr>
              <td><strong>Shurasena</strong></td>
              <td>Mathura</td>
              <td>Known for its commerce and religious significance.</td>
              <td>King Kamsa</td>
          </tr>
      </table>

      <hr>

      <h2>🌸 <strong>Philosophical and Religious Movements</strong></h2>
      <ul>
          <li><strong>Rise of Buddhism:</strong>
              <ul>
                  <li>Founded by <strong>Gautama Buddha</strong>, who taught the <strong>Four Noble Truths</strong> and the <strong>Eightfold Path</strong>, offering a path to enlightenment and liberation from suffering.</li>
                  <li>Promoted ideas like non-attachment, mindfulness, and compassion.</li>
              </ul>
          </li>
          <li><strong>Jainism and Mahavira:</strong>
              <ul>
                  <li><strong>Mahavira</strong>, the 24th Tirthankara, emphasized principles like <strong>Ahimsa</strong> (non-violence), <strong>Satya</strong> (truth), and <strong>Aparigraha</strong> (non-possessiveness).</li>
                  <li>Jainism offered a path of self-discipline and renunciation, challenging the ritualistic practices of Brahmanism.</li>
              </ul>
          </li>
          <li><strong>Challenge to Brahmanism:</strong> Both Buddhism and Jainism provided alternatives to the rigid caste-based and priest-dominated Vedic system, fostering spiritual inclusivity.</li>
      </ul>

      <hr>

      <h2>🏙️ <strong>Economic and Political Changes</strong></h2>
      <ul>
          <li><strong>Urbanization:</strong> Cities like <strong>Rajgir</strong>, <strong>Varanasi</strong>, and <strong>Pataliputra</strong> flourished as centers of trade, governance, and culture.</li>
          <li><strong>Coinage and Trade:</strong> Introduction of <strong>punch-marked coins</strong> facilitated trade and monetary exchange, boosting economic activity.</li>
          <li><strong>Political Consolidation:</strong> Kingdoms like Magadha expanded through military conquest and strategic alliances, setting the stage for the Mauryan Empire.</li>
      </ul>

      <hr>

      <h2>🎨 <strong>Cultural Impact and Legacy</strong></h2>
      <ul>
          <li><strong>Art and Architecture:</strong> Early forms of Buddhist and Jain art emerged, with structures like stupas and monastic complexes becoming prominent.</li>
          <li><strong>Codification of Laws:</strong> Works like the <strong>Arthashastra</strong> by Chanakya laid the groundwork for governance, economics, and military strategies.</li>
          <li><strong>Intellectual Renaissance:</strong> The period witnessed a synthesis of cultural traditions, fostering advancements in literature, philosophy, and governance.</li>
      </ul>

      <hr>

      <h2>📜 <strong>Legacy of the Mahajanapadas Period</strong></h2>
      <p>The Mahajanapadas Period was a pivotal era that laid the foundation for India's future development. Its legacy includes:</p>
      <ul>
          <li><strong>Religious Revolution:</strong> Buddhism and Jainism reshaped Indian spirituality and ethics.</li>
          <li><strong>Political Foundation:</strong> The rise of Magadha paved the way for the Maurya Empire's unification of India.</li>
          <li><strong>Cultural Renaissance:</strong> The intellectual and cultural advancements of this era influenced subsequent empires and traditions.</li>
      </ul>
    `
  },
  { 
    id: 'maurya', 
    year: '322 BCE', 
    title: 'Maurya Empire', 
    icon: FaLandmark, 
    description: `
      <h1>🏛️ <strong>Maurya Empire (321 BCE - 185 BCE)</strong></h1>
        <p>The <strong>Maurya Empire</strong> stands as India’s first pan-Indian empire, showcasing unparalleled achievements in governance, culture, and spirituality. Founded by <strong>Chandragupta Maurya</strong> and later transformed by <strong>Ashoka the Great</strong>, this period symbolizes the union of political power with ethical and spiritual ideals.</p>

        <hr>

        <h2>🛡️ <strong>Founding and Expansion</strong></h2>
        <ul>
            <li><strong>Chandragupta Maurya:</strong>
                <ul>
                    <li>With guidance from <strong>Chanakya</strong> (author of the <em>Arthashastra</em>), Chandragupta unified fragmented kingdoms into a single empire.</li>
                    <li>Conquered vast territories, stretching from modern-day <strong>Afghanistan</strong> to <strong>Bengal</strong> and parts of <strong>South India</strong>.</li>
                </ul>
            </li>
            <li><strong>Territorial Conquests:</strong>
                <ul>
                    <li>The empire grew to become one of the world’s largest, spanning from <strong>Himalayas</strong> in the north to <strong>Deccan Plateau</strong> in the south.</li>
                    <li>Gained territories from the remnants of Alexander’s generals and expanded westward to include parts of <strong>Persia</strong>.</li>
                </ul>
            </li>
        </ul>

        <hr>

        <h2>✨ <strong>Ashoka the Great: The Transformation</strong></h2>
        <ul>
            <li><strong>Kalinga War (261 BCE):</strong>
                <ul>
                    <li>Ashoka’s brutal victory in the <strong>Kalinga War</strong> resulted in massive destruction and loss of life.</li>
                    <li>The bloodshed deeply moved Ashoka, leading him to renounce violence and embrace <strong>Buddhism</strong>.</li>
                </ul>
            </li>
            <li><strong>Adoption of Buddhism:</strong>
                <ul>
                    <li>Ashoka promoted the principles of <strong>Ahimsa (non-violence)</strong> and <strong>Dhamma (righteous living)</strong>.</li>
                    <li>He became a patron of Buddhism, spreading its teachings across India and neighboring regions.</li>
                </ul>
            </li>
            <li><strong>Global Mission:</strong>
                <ul>
                    <li>Ashoka sent Buddhist emissaries to <strong>Sri Lanka</strong>, <strong>Central Asia</strong>, and <strong>Southeast Asia</strong>, fostering a global spiritual influence.</li>
                    <li>Constructed numerous <strong>stupas</strong>, monasteries, and inscriptions to immortalize his teachings.</li>
                </ul>
            </li>
        </ul>

        <hr>

        <h2>🏛️ <strong>Administrative Brilliance</strong></h2>
        <ul>
            <li><strong>Centralized Governance:</strong>
                <ul>
                    <li>The empire was divided into <strong>provinces (Janapadas)</strong>, managed by royal governors.</li>
                    <li>Each province had its administrative headquarters, judicial system, and revenue officers.</li>
                </ul>
            </li>
            <li><strong>Efficient Surveillance:</strong>
                <ul>
                    <li>A sophisticated spy network ensured law enforcement and addressed corruption.</li>
                    <li>Officials known as <strong>Dhamma Mahamatras</strong> were tasked with spreading Ashoka’s moral code.</li>
                </ul>
            </li>
            <li><strong>Fair Taxation:</strong>
                <ul>
                    <li>A well-organized taxation system supported infrastructure development, public welfare, and trade.</li>
                </ul>
            </li>
        </ul>

        <hr>

        <h2>📜 <strong>Cultural and Historical Contributions</strong></h2>
        <ul>
            <li><strong>Ashoka’s Edicts:</strong>
                <ul>
                    <li>Inscriptions on rocks and pillars spread his message of peace, morality, and religious tolerance.</li>
                    <li>Edicts emphasized <strong>compassion, ethical living, and respect for all religions</strong>.</li>
                </ul>
            </li>
            <li><strong>Urban Development:</strong>
                <ul>
                    <li>Constructed well-planned cities with facilities like roads, hospitals, and rest houses for travelers.</li>
                </ul>
            </li>
            <li><strong>Religious Harmony:</strong>
                <ul>
                    <li>Encouraged respect and coexistence among diverse faiths, setting an example of inclusivity.</li>
                </ul>
            </li>
        </ul>

        <hr>

        <h2>🕉️ <strong>Spiritual Influence</strong></h2>
        <ul>
            <li><strong>Promotion of Buddhism:</strong>
                <ul>
                    <li>Ashoka was instrumental in establishing Buddhism as a global religion.</li>
                    <li>His emissaries and construction of stupas popularized Buddhist teachings across Asia.</li>
                </ul>
            </li>
            <li><strong>Dhamma (Righteous Living):</strong>
                <ul>
                    <li>Focused on moral governance, welfare of people, and kindness towards animals.</li>
                </ul>
            </li>
            <li><strong>Buddhist Architecture:</strong>
                <ul>
                    <li>Commissioned iconic structures like the <strong>Sanchi Stupa</strong> and the <strong>Barabar Caves</strong>.</li>
                </ul>
            </li>
        </ul>

        <hr>

        <h2>🌍 <strong>Legacy of the Maurya Empire</strong></h2>
        <ul>
            <li><strong>Political Unity:</strong>
                <ul>
                    <li>The Maurya Empire established the first unified Indian subcontinent, laying a foundation for future empires.</li>
                </ul>
            </li>
            <li><strong>Ashoka’s Reforms:</strong>
                <ul>
                    <li>His policies of non-violence, social welfare, and religious tolerance continue to inspire governance worldwide.</li>
                </ul>
            </li>
            <li><strong>Cultural Renaissance:</strong>
                <ul>
                    <li>Fostered advancements in art, architecture, and ethical philosophy, influencing successive generations.</li>
                </ul>
            </li>
            <li><strong>Spread of Buddhism:</strong>
                <ul>
                    <li>Ashoka’s efforts transformed Buddhism into a world religion, impacting societies far beyond India.</li>
                </ul>
            </li>
        </ul>

        <hr>

        <h2>🛕 <strong>Key Contributions of the Maurya Empire</strong></h2>
        <table border="1" cellspacing="0" cellpadding="5">
            <tr>
                <th><strong>Field</strong></th>
                <th><strong>Key Achievements</strong></th>
                <th><strong>Key Figures/Examples</strong></th>
            </tr>
            <tr>
                <td><strong>Founding of the Empire</strong></td>
                <td>Unified smaller kingdoms, forming India’s first pan-Indian empire.</td>
                <td><strong>Chandragupta Maurya, Chanakya</strong></td>
            </tr>
            <tr>
                <td><strong>Buddhism</strong></td>
                <td>Spread Buddhism across Asia, renounced violence.</td>
                <td><strong>Ashoka the Great</strong></td>
            </tr>
            <tr>
                <td><strong>Governance</strong></td>
                <td>Centralized administration, provincial autonomy, efficient spy system.</td>
                <td><strong>Ashoka, Royal Appointees</strong></td>
            </tr>
            <tr>
                <td><strong>Cultural Contributions</strong></td>
                <td>Ashoka’s Edicts promoting peace and religious harmony.</td>
                <td><strong>Ashoka’s Edicts, Stupas</strong></td>
            </tr>
            <tr>
                <td><strong>Infrastructure</strong></td>
                <td>Developed roads, hospitals, rest houses, and cities.</td>
                <td><strong>Ashoka’s Infrastructure Projects</strong></td>
            </tr>
            <tr>
                <td><strong>Religious Tolerance</strong></td>
                <td>Promoted respect and coexistence among all faiths.</td>
                <td><strong>Ashoka</strong></td>
            </tr>
        </table>

        <hr>

        <h2>🌸 <strong>The Enduring Legacy of Ashoka</strong></h2>
        <p>Ashoka’s reign, marked by his transformation from a conqueror to a beacon of morality and peace, continues to inspire generations. His philosophy of <strong>Dhamma</strong>, spread through his Edicts, emphasizes tolerance, compassion, and ethical living. The Maurya Empire remains a cornerstone of India’s political and spiritual heritage, epitomizing the union of power with humanity. 🌿</p>
      `
  },
  { 
    id: 'gupta', 
    year: '320 CE', 
    title: 'Gupta Empire', 
    icon: FaBuilding, 
    description: `
      <h1>🌟 <strong>Gupta Empire (320 CE - 550 CE)</strong></h1>
        <p>Known as the <strong>Golden Age of India</strong>, the Gupta Empire symbolizes a pinnacle of achievements in science, mathematics, culture, and spirituality. Its legacy continues to inspire and influence modern civilization.</p>

        <hr>

        <h2>🧠 <strong>Scientific and Mathematical Achievements</strong></h2>
        <ul>
            <li><strong>Aryabhata:</strong>
                <ul>
                    <li>Introduced the revolutionary concepts of <strong>zero</strong> and the <strong>decimal system</strong>.</li>
                    <li>Proposed the <strong>heliocentric theory</strong>, explaining the Earth’s rotation on its axis.</li>
                </ul>
            </li>
            <li><strong>Medicine:</strong>
                <ul>
                    <li>Advanced surgical techniques were documented in the <strong>Sushruta Samhita</strong>.</li>
                    <li>Progress in <strong>herbal medicine</strong>, vaccinations, and <strong>veterinary sciences</strong>.</li>
                </ul>
            </li>
            <li><strong>Astronomy:</strong>
                <ul>
                    <li>Development of accurate astronomical calendars and observation tools.</li>
                </ul>
            </li>
        </ul>

        <hr>

        <h2>📚 <strong>Cultural and Spiritual Flourishing</strong></h2>
        <ul>
            <li><strong>Sanskrit Literature:</strong>
                <ul>
                    <li><strong>Kalidasa:</strong> Authored literary masterpieces like:
                        <ul>
                            <li><em>Shakuntala</em>: A poignant love story of Shakuntala and King Dushyanta.</li>
                            <li><em>Meghaduta</em>: A lyrical poem about longing and separation.</li>
                        </ul>
                    </li>
                    <li>Development of timeless fables such as <strong>Panchatantra</strong> and <strong>Hitopadesha</strong>.</li>
                </ul>
            </li>
            <li><strong>Hindu Temple Architecture:</strong>
                <ul>
                    <li>Construction of early temples like the <strong>Dashavatara Temple (Deogarh)</strong> and rock-cut shrines at <strong>Udayagiri</strong>.</li>
                    <li>Elaborate sculptures depicting deities like Vishnu, Shiva, and Devi.</li>
                </ul>
            </li>
            <li><strong>Sanatan Dharma:</strong>
                <ul>
                    <li>Revival and codification of <strong>Vedic rituals</strong> and <strong>Hindu philosophy</strong>.</li>
                    <li>Expansion of <strong>Puranas</strong> and promotion of <strong>Vaishnavism</strong>, <strong>Shaivism</strong>, and <strong>Shaktism</strong>.</li>
                </ul>
            </li>
        </ul>

        <hr>

        <h2>💰 <strong>Political and Economic Prosperity</strong></h2>
        <ul>
            <li><strong>Centralized Administration:</strong>
                <ul>
                    <li>Efficient governance with local autonomy for provinces.</li>
                    <li>A well-trained military ensuring peace and internal stability.</li>
                </ul>
            </li>
            <li><strong>Trade and Commerce:</strong>
                <ul>
                    <li>Extensive trade networks with the <strong>Roman Empire</strong>, <strong>Southeast Asia</strong>, and <strong>China</strong>.</li>
                    <li>Exports included silk, spices, jewelry, and precious metals.</li>
                </ul>
            </li>
            <li><strong>Craftsmanship:</strong>
                <ul>
                    <li>Growth of guilds producing textiles, metalworks, and pottery.</li>
                </ul>
            </li>
        </ul>

        <hr>

        <h2>🛕 <strong>Key Contributions to Art and Architecture</strong></h2>
        <ul>
            <li><strong>Temple Architecture:</strong>
                <ul>
                    <li>Construction of <strong>Dashavatara Temple (Deogarh)</strong>, an early example of Hindu temple design.</li>
                    <li>Rock-cut caves at <strong>Udayagiri</strong>, featuring depictions like Vishnu’s <strong>Varaha avatar</strong>.</li>
                </ul>
            </li>
            <li><strong>Sculpture:</strong>
                <ul>
                    <li>Graceful and intricate depictions of Hindu deities, known for their spiritual depth and artistry.</li>
                </ul>
            </li>
            <li><strong>Painting:</strong>
                <ul>
                    <li>Early murals at <strong>Ajanta Caves</strong>, illustrating Buddhist themes and Gupta artistic excellence.</li>
                </ul>
            </li>
        </ul>

        <hr>

        <h2>🕉️ <strong>Spiritual Legacy</strong></h2>
        <ul>
            <li><strong>Philosophy and Spirituality:</strong>
                <ul>
                    <li>Codification of the <strong>Yoga Sutras</strong> and refinement of meditation techniques.</li>
                    <li>Expansion of Hindu and Buddhist teachings to <strong>Southeast Asia</strong>.</li>
                </ul>
            </li>
            <li><strong>Tantras:</strong>
                <ul>
                    <li>Creation of <strong>Tantras</strong>, focusing on spiritual practices and rituals.</li>
                </ul>
            </li>
        </ul>

        <hr>

        <h2>📜 <strong>Key Contributions of the Gupta Empire</strong></h2>
        <table border="1" cellspacing="0" cellpadding="5">
            <tr>
                <th><strong>Field</strong></th>
                <th><strong>Key Achievements</strong></th>
                <th><strong>Key Figures/Examples</strong></th>
            </tr>
            <tr>
                <td><strong>Mathematics</strong></td>
                <td>Decimal system, concept of zero, calculation of pi.</td>
                <td><strong>Aryabhata</strong></td>
            </tr>
            <tr>
                <td><strong>Astronomy</strong></td>
                <td>Heliocentrism, planetary calculations, astronomical tools.</td>
                <td><strong>Aryabhata</strong></td>
            </tr>
            <tr>
                <td><strong>Medicine</strong></td>
                <td>Surgical techniques, herbal remedies, vaccinations.</td>
                <td><strong>Sushruta Samhita</strong></td>
            </tr>
            <tr>
                <td><strong>Literature</strong></td>
                <td>Sanskrit poetry, fables, and plays.</td>
                <td><strong>Kalidasa, Panchatantra</strong></td>
            </tr>
            <tr>
                <td><strong>Temple Architecture</strong></td>
                <td>Development of Hindu temples, rock-cut sculptures.</td>
                <td><strong>Dashavatara Temple, Udayagiri Caves</strong></td>
            </tr>
            <tr>
                <td><strong>Trade and Economy</strong></td>
                <td>Flourishing trade with Rome, craftsmanship guilds.</td>
                <td><strong>Silk, spices, jewelry exports</strong></td>
            </tr>
            <tr>
                <td><strong>Philosophy</strong></td>
                <td>Codification of Hindu texts, spread of Buddhist teachings.</td>
                <td><strong>Puranas, Yoga Sutras</strong></td>
            </tr>
        </table>

        <hr>

        <h2>✨ <strong>Legacy of the Gupta Empire</strong></h2>
        <p>The Gupta Empire represents a golden era of intellectual, spiritual, and cultural prosperity. Its advancements in <strong>mathematics</strong>, <strong>astronomy</strong>, and <strong>philosophy</strong> shaped not only India but also influenced global knowledge. This era symbolized a harmonious blend of <strong>Sanatan Dharma</strong> and cultural innovation, leaving an indelible mark on history. 🌺🕉️</p>
      `
  },
  { 
    id: 'medieval', 
    year: '750 CE', 
    title: 'Medieval India', 
    icon: FaCogs, 
    description: `
      <h1>🏺 <strong>Medieval India (750 CE - 1200 CE)</strong></h1>
      <p>This period was marked by the rise of powerful regional kingdoms, the flourishing of art and spirituality, and remarkable cultural advancements.</p>

      <hr>

      <h2>🛡️ <strong>Prominent Kingdoms and Dynasties</strong></h2>
      <ul>
          <li><strong>Chola Dynasty (850 CE - 1250 CE):</strong>
              <ul>
                  <li>Expanded through naval expeditions to <strong>Sri Lanka</strong> and <strong>Southeast Asia</strong>.</li>
                  <li>Established efficient administration and fostered economic prosperity.</li>
              </ul>
          </li>
          <li><strong>Rashtrakutas (753 CE - 982 CE):</strong>
              <ul>
                  <li>Known for patronizing art, culture, and literature.</li>
                  <li>Built stunning rock-cut temples like the <strong>Kailasa Temple</strong> at Ellora.</li>
              </ul>
          </li>
          <li><strong>Palas (8th - 12th Century):</strong>
              <ul>
                  <li>Patrons of <strong>Buddhism</strong>, founding centers like <strong>Nalanda</strong> and <strong>Vikramashila</strong>.</li>
                  <li>Spread Indian culture to Southeast Asia.</li>
              </ul>
          </li>
          <li><strong>Rajput Kingdoms:</strong>
              <ul>
                  <li>Emerged as defenders of Hindu culture, resisting invasions and preserving traditions.</li>
              </ul>
          </li>
      </ul>

      <hr>

      <h2>🌟 <strong>Cultural and Spiritual Developments</strong></h2>
      <h3><strong>Bhakti Movement</strong></h3>
      <ul>
          <li>Saints like the <strong>Alvars</strong> and <strong>Nayanars</strong> in Tamil Nadu popularized devotion to Vishnu and Shiva.</li>
          <li><strong>Prominent Figures:</strong>
              <ul>
                  <li><strong>Andal:</strong> Female Alvar saint known for her passionate devotion to Lord Vishnu.</li>
                  <li><strong>Appar</strong> and <strong>Sundarar:</strong> Nayanar saints promoting Shaivism through Tamil hymns.</li>
              </ul>
          </li>
          <li><strong>Key Teachings:</strong>
              <ul>
                  <li>Emphasis on <strong>personal devotion</strong> over rituals and caste distinctions.</li>
                  <li>Promoted unity among followers of different social strata.</li>
              </ul>
          </li>
      </ul>

      <h3><strong>Sufi Movements</strong></h3>
      <ul>
          <li>Introduced mysticism, emphasizing <strong>love and unity</strong> across religions.</li>
          <li>Early Sufi saints in India spread messages of harmony and compassion.</li>
      </ul>

      <hr>

      <h2>🛕 <strong>Architectural and Artistic Achievements</strong></h2>
      <ul>
          <li><strong>Chola Temples:</strong>
              <ul>
                  <li><strong>Brihadeeswarar Temple</strong> (Tanjore): A UNESCO World Heritage Site, showcasing exquisite Dravidian architecture.</li>
                  <li><strong>Gangaikonda Cholapuram Temple:</strong> Symbol of Chola power and artistic brilliance.</li>
              </ul>
          </li>
          <li><strong>Ellora Caves:</strong>
              <ul>
                  <li>Rock-cut temples dedicated to Hinduism, Buddhism, and Jainism, built by the <strong>Rashtrakutas</strong>.</li>
              </ul>
          </li>
          <li><strong>Sculpture and Art:</strong>
              <ul>
                  <li>Detailed bronze idols of deities like <strong>Nataraja (Lord Shiva)</strong>, created by Chola artisans.</li>
              </ul>
          </li>
      </ul>

      <hr>

      <h2>🌏 <strong>Military Feats and Regional Influence</strong></h2>
      <ul>
          <li><strong>Chola Naval Expeditions:</strong>
              <ul>
                  <li>Established dominance over the <strong>Bay of Bengal</strong> and expanded trade to <strong>Southeast Asia</strong>.</li>
                  <li>Spread Indian culture, Hinduism, and Tamil scripts to <strong>Indonesia</strong>, <strong>Malaysia</strong>, and <strong>Thailand</strong>.</li>
              </ul>
          </li>
          <li><strong>Rajput Resistance:</strong>
              <ul>
                  <li>Defended northern India against early Islamic invasions, ensuring the survival of Hindu traditions.</li>
              </ul>
          </li>
      </ul>

      <hr>

      <h2>📜 <strong>Key Spiritual and Cultural Contributions</strong></h2>
      <table border="1" cellspacing="0" cellpadding="5">
          <tr>
              <th><strong>Dynasty/Movement</strong></th>
              <th><strong>Key Contributions</strong></th>
              <th><strong>Key Figures/Temples</strong></th>
          </tr>
          <tr>
              <td><strong>Cholas</strong></td>
              <td>Temple construction, bronze sculptures, naval dominance.</td>
              <td><strong>Brihadeeswarar Temple</strong>, Nataraja Idol</td>
          </tr>
          <tr>
              <td><strong>Rashtrakutas</strong></td>
              <td>Patronage of art and rock-cut temples.</td>
              <td><strong>Kailasa Temple</strong> at Ellora</td>
          </tr>
          <tr>
              <td><strong>Palas</strong></td>
              <td>Spread of Mahayana Buddhism, establishment of monasteries.</td>
              <td><strong>Nalanda</strong>, <strong>Vikramashila</strong></td>
          </tr>
          <tr>
              <td><strong>Bhakti Movement</strong></td>
              <td>Emphasis on devotion to Vishnu and Shiva, unity among castes.</td>
              <td><strong>Andal</strong>, <strong>Appar</strong>, <strong>Sundarar</strong></td>
          </tr>
          <tr>
              <td><strong>Sufi Movements</strong></td>
              <td>Promoted mysticism and religious harmony.</td>
              <td>Early Sufi saints</td>
          </tr>
          <tr>
              <td><strong>Rajputs</strong></td>
              <td>Preservation of Hindu culture and traditions through resilience against invasions.</td>
              <td>Forts like <strong>Chittorgarh</strong></td>
          </tr>
      </table>

      <hr>

      <h2>✨ <strong>Legacy of Medieval India</strong></h2>
      <p>The flourishing of art, architecture, and spirituality during this era showcases the resilience of <strong>Sanatan Dharma</strong>. This period laid the groundwork for India’s cultural unity while establishing its influence across Asia. The Medieval Era remains a testament to India’s spiritual and artistic heritage, where devotion, resistance, and creativity thrived together. 🌺🕉️</p>
    `
  },
  { 
    id: 'mughal', 
    year: '1526 CE', 
    title: 'Mughal Empire', 
    icon: FaBuilding, 
    description: `
      <h1>🏰 <strong>Mughal Empire (1526 CE - 1857 CE)</strong></h1>
      <p>The Mughal Empire played a pivotal role in shaping Indian history, blending cultures, leaving a rich architectural legacy, and also witnessing destruction of temples and suppression of Vedic practices.</p>

      <hr>

      <h2>⚔️ <strong>Political and Military Achievements</strong></h2>
      <ul>
          <li><strong>Foundation of the Empire:</strong>
              <ul>
                  <li>🗓️ <strong>1526:</strong> <strong>Babur</strong> defeated Ibrahim Lodi in the <strong>First Battle of Panipat</strong>, establishing Mughal rule in India.</li>
              </ul>
          </li>
          <li><strong>Key Rulers:</strong>
              <ul>
                  <li><strong>Akbar the Great (1556-1605):</strong> Expanded the empire through diplomacy and military campaigns, introducing policies of <strong>religious tolerance</strong>.</li>
                  <li><strong>Shah Jahan (1628-1658):</strong> Focused on monumental architecture and the arts.</li>
                  <li><strong>Aurangzeb (1658-1707):</strong> Expanded the empire to its greatest territorial extent but followed a stricter, divisive religious policy.</li>
              </ul>
          </li>
          <li><strong>Decline:</strong>
              <ul>
                  <li>After <strong>Aurangzeb</strong>, weak successors and internal conflicts led to the empire’s decline, culminating in its fall during the <strong>Revolt of 1857</strong>.</li>
              </ul>
          </li>
      </ul>

      <hr>

      <h2>🛕 <strong>Impact on Hindu Temples and Vedic Culture</strong></h2>
      <table border="1" cellspacing="0" cellpadding="5">
          <tr>
              <th><strong>Temple/Spiritual Site</strong></th>
              <th><strong>Location</strong></th>
              <th><strong>Event</strong></th>
              <th><strong>Ruler Responsible</strong></th>
          </tr>
          <tr>
              <td><strong>Kashi Vishwanath Temple</strong></td>
              <td>Varanasi (Uttar Pradesh)</td>
              <td>Demolished and replaced with <strong>Gyanvapi Mosque</strong>.</td>
              <td>Aurangzeb</td>
          </tr>
          <tr>
              <td><strong>Somnath Temple</strong></td>
              <td>Gujarat</td>
              <td>Plundered multiple times for its wealth.</td>
              <td>Aurangzeb</td>
          </tr>
          <tr>
              <td><strong>Krishna Janmabhoomi Temple</strong></td>
              <td>Mathura (Uttar Pradesh)</td>
              <td>Demolished and replaced with <strong>Shahi Idgah Mosque</strong>.</td>
              <td>Aurangzeb</td>
          </tr>
          <tr>
              <td><strong>Martand Sun Temple</strong></td>
              <td>Kashmir</td>
              <td>Destroyed to suppress Hindu practices.</td>
              <td>Sikandar Butshikan (precursor to Mughal period)</td>
          </tr>
          <tr>
              <td><strong>Jain and Buddhist Temples</strong></td>
              <td>Throughout India</td>
              <td>Targeted destruction of non-Islamic shrines and religious centers.</td>
              <td>Various Mughal rulers</td>
          </tr>
          <tr>
              <td><strong>Nalanda and Takshashila</strong></td>
              <td>Bihar and Punjab</td>
              <td>Centers of Vedic education destroyed, impacting ancient Indian knowledge and culture.</td>
              <td>Precursor invasions, later influenced under Mughal rule</td>
          </tr>
          <tr>
              <td><strong>Vijayanagara Temples</strong></td>
              <td>Karnataka</td>
              <td>Temples in <strong>Hampi</strong> desecrated after Mughal-allied invasions.</td>
              <td>Mughal alliances</td>
          </tr>
          <tr>
              <td><strong>Ayodhya Ram Temple</strong></td>
              <td>Ayodhya (Uttar Pradesh)</td>
              <td>Destroyed and replaced with the <strong>Babri Mosque</strong>.</td>
              <td>Babur</td>
          </tr>
      </table>

      <hr>

      <h2>🌟 <strong>Key Impacts on Vedic Culture</strong></h2>
      <ul>
          <li><strong>Destruction of Knowledge Hubs:</strong>
              <ul>
                  <li>Ancient centers of learning like <strong>Nalanda</strong> and <strong>Takshashila</strong> were destroyed, severing links to India’s scholarly heritage.</li>
              </ul>
          </li>
          <li><strong>Suppression of Festivals:</strong>
              <ul>
                  <li>Restrictions were placed on Hindu festivals like <strong>Diwali</strong> and <strong>Holi</strong>.</li>
              </ul>
          </li>
          <li><strong>Imposition of Jizya:</strong>
              <ul>
                  <li>Heavy <strong>jizya tax</strong> was imposed on non-Muslims, discouraging the free practice of Vedic traditions.</li>
              </ul>
          </li>
          <li><strong>Cultural Resilience:</strong>
              <ul>
                  <li>Saints and scholars preserved Vedic teachings through oral traditions, Bhakti poetry, and devotion.</li>
              </ul>
          </li>
      </ul>

      <hr>

      <h2>🎨 <strong>Cultural Contributions</strong></h2>
      <ul>
          <li><strong>Architecture:</strong>
              <ul>
                  <li>🕌 Iconic monuments blending Persian, Indian, and Islamic styles:</li>
                  <ul>
                      <li><strong>Taj Mahal</strong> (Agra): A symbol of love built by Shah Jahan.</li>
                      <li><strong>Red Fort</strong> (Delhi): A magnificent fort showcasing Mughal grandeur.</li>
                      <li><strong>Fatehpur Sikri:</strong> Akbar’s planned city, now a UNESCO World Heritage Site.</li>
                  </ul>
                  <li>Grand mosques like the <strong>Jama Masjid</strong> and <strong>Badshahi Mosque</strong>.</li>
              </ul>
          </li>
          <li><strong>Art and Literature:</strong>
              <ul>
                  <li>🌺 Flourishing of <strong>miniature paintings</strong> and the development of the <strong>Mughal School of Art</strong>.</li>
                  <li>📖 Patronage of Urdu poetry and Persian literature.</li>
              </ul>
          </li>
          <li><strong>Gardens:</strong>
              <ul>
                  <li>Creation of <strong>charbagh-style gardens</strong>, emphasizing symmetry and harmony.</li>
              </ul>
          </li>
      </ul>

      <hr>

      <h2>🧱 <strong>Administrative Systems</strong></h2>
      <ul>
          <li><strong>Mansabdari System:</strong>
              <ul>
                  <li>Hierarchical ranking system introduced by Akbar to organize the military and civil administration.</li>
              </ul>
          </li>
          <li><strong>Land Revenue (Zabt) System:</strong>
              <ul>
                  <li>Efficient tax collection system ensuring economic stability during Akbar’s reign.</li>
              </ul>
          </li>
          <li><strong>Trade and Economy:</strong>
              <ul>
                  <li>Promotion of trade routes, linking India with Central Asia, Persia, and Europe.</li>
                  <li>Introduction of <strong>silver rupee coins</strong>.</li>
              </ul>
          </li>
      </ul>

      <hr>

      <h2>🌟 <strong>Spiritual Revival and Resistance</strong></h2>
      <ul>
          <li><strong>Bhakti Movement:</strong>
              <ul>
                  <li>Saints like <strong>Tulsidas</strong>, <strong>Meerabai</strong>, and <strong>Kabir</strong> preserved the essence of Hindu spirituality through devotional songs and poetry.</li>
                  <li>Writings like the <strong>Ramcharitmanas</strong> (by Tulsidas) inspired the masses.</li>
              </ul>
          </li>
          <li><strong>Rise of the Sikh Gurus:</strong>
              <ul>
                  <li>The Sikh faith, led by Gurus like <strong>Guru Nanak</strong> and <strong>Guru Gobind Singh</strong>, emphasized equality, justice, and resistance to oppression.</li>
              </ul>
          </li>
          <li><strong>Temple Restoration Efforts:</strong>
              <ul>
                  <li>Rulers like <strong>Chhatrapati Shivaji</strong> rebuilt desecrated temples, ensuring the continuation of spiritual practices.</li>
              </ul>
          </li>
      </ul>

      <hr>

      <h2>📜 <strong>Legacy of the Mughal Empire</strong></h2>
      <ul>
          <li><strong>Contributions:</strong> Iconic architecture, art, and administrative innovations.</li>
          <li><strong>Controversies:</strong> Religious intolerance and destruction of spiritual sites left a scar on India's cultural landscape.</li>
      </ul>
      <p>The <strong>Mughal Empire</strong> remains a period of immense creativity and resilience, with Sanatan Dharma emerging stronger through centuries of trials. 🕉️🏰</p>
    `
  },
  { 
    id: 'colonial', 
    year: '1757 CE', 
    title: 'Colonial India', 
    icon: FaGlobe, 
    description: `
      <h1>🕉️ <strong>Colonial Period (1757 CE - 1947 CE)</strong></h1>
      <p>The Colonial Period not only saw India under British domination but also witnessed a profound revival of <strong>Sanatan Dharma</strong> and the rise of several spiritual movements that reignited India’s cultural and spiritual identity.</p>

      <hr>

      <h2>🛕 <strong>Spiritual Awakening and Movements</strong></h2>
      <p>The colonial period brought a resurgence in spirituality as sages and reformers worked to preserve and promote the values of Sanatan Dharma amidst foreign domination.</p>
      <table border="1" cellspacing="0" cellpadding="5">
          <tr>
              <th><strong>Year</strong></th>
              <th><strong>Spiritual Movement/Event</strong></th>
              <th><strong>Key Figures and Details</strong></th>
          </tr>
          <tr>
              <td>1828</td>
              <td><strong>Brahmo Samaj</strong></td>
              <td>Founded by <strong>Raja Ram Mohan Roy</strong>, focusing on monotheism and social reforms.</td>
          </tr>
          <tr>
              <td>1867</td>
              <td><strong>Arya Samaj</strong></td>
              <td>Established by <strong>Swami Dayananda Saraswati</strong>, promoting Vedic teachings.</td>
          </tr>
          <tr>
              <td>1863-1902</td>
              <td><strong>Ramakrishna Movement</strong></td>
              <td>Led by <strong>Ramakrishna Paramahamsa</strong> and carried forward by <strong>Swami Vivekananda</strong>.</td>
          </tr>
          <tr>
              <td>1893</td>
              <td><strong>Swami Vivekananda's Chicago Speech</strong></td>
              <td>Introduced the world to India’s spiritual heritage at the <strong>Parliament of Religions</strong>.</td>
          </tr>
          <tr>
              <td>1915</td>
              <td><strong>Mahatma Gandhi’s Spiritual Leadership</strong></td>
              <td>Introduced the principle of <strong>Ahimsa (nonviolence)</strong> as a spiritual weapon.</td>
          </tr>
          <tr>
              <td>1920</td>
              <td><strong>Self-Realization Fellowship</strong></td>
              <td>Founded by <strong>Paramahansa Yogananda</strong>, spreading Kriya Yoga globally.</td>
          </tr>
      </table>

      <hr>

      <h2>🧘‍♂️ <strong>Key Spiritual Figures and Their Contributions</strong></h2>
      <ul>
          <li><strong>Ramakrishna Paramahamsa (1836-1886):</strong>
              <ul>
                  <li>Emphasized the unity of all religions and realization of God through devotion and meditation.</li>
              </ul>
          </li>
          <li><strong>Swami Vivekananda (1863-1902):</strong>
              <ul>
                  <li>Advocated Vedanta philosophy and inspired the youth to revive Indian spirituality and culture.</li>
              </ul>
          </li>
          <li><strong>Swami Dayananda Saraswati (1824-1883):</strong>
              <ul>
                  <li>Founded Arya Samaj to revive Vedic knowledge and oppose superstition.</li>
              </ul>
          </li>
          <li><strong>Paramahansa Yogananda (1893-1952):</strong>
              <ul>
                  <li>Author of <strong>Autobiography of a Yogi</strong>, instrumental in popularizing yoga and meditation in the West.</li>
              </ul>
          </li>
          <li><strong>Sri Aurobindo (1872-1950):</strong>
              <ul>
                  <li>Merged spirituality with nationalism; emphasized <strong>Integral Yoga</strong> for self-realization and social progress.</li>
              </ul>
          </li>
          <li><strong>Mahatma Gandhi (1869-1948):</strong>
              <ul>
                  <li>Used spiritual values like truth, nonviolence, and simplicity as tools for India’s independence.</li>
              </ul>
          </li>
      </ul>

      <hr>

      <h2>✨ <strong>Revival of Sanatan Dharma</strong></h2>
      <ul>
          <li>🕉️ <strong>Bhakti Movement:</strong> Saints like <strong>Ramana Maharshi</strong> and <strong>Sai Baba of Shirdi</strong> inspired millions with their teachings on devotion and universal love.</li>
          <li>📖 <strong>Preservation of Scriptures:</strong> Scholars translated and preserved ancient texts like the <strong>Bhagavad Gita</strong>, <strong>Upanishads</strong>, and <strong>Vedas</strong>.</li>
          <li>🛕 <strong>Temple Rejuvenation:</strong> Efforts were made to restore and protect key temples from colonial neglect.</li>
          <li>✨ <strong>Global Recognition:</strong> Vivekananda’s speech in Chicago and the rise of Indian mysticism attracted global attention to Sanatan Dharma.</li>
      </ul>

      <hr>

      <h2>📜 <strong>Cultural and Spiritual Impact</strong></h2>
      <ul>
          <li><strong>Rediscovery of India’s Spiritual Roots:</strong>
              <ul>
                  <li>Encouraged self-confidence and pride in India's spiritual and cultural heritage.</li>
              </ul>
          </li>
          <li><strong>Spiritual Nationalism:</strong>
              <ul>
                  <li>Leaders like <strong>Sri Aurobindo</strong> and <strong>Bal Gangadhar Tilak</strong> merged spirituality with the freedom struggle.</li>
              </ul>
          </li>
          <li><strong>Spread of Yoga and Meditation:</strong>
              <ul>
                  <li>Indian spiritual practices like <strong>yoga</strong> and <strong>kirtan</strong> became popular in the West.</li>
              </ul>
          </li>
          <li><strong>Resistance to Conversion:</strong>
              <ul>
                  <li>Movements like Arya Samaj opposed forced religious conversions and worked to preserve Hinduism.</li>
              </ul>
          </li>
      </ul>

      <hr>

      <h2>🕊️ <strong>Freedom Through Spirituality</strong></h2>
      <ul>
          <li><strong>Gandhi’s Satyagraha:</strong> Nonviolence and truth as spiritual principles to fight oppression.</li>
          <li><strong>Tilak’s Call for Swaraj:</strong> Declared that <strong>“Swaraj is my birthright”</strong>, connecting it to Dharma.</li>
          <li><strong>Aurobindo’s Vision:</strong> A free India as a spiritual leader for the world.</li>
      </ul>

      <hr>

      <h2>🌟 <strong>Catchy Highlights</strong></h2>
      <ul>
          <li>🪷 <strong>Unity of Religions:</strong> Ramakrishna and Vivekananda emphasized harmony among all faiths.</li>
          <li>📚 <strong>Educational Reforms:</strong> Schools like the <strong>Ramakrishna Mission</strong> combined spiritual teachings with modern education.</li>
          <li>🌐 <strong>Global Reach:</strong> Indian spiritual masters like Yogananda and Vivekananda inspired millions worldwide.</li>
          <li>🕊️ <strong>Cultural Renaissance:</strong> The period saw a revival of traditional arts, literature, and spiritual practices.</li>
      </ul>

      <hr>

      <p>The <strong>Colonial Period</strong> was not only a time of political struggle but also a profound spiritual awakening that redefined India’s identity and strengthened its resolve for independence. 🕉️</p>
    `
  },
  { 
    id: 'independence', 
    year: '1947 CE', 
    title: 'Indian Independence', 
    icon: FaChalkboardTeacher, 
    description: `
      <h1>🌟 <strong>Indian Independence (1947 CE)</strong></h1>
      <p>In 1947, after nearly two centuries of British colonial rule, India achieved independence, marking a transformative moment in world history. The struggle for freedom was fueled by decades of resistance, non-violent movements, and armed struggles. India’s independence not only reshaped the political landscape but also led to the formation of the <strong>Republic of India</strong> in 1950, a democratic and secular nation.</p>

      <hr>

      <h2><strong>Key Events:</strong></h2>

      <h3>1. 🏴 <strong>Partition of India</strong></h3>
      <ul>
          <li><strong>Division of British India:</strong> On August 15, 1947, British India was divided into two independent nations, India and Pakistan, along religious lines.</li>
          <li><strong>Mass Migration:</strong> The partition led to one of the largest mass migrations in human history, with millions of Hindus, Sikhs, and Muslims crossing borders. The migration was marred by horrific communal violence and loss of life.</li>
          <li><strong>Impact on Communities:</strong> The partition deepened religious divisions, resulting in displacement, communal riots, and a legacy of hostility between India and Pakistan.</li>
          <li><strong>Creation of Pakistan:</strong> Pakistan was created as a Muslim-majority state, with East and West Pakistan (now Bangladesh and Pakistan) divided geographically.</li>
      </ul>

      <h3>2. 🏛️ <strong>Formation of Government</strong></h3>
      <ul>
          <li><strong>Jawaharlal Nehru as Prime Minister:</strong> Jawaharlal Nehru became India’s first Prime Minister, leading the newly independent nation with a vision for social justice, economic development, and national unity.</li>
          <li><strong>Drafting of the Indian Constitution (1950):</strong> Under the leadership of Dr. B.R. Ambedkar, India adopted a democratic constitution, guaranteeing fundamental rights and establishing a parliamentary system.</li>
          <li><strong>Secular and Democratic Principles:</strong> India chose a secular state, ensuring equal rights for all citizens, regardless of religion, caste, or gender, which became the cornerstone of India’s political philosophy.</li>
          <li><strong>Establishment of a Republic:</strong> On January 26, 1950, India officially became a Republic, with the adoption of the Constitution of India, replacing the British colonial rule with a governance structure by the people and for the people.</li>
      </ul>

      <h3>3. 💼 <strong>Economic Policies and Reforms</strong></h3>
      <ul>
          <li><strong>Five-Year Plans:</strong> Inspired by Soviet models, India introduced Five-Year Plans to focus on industrial growth, economic self-sufficiency, and infrastructure development. These plans were initially focused on improving agricultural productivity and later shifted toward industrialization.</li>
          <li><strong>Industrialization and Self-Reliance:</strong> The government focused on developing heavy industries, public sector enterprises, and ensuring the country became less reliant on foreign imports.</li>
          <li><strong>Agricultural Development:</strong> Various land reform policies were introduced to break the hold of landlords and increase agricultural output, with mixed results in terms of success.</li>
          <li><strong>Green Revolution (1960s):</strong> In the 1960s, India adopted new farming techniques and high-yield crops, significantly increasing agricultural production and making India more self-sufficient in food production.</li>
          <li><strong>Economic Challenges:</strong> India faced major challenges, including poverty, unemployment, and illiteracy, which required continued effort and reform through the decades.</li>
      </ul>

      <h3>4. 🌍 <strong>Foreign Policy and Global Relations</strong></h3>
      <ul>
          <li><strong>Non-Aligned Movement (NAM):</strong> India, under Nehru’s leadership, championed the Non-Aligned Movement, seeking to remain independent of both the US-led capitalist bloc and the Soviet-led communist bloc during the Cold War.</li>
          <li><strong>Panchsheel (Five Principles of Peaceful Coexistence):</strong> India’s foreign policy emphasized peaceful coexistence with neighboring countries, particularly China and Pakistan, based on principles of mutual respect, non-aggression, and non-interference.</li>
          <li><strong>Relations with Pakistan:</strong> Tensions with Pakistan over territorial disputes, particularly in Kashmir, escalated, leading to several wars (1947-1948, 1965, and 1971).</li>
          <li><strong>Indo-China Relations:</strong> Initially cordial, relations with China soured, leading to the Sino-Indian War of 1962, which had lasting impacts on India’s defense policies.</li>
          <li><strong>India's Role in the United Nations:</strong> India became an important member of the United Nations, advocating for global peace, economic cooperation, and decolonization.</li>
      </ul>

      <h2><strong>Notable Figures:</strong></h2>
      <ol>
          <li><strong>Sardar Vallabhbhai Patel:</strong> Known as the “Iron Man of India,” Patel played a crucial role in integrating more than 500 princely states into the Indian Union and was instrumental in the formation of the Indian Republic.</li>
          <br>
          <li><strong>Dr. B.R. Ambedkar:</strong> The principal architect of the Indian Constitution, Ambedkar’s work laid the foundation for India’s democratic and social justice framework, particularly for the Dalits.</li>
          <br>
          <li><strong>Maulana Abul Kalam Azad:</strong> The first Minister of Education in independent India, Azad played a significant role in promoting education and fostering national integration.</li>
          <br>
          <li><strong>Jawaharlal Nehru:</strong> As the first Prime Minister, Nehru shaped the direction of modern India, promoting secularism, industrialization, and scientific progress.</li>
          <br>
          <li><strong>Mahatma Gandhi:</strong> While he was assassinated in 1948, Gandhi’s legacy of nonviolent resistance and his role in leading India’s freedom struggle remained a powerful influence on post-independence India.</li>
          <br>
          <li><strong>Subhas Chandra Bose:</strong> Although his role was overshadowed by Gandhi’s movement, Bose’s leadership of the Indian National Army and his push for armed resistance against British colonialism remains a significant part of India’s independence narrative.</li>
      </ol>

      <h2><strong>Legacy:</strong></h2>
      <p>The independence of India in 1947 marked the end of over two centuries of British colonial rule. This monumental achievement gave birth to a new democratic and secular nation, paving the way for a prosperous and diverse India.</p>

      <ul>
          <li><strong>Democratic Governance:</strong> India’s constitutional democracy and secularism became a beacon for the world, especially in the post-colonial era.</li>
          <li><strong>Social Reforms:</strong> The legacy of the independence movement led to numerous social reforms, particularly in addressing issues like caste discrimination, women’s rights, and social justice.</li>
          <li><strong>Economic Growth:</strong> Over time, India’s economy grew significantly, particularly after economic liberalization in the 1990s, making India one of the world’s largest economies.</li>
          <li><strong>Cultural Renaissance:</strong> The post-independence period saw the revival of traditional arts, culture, and literature, alongside the development of a vibrant modern culture.</li>
          <li><strong>Global Influence:</strong> India’s rise as an economic and technological powerhouse has been accompanied by its growing influence in global politics, especially as a leader in the Global South.</li>
      </ul>

      <p>Indian Independence was not just the end of British rule, but the beginning of a new chapter where India set out on its own path, combining its ancient heritage with modern ideals, and contributing to global peace and development. 🇮🇳✨</p>
  `
  },
  { 
    id: 'modern', 
    year: '1950 CE - Present', 
    title: 'Modern India', 
    
icon: FaOm, 
    description: `
      <h1>🌟 <strong>Modern India (1950 CE - Present)</strong></h1>
      <p>Modern India has emerged as a global economic, technological, and democratic powerhouse, achieving remarkable strides in various fields like space exploration, information technology, and governance. India's growth trajectory is a testament to its resilience and ability to balance tradition with modernity.</p>

      <hr>

      <h2><strong>Key Developments:</strong></h2>

      <h3>1. 💼 <strong>Economic Reforms and Growth</strong></h3>
      <ul>
          <li><strong>Liberalization of the Economy (1991):</strong> In 1991, India undertook major economic reforms, opening its economy to foreign investment and reducing trade barriers. This move led to a rapid increase in GDP, industrialization, and the rise of new sectors.<br></li>
          <li><strong>Growth of Information Technology (IT) and Services:</strong> India became a global IT hub, with cities like <strong>Bangalore</strong> and <strong>Hyderabad</strong> emerging as major centers for software development, outsourcing, and high-tech industries, creating millions of jobs.<br></li>
          <li><strong>Economic Diversification:</strong> India's economy diversified beyond agriculture, with notable growth in manufacturing, services, and the startup ecosystem. India is now home to a flourishing tech industry, fintech, and e-commerce giants.<br></li>
          <li><strong>Global Economic Integration:</strong> By joining organizations like the WTO and the G20, India has cemented its place as a key player in the global economy, actively participating in shaping international trade policies.<br></li>
      </ul>

      <h3>2. 🚀 <strong>Technological Advancements</strong></h3>
      <ul>
          <li><strong>Indigenous Space Program - ISRO:</strong> India's space agency, <strong>ISRO</strong>, has achieved global recognition with its cost-effective space missions, including the <strong>Mangalyaan (Mars Orbiter Mission, 2013)</strong> and the <strong>Chandrayaan</strong> lunar missions, positioning India as a leader in space technology.<br></li>
          <li><strong>Digital India Initiative (2015):</strong> A nationwide program aimed at enhancing digital infrastructure, improving internet accessibility, and providing e-governance services, ensuring digital inclusion and transforming India into a digitally empowered nation.<br></li>
          <li><strong>IT and Startup Hubs:</strong> Cities like <strong>Bangalore</strong>, <strong>Hyderabad</strong>, and <strong>Pune</strong> have become global tech hubs, fostering startups, driving innovation, and attracting international investors.<br></li>
          <li><strong>Smart Cities and IoT:</strong> India's Smart Cities Mission aims to modernize urban areas using Internet of Things (IoT) and smart technologies, enhancing infrastructure, energy efficiency, and urban management.<br></li>
      </ul>

      <h3>3. 🏙️ <strong>Social Transformation</strong></h3>
      <ul>
          <li><strong>Rapid Urbanization:</strong> Over the last few decades, India has experienced a massive urbanization shift, with growing cities like <strong>Mumbai</strong>, <strong>Delhi</strong>, and <strong>Bangalore</strong> becoming global economic and cultural centers.<br></li>
          <li><strong>Rise of the Middle Class:</strong> Economic reforms and urbanization have led to a dramatic rise in India's middle class, which is driving domestic consumption, new markets, and transforming India into one of the largest consumer markets in the world.<br></li>
          <li><strong>Education and Literacy:</strong> India has made remarkable progress in improving education and literacy rates. Initiatives like the <strong>Right to Education Act (2009)</strong> and a focus on higher education have created a young, educated workforce.<br></li>
          <li><strong>Women’s Empowerment:</strong> Women have made significant strides in India’s political, business, and scientific spheres. Movements like #MeToo and increasing legal protections against domestic violence have led to greater gender equality, though challenges remain.<br></li>
      </ul>

      <h3>4. 🌍 <strong>Global Role and Diplomacy</strong></h3>
      <ul>
          <li><strong>Global Diplomacy:</strong> India plays a central role in international diplomacy, advocating for peace, security, and economic cooperation. It has become a prominent voice in organizations such as the <strong>United Nations</strong>, <strong>BRICS</strong>, and the <strong>G20</strong>.<br></li>
          <li><strong>Non-Aligned Movement:</strong> Although India is a key player in the global political arena, it continues to champion the principles of the Non-Aligned Movement (NAM), maintaining a neutral position in global conflicts and promoting peaceful coexistence.<br></li>
          <li><strong>Climate Change Leadership:</strong> As a signatory of the Paris Climate Accord, India is committed to addressing climate change through renewable energy programs and initiatives to reduce carbon emissions. The country is rapidly investing in solar, wind, and hydroelectric power.<br></li>
          <li><strong>Strategic Defense Capabilities:</strong> India has developed robust defense systems and become a nuclear power, ensuring its national security while contributing to global peacekeeping efforts.<br></li>
      </ul>

      <hr>

      <h2><strong>Notable Achievements:</strong></h2>
      <ol>
          <li><strong>Green Revolution (1960s):</strong> India achieved food self-sufficiency, transforming from a food-deficit nation to one of the largest producers of food grains through innovations in agriculture, including high-yield varieties and improved irrigation techniques.<br></li>
          <li><strong>Space Exploration:</strong> India’s space missions like <strong>Chandrayaan</strong> and <strong>Mangalyaan</strong> have demonstrated India’s growing prowess in space technology, earning global acclaim for cost-effective and successful missions.<br></li>
          <li><strong>Nuclear Power:</strong> India's nuclear tests in 1974 and the subsequent development of its nuclear program made it a recognized nuclear power, advancing both energy independence and strategic defense capabilities.<br></li>
          <li><strong>Clean Energy Initiatives:</strong> India is investing heavily in renewable energy, particularly solar power, aiming to become a global leader in clean energy by expanding renewable infrastructure and reducing reliance on fossil fuels.<br></li>
      </ol>

      <h2><strong>Challenges:</strong></h2>
      <ul>
          <li><strong>Population Growth:</strong> India’s population continues to rise, presenting challenges in managing resources, infrastructure, healthcare, and employment, particularly in rural areas.<br></li>
          <li><strong>Poverty and Income Inequality:</strong> Despite significant economic growth, poverty remains a challenge, with large income disparities between urban and rural populations and a sizable portion of the population still living below the poverty line.<br></li>
          <li><strong>Environmental Sustainability:</strong> India faces severe environmental issues such as air and water pollution, deforestation, and climate change impacts. Addressing these issues while continuing economic growth is a key challenge.<br></li>
          <li><strong>Political Divisions and Secularism:</strong> While India is a diverse democracy, it faces challenges related to communal tensions and the balancing of religious and cultural identities, particularly in the context of Hindu-Muslim relations.<br></li>
      </ul>

      <h2><strong>Legacy:</strong></h2>
      <p>Modern India has built a foundation for a prosperous and inclusive future. It continues to be a leader in economic and technological development, while also preserving its rich cultural heritage. Its democratic resilience, commitment to sustainability, and role as a global power ensure that India’s influence will continue to grow in the coming decades.</p>

      <ul>
          <li><strong>Largest Democracy:</strong> India remains the world's largest democracy, with free and fair elections held regularly. The vibrant democratic process allows for political pluralism and civic participation at all levels.<br></li>
          <li><strong>Global Economic Force:</strong> As one of the world’s largest economies, India is playing a pivotal role in shaping the future of global trade, finance, and technology. It has become a leading exporter of services, software, and pharmaceuticals.<br></li>
          <li><strong>Cultural Influence:</strong> India’s film industry, known as Bollywood, along with its rich traditions in literature, music, dance, and art, continues to impact global culture, fostering cross-cultural exchanges and inspiring millions worldwide.<br></li>
          <li><strong>Technological Leadership:</strong> With advancements in AI, space exploration, and digital technology, India is emerging as a key player in the global tech ecosystem, with contributions that are shaping the future of the digital world.<br></li>
      </ul>

      <p>Modern India is an inspiring story of progress, challenges, and resilience. It continues to rise as a global leader, balancing its ancient values with the demands of the modern world. 🇮🇳✨</p>
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
                (() => {
                  const selectedEventData = historicalEvents.find(event => event.id === selectedEvent);
                  return selectedEventData?.icon ? selectedEventData.icon() : null;
                })()
              }
            </div>

              <h2 className="text-4xl font-semibold mt-6 text-amber-800">
                {historicalEvents.find(event => event.id === selectedEvent)?.title}
              </h2>
              {/* Render description with improved styling without left border lines */}
              <div
                className="mt-6 text-amber-900 text-lg text-left leading-relaxed space-y-4"
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
                        font-size: 1.2rem;
                      }
                      ul {
                        list-style: disc;
                        padding-left: 1.2em;
                        margin-bottom: 1.2em;
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


