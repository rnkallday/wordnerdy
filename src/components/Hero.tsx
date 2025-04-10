'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BackgroundIllustration from "./BackgroundIllustration";

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [cycleComplete, setCycleComplete] = useState(false);
  
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

  useEffect(() => {
    if (cycleComplete) return;
    
    const fastCycleTimeout = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * (phrases.length - 1)) + 1;
      setPhraseIndex(randomIndex);
      setCycleComplete(true);
    }, 1500);
    
    const cycleInterval = setInterval(() => {
      if (!cycleComplete) {
        setPhraseIndex(prev => (prev + 1) % phrases.length);
      }
    }, 100);
    
    return () => {
      clearTimeout(fastCycleTimeout);
      clearInterval(cycleInterval);
    };
  }, [cycleComplete, phrases.length]);

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <BackgroundIllustration />

      <div className="relative flex-1 flex items-center justify-center pt-16 z-10">
        <div className="max-w-[80rem] w-full mx-auto px-8">
          <div className="grid grid-cols-12 gap-8 items-center p-8 bg-black/5 rounded-2xl backdrop-blur-sm">
            <div className="col-span-5">
              <h1 className="text-6xl font-bold tracking-tight">
                Rian Kochel<br />
                is...
              </h1>
            </div>
            <div className="col-span-7">
              <div className="relative h-24">
                {phrases.map((phrase, index) => (
                  <motion.p
                    key={index}
                    className={`absolute text-4xl ${
                      phraseIndex === index ? 'block' : 'hidden'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      phraseIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: -20 }
                    }
                    transition={{ duration: 0.5 }}
                  >
                    {phrase}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 