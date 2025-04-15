'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface HeroTextProps {
  title: string
  subtitle?: string
  className?: string
}

const AnimatedLetter = ({ letter, delay }: { letter: string; delay: number }) => {
  return (
    <motion.span
      className="inline-block relative whitespace-pre"
      initial={{ opacity: 0, y: 20, filter: 'blur(20px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ 
        duration: 2.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
        filter: { duration: 3 }
      }}
    >
      {letter}
      <motion.span
        className="absolute inset-0 blur-xl bg-white/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0.3] }}
        transition={{
          duration: 3,
          delay,
          times: [0, 0.5, 1],
          ease: "easeInOut"
        }}
      />
    </motion.span>
  )
}

const AnimatedText = ({ text, baseDelay = 0, staggerRange = 0.1 }: { 
  text: string; 
  baseDelay: number;
  staggerRange: number;
}) => {
  const letters = text.split('')
  
  return (
    <span className="relative inline-block whitespace-pre-wrap break-words">
      {letters.map((letter, index) => {
        // Handle spaces with proper width
        if (letter === ' ') return <span key={index} className="inline-block w-[0.25em]">&nbsp;</span>
        
        // Calculate random delay within range
        const randomDelay = baseDelay + (Math.random() * staggerRange)
        
        return (
          <AnimatedLetter 
            key={index} 
            letter={letter} 
            delay={randomDelay}
          />
        )
      })}
    </span>
  )
}

const HeroText = ({ title, subtitle, className = '' }: HeroTextProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 13000) // 13 seconds delay

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div 
      className={`flex flex-col items-center text-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 relative max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] mx-auto"
      >
        <AnimatedText 
          text={title} 
          baseDelay={0.3}
          staggerRange={0.15}
        />
      </motion.h1>
      
      {subtitle && (
        <motion.p 
          className="text-lg md:text-xl text-white/80 max-w-2xl relative px-4"
        >
          <AnimatedText 
            text={subtitle} 
            baseDelay={0.6}
            staggerRange={0.1}
          />
        </motion.p>
      )}
    </motion.div>
  )
}

export default HeroText 