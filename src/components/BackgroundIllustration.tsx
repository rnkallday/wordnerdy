'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function BackgroundIllustration() {
  const [position, setPosition] = useState({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    const updatePosition = () => {
      setPosition({
        x: Math.random() * 200 - 100, // Random value between -100 and 100
        y: Math.random() * 200 - 100, // Random value between -100 and 100
        scale: 0.95 + Math.random() * 0.2, // Random value between 0.95 and 1.15
      });
    };

    const interval = setInterval(updatePosition, 8000); // Update every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.div 
        className="absolute inset-0 flex items-center justify-end"
        animate={position}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <motion.div 
          className="relative w-[75%] max-w-[1000px] aspect-square -mr-24"
          animate={{
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <img
            src="/illustration.png"
            alt="Background illustration"
            className="w-full h-full object-contain contrast-125 brightness-110"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 