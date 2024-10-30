import { Button } from "@/components/ui/button"
import { 
  Stethoscope, 
  Heart,
  Clock,
  Shield,
  Users,
  Award
} from "lucide-react"

interface CardProps {
  title: string
  description: string
  background: string
  titleColor: string
  textColor: string
  buttonColor: string
  buttonHoverColor: string
  icon?: React.ReactNode
}

function StylishCard({ 
  title, 
  description, 
  background, 
  titleColor, 
  textColor, 
  buttonColor, 
  buttonHoverColor,
  icon 
}: CardProps) {
  return (
    <div className={`relative w-full max-w-md p-6 ${background} rounded-xl shadow-lg overflow-hidden`}>
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,100 Q100,50 200,100 T400,100" fill="none" stroke="#FEF08A" strokeWidth="2" />
        <path d="M0,200 Q100,150 200,200 T400,200" fill="none" stroke="#FEF08A" strokeWidth="2" />
        <path d="M0,300 Q100,250 200,300 T400,300" fill="none" stroke="#FEF08A" strokeWidth="2" />
      </svg>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          {icon && <div className={`${titleColor}`}>{icon}</div>}
          <h2 className={`text-3xl font-bold ${titleColor} font-serif italic`}>{title}</h2>
        </div>
        <p className={`${textColor} mb-6`}>{description}</p>
        <Button 
          className={`${buttonColor} ${buttonHoverColor} text-white transition-colors duration-200`}
        >
          Learn More
        </Button>
      </div>
      <svg className="absolute bottom-0 right-0 w-32 h-32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="#FEF08A" opacity="0.5" />
      </svg>
    </div>
  )
}

export default function Feature() {
  const features = [
    {
      title: "24/7 Support",
      description: "Round-the-clock medical assistance and support from our dedicated healthcare team.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Expert Care",
      description: "Get expert medical guidance and support from our team of healthcare professionals.",
      icon: <Stethoscope className="w-8 h-8" />
    },
    {
      title: "Safe & Secure",
      description: "Your health information is protected with state-of-the-art security measures.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Community",
      description: "Join our supportive community of patients and healthcare providers.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Quality Service",
      description: "Premium healthcare services with a focus on patient satisfaction and well-being.",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Personalized Care",
      description: "Tailored medical solutions that address your unique healthcare needs.",
      icon: <Heart className="w-8 h-8" />
    }
  ]

  return (
    <section className="py-16 bg-[#FFF1F2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#DB2777] mb-4">Key Features & Benefits</h2>
          <p className="text-[#BE185D] text-lg max-w-2xl mx-auto">
            Discover why our healthcare services stand out with these exceptional features designed to provide you with the best medical care experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature, index) => (
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