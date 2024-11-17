'use client'

import { motion } from "framer-motion"
import { Stethoscope, Brain, Palette, Shield } from "lucide-react"
import Image from "next/image"
import team1 from "@/assets/team1.jpg"
import team2 from "@/assets/team2.jpg"
import team4 from "@/assets/team4.jpg"
import team5 from "@/assets/team5.jpg"

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

export default function Team() {
    return (
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7 md:gap-5 md:p-8 md:py-0 py-8 items-center justify-center">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        className="bg-card rounded-xl overflow-hidden shadow-lg w-80 lg:w-72 2xl:w-fit h-full border"
                        whileHover={{ scale: 1.04 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <div className="relative ">
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
    )
}
