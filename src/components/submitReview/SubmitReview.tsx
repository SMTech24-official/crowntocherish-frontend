'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Star, Loader2 } from 'lucide-react'
import Image from 'next/image'
import feedbakImage from "@/assets/portrait-smiling-male-doctor-dressed-uniform_171337-110-removebg-preview.png"
import { useCreateFeedbackMutation } from '@/redux/api/feedbacksApi'
import toast from 'react-hot-toast'
import { id, TestimonialProps } from '@/types/types'

export default function AnimatedPinkFeedbackForm() {
    const [rating, setRating] = useState(0)

    const [updateStatus, { isLoading }] = useCreateFeedbackMutation()
    // Form data state
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [feedback, setFeedback] = useState('')

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const feedbackData: TestimonialProps = {
            name: name,
            email: email,
            comment: feedback,
            rating: rating,
            status: "unpublished"
        }
        const res = await updateStatus(feedbackData)
        console.log(res);
        if (res?.data.data.acknowledged) {
            toast.success("Thank You So Much For your Feedback")
        }
    }

    return (
        <section className="p-4">
            <div className="container bg-pink-100 rounded-3xl lg:max-h-[20rem] overflow-hidden">
                <motion.div
                    className="rounded-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between h-full">
                        <div className="w-full lg:w-2/3 p-6">
                            <motion.h2
                                className="text-2xl font-bold text-pink-600 mb-4 text-center lg:text-left"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                Quick Feedback
                            </motion.h2>
                            <form onSubmit={handleSubmit} className="space-y-3">
                                <motion.div
                                    className="flex flex-col lg:flex-row gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    <Input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Your name"
                                        required
                                        className="flex-1"
                                    />
                                    <Input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email"
                                        required
                                        className="flex-1"
                                    />
                                </motion.div>
                                <motion.div
                                    className="flex items-center justify-start space-x-1"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <motion.button
                                            key={star}
                                            type="button"
                                            onClick={() => setRating(star)}
                                            className={`focus:outline-none ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Star className="w-6 h-6 fill-current" />
                                        </motion.button>
                                    ))}
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                >
                                    <Textarea
                                        value={feedback}
                                        onChange={(e) => setFeedback(e.target.value)}
                                        placeholder="Your feedback..."
                                        className="min-h-[60px] max-h-[80px] resize-none"
                                        required
                                    />
                                </motion.div>
                                <motion.div
                                    className="flex justify-center lg:justify-end"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.5 }}
                                >
                                    <Button
                                        type="submit"
                                        className="bg-pink-500 hover:bg-pink-600 text-white"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            'Send Feedback'
                                        )}
                                    </Button>
                                </motion.div>
                            </form>
                        </div>
                        <motion.div
                            className="w-full lg:w-1/3 h-full flex justify-center lg:justify-end"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <Image src={feedbakImage} alt="laptop on a doctor hand" className="w-full h-auto object-contain" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
