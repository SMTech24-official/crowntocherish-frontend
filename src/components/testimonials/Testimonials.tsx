'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
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
    }
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const nextTestimonial = () => {
        if (!isAnimating) {
            setIsAnimating(true)
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }
    }

    const previousTestimonial = () => {
        if (!isAnimating) {
            setIsAnimating(true)
            setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
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
    }, [])

    return (
        <section className="section-gap">
            <div className="container mx-auto px-4">
                <SectionHeader title="What Our Patients Say" subtitle="Read about the experiences of those who have trusted us with their healthcare needs." />
                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="w-full flex-shrink-0 px-4"
                                >
                                    <div className="relative w-full p-6 bg-gradient-to-tr from-[#FFE4E6] via-[#FECDD3] to-[#FFE4E6] rounded-xl shadow-lg overflow-hidden">
                                        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0,100 Q100,50 200,100 T400,100" fill="none" stroke="#FEF08A" strokeWidth="2" />
                                            <path d="M0,200 Q100,150 200,200 T400,200" fill="none" stroke="#FEF08A" strokeWidth="2" />
                                            <path d="M0,300 Q100,250 200,300 T400,300" fill="none" stroke="#FEF08A" strokeWidth="2" />
                                        </svg>

                                        <div className="relative z-10">
                                            <div className="flex items-center gap-3 mb-4">
                                                <Quote className="w-8 h-8 text-[#DB2777]" />
                                                <div>
                                                    <h3 className="text-2xl font-bold text-[#DB2777] font-serif italic">{testimonial.name}</h3>
                                                    <p className="text-[#BE185D]">{testimonial.role}</p>
                                                </div>
                                            </div>

                                            <div className="flex mb-4">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-[#FDE047] text-[#FDE047]" />
                                                ))}
                                            </div>

                                            <p className="text-[#BE185D] mb-6 italic">&quot;{testimonial.comment}&quot;</p>
                                        </div>

                                        <svg className="absolute bottom-0 right-0 w-32 h-32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="50" cy="50" r="40" fill="#FEF08A" opacity="0.5" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button
                        onClick={previousTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#DB2777] hover:bg-[#BE185D] text-white rounded-full p-2 shadow-lg"
                        disabled={isAnimating}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </Button>

                    <Button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#DB2777] hover:bg-[#BE185D] text-white rounded-full p-2 shadow-lg"
                        disabled={isAnimating}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </Button>

                    <div className="flex justify-center mt-6 gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-200 ${currentIndex === index ? "bg-[#DB2777]" : "bg-[#FECDD3]"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}