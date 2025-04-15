import React from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navigation from '@/components/Navigation'

// Load Subjectivity font family
const subjectivity = localFont({
  src: [
    {
      path: './fonts/Subjectivity-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Subjectivity-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Subjectivity-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Subjectivity-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Subjectivity-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Subjectivity-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    // Slanted (italic) variants
    {
      path: './fonts/Subjectivity-ThinSlanted.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: './fonts/Subjectivity-LightSlanted.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/Subjectivity-RegularSlanted.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Subjectivity-MediumSlanted.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/Subjectivity-BoldSlanted.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/Subjectivity-ExtraBoldSlanted.woff2',
      weight: '800',
      style: 'italic',
    }
  ],
  variable: '--font-subjectivity',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Rian Kochel',
  description: 'Portfolio of Rian Kochel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${subjectivity.variable} font-sans antialiased min-h-screen bg-background text-foreground relative overflow-x-hidden`}>
        {/* Base background layer */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_hsl(340_30%_8%)_0%,_hsl(340_30%_12%)_50%,_hsl(340_30%_15%)_100%)] pointer-events-none" />
        
        {/* Content wrapper with proper z-indexing */}
        <div className="relative z-10">
          <Navigation />
          <main className="relative pt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
} 