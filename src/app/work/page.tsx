'use client'

import { motion } from 'framer-motion'
import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout"

interface Frame {
  id: number
  content: {
    type: 'video' | 'html'
    src: string
    link?: string
  }
  defaultPos: { x: number; y: number; w: number; h: number }
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  isHovered: boolean
}

export default function Work() {
  const frames: Frame[] = [
    {
      id: 1,
      content: {
        type: 'html',
        src: '/previews/youtube.html',
        link: 'https://www.youtube.com/@TheRealBiffPowbang'
      },
      defaultPos: { x: 0, y: 0, w: 4, h: 4 },
      corner: '/images/frame-corner.svg',
      edgeHorizontal: '/images/frame-edge-horizontal.svg',
      edgeVertical: '/images/frame-edge-vertical.svg',
      mediaSize: 1,
      borderThickness: 2,
      borderSize: 95,
      isHovered: false
    },
    {
      id: 2,
      content: {
        type: 'html',
        src: '/previews/soundcloud.html',
        link: 'https://soundcloud.com/rian-kochel-280647786'
      },
      defaultPos: { x: 4, y: 0, w: 4, h: 4 },
      corner: '/images/frame-corner.svg',
      edgeHorizontal: '/images/frame-edge-horizontal.svg',
      edgeVertical: '/images/frame-edge-vertical.svg',
      mediaSize: 1,
      borderThickness: 2,
      borderSize: 95,
      isHovered: false
    },
    {
      id: 3,
      content: {
        type: 'html',
        src: '/previews/writing.html',
        link: 'https://authory.com/rnkalllllday'
      },
      defaultPos: { x: 8, y: 0, w: 4, h: 4 },
      corner: '/images/frame-corner.svg',
      edgeHorizontal: '/images/frame-edge-horizontal.svg',
      edgeVertical: '/images/frame-edge-vertical.svg',
      mediaSize: 1,
      borderThickness: 2,
      borderSize: 95,
      isHovered: false
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#9CC7E5] via-[#7DAFD1] to-[#4B89B3] text-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-8">Selected Work</h1>
          <p className="text-xl max-w-2xl mb-16 leading-relaxed">
            A curated collection of projects spanning digital design, brand development, 
            and creative direction. Each piece represents a unique challenge and a story 
            of collaboration and innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[600px]"
        >
          <DynamicFrameLayout 
            frames={frames} 
            showFrames={true}
            hoverSize={8}
            gapSize={16}
          />
        </motion.div>
      </div>
    </main>
  )
}