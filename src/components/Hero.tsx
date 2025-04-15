'use client'

import { motion } from "framer-motion";
import BackgroundIllustration from "./BackgroundIllustration";
import HeroText from './HeroText';

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <BackgroundIllustration />

      {/* Centered content */}
      <div className="relative w-full min-h-screen flex flex-col justify-center items-center py-20 sm:py-44 px-4 z-10">
        <HeroText 
          title="A portfolio of multimedia work by Rian Kochel"
        />
      </div>
    </div>
  );
} 