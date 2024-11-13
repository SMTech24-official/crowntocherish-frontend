"use client"

import { TestimonialProps } from "@/types/types";
import { Ban, Check, Quote, Star, Trash } from "lucide-react";



export const TestimonialsCard = ({ data, idx, slidesToShow, isAdmin }: { data: TestimonialProps, isAdmin?: boolean, slidesToShow?: number, idx: number }) => {

    const handlePublish = (actionName: string) => {
        console.log(`${actionName} button clicked`);
    };

    const handleDelete = (actionName: string) => {
        console.log(`${actionName} button clicked`);
    };

    const handleUnPublish = (actionName: string) => {
        console.log(`${actionName} button clicked`);
    };

    return (
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
                    {
                        isAdmin && <p className="text-text_default mb-6 text-sm md:text-base flex-1 font-semibold">{data.email}</p>
                    }

                    <p className="text-text_default mb-6 text-sm md:text-base flex-1 ">&quot;{data.comment}&quot;</p>
                </div>
                {/* <div class="relative w-full h-full p-6 rounded-xl border overflow-hidden animate-pulse">
                    <div class="relative z-10">
                        <div class="flex justify-between">
                            <div>
                                <div class="flex items-center gap-3 mb-4">
                                    <div>
                                        <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                                    </div>
                                </div>
                                <div class="flex mb-4 gap-1">
                                    <div class="h-4 bg-gray-200 w-4 rounded-full"></div>
                                    <div class="h-4 bg-gray-200 w-4 rounded-full"></div>
                                    <div class="h-4 bg-gray-200 w-4 rounded-full"></div>
                                    <div class="h-4 bg-gray-200 w-4 rounded-full"></div>
                                    <div class="h-4 bg-gray-200 w-4 rounded-full"></div>
                                </div>
                            </div>
                            <div class="h-10 w-10 bg-gray-200 rounded"></div>
                        </div>
                        <div class="h-4 bg-gray-200 rounded w-full mb-6"></div>
                        <div class="h-4 bg-gray-200 rounded w-full mb-6"></div>
                    </div>
                </div> */}
                {
                    isAdmin && (
                        <div className=" flex flex-wrap items-center justify-start gap-3">
                            {/* Delete Button */}
                            <button
                                onClick={() => handleDelete(data.email)}
                                className="flex items-center md:px-3 px-2  py-2 bg-red-800 text-white"
                            >
                                <Trash className="mr-1 w-4 h-4" /> <span>Delete</span>
                            </button>
                            <button
                                onClick={() => handlePublish(data.email)}
                                className="flex items-center md:px-3 px-2  py-2 bg-green-800 text-white"
                            >
                                <Check className="mr-1 w-4 h-4" /> <span>Publish</span>
                            </button>
                            <button
                                onClick={() => handleUnPublish(data.email)}
                                className="flex items-center md:px-3 px-2  py-2 bg-red-600 text-white"
                            >
                                <Ban className="mr-1 w-4 h-4" /> <span>UnPublish</span>
                            </button>
                        </div>
                    )
                }
            </div>

        </div>
    )
}