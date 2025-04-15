'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80">
      <div className="max-w-2xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
        <div className="flex justify-between items-center">
          <button
            onClick={toggleMobileMenu}
            className="sm:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <nav className={`${
            mobileMenuOpen 
              ? 'fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col justify-center items-center space-y-8'
              : 'hidden sm:flex justify-center items-center space-x-8'
          }`}>
            {navItems.map((item) => {
              const isActive = pathname === item.path
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className={`text-base sm:text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-primary glow-text' 
                      : 'text-foreground/70 hover:text-foreground glow-hover'
                  }`}>
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-primary glow-border"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
} 