'use client'

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SectionHeader from "../shared/sectionHeader/SectionHeader"
import { testimonials } from "@/lib/testimonials"
import { TestimonialsCard } from "../testimonialsCard/TestimonialsCard"
import { useGetPublishedFeedbackQuery } from "@/redux/api/feedbacksApi"
import { id, TestimonialProps } from "@/types/types"




export default function Testimonials() {
    const { data: PublishedTestimonials } = useGetPublishedFeedbackQuery("published");

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
                            {
                                PublishedTestimonials?.data?.map((data : TestimonialProps & id, idx: number) => <TestimonialsCard slidesToShow={slidesToShow} idx={idx} data={data} key={idx} />)
                            }
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