'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface BackgroundIllustrationProps {
  onAnimationComplete?: () => void;
}

export default function BackgroundIllustration({ onAnimationComplete }: BackgroundIllustrationProps) {
  const [position, setPosition] = useState({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    const updatePosition = () => {
      setPosition({
        x: Math.random() * 100 - 50, // Reduced range for more centered movement (-50 to 50)
        y: Math.random() * 100 - 50, // Reduced range for more centered movement (-50 to 50)
        scale: 0.98 + Math.random() * 0.1, // Slightly reduced scale variation
      });
      onAnimationComplete?.();
    };

    // Initial animation trigger
    updatePosition();
    
    const interval = setInterval(updatePosition, 10000); // Update every 10 seconds to match text
    return () => clearInterval(interval);
  }, [onAnimationComplete]);

  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        animate={position}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <motion.div 
          className="relative w-[85%] max-w-[1200px] aspect-video rounded-3xl overflow-hidden"
          animate={{
            opacity: [0.3, 0.45, 0.3],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {/* Video container with enhanced blending */}
          <div className="relative w-full h-full">
            {/* Background tint to help with blending */}
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply rounded-3xl" />
            
            {/* Video element with blend modes */}
            <div className="relative w-full h-full [mask-image:radial-gradient(circle_at_center,_black_35%,_transparent_85%)] rounded-3xl overflow-hidden">
              <video
                src="/videos/herobackgroundanimation.mp4"
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover mix-blend-screen brightness-125 contrast-125 rounded-3xl"
              />
            </div>

            {/* Soft gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/15 via-transparent to-white/15 mix-blend-overlay rounded-3xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-transparent to-white/15 mix-blend-overlay rounded-3xl" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 