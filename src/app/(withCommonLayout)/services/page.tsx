'use client'

import { motion } from "framer-motion"
import {
  Brain,
  UserCog,
  Clock,
  Shield,
  FileText,
  MessageSquare,
  Download,
  ArrowRight,
  LucideIcon
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SectionHeader from "@/components/shared/sectionHeader/SectionHeader"
import teamImage from "@/assets/image-removebg-preview (1).png"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, features = [] }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.02 }}
    className="relative"
  >
    <Card className="h-full backdrop-blur-sm bg-white/70">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-[#DB2777] flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <CardTitle className="text-xl text-text_title">{title}</CardTitle>
        <CardDescription className="text-text_default">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <ArrowRight className="w-5 h-5 text-[#DB2777] shrink-0 mt-0.5" />
              <span className="text-sm text-text_default">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </motion.div>
)

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen section-gap lg:mt-0  md:mt-20 mt-28">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <SectionHeader
            title="Our Services"
            subtitle="Empowering you with clear, accessible medication information through advanced AI technology"
          />
        </motion.div>

        {/* Introduction */}
        <motion.p
          variants={itemVariants}
          className="text-center text-lg text-text_default max-w-3xl mx-auto mb-16"
        >
          At ExplainMyMeds, we use advanced AI technology to help you understand your medications.
          Our services are designed to provide clear, concise information that empowers you to make
          informed decisions about your health.
        </motion.p>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <ServiceCard
            icon={Brain}
            title="AI-Powered Medication Explanations"
            description="Get detailed, easy-to-understand explanations of your medications from our advanced AI system."
            features={[
              "Complex medical terms simplified",
              "Detailed dosage instructions",
              "Side effects explained clearly",
              "Drug interactions identified",
            ]}
          />
          <ServiceCard
            icon={UserCog}
            title="Custom Explanations Tailored to You"
            description="Receive personalized medication information based on your specific health profile."
            features={[
              "Age-specific recommendations",
              "Health condition considerations",
              "Lifestyle factor adjustments",
              "Personalized dosage guidance",
            ]}
          />
          <ServiceCard
            icon={Clock}
            title="24/7 Accessibility"
            description="Access medication information whenever you need it, day or night."
            features={[
              "Round-the-clock availability",
              "Instant information access",
              "Mobile-friendly platform",
              "No waiting times",
            ]}
          />
          <ServiceCard
            icon={Shield}
            title="Data Privacy and Security"
            description="Your medical information is protected with enterprise-grade security."
            features={[
              "End-to-end encryption",
              "Secure data storage",
              "HIPAA compliance",
              "Private browsing options",
            ]}
          />
          <ServiceCard
            icon={FileText}
            title="Printable Reports"
            description="Generate and share easy-to-read medication reports."
            features={[
              "PDF download option",
              "Print-friendly formats",
              "Shareable summaries",
              "Digital record keeping",
            ]}
          />
          <ServiceCard
            icon={MessageSquare}
            title="AI Chat Support"
            description="Get instant answers to your medication questions through our AI chat."
            features={[
              "Real-time responses",
              "24/7 availability",
              "Context-aware answers",
              "Follow-up questions handled",
            ]}
          />
        </div>

        {/* Feature Highlight */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-[#DB2777]/10 to-[#BE185D]/10 rounded-lg mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-text_title mb-4">
                Why Choose ExplainMyMeds?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <Download className="w-5 h-5 text-[#DB2777] shrink-0 mt-1" />
                  <span className="text-text_default">
                    Instant access to medication information
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Download className="w-5 h-5 text-[#DB2777] shrink-0 mt-1" />
                  <span className="text-text_default">
                    Easy-to-understand explanations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Download className="w-5 h-5 text-[#DB2777] shrink-0 mt-1" />
                  <span className="text-text_default">
                    Secure and private platform
                  </span>
                </li>
              </ul>
            </div>
            <Image alt="image of doctors in Team" className="object-contain h-64" src={teamImage} />
          </div>
        </motion.div>

        {/* Call to Action
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-text_title mb-4">
            Ready to Understand Your Medications?
          </h2>
          <p className="text-text_default mb-8">
            Get started today and take control of your health with ExplainMyMeds.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="bg-[#DB2777] hover:bg-[#BE185D] text-white px-8 py-6 text-lg"
              asChild
            >
              <Link href="/start">Start Now</Link>
            </Button>
          </motion.div>
        </motion.div> */}
      </motion.div>
    </div>
  )
}

export default ServicesPage
