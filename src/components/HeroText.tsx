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
      initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ 
        duration: 1.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
        filter: { duration: 2 }
      }}
    >
      {letter}
      <motion.span
        className="absolute inset-0 blur-lg bg-white/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0.3] }}
        transition={{
          duration: 2,
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
        if (letter === ' ') return <span key={index} className="inline-block w-[0.25em]">&nbsp;</span>
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
    }, 500) // Reduced delay for better mobile experience

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div 
      className={`flex flex-col items-center text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.h1 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 max-w-3xl mx-auto leading-tight px-4 sm:px-6"
      >
        <AnimatedText 
          text={title}
          baseDelay={0.1}
          staggerRange={0.05}
        />
      </motion.h1>
      
      {subtitle && (
        <motion.p 
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto px-4 sm:px-6"
        >
          <AnimatedText 
            text={subtitle}
            baseDelay={0.5}
            staggerRange={0.03}
          />
        </motion.p>
      )}
    </motion.div>
  )
}

export default HeroText 