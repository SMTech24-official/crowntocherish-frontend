'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Check, Search, Brain, FileText, GitCompare, AlertTriangle, MessageCircle } from 'lucide-react'
import SectionHeader from '../shared/sectionHeader/SectionHeader'

const steps = [
    {
        title: 'Enter Your Medication',
        description: 'Start by typing the name of the medication you want to learn about in the search bar. Our AI will provide relevant information from reliable sources.',
        icon: Search,
        align: 'right'
    },
    {
        title: 'AI-Powered Explanation',
        description: 'Our AI scans trusted sources to generate a simple, easy-to-understand summary of the medication\'s purpose, usage, potential side effects, and other essential details.',
        icon: Brain,
        align: 'left'
    },
    {
        title: 'View Results',
        description: 'See clear and straightforward information on the medication, including its purpose, dosage instructions, side effects, and safety precautions.',
        icon: FileText,
        align: 'right'
    },
    {
        title: 'Check for Similar Medications or Alternatives',
        description: 'Our AI can recommend similar medications or alternative treatments to consider if available.',
        icon: GitCompare,
        align: 'left'
    },
    {
        title: 'Review Disclaimer',
        description: 'Please read our disclaimer carefully. Remember, this information is for educational purposes and is not a substitute for professional medical advice.',
        icon: AlertTriangle,
        align: 'right'
    },
    {
        title: 'Connect with Support (Optional)',
        description: 'For further questions, contact our support team via the Contact Us page.',
        icon: MessageCircle,
        align: 'left'
    }
]

export default function Component() {
    const [activeStep, setActiveStep] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange(v => {
            const newActiveStep = Math.floor(v * (steps.length + 0.1))
            if (newActiveStep !== activeStep) {
                setActiveStep(newActiveStep)
            }
        })

        return () => unsubscribe()
    }, [scrollYProgress, activeStep])

    return (
        <div id='how-it-works' className="section-gap min-h-screen " ref={containerRef}>
            <div className="container ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeader
                        toolText="How It Works"
                        title="Discover Your Medication Journey"
                        subtitle="Embark on a seamless exploration of your medication information with our AI-powered platform. Follow these simple steps to unlock a wealth of knowledge about your prescriptions."
                    />
                </motion.div>
                <div className="relative max-w-4xl mx-auto">
                    {/* Desktop Progress Bar */}
                    <motion.div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-pink-200">
                        <motion.div
                            className="absolute left-0 top-0 w-full bg-pink-400"
                            style={{ height: progressHeight }}
                        />
                    </motion.div>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`flex items-start mb-20 ${step.align === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Step Bubble */}
                            <motion.div
                                className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-pink-400 flex items-center justify-center bg-white relative z-10"
                                initial={{ scale: 0.8 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <motion.div
                                    className={`w-8 h-8 rounded-full ${index <= activeStep ? 'bg-pink-400' : 'bg-white'
                                        } flex items-center justify-center`}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: index <= activeStep ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {index <= activeStep ? (
                                        <Check className="text-white" size={16} />
                                    ) : (
                                        <span className="text-pink-400 font-semibold">{index + 1}</span>
                                    )}
                                </motion.div>
                            </motion.div>
                            {/* Step Content */}
                            <motion.div
                                whileHover={{ scale: 1.04 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <motion.div
                                    className={`flex-grow w-full max-w-2xl md:h-40 ${step.align === 'right' ? 'md:ml-6' : 'md:mr-6'
                                        } bg-white rounded-lg shadow-md p-8`}
                                    initial={{ opacity: 0, x: step.align === 'right' ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.8 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <h3 className="text-lg font-semibold text-pink-600 mb-2 flex flex-col md:flex-row items-start gap-2 md:items-center">
                                        <step.icon className="mr-2" size={30} />
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                    {/* Mobile Progress Bar */}
                    <motion.div className="md:hidden fixed top-0 left-0 right-0 h-2 bg-pink-200 z-50">
                        <motion.div
                            className="absolute left-0 top-0 h-full bg-pink-400"
                            style={{ width: progressWidth }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}