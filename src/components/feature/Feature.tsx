'use client'

import { motion } from "framer-motion"
import SectionHeader from "../shared/sectionHeader/SectionHeader"
import { StylishCard } from "../styllishCard/StylishCard"
import {
  Stethoscope,
  Heart,
  Clock,
  Shield,
  Users,
  Award,
  Lightbulb,
  Zap,
  Rocket,
  Star
} from "lucide-react"
import { useState } from "react"

const features = [
  { 
    icon: Lightbulb, 
    title: 'Innovative Ideas', 
    description: 'Cutting-edge solutions for modern problems',
    details: "Our team of experts constantly pushes the boundaries of what's possible, bringing you the latest and most innovative features in the industry."
  },
  { 
    icon: Zap, 
    title: 'Lightning Fast', 
    description: 'Optimized for speed and efficiency',
    details: 'Experience blazing-fast performance with our optimized algorithms and streamlined processes, saving you valuable time and resources.'
  },
  { 
    icon: Shield, 
    title: 'Secure & Reliable', 
    description: 'Your data is safe with us',
    details: 'We employ state-of-the-art security measures and follow best practices to ensure your data is protected and your operations remain uninterrupted.'
  },
  { 
    icon: Rocket, 
    title: 'Scalable', 
    description: 'Grows with your business needs',
    details: 'Our flexible architecture allows seamless scaling, accommodating your business growth without compromising performance or user experience.'
  },
  { 
    icon: Heart, 
    title: 'User-Friendly', 
    description: 'Intuitive design for the best experience',
    details: 'We prioritize user experience, creating intuitive interfaces and smooth workflows that make our platform a joy to use for everyone.'
  },
  { 
    icon: Star, 
    title: 'Premium Quality', 
    description: 'Only the best for our customers',
    details: 'From development to customer support, we maintain the highest standards of quality in every aspect of our service, ensuring your complete satisfaction.'
  },
]


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function Feature() {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)


  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className=""
    >
      <div className="container section-gap">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            toolText="AI-Powered Health Insights"
            title="Key Features & Benefits"
            subtitle="Experience personalized, accurate, and reliable healthcare guidance tailored just for you. Our AI-driven insights offer clarity and support in understanding your health needs, ensuring a comprehensive and trustworthy experience at every step."
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="w-64 h-64 m-4 relative"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="absolute inset-0 bg-white rounded-2xl shadow-lg transform rotate-45 transition-all duration-300 ease-in-out"
                style={{
                  transformOrigin: 'center',
                  transform: `rotate(45deg) scale(${hoveredIndex === index ? 1.1 : 1})`,
                  boxShadow: hoveredIndex === index ? '0 10px 30px -10px rgba(236, 72, 153, 0.3)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <feature.icon
                  className={`w-12 h-12 mb-4 transition-all duration-300 ease-in-out ${hoveredIndex === index ? 'text-pink-500 scale-110' : 'text-indigo-600'
                    }`}
                />
                <h3 className="text-lg font-semibold mb-2 text-indigo-900">{feature.title}</h3>
                <p className="text-sm text-pink-700 transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: hoveredIndex === index ? '100px' : '0',
                    opacity: hoveredIndex === index ? 1 : 0,
                    overflow: 'hidden'
                  }}>
                  {feature.description}
                </p>
                <p className="text-xs text-indigo-700 mt-2 transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: hoveredIndex === index ? '100px' : '0',
                    opacity: hoveredIndex === index ? 1 : 0,
                    overflow: 'hidden'
                  }}>
                  {feature.details}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}




