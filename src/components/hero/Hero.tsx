'use client'

import { Button } from "@/components/ui/button"
import { Globe, Star } from "lucide-react"
import Image from "next/image"
import logo from "@/assets/cheerful-lady-medical-uniform-using-laptop_171337-4286-removebg-preview.png"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="container relative py-16 md:py-24 mt-28 lg:max-h-screen h-full lg:mt-20 flex items-center justify-center">
      <div className="grid items-center justify-center gap-8 lg:grid-cols-2 ">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Star className="absolute -left-8 -top-10 h-12 w-12 text-orange-400" strokeWidth={1} />
            </motion.div>
            <motion.h1
              className="text-4xl font-bold tracking-tight text-text_title sm:text-5xl md:text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Empower Your Health: Understand Your Medications with AI
              <motion.span
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Globe className="ml-2 inline-block h-8 w-8 text-purple-500" strokeWidth={1} />
              </motion.span>
            </motion.h1>
          </div>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Our team of qualified advisers works alongside you, a wide range of investment opportunities.
          </motion.p>
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button size="lg" className="bg-button_bg hover:bg-button_hover_bg">
              Get Started
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <Image
              src={logo}
              alt="Person in pink hoodie"
              width={600}
              height={600}
              className="rounded-3xl"
              priority
            />
            {/* Achievement badges */}
            <motion.div
              className="absolute lg:-left-4 md:-left-2 left-0 top-0 md:top-10 lg:top-8 flex items-center gap-2 rounded-full bg-white p-3 shadow-lg "
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="rounded-full bg-pink-100 p-2">
                <Star className="h-5 w-5 text-pink-600" />
              </div>
              <div>
                <p className="font-semibold">20K+</p>
                <p className="text-xs md:text-sm text-gray-600">Prompts done</p>
              </div>
            </motion.div>
            <motion.div
              className="absolute lg:-right-4 md:right-1 bottom-52 right-0 md:bottom-80 lg:bottom-80 flex items-center gap-2 rounded-full bg-white p-3 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="rounded-full bg-blue-100 p-2">
                <Star className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold">250K</p>
                <p className="text-xs md:text-sm text-gray-600">Satisfied Client</p>
              </div>
            </motion.div>
            <motion.div
              className="absolute lg:-bottom-4 md:-bottom-4 bottom-0 left-4 md:left-1/2 lg:left-1/2 -translate-x-1/2  bg-white  px-10  py-3 rounded-full shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="text-center">
                <div className="mx-auto mb-2 w-fit rounded-full bg-yellow-100 p-2">
                  <Star className="h-5 w-5 text-yellow-600" />
                </div>
                <p className="whitespace-nowrap font-semibold">#1 Awarded</p>
                <p className="text-xs md:text-sm text-gray-600">Agency across america in 2021</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}