'use client'

import { motion } from "framer-motion"
import { ChevronRight, Stethoscope, Brain, Palette, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import SectionHeader from "@/components/shared/sectionHeader/SectionHeader"
import Image from "next/image"
import team1 from "@/assets/team1.jpg"
import team2 from "@/assets/team2.jpg"
import team3 from "@/assets/team3.jpg"
import team4 from "@/assets/team4.jpg"
import team5 from "@/assets/team5.jpg"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
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

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

const teamMembers = [
  {
    name: "Dr. Emily Chen",
    role: "Chief Medical Officer",
    image: team1,
    bio: "Dr. Chen brings over 15 years of experience in clinical pharmacy and healthcare technology.",
    icon: Stethoscope
  },
  {
    name: "Alex Rodriguez",
    role: "AI Research Lead",
    image: team2,
    bio: "Alex is an expert in machine learning and natural language processing, driving our AI innovations.",
    icon: Brain
  },
  {
    name: "Sarah Johnson",
    role: "User Experience Designer",
    image: team5,
    bio: "Sarah ensures our platform is intuitive and accessible for users of all backgrounds.",
    icon: Palette
  },
  {
    name: "Michael Lee",
    role: "Data Security Specialist",
    image: team4,
    bio: "Michael safeguards user data and maintains the highest standards of privacy and security.",
    icon: Shield
  }
]

export default function AboutUsPage() {
  return (
    <div className="min-h-screen section-gap section-gap lg:mt-0 md:mt-20 mt-28 bg-gradient-to-b from-background to-background/80">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <SectionHeader toolText="About Us" title="Our Story & Team" subtitle="The passion and expertise behind ExplainMyMeds" />
        </motion.div>

        {/* Our Story Section */}
        <motion.div
          variants={itemVariants}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-text_title mb-8 text-center relative inline-block">
            <span className="relative z-10">Our Journey: From Insight to Impact</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-2 bg-primary/20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="bg-card p-8 rounded-2xl relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary"
                animate={{
                  scaleX: [0, 1, 1, 0],
                  originX: ["left", "left", "right", "right"],
                  transition: { duration: 3, repeat: Infinity }
                }}
              />
              <p className="text-text_default mb-4">
                ExplainMyMeds was born from a personal experience. Our founder, Dr. Lisa Zhang, witnessed her grandmother struggle with managing multiple medications, realizing the critical need for clear, accessible medication information.
              </p>
              <p className="text-text_default mb-4">
                This sparked the idea of creating an AI-powered platform that could translate complex medical jargon into easy-to-understand explanations, tailored to each individual&apos;s needs and background.
              </p>
              <p className="text-text_default">
                Today, ExplainMyMeds has grown into a team of passionate healthcare professionals, AI experts, and user experience designers. We&apos;re united by our mission to empower individuals with the knowledge they need to take control of their health journey.
              </p>
            </motion.div>
            <motion.div
              className="relative"
              animate={floatingAnimation}
            >
              <Image
                src={team3}
                alt="Dr. Lisa Zhang, CEO of ExplainMyMeds"
                width={400}
                height={400}
                className="rounded-2xl shadow-lg"
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full z-0"
                animate={{
                  scale: [1, 1.1, 1],
                  transition: { duration: 4, repeat: Infinity }
                }}
              />
              <div className="mt-4 bg-card p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-text_title mb-2">Dr. Lisa Zhang</h3>
                <p className="text-primary font-medium mb-2">Founder & CEO</p>
                <p className="text-text_default text-sm">
                  With a Ph.D. in Pharmacology and 10+ years in healthtech, Dr. Zhang leads our mission to revolutionize medication understanding for all.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Meet the Team Section */}
        <motion.div
          variants={itemVariants}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-text_title mb-8 text-center relative inline-block">
            <span className="relative z-10">Meet the Minds Behind the Magic</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-2 bg-primary/20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-lg"
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text_title mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-text_default text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-text_title mb-6">Join Us in Our Mission</h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <Link href="/contact" className="flex items-center">
                Get in Touch
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}