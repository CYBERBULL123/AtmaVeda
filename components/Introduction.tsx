'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Introduction() {
  return (
    <section className="py-16 px-6">
      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-semibold text-center mb-6 text-ambrane-800"
      >
        AtmaVeda – Your Journey to Eternal Knowledge Begins Here!
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-lg md:text-xl text-center mb-8 text-gray-600 leading-relaxed"
      >
        Embark on a transformative journey with AI-powered exploration of Vedic scriptures,  
        Indian philosophy, and the rich cultural heritage of Sanatan Dharma.
      </motion.p>

      {/* Animated Image Gallery */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center items-center mb-12 relative"
      >
        <Gallery />
      </motion.div>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-center"
      >
        <p className="text-lg md:text-xl font-semibold text-purple-800">
          🌟 Discover divine insights and spiritual wisdom through AtmaVeda.
        </p>
        <p className="text-md md:text-lg mt-2 text-gray-700">
          Let the light of ancient teachings guide your path.
        </p>
      </motion.div>
    </section>
  );
}

// Gallery Component with Divine Hover Effects
function Gallery() {
  const images = [
    {
      src: 'https://i.ibb.co/Q8CNS1v/vedSrp.png',
      alt: 'Vedic Scriptures',
      caption: 'Vedic Scriptures',
    },
    {
      src: 'https://i.ibb.co/yP85s5w/sprPLC.png',
      alt: 'Spiritual Places',
      caption: 'Sacred Spiritual Places',
    },
    {
      src: 'https://i.ibb.co/mD00G7y/cosmic.png',
      alt: 'Cosmic Elements',
      caption: 'Cosmic Elements of Dharma',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto change the image every 3 seconds, but pause on hover
  useEffect(() => {
    if (isHovered) return; // Stop image change when hovered
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="relative w-48 h-48 md:w-56 md:h-56 flex flex-col justify-center items-center"
      onMouseEnter={() => setIsHovered(true)} // Pause on hover
      onMouseLeave={() => setIsHovered(false)} // Resume on hover out
    >
      <motion.img
        key={currentIndex}
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="w-full h-full rounded-full border-4 border-purple-200 shadow-lg transition-transform transform hover:scale-125 hover:rotate-360 hover:border-purple-500"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.2 }}
        whileHover={{
          scale: 2.5,  // Scale the image a little bigger
          rotate: 360,  // Rotate the image 360 degrees
          boxShadow: '0px 0px 20px 8px rgba(128, 90, 213, 0.6)',  // Add glowing box shadow
        }}
      />
      <p className="mt-4 text-center text-purple-800 font-medium">{images[currentIndex].caption}</p>
    </div>
  );
}
