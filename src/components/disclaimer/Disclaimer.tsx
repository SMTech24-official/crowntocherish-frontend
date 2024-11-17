"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Shield, CheckCircle, HeartPulse, Stethoscope, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

// Variants for the parent container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Staggers the children animations
    },
  },
};

// Variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DisclaimerPage() {
  return (
    <div className=" min-h-screen section-gap lg:mt-0  md:mt-20 mt-28">
      <motion.div
        className="container lg:max-w-3xl lg:mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <div className="text-center mb-8">
          <AlertTriangle className="w-16 h-16 text-text_title mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-text_title mb-4">
            Legal Disclaimer
          </h1>
          <p className="text-text_default">
            Please read this disclaimer carefully before using our AI-powered
            services.
          </p>
        </div>

        {/* Motion Cards */}
        <motion.div variants={cardVariants}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-text_title flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Not Medical Advice
              </CardTitle>
            </CardHeader>
            <CardContent className="prose text-text_default">
              <p>
                The information provided by our AI system is for general
                informational purposes only and should not be considered as
                medical advice. This system is designed to provide general
                guidance and information but should never replace professional
                medical consultation.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={cardVariants}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-text_title flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Limitations of AI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-text_default">
              <p>
                While our AI system strives to provide accurate and helpful
                information, it has limitations:
              </p>
              <ul className="list-disc md:pl-6 space-y-2">
                <li className="flex items-center gap-2">
                  <AlertTriangle className="min-w-4 min-h-4" /> It may not account for your specific medical history
                </li>
                <li className="flex items-center gap-2">
                  <Stethoscope className="min-w-4 min-h-4" /> It cannot perform physical examinations
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="min-w-4 min-h-4" /> It may not be aware of recent medical developments
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="min-w-4 min-h-4" /> It cannot make definitive medical diagnoses
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={cardVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="text-text_title flex items-center gap-2">
                <HeartPulse className="w-5 h-5" />
                Seek Professional Help
              </CardTitle>
            </CardHeader>
            <CardContent className="text-text_default">
              <p>Always consult with qualified healthcare professionals for:</p>
              <ul className="list-disc lg:pl-6 mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Stethoscope className="min-w-4 min-h-4" /> Medical diagnosis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="min-w-4 min-h-4" /> Treatment recommendations
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="min-w-4 min-h-4" /> Medication advice
                </li>
                <li className="flex items-center gap-2">
                  <HeartPulse className="min-w-4 min-h-4" /> Any specific health concerns
                </li>
              </ul>
              <p className="mt-4 font-semibold flex items-center gap-2">
                <AlertTriangle className="min-w-5 min-h-5" />
                <span className="text-sm md:text-base">
                  In case of a medical emergency, please contact your local
                  emergency services immediately.
                </span>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
