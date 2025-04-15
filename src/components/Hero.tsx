'use client'

import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";
import BackgroundIllustration from "./BackgroundIllustration";
import Link from 'next/link';

export default function Hero() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <BackgroundIllustration />

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
        {/* Empty space for future content */}
      </div>
    </div>
  );
} 