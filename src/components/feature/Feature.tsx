'use client'

import { motion } from "framer-motion"
import SectionHeader from "../shared/sectionHeader/SectionHeader"
import {
  Lightbulb,
  Zap,
  Shield,
  Rocket,
  Heart,
  Star
} from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: 'Innovative Ideas',
    details: "Our team of experts constantly pushes the boundaries of what's possible, bringing you the latest and most innovative features in the industry."
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    details: 'Experience blazing-fast performance with our optimized algorithms and streamlined processes, saving you valuable time and resources.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    details: 'We employ state-of-the-art security measures and follow best practices to ensure your data is protected and your operations remain uninterrupted.'
  },
  {
    icon: Rocket,
    title: 'Scalable',
    details: 'Our flexible architecture allows seamless scaling, accommodating your business growth without compromising performance or user experience.'
  },
  {
    icon: Heart,
    title: 'User-Friendly',
    details: 'We prioritize user experience, creating intuitive interfaces and smooth workflows that make our platform a joy to use for everyone.'
  },
  {
    icon: Star,
    title: 'Premium Quality',
    details: 'From development to customer support, we maintain the highest standards of quality in every aspect of our service, ensuring your complete satisfaction.'
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.4
    } 
  }
}

const itemVariants = {
  hidden: {  opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

const iconVariants = {
  hidden: { scale: 0 },
  visible: { 
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
}

export default function Feature() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 bg-gradient-to-b from-background to-background/80"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            toolText="Insights"
            title="Key Features & Benefits"
            subtitle="Receive personalized, AI-driven healthcare insights that provide clarity, accuracy, and reliable support, helping you make informed decisions for a healthier and more confident journey ahead"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group hover:cursor-pointer hover:shadow-lg hover:shadow-primary/20 rounded-xl overflow-hidden"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="bg-card rounded-xl p-6 space-y-4 h-full flex flex-col">
                <motion.div 
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 text-text_title"
                  variants={iconVariants}
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-text_title">{feature.title}</h3>
                <p className="text-muted-foreground flex-grow">
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