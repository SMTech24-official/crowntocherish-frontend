'use client'

import { motion } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeader from "../shared/sectionHeader/SectionHeader"
import { TestimonialsCard } from "../testimonialsCard/TestimonialsCard"
import { useGetPublishedFeedbackQuery } from "@/redux/api/feedbacksApi"
import { id, TestimonialProps } from "@/types/types"

export default function Testimonials() {
    const { data: publishedTestimonials, isLoading } = useGetPublishedFeedbackQuery("published")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [slidesToShow, setSlidesToShow] = useState(3)

    const updateSlidesToShow = useCallback(() => {
        if (window.innerWidth >= 1024) {
            setSlidesToShow(3)
        } else if (window.innerWidth >= 768) {
            setSlidesToShow(2)
        } else {
            setSlidesToShow(1)
        }
    }, [])

    useEffect(() => {
        updateSlidesToShow()
        window.addEventListener('resize', updateSlidesToShow)
        return () => window.removeEventListener('resize', updateSlidesToShow)
    }, [updateSlidesToShow])

    const testimonials = publishedTestimonials?.data || []
    const maxIndex = Math.max(0, testimonials.length - slidesToShow)

    const nextTestimonial = useCallback(() => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
    }, [maxIndex])

    const previousTestimonial = useCallback(() => {
        setCurrentIndex(prev => Math.max(prev - 1, 0))
    }, [])

    useEffect(() => {
        const autoPlayTimer = setInterval(nextTestimonial, 5000)
        return () => clearInterval(autoPlayTimer)
    }, [nextTestimonial])



    return (
        <section className="section-gap relative">
            <div className="container">
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
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex"
                            initial={false}
                            animate={{ x: `-${currentIndex * (100 / slidesToShow)}%` }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {isLoading ? <div className="flex justify-center items-center w-full">Loading..</div> : testimonials.map((data: TestimonialProps & id, idx: number) => (
                                <TestimonialsCard
                                    slidesToShow={slidesToShow}
                                    idx={idx}
                                    data={data}
                                    key={idx}
                                />
                            ))}
                        </motion.div>
                    </div>

                    <Button
                        onClick={previousTestimonial}
                        className="absolute hidden md:block lg:mt-0 md:mt-6 max-w-10 md:left-4 lg:-left-6 top-1/2 -translate-y-1/2 -translate-x-4 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full p-3 shadow-lg"
                        disabled={currentIndex === 0}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </Button>

                    <Button
                        onClick={nextTestimonial}
                        className="absolute hidden md:block lg:mt-0 md:mt-6 md:right-4 lg:-right-6 top-1/2 -translate-y-1/2 translate-x-4 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full p-3 shadow-lg"
                        disabled={currentIndex === maxIndex}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </Button>
                </div>
            </div>
        </section>
    )
}