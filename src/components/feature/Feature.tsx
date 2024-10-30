
import SectionHeader from "../shared/sectionHeader/SectionHeader"
import { StylishCard } from "../shared/styllishCard/StylishCard"

import {
  Stethoscope,
  Heart,
  Clock,
  Shield,
  Users,
  Award
} from "lucide-react"


export const features = [
  {
    title: "24/7 Support",
    description: "Round-the-clock medical assistance and support from our dedicated healthcare team, ensuring that you have access to care whenever you need it, whether it's for urgent queries or ongoing health management.",
    icon: <Clock className="w-8 h-8" />
  },
  {
    title: "Expert Care",
    description: "Get expert medical guidance and support from our team of healthcare professionals, who are specialists in various fields. Whether you need a second opinion or ongoing treatment, rest assured you're in the best hands.",
    icon: <Stethoscope className="w-8 h-8" />
  },
  {
    title: "Safe & Secure",
    description: "Your health information is protected with state-of-the-art security measures, including encryption and privacy policies that ensure your data is always handled with the utmost care and confidentiality.",
    icon: <Shield className="w-8 h-8" />
  },
  {
    title: "Community",
    description: "Join our supportive community of patients and healthcare providers. Share experiences, ask questions, and find solace in a network that understands your journey and is dedicated to helping you thrive.",
    icon: <Users className="w-8 h-8" />
  },
  {
    title: "Quality Service",
    description: "Premium healthcare services with a focus on patient satisfaction and well-being. Our team strives to deliver consistent, high-quality medical care that meets your expectations and enhances your overall health experience.",
    icon: <Award className="w-8 h-8" />
  },
  {
    title: "Personalized Care",
    description: "Tailored medical solutions that address your unique healthcare needs. We take the time to understand your individual health goals, offering treatment plans and services designed specifically for you.",
    icon: <Heart className="w-8 h-8" />
  }
]




export default function Feature() {


  return (
    <section className="">
      <div className="container mx-auto px-4  border border-red-400 section-gap">

        <SectionHeader title="Key Features & Benefits "  subtitle="Discover why our healthcare services stand out with these exceptional features designed to provide you with the best medical care experience."/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {features?.map((feature, index) => (
            <StylishCard
              key={index}
              title={feature.title}
              description={feature.description}
              background="bg-gradient-to-tr from-[#FFE4E6] via-[#FECDD3] to-[#FFE4E6]"
              titleColor="text-[#DB2777]"
              textColor="text-[#BE185D]"
              buttonColor="bg-[#DB2777]"
              buttonHoverColor="hover:bg-[#BE185D]"
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}