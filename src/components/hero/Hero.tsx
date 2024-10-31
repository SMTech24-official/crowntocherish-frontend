'use client'

import { motion } from "framer-motion"
import { Brain, Clock, Search, ShieldCheck, Sparkles } from "lucide-react"
import { poppins } from "@/app/fonts/font"
import SharedButton from "../shared/button/SharedButton"
// import Image from "next/image"
// import banner from "@/assets/ma-ai-scaled.jpg"
export default function Hero() {
  const benefits = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description: "Leverage advanced AI technology to analyze medication information, ensuring you receive personalized recommendations based on your unique health profile and medication history."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Clear, Simple Explanations",
      description: "Complex medical terms are broken down into plain language, making it easy for you to understand your medications and their effects without confusion."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Available 24/7",
      description: "Get access to vital medication information anytime you need it, day or night, providing peace of mind and support whenever you require assistance."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Safe & Reliable",
      description: "Rely on trusted information that comes with proper medical disclaimers, ensuring you have access to safe guidance without compromising your health."
    }
  ];


  return (
    <div className="relative bg-section_bg overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      <div className="container py-16 md:py-24 mt-20 md:mt-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center justify-between w-full">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border border-[#DB2777]/20 bg-yellow-200/40 px-3 my-2 py-1 text-sm text-text_title shadow-sm">
              <Sparkles className="mr-2 h-4 w-4" />
              AI-Powered Medical Assistant
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-text_title mb-6 ${poppins.className}`}
            >
              Understand Your Medications with AI Assistance
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-black mb-8"
            >
              Using cutting-edge AI, we break down complicated medication information into simple, understandable terms. Please note, this is not medical advice.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 "
            >
              <div className="flex items-center gap-4">
              <SharedButton cls="bg-button_bg hover:bg-white hover:text-text_title border-text_title border text-white w-fit" text="Get Started" />
              <SharedButton cls="hover:bg-button_bg bg-white text-text_title border-text_title border hover:text-white w-fit" text="Learn More" />
              </div>

            </motion.div>
          </motion.div>

          {/* Image/Illustration Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative "
          >
            <div className="relative w-full aspect-square lg:max-w-md  ml-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FEF08A] via-[#FDE047] to-[#FACC15] rounded-full opacity-20 blur-3xl" />
              <div className="relative z-10 w-full h-full rounded-2xl bg-white/50 backdrop-blur-sm p-8 flex items-center justify-center">
                <div className="text-center">
                  <Brain className="w-24 h-24 mx-auto mb-6 text-text_title" />
                  <p className="text-text-title font-medium">AI-Powered Medication Information</p>
                </div>
              </div>
              {/* <Image src={banner} alt="Banner Image" className="w-full h=full"/> */}
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}

          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="bg-white/50 backdrop-blur-sm rounded-xl z-30 group relative p-6 shadow-md shadow-yellow-100"
            >
              <div className="w-12 h-12 rounded-full bg-[#DB2777]/10  group-hover:bg-secondary flex items-center justify-center mb-4">
                <div className="text-text_title">{benefit.icon}</div>
              </div>
              <h3 className={`text-xl font-semibold text-text-title mb-2 ${poppins.className}`}>
                {benefit.title}
              </h3>
              <p className=" text-text_default">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}