'use client'

import { motion } from "framer-motion"
import { Search, Brain, FileText, Clock, Shield, Workflow, LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import SectionHeader from "@/components/shared/sectionHeader/SectionHeader"

// Variants for Framer Motion animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

// Define types for StepCard props
interface StepCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay?: number;
}

// StepCard component with TypeScript types
const StepCard: React.FC<StepCardProps> = ({ icon: Icon, title, description, color, delay = 0 }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    className="relative"
    style={{ transition: 'all 0.3s ease' }}
    custom={delay}
  >
    <Card className="h-full backdrop-blur-sm bg-white/70">
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-text_title">{title}</h3>
        <p className="text-text_default">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
)

export default function HowItWorksPage() {
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
          <SectionHeader 
            title="How It Works" 
            subtitle="Get medication information in 3 easy steps using our AI-powered platform" 
          />
        </motion.div>

        {/* Introduction */}
        <motion.p
          variants={itemVariants}
          className="text-center text-lg text-text_default max-w-3xl mx-auto mb-16"
        >
          At ExplainMyMeds, we&apos;ve made it easy to get clear explanations for your medications using our AI technology. 
          Simply follow the steps below to understand your prescriptions better.
        </motion.p>

        {/* Steps Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <StepCard
            icon={Search}
            title="Step 1: Enter Medication Information"
            description="Enter the name of the medication you want to learn about in the search bar. Our smart search helps you find the right medication quickly."
            color="bg-[#DB2777]"
          />
          <StepCard
            icon={Brain}
            title="Step 2: AI Analyzes and Explains"
            description="Our AI system instantly processes the medication data and provides an easy-to-understand explanation, including dosage, side effects, and important details."
            color="bg-[#BE185D]"
          />
          <StepCard
            icon={FileText}
            title="Step 3: Review and Understand"
            description="Read the detailed explanation to understand your medication better. You can print or save the information for future reference."
            color="bg-[#9D174D]"
          />
        </div>

        {/* Additional Features */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-semibold text-text_title text-center mb-8">Additional Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <StepCard
              icon={Workflow}
              title="Custom Explanations"
              description="Get tailored information based on your specific health needs and preferences."
              color="bg-[#DB2777]"
            />
            <StepCard
              icon={Clock}
              title="Access Anytime"
              description="Our platform is available 24/7, ensuring you can get explanations whenever you need them."
              color="bg-[#BE185D]"
            />
            <StepCard
              icon={Shield}
              title="Data Privacy"
              description="Your searches and information are fully encrypted and secure, protecting your privacy."
              color="bg-[#9D174D]"
            />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-semibold text-text_title mb-6">
            Ready to Understand Your Medications Better?
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="bg-[#DB2777] hover:bg-[#BE185D] text-white px-8 py-6 text-lg"
              asChild
            >
              <Link href="/search">Start Now</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
