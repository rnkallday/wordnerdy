'use client'

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundIllustration from "./BackgroundIllustration";

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState<string | null>(null);
  const [availablePhrases, setAvailablePhrases] = useState<string[]>([]);
  const isFirstRender = useRef(true);
  
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

  const shuffleArray = useCallback((array: string[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }, []);

  const animatePhraseCycle = useCallback(() => {
    // Get next phrase
    setAvailablePhrases(prev => {
      if (prev.length <= 1) {
        const newShuffled = shuffleArray(phrases);
        setCurrentPhrase(newShuffled[0]);
        return newShuffled.slice(1);
      }
      const [nextPhrase, ...remainingPhrases] = prev;
      setCurrentPhrase(nextPhrase);
      return remainingPhrases;
    });
  }, [phrases, shuffleArray]);

  // Initialize on mount
  useEffect(() => {
    const shuffledPhrases = shuffleArray(phrases);
    setCurrentPhrase(shuffledPhrases[0]);
    setAvailablePhrases(shuffledPhrases.slice(1));
  }, [shuffleArray, phrases]);

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <BackgroundIllustration onAnimationComplete={animatePhraseCycle} />

      <div className="relative w-full h-screen flex flex-col items-stretch justify-between py-24 z-10">
        {/* Static text - positioned 3/4 up from bottom */}
        <div className="w-full max-w-[90rem] mx-auto px-8 mt-auto mb-24">
          <h1 className="text-6xl font-bold tracking-tight text-left">
            Rian Kochel<br />
            is...
          </h1>
        </div>

        {/* Animated text - positioned 3/4 from top */}
        <div className="w-full max-w-[90rem] mx-auto px-8 mb-auto mt-24">
          <div className="flex justify-end">
            <div className="relative h-32 overflow-visible w-[800px]">
              <AnimatePresence mode="wait">
                {currentPhrase && (
                  <motion.p
                    key={currentPhrase}
                    className="absolute right-0 text-[3.5rem] whitespace-nowrap"
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
                      duration: 2,
                      ease: "easeInOut"
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
    </div>
  );
} 