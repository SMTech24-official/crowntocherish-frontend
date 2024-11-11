import React from 'react';
import { motion } from "framer-motion"




  
const TextContent = () => {
    return (
        <div className='space-y-8'>
            <div className="  div1 md:p-8 md:py-0 py-8 ">
                <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary"
                    animate={{
                        scaleX: [0, 1, 1, 0],
                        originX: ["left", "left", "right", "right"],
                        transition: { duration: 3, repeat: Infinity }
                    }}
                />
                <h2 className="text-xl font-bold text-text_title mb-8 relative inline-block">
                    <span className="relative z-10">Our Journey: From Insight to Impact</span>
                    <motion.span
                        className="absolute bottom-0 left-0 w-full h-2 bg-primary/20"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </h2>
                <p className="text-text_default mb-4">
                    ExplainMyMeds was born from a personal experience. Our founder, Dr. Lisa Zhang, witnessed her grandmother struggle with managing multiple medications, realizing the critical need for clear, accessible medication information.
                </p>
                <p className="text-text_default mb-4">
                    This sparked the idea of creating an AI-powered platform that could translate complex medical jargon into easy-to-understand explanations, tailored to each individual&apos;s needs and background.
                </p>
                <p className="text-text_default">
                    Today, ExplainMyMeds has grown into a team of passionate healthcare professionals, AI experts, and user experience designers. We&apos;re united by our mission to empower individuals with the knowledge they need to take control of their health journey.
                </p>
            </div>
            <div className="  md:p-8 md:py-0 py-8 ">
                <h2 className="text-xl font-bold text-text_title mb-8 relative inline-block">
                    <span className="relative z-10">Our Mission and Values</span>
                    <motion.span
                        className="absolute bottom-0 left-0 w-full h-2 bg-primary/20"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </h2>
                <p className="text-text_default mb-4">
                    At ExplainMyMeds, our mission is to bridge the gap between complex medical information and patient understanding. We believe that every individual deserves to have clear, accessible information about their medications.
                </p>
                <p className="text-text_default mb-4">
                    Our core values include:
                </p>
                <ul className="list-disc list-inside text-text_default mb-4">
                    <li>Empowerment through knowledge</li>
                    <li>Accessibility and inclusivity</li>
                    <li>Continuous innovation in healthcare technology</li>
                    <li>Commitment to patient safety and well-being</li>
                </ul>
                <p className="text-text_default">
                    These values guide every decision we make and every feature we develop, ensuring that ExplainMyMeds remains a trusted, user-centric platform.
                </p>
            </div>
            <div className="  md:p-8 md:py-0 py-8 ">
                <h2 className="text-xl font-bold text-text_title mb-8 relative inline-block">
                    <span className="relative z-10">Our Impact and Future Vision</span>
                    <motion.span
                        className="absolute bottom-0 left-0 w-full h-2 bg-primary/20"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </h2>
                <p className="text-text_default mb-4">
                    Since our inception, ExplainMyMeds has helped thousands of users better understand their medications, leading to improved adherence and health outcomes. Our AI-powered platform has processed over a million queries, continuously learning and improving its explanations.
                </p>
                <p className="text-text_default mb-4">
                    Looking ahead, we envision ExplainMyMeds as an integral part of the global healthcare ecosystem. We&apos;re working on partnerships with healthcare providers and pharmacies to integrate our platform seamlessly into patient care workflows.
                </p>
                <p className="text-text_default">
                    Our future roadmap includes expanding our language offerings, developing personalized medication management plans, and leveraging advanced AI to predict potential drug interactions. With these innovations, we aim to further our mission of making medication information universally understandable and accessible.
                </p>
            </div>
        </div>
    );
};

export default TextContent;