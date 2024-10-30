'use client'

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-[#FECDD3] to-[#FFE4E6] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="herogradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FECDD3" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="0" cy="0" r="50" fill="url(#herogradient)" />
          <circle cx="100" cy="100" r="50" fill="url(#herogradient)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#BE185D] mb-6">
              Welcome to Our Service
            </h1>
            <p className="text-lg md:text-xl text-[#9D174D] mb-8">
              We provide innovative solutions to help you achieve your goals. Our expert team is dedicated to delivering exceptional results tailored to your needs.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#get-started"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#DB2777] hover:bg-[#BE185D] transition duration-150 ease-in-out"
              >
                Get Started
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="w-full h-[400px] bg-gradient-to-br from-[#FEF08A] via-[#FDE047] to-[#FACC15] rounded-lg shadow-2xl overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full text-white/10"
                fill="currentColor"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M92.5 21.5c-40.5 40.5-62.5 94.3-62.5 151.5s22 111 62.5 151.5 94.3 62.5 151.5 62.5 111-22 151.5-62.5 62.5-94.3 62.5-151.5-22-111-62.5-151.5S337.7-41 280.5-41 133 -19 92.5 21.5zm294.1 294.1c-31.7 31.7-73.9 49.2-118.7 49.2s-87-17.5-118.7-49.2C117.5 283.9 100 241.7 100 196.9s17.5-87 49.2-118.7C181 46.5 223.1 29 267.9 29s87 17.5 118.7 49.2c31.7 31.7 49.2 73.9 49.2 118.7s-17.5 87-49.2 118.7z" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">Your Visual Here</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}