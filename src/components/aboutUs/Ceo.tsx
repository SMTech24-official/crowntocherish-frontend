'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import team3 from "@/assets/team3.jpg"


const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
    }
}


export default function Ceo() {
    return (

        <div className=" lg:sticky top-0">
            <motion.div
                className="relative lg:w-[400px] h-fit lg:ml-auto shadow-lg flex flex-col md:flex-row lg:flex-col"
                animate={floatingAnimation}
            >
                <Image
                    src={team3}
                    alt="Dr. Lisa Zhang, CEO of ExplainMyMeds"
                    width={200}
                    height={100}
                    className="rounded-t-2xl w-full  md:w-[300px] md:h-[300px] lg:w-full lg:h-full"
                />
                <motion.div
                    className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full z-0"
                    animate={{
                        scale: [1, 1.1, 1],
                        transition: { duration: 4, repeat: Infinity }
                    }}
                />
                <div className="mt-4  p-4 rounded-b-2xl ">
                    <h3 className="text-xl font-semibold text-text_title mb-2">Dr. Lisa Zhang</h3>
                    <p className="text-primary font-medium mb-2">Founder & CEO</p>
                    <p className="text-text_default text-sm">
                        With a Ph.D. in Pharmacology and 10+ years in healthtech, Dr. Zhang leads our mission to revolutionize medication understanding for all.
                    </p>
                </div>
            </motion.div>
        </div>
    )
}
