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
  Award
} from "lucide-react"

export const features = [
  {
    title: "24/7 Support",
    description: "Round-the-clock medical assistance and support from our dedicated healthcare team, ensuring that you have access to care whenever you need it, whether it's for urgent queries or ongoing health management.",
    icon: <Clock className="w-8 h-8" />
  },
  {
    title: "Expert Care",
    description: "Get expert medical guidance and support from our team of healthcare professionals, who are specialists in various fields. Whether you need a second opinion or ongoing treatment, rest assured you're in the best hands.",
    icon: <Stethoscope className="w-8 h-8" />
  },
  {
    title: "Safe & Secure",
    description: "Your health information is protected with state-of-the-art security measures, including encryption and privacy policies that ensure your data is always handled with the utmost care and confidentiality.",
    icon: <Shield className="w-8 h-8" />
  },
  {
    title: "Community",
    description: "Join our supportive community of patients and healthcare providers. Share experiences, ask questions, and find solace in a network that understands your journey and is dedicated to helping you thrive.",
    icon: <Users className="w-8 h-8" />
  },
  {
    title: "Quality Service",
    description: "Premium healthcare services with a focus on patient satisfaction and well-being. Our team strives to deliver consistent, high-quality medical care that meets your expectations and enhances your overall health experience.",
    icon: <Award className="w-8 h-8" />
  },
  {
    title: "Personalized Care",
    description: "Tailored medical solutions that address your unique healthcare needs. We take the time to understand your individual health goals, offering treatment plans and services designed specifically for you.",
    icon: <Heart className="w-8 h-8" />
  }
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
            title="Key Features & Benefits" 
            subtitle="Discover why our healthcare services stand out with these exceptional features designed to provide you with the best medical care experience."
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {features?.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <StylishCard
                title={feature.title}
                description={feature.description}
                background="bg-gradient-to-tr from-[#FFE4E6] via-[#FECDD3] to-[#FFE4E6]"
                titleColor="text-[#DB2777]"
                textColor="text-[#BE185D]"
                buttonColor="bg-[#DB2777]"
                buttonHoverColor="hover:bg-[#BE185D]"
                icon={feature.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}