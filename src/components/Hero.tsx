'use client'

import { motion } from "framer-motion";
import BackgroundIllustration from "./BackgroundIllustration";
import HeroText from './HeroText';

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <BackgroundIllustration />

      {/* Centered content */}
      <div className="relative w-full min-h-screen flex flex-col justify-center items-center py-12 sm:py-20 md:py-44 px-4 sm:px-6 md:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 13, duration: 1.0, ease: "easeOut" }}
          className="w-full max-w-2xl mx-auto text-center"
        >
          <HeroText 
            title="A portfolio of multimedia work by Rian Kochel"
          />
        </motion.div>
      </div>
    </div>
  );
} 