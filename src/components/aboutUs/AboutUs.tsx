'use client'

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import SectionHeader from "@/components/shared/sectionHeader/SectionHeader"
import Team from "./Team"
import Ceo from "./Ceo"
import TextContent from "./TextContent"

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
    <div className="min-h-screen section-gap  lg:mt-0 md:mt-20 mt-28 bg-gradient-to-b from-background to-background/80">
      <motion.div
        className="container "
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

          <div className="lg:grid lg:grid-cols-3 flex flex-col-reverse items-start  ">
            <div className="lg:col-span-2 ">
              <TextContent />
            </div>
            <div className=" lg:sticky top-32">
              <Ceo />
            </div>
          </div>
        </motion.div>

        {/* Meet the Team Section */}
        <Team />

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
              <Link href="/contact-us" className="flex items-center">
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
