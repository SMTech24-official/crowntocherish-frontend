'use client'

import { motion } from "framer-motion"
import { useState } from "react"
import SectionHeader from "../shared/sectionHeader/SectionHeader"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import Image from "next/image"
import blogs1 from "@/assets/first.png"
import blogs2 from "@/assets/blogs2.png"
import blogs3 from "@/assets/04012024042001.png"
const articles = [
  {
    title: "The Future of AI in Healthcare",
    excerpt: "Explore how artificial intelligence is revolutionizing patient care and medical research.",
    author: "Dr. Jane Smith",
    date: "2023-05-15",
    readTime: "5 min read",
    image: blogs1,
    category: "Technology"
  },
  {
    title: "Understanding Mental Health in the Digital Age",
    excerpt: "Discover the impact of technology on mental well-being and strategies for maintaining balance.",
    author: "Prof. Michael Johnson",
    date: "2023-05-10",
    readTime: "7 min read",
    image: blogs2,
    category: "Mental Health"
  },
  {
    title: "Nutrition Myths Debunked",
    excerpt: "Separating fact from fiction in the world of diet and nutrition with evidence-based insights.",
    author: "Nutritionist Sarah Lee",
    date: "2023-05-05",
    readTime: "6 min read",
    image: blogs3,
    category: "Nutrition"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

export default function Blogs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="section-gap bg-gradient-to-b from-background/80 to-background"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            toolText="Stay Informed"
            title="Latest Articles"
            subtitle="Dive into our collection of insightful articles covering the latest in health, technology, and wellness. Stay informed with expert knowledge and cutting-edge research."
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out"
                  style={{
                    transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
                  {article.category}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-text_title line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <motion.button
                  className="flex items-center text-primary font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}