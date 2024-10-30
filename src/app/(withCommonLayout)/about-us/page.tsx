'use client'

import { motion } from "framer-motion"
import { Lightbulb, Heart, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import SectionHeader from "@/components/shared/sectionHeader/SectionHeader"

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

export default function AboutUsPage() {
  return (
    <div className="min-h-screen section-gap lg:mt-0  md:mt-20 mt-28">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <SectionHeader title="About ExplainMyMeds" subtitle="Simplifying medical information for everyone" />
        </motion.div>

        {/* About Us Grid */}
        <div className="grid gap-8 md:grid-cols-2 items-start">
          {/* Mission and Vision */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold text-text_title mb-6">Our Mission</h2>
              <p className="text-text_default">
                At ExplainMyMeds, our mission is to empower individuals with accurate, easy-to-understand explanations of their medications, fostering better health literacy and confidence in managing their health.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-text_title mb-6">Our Vision</h2>
              <p className="text-text_default">
                We envision being the go-to platform for people looking to understand their medications clearly and confidently, improving global health literacy with the help of AI.
              </p>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            variants={containerVariants}
            className="grid gap-4 md:grid-cols-2"
          >
            <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-text_title flex items-center">
                    <Lightbulb className="w-6 h-6 mr-2 text-[#DB2777]" />
                    Transparency
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text_default">
                    Providing clear and accessible information to all our users.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-text_title flex items-center">
                    <Heart className="w-6 h-6 mr-2 text-[#DB2777]" />
                    Trust
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text_default">
                    Ensuring privacy and accuracy in all the information we provide.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-text_title flex items-center">
                    <Zap className="w-6 h-6 mr-2 text-[#DB2777]" />
                    Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text_default">
                    Continuously improving our AI technology to deliver the best results.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-text_title flex items-center">
                    <Users className="w-6 h-6 mr-2 text-[#DB2777]" />
                    Compassion
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text_default">
                    Putting people first in everything we do.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Our Story Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold text-text_title mb-8 text-center">Our Story</h2>
          <motion.div
            className="bg-white/70 p-8 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-text_default mb-4">
              ExplainMyMeds was born from the frustration of seeing friends and family struggle to understand their prescriptions. We wanted to create a solution that not only explains medications in plain language but also supports individuals in their health journeys.
            </p>
            <p className="text-text_default mb-4">
              Our team is made up of healthcare professionals, AI experts, and tech enthusiasts, all working together to make medication information more accessible. We believe that by simplifying complex medical information, we can empower people to take control of their health and make informed decisions.
            </p>
            <p className="text-text_default">
              As we continue to grow and evolve, our commitment to improving health literacy remains at the core of everything we do. We&apos;re excited about the future and the positive impact we can make in people&apos;s lives.
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold text-text_title mb-6">Ready to Get Started?</h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="bg-[#DB2777] hover:bg-[#BE185D] text-white"
              asChild
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}