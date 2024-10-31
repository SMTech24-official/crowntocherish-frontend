'use client'

import { motion } from "framer-motion"
import { Bot, Brain, Shield, Sparkles, Star, Users } from "lucide-react"
import Link from "next/link"

export default function MedsAiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFE4E6] to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center rounded-full border border-[#DB2777]/20 bg-white px-3 py-1 text-sm text-[#DB2777] shadow-sm">
                <Sparkles className="mr-2 h-4 w-4" />
                AI-Powered Medical Assistant
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-[#BE185D]">
                Your Smart Health
                <br />
                Companion
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Experience the future of healthcare with our AI-powered medical assistant. Get instant insights, personalized recommendations, and reliable health information.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row justify-center"
            >
              <Link
                href="#get-started"
                className="inline-flex items-center justify-center rounded-full bg-[#DB2777] px-8 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-[#BE185D] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DB2777]"
              >
                Get Started
                <Star className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#learn-more"
                className="inline-flex items-center justify-center rounded-full border border-[#DB2777] px-8 py-3 text-sm font-medium text-[#DB2777] shadow-lg transition-colors hover:bg-[#DB2777] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DB2777]"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-2xl shadow-lg">
              <div className="p-3 rounded-full bg-[#DB2777]/10">
                <Bot className="h-6 w-6 text-[#DB2777]" />
              </div>
              <h3 className="text-xl font-semibold text-[#BE185D]">AI Chat Assistant</h3>
              <p className="text-gray-600">Get instant answers to your medical queries with our advanced AI chat system.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-2xl shadow-lg">
              <div className="p-3 rounded-full bg-[#DB2777]/10">
                <Brain className="h-6 w-6 text-[#DB2777]" />
              </div>
              <h3 className="text-xl font-semibold text-[#BE185D]">Smart Diagnosis</h3>
              <p className="text-gray-600">Receive preliminary assessments based on your symptoms and medical history.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-2xl shadow-lg">
              <div className="p-3 rounded-full bg-[#DB2777]/10">
                <Sparkles className="h-6 w-6 text-[#DB2777]" />
              </div>
              <h3 className="text-xl font-semibold text-[#BE185D]">Personalized Care</h3>
              <p className="text-gray-600">Get tailored health recommendations based on your unique profile.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col items-center space-y-8"
          >
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#BE185D]">
                Trusted by Healthcare Professionals
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-lg">
                Join thousands of healthcare providers who trust our AI-powered platform
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="text-2xl font-bold text-[#BE185D]">4.9/5</span>
                <span className="text-gray-600">Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-[#DB2777]" />
                <span className="text-2xl font-bold text-[#BE185D]">10k+</span>
                <span className="text-gray-600">Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-[#DB2777]" />
                <span className="text-2xl font-bold text-[#BE185D]">100%</span>
                <span className="text-gray-600">Secure</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}