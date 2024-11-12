import { TestimonialProps } from "@/types/types";
import { Quote, Star } from "lucide-react";

export const TestimonialsCard = ({ data, idx, slidesToShow }: { data: TestimonialProps, slidesToShow?: number, idx: number }) => (

    <div
        key={idx}
        className={`flex-shrink-0 px-4 py-2 ${slidesToShow === 3 ? 'w-1/3 h-[280px] overflow-hidden' : slidesToShow === 2 ? 'w-1/2 ' : 'w-full'
            }`}
    >
        <div className="relative w-full h-full p-6 rounded-xl border overflow-hidden">
            <div className="relative z-10">
                <div className="flex  justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div>
                                <h3 className="text-base md:text-2xl font-bold text-text_title font-serif">{data.name}</h3>
                            </div>
                        </div>

                        <div className="flex mb-4 gap-1">
                            {[...Array(data.rating)].map((_, i) => (
                                <Star key={i} className="fill-yellow-400 stroke-none" />
                            ))}
                        </div>
                    </div>
                    <Quote className="w-10 h-10 text-pink-100" />
                </div>
                <p className="text-text_default mb-6 text-sm md:text-base">&quot;{data.comment}&quot;</p>
            </div>
        </div>
    </div>
)