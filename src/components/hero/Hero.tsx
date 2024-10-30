'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Brain, Clock, Search, ShieldCheck } from "lucide-react"
import { poppins } from "@/app/fonts/font"

export default function Hero() {
  const benefits = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description: "Advanced AI technology to analyze medication information"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Clear, Simple Explanations",
      description: "Complex medical terms broken down into plain language"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Available 24/7",
      description: "Access information whenever you need it"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Safe & Reliable",
      description: "Trusted information with proper medical disclaimers"
    }
  ]

  return (
    <div className="relative bg-gradient-to-br from-[#FFE4E6] to-[#FECDD3] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 mt-20 md:mt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#BE185D] mb-6 ${poppins.className}`}
            >
              Understand Your Medications with AI Assistance
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-[#9D174D] mb-8"
            >
              Using cutting-edge AI, we break down complicated medication information into simple, understandable terms. Please note, this is not medical advice.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-[#DB2777] hover:bg-[#BE185D] text-white px-8"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#DB2777] text-[#DB2777] hover:bg-[#DB2777] hover:text-white"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Image/Illustration Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FEF08A] via-[#FDE047] to-[#FACC15] rounded-full opacity-20 blur-3xl" />
              <div className="relative z-10 w-full h-full rounded-2xl bg-white/50 backdrop-blur-sm p-8 flex items-center justify-center">
                <div className="text-center">
                  <Brain className="w-24 h-24 mx-auto mb-6 text-[#DB2777]" />
                  <p className="text-[#BE185D] font-medium">AI-Powered Medication Information</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="bg-white/50 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-[#DB2777]/10 rounded-full flex items-center justify-center mb-4">
                <div className="text-[#DB2777]">{benefit.icon}</div>
              </div>
              <h3 className={`text-lg font-semibold text-[#BE185D] mb-2 ${poppins.className}`}>
                {benefit.title}
              </h3>
              <p className="text-sm text-[#9D174D]">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}