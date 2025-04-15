'use client'

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundIllustration from "./BackgroundIllustration";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState<string | null>(null);
  const phrasesRef = useRef<string[]>([]);
  const cycleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  
  const phrases = [
    "a word nerd.",
    "always making something.",
    "a digital craftsman.",
    "a cynical optimist.",
    "a good listener.",
    "a wordsmith.",
    "a little bit country, a little bit rock 'n' roll.",
    "a recovering hipster.",
    "a real son of a gun.",
    "always learning.",
    "a curious neoteric.",
    "a rolling stone.",
    "a born collaborator.",
    "down to clown like Charlie Brown.",
    "a fervent initiator.",
    "a ruminative curator of design.",
    "a modern Renaissance man.",
    "nothing if not tenacious.",
    "a real dandy.",
    "a scrappy creative force.",
    "a dedicated advocate for authentic human expression.",
    "an AI literacy educator.",
    "a tech writer.",
    "a creative consultant.",
    "a marketing veteran.",
    "a creator...not a performer.",
    "a helluva storyteller.",
    "a brand builder.",
    "an earnest architect of narratives.",
    "a sucker for a sad violin.",
    "a composer.",
    "a music producer.",
    "more than you'd expect.",
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const shuffleArray = useCallback((array: string[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }, []);

  const cyclePhrase = useCallback(() => {
    // Clear any existing timeout
    if (cycleTimeoutRef.current) {
      clearTimeout(cycleTimeoutRef.current);
    }

    // First set to null to create a gap
    setCurrentPhrase(null);
    
    // Delay setting the new phrase to create a visual gap
    cycleTimeoutRef.current = setTimeout(() => {
      if (phrasesRef.current.length <= 1) {
        const newShuffled = shuffleArray(phrases);
        setCurrentPhrase(newShuffled[0]);
        phrasesRef.current = newShuffled.slice(1);
      } else {
        const [nextPhrase, ...remaining] = phrasesRef.current;
        setCurrentPhrase(nextPhrase);
        phrasesRef.current = remaining;
      }
    }, 2000); // Increased gap to 2 seconds for better readability
  }, [phrases, shuffleArray]);

  // Initialize on mount
  useEffect(() => {
    const shuffledPhrases = shuffleArray(phrases);
    setCurrentPhrase(shuffledPhrases[0]);
    phrasesRef.current = shuffledPhrases.slice(1);

    // Set up interval for 7-second rotations (increased from 5)
    const interval = setInterval(cyclePhrase, 7000);

    // Cleanup function
    return () => {
      if (cycleTimeoutRef.current) {
        clearTimeout(cycleTimeoutRef.current);
      }
      clearInterval(interval);
    };
  }, [cyclePhrase, shuffleArray, phrases]);

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <BackgroundIllustration onAnimationComplete={cyclePhrase} />

      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-2xl mx-auto px-8 py-8">
          <nav className="flex justify-center items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative group"
                >
                  <span className={`text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}>
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Centered content */}
      <div className="relative w-full h-screen flex flex-col justify-between py-44 px-34 z-10">
        {/* Top text */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Rian Kochel is...
          </h1>
        </div>
        
        {/* Bottom rotating phrase */}
        <div className="text-center">
          <div className="relative h-24">
            <AnimatePresence mode="wait">
              {currentPhrase && (
                <motion.p
                  key={currentPhrase}
                  className="text-[2.5rem] whitespace-nowrap font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1,
                    y: 0
                  }}
                  exit={{ 
                    opacity: 0,
                    y: -20
                  }}
                  transition={{ 
                    duration: 3,
                    ease: [0.4, 0, 0.2, 1],
                    opacity: {
                      duration: 2.5,
                      ease: "easeInOut"
                    }
                  }}
                >
                  {currentPhrase}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
} 