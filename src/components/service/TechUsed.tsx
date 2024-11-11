'use client';

import React, { useRef } from 'react';
import { AnimatedBeam, Circle } from '../core/beam';
import { User } from 'lucide-react';
import Image from 'next/image';
import gpt from "@/assets/beam/ChatGPT-Logo-removebg-preview.png"
import bert from "@/assets/beam/d70tmxc-8568ddac-ca30-4ab8-b819.png"
import dial from "@/assets/beam/google-dialogflow6916-removebg-preview.png"
import tensor from "@/assets/beam/tensorflow-new1255-removebg-preview.png"
import rxnorm from "@/assets/beam/images.png"
import doctor from "@/assets/beam/stethoscope_809957.png"

export default function TechUsed() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className='relative '
            ref={containerRef}
        >
            <div className='flex h-full w-full flex-col items-stretch justify-between gap-10'>
                <div className='flex flex-row items-center justify-between'>
                    <Circle ref={div1Ref} className='w-fit h-fit'>
                        <Image src={gpt} alt='Chat Gpt' width={100} height={100} className='md:w-16 w-10 h-10 md:h-16 object-contain'/>
                    </Circle>
                    <Circle ref={div5Ref} className='p-2 w-fit h-fit'>
                        <Image src={bert} alt='Chat Gpt' width={100} height={100} className='md:w-16 w-10 h-10 md:h-16 object-contain'/>
                    </Circle>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <Circle ref={div2Ref} className='p-2 w-fit h-fit'>
                        <Image src={dial} alt='Chat Gpt' width={100} height={100} className='md:w-16 w-10 h-10 md:h-16 object-contain'/>

                    </Circle>
                    <Circle ref={div4Ref} className='h-20 w-20 p-3'>
                        <User />
                    </Circle>
                    <Circle ref={div6Ref} className='p-2 w-fit h-fit'>
                        <Image src={tensor} alt='Chat Gpt' width={100} height={100} className='md:w-16 w-10 h-10 md:h-16 object-contain'/>

                    </Circle>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <Circle ref={div3Ref} className='p-2 w-fit h-fit'>
                        <Image src={rxnorm} alt='Chat Gpt' width={100} height={100} className='md:w-16 w-10 h-10 md:h-16 object-contain' />
                    </Circle>
                    <Circle ref={div7Ref} className='p-2 w-fit h-fit'>
                        <Image src={doctor} alt='Chat Gpt' width={100} height={100} className='md:w-16 w-10 h-10 md:h-16 object-contain'/>
                    </Circle>
                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
                dotted
                gradientStartColor='#00ac47'
                gradientStopColor='#ffba00'
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
                dotted
                gradientStartColor='#d948ae'
                gradientStopColor='#5b60ff'
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
                dotted
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
                reverse
                gradientStartColor='#48b0d9'
                gradientStopColor='#67aeff'
                dotted
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div4Ref}
                reverse
                dotted
                gradientStartColor='#00ac47'
                gradientStopColor='#4fcc5d'
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div7Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
                reverse
                dotted
                gradientStartColor='#48b0d9'
                gradientStopColor='#67aeff'
            />
        </div>
    );
}
