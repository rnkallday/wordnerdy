'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#9CC7E5] via-[#7DAFD1] to-[#4B89B3] text-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold mb-8">About Me</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl leading-relaxed">
              Rian Kochel tells stories—some with words, some with music, all with intent. A writer, musician, and creative technologist, he stands at the crossroads of tradition and progress, watching the world evolve and dragging the skeptics along for the ride. His work spans across a wide variance - from art and culture to AI - and it can be found published in places that care about such things.
            </p>
            
            <p className="text-xl leading-relaxed">
              He's washed dishes with ex-convicts, raised millions for the arts, and learned that the only real job security is curiosity. Rian doesn't believe AI can steal your soul, but he is certain it can make you forget you had one. He writes to remind you of this.
            </p>
            
            <p className="text-xl leading-relaxed">
              Rian is "that" guy with the untamed mohawk and worn-in 501s on the morning train. He'll also be "that" guy you swear you know from somewhere in a finely tailored tux at the opera tonight. And when you blink during your double take, you might just see yourself reflected in his work.
            </p>
          </motion.div>
          
          <motion.div
            className="flex flex-col items-center justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-6 bg-white/10 flex items-center justify-center">
              {/* Placeholder for profile image - replace with actual image when available */}
              <div className="text-center p-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <p className="text-sm opacity-70">Profile image placeholder</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg w-full">
              <h2 className="text-2xl font-bold mb-4">Connect</h2>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://twitter.com/riankochel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center hover:opacity-80 transition-opacity"
                  >
                    <span className="mr-2">Twitter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/riankochel/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center hover:opacity-80 transition-opacity"
                  >
                    <span className="mr-2">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://soundcloud.com/rian-kochel-280647786" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center hover:opacity-80 transition-opacity"
                  >
                    <span className="mr-2">SoundCloud</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.youtube.com/@TheRealBiffPowbang" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center hover:opacity-80 transition-opacity"
                  >
                    <span className="mr-2">YouTube</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
