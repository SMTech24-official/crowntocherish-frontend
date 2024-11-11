'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from "../shared/sectionHeader/SectionHeader"
import { ChevronDown, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import FAQ from "@/assets/faq.png"

const faqs = [
  {
    question: "What is AI-powered healthcare?",
    answer: "AI-powered healthcare refers to the use of artificial intelligence technologies in various aspects of healthcare, including diagnosis, treatment planning, and patient care. It involves using machine learning algorithms and data analysis to improve medical decision-making and patient outcomes."
  },
  {
    question: "How secure is my health data on your platform?",
    answer: "We take data security very seriously. Our platform uses state-of-the-art encryption and follows strict privacy protocols compliant with HIPAA and other relevant regulations. Your health data is stored securely and is only accessible to authorized personnel and AI systems for the purpose of providing you with the best care possible."
  },
  {
    question: "Can AI replace my doctor?",
    answer: "While AI can greatly enhance healthcare by providing quick insights and assisting in diagnosis, it is not meant to replace doctors. AI serves as a powerful tool to support healthcare professionals, helping them make more informed decisions and provide better care. Your doctor's expertise, combined with AI insights, offers the best approach to managing your health."
  },
  {
    question: "How accurate are AI-generated health insights?",
    answer: "AI-generated health insights are based on vast amounts of medical data and continually improving algorithms. While they can be highly accurate, it's important to note that they should be used in conjunction with professional medical advice. The accuracy of AI insights continues to improve as more data becomes available and algorithms are refined."
  },
  {
    question: "What types of health conditions can your AI assist with?",
    answer: "Our AI system is designed to assist with a wide range of health conditions, from common ailments to more complex chronic diseases. It can help with initial symptom assessment, suggest potential diagnoses for further investigation by healthcare professionals, and provide lifestyle and management recommendations for various conditions. However, for specific medical advice, always consult with a qualified healthcare provider."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <motion.section
      id='faq'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 bg-gradient-to-b from-background to-background/80 overflow-hidden"
    >
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            toolText="Get Answers"
            title="Frequently Asked Questions"
            subtitle="Find quick answers to common questions about our AI-powered healthcare platform. If you can't find what you're looking for, don't hesitate to reach out to our support team."
          />
        </motion.div>

        <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative z-10">
              <Image
                src={FAQ}
                alt="FAQ Illustration"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg "
              />
            </div>
            <div className="absolute inset-0 bg-primary/10 rounded-lg transform rotate-3 scale-105 z-0"></div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
              className="absolute -top-6 -left-6 bg-primary text-primary-foreground rounded-full p-4 shadow-lg"
            >
              <MessageCircle size={32} />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="w-full lg:w-7/12 space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full p-4 text-left bg-card hover:bg-card/80 transition-colors duration-200"
                  aria-expanded={activeIndex === index}
                >
                  <span className="text-lg font-medium text-text_title">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform duration-200 ${activeIndex === index ? 'transform rotate-180' : ''
                      }`}
                  />
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="p-4 bg-card/50 text-muted-foreground">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary/5 rounded-full z-0"
        ></motion.div>
      </div>
    </motion.section>
  )
}