// pages/how-it-works.tsx
"use client";

import { motion } from "framer-motion";
import { Search, Brain, FileText, Clock, Shield, Workflow } from "lucide-react";
import SectionHeader from "@/components/shared/sectionHeader/SectionHeader";
import StepCard from "@/components/stepCards/StepCards";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen section-gap lg:mt-0 md:mt-20 mt-28">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <SectionHeader
            toolText=""
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
          />
          <StepCard
            icon={Brain}
            title="Step 2: AI Analyzes and Explains"
            description="Our AI system instantly processes the medication data and provides an easy-to-understand explanation, including dosage, side effects, and important details."
          />
          <StepCard
            icon={FileText}
            title="Step 3: Review and Understand"
            description="Read the detailed explanation to understand your medication better. You can print or save the information for future reference."
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
            />
            <StepCard
              icon={Clock}
              title="Access Anytime"
              description="Our platform is available 24/7, ensuring you can get explanations whenever you need them."
            />
            <StepCard
              icon={Shield}
              title="Data Privacy"
              description="Your searches and information are fully encrypted and secure, protecting your privacy."
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
