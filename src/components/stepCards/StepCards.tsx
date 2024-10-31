// components/shared/StepCard.tsx
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StepCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const StepCard: React.FC<StepCardProps> = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", delay },
      },
    }}
    whileHover={{ scale: 1.05 }}
    className="relative"
  >
    <Card className="h-full backdrop-blur-sm bg-white/70 group">
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-full bg-[#DB2777]/70  group-hover:bg-secondary flex items-center justify-center mb-4`}>
          <Icon className="w-6 h-6 text-text_title" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-text_title">{title}</h3>
        <p className="text-text_default">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export default StepCard;
