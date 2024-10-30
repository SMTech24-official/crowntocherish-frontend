import { CardProps } from "@/types/types";
import { Button } from "@/components/ui/button"
import { poppins } from "@/app/fonts/font";


export function StylishCard({
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
        <div className={`relative w-full max-w-md p-6 ${background} rounded-xl shadow-lg overflow-hidden hover:scale-[1.05] transition-all duration-300`}>
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,100 Q100,50 200,100 T400,100" fill="none" stroke="#FEF08A" strokeWidth="2" />
                <path d="M0,200 Q100,150 200,200 T400,200" fill="none" stroke="#FEF08A" strokeWidth="2" />
                <path d="M0,300 Q100,250 200,300 T400,300" fill="none" stroke="#FEF08A" strokeWidth="2" />
            </svg>
            <div className="relative z-10">
                <div className="flex flex-col items-center gap-3 mb-4">
                    {icon && <div className={`${titleColor}`}>{icon}</div>}
                    <h2 className={`text-3xl font-semibold ${titleColor} ${poppins.className}`}>{title}</h2>
                </div>


                <p className={`${textColor} mb-6`}>{description}</p>


                <Button
                    className={`${buttonColor} ${buttonHoverColor} hover:text-[#DB2777] text-white transition-colors duration-200 border-[#ff4699]  hover:bg-white`}
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
