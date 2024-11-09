'use client'

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import SectionHeader from "../shared/sectionHeader/SectionHeader"

interface TestimonialProps {
    name: string
    role: string
    comment: string
    rating: number
}

const testimonials: TestimonialProps[] = [
    {
        name: "Sarah Johnson",
        role: "Patient",
        comment: "The medical care I received was exceptional. The staff was attentive, professional, and made me feel comfortable throughout my treatment.",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Healthcare Professional",
        comment: "As a healthcare provider, I'm impressed by the state-of-the-art facilities and the commitment to patient care. It's a pleasure to work with such dedicated professionals.",
        rating: 5
    },
    {
        name: "Emily Rodriguez",
        role: "Patient",
        comment: "The personalized care and attention to detail made all the difference in my recovery. I couldn't be more grateful for the support I received.",
        rating: 4
    },
    {
        name: "David Thompson",
        role: "Family Member",
        comment: "The care and compassion shown to my mother during her treatment was outstanding. The staff went above and beyond to ensure her comfort.",
        rating: 5
    },
    {
        name: "Lisa Patel",
        role: "Patient",
        comment: "I was impressed by the efficiency and professionalism of the entire team. They made a potentially stressful experience much easier to handle.",
        rating: 5
    },
    {
        name: "Robert Kim",
        role: "Healthcare Professional",
        comment: "The collaborative approach to patient care here is truly commendable. It's a model for how modern healthcare should operate.",
        rating: 5
    }
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [slidesToShow, setSlidesToShow] = useState(3)

    const updateSlidesToShow = () => {
        if (window.innerWidth >= 1024) {
            setSlidesToShow(3)
        } else if (window.innerWidth >= 768) {
            setSlidesToShow(2)
        } else {
            setSlidesToShow(1)
        }
    }

    useEffect(() => {
        updateSlidesToShow()
        window.addEventListener('resize', updateSlidesToShow)
        return () => window.removeEventListener('resize', updateSlidesToShow)
    }, [])

    const nextTestimonial = () => {
        if (!isAnimating) {
            setIsAnimating(true)
            setCurrentIndex((prev) => (prev + 1) % (testimonials.length - slidesToShow + 1))
        }
    }

    const previousTestimonial = () => {
        if (!isAnimating) {
            setIsAnimating(true)
            setCurrentIndex((prev) => (prev - 1 + testimonials.length - slidesToShow + 1) % (testimonials.length - slidesToShow + 1))
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false)
        }, 500)

        return () => clearTimeout(timer)
    }, [currentIndex])

    useEffect(() => {
        const autoPlayTimer = setInterval(nextTestimonial, 5000)
        return () => clearInterval(autoPlayTimer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className="section-gap">
            <div className="container ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeader
                        toolText="Testimonials"
                        title="What Our Patients Say"
                        subtitle="Read about the experiences of those who have trusted us with their healthcare needs. Discover how our dedicated care has positively impacted their health journeys."
                    />
                </motion.div>
                <div className="relative">
                    <div className="overflow-hidden   lg:w-full ">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 px-4 py-2 ${slidesToShow === 3 ? 'w-1/3 h-[280px] overflow-hidden' : slidesToShow === 2 ? 'w-1/2 ' : 'w-full'
                                        }`}
                                >
                                    <div className="relative w-full h-full p-6 rounded-xl border overflow-hidden">
                                        <div className="relative z-10">
                                            <div className="flex  justify-between">
                                                <div>
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <div>
                                                            <h3 className="text-base md:text-2xl font-bold text-text_title font-serif">{testimonial.name}</h3>
                                                        </div>
                                                    </div>

                                                    <div className="flex mb-4 gap-1">
                                                        {[...Array(testimonial.rating)].map((_, i) => (
                                                            <Star key={i} className="fill-yellow-400 stroke-none" />
                                                        ))}
                                                    </div>
                                                </div>
                                                <Quote className="w-10 h-10 text-pink-100" />
                                            </div>
                                            <p className="text-text_default mb-6 text-sm md:text-base">&quot;{testimonial.comment}&quot;</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button
                        onClick={previousTestimonial}
                        className="absolute hidden md:block  lg:mt-0 md:mt-6 max-w-10 md:right-4 lg:-left-6 lg:top-1/2 -translate-y-1/2 -translate-x-4 bg-[#DB2777] hover:bg-[#BE185D] text-white rounded-full p-3 shadow-lg"
                        disabled={isAnimating}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </Button>

                    <Button
                        onClick={nextTestimonial}
                        className="absolute hidden md:block  lg:mt-0 md:mt-6 md:right-0  lg:-right-6 lg:top-1/2 -translate-y-1/2 translate-x-4 bg-[#DB2777] hover:bg-[#BE185D] text-white rounded-full p-3 shadow-lg"
                        disabled={isAnimating}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </Button>
                </div>
            </div>
        </section>
    )
}