'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import feedbakImage from "@/assets/pink-envelopes-with-heart-like-c.jpg"
import { Email } from '@/types/types'
import toast from 'react-hot-toast'
import { useCreateSubscriberMutation } from '@/redux/api/subscriberApi'

export default function Subscription() {

    const [subscribed, { isLoading }] = useCreateSubscriberMutation()
    // Form data state
    const [email, setEmail] = useState('')

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const newEmail: Email = {
            email: email,
        }
        const res = await subscribed(newEmail)
        // console.log(res);
        if (res?.data?.data?.acknowledged) {
            toast.success("Thank You So Much For Subscribe")
        }
        else toast.error("You have already subscribed")
    }

    return (
        <section className="my-10">
            <div className="container bg-pink-100 rounded-3xl lg:max-h-[20rem] overflow-hidden">
                <motion.div
                    className="rounded-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row items-start lg:items-center justify-between h-full">
                        <div className="w-full lg:w-2/3 p-6">
                            <motion.h2
                                className="text-2xl font-bold text-pink-600 mb-4 text-center lg:text-left"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                Subscribe for Updates
                            </motion.h2>
                            <form onSubmit={handleSubmit} className="space-y-3">
                                <motion.div
                                    className="flex flex-col lg:flex-row gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    <Input
                                        type="email"
                                        placeholder="Your email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1"
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
                                                Subscribing...
                                            </>
                                        ) : (
                                            'Subscribe Now'
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
                            <Image src={feedbakImage} alt="portrait smiling male doctor" className="w-full h-auto object-contain rounded-md p-4" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
