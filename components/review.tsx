import React from 'react'
import { CardFour } from './Card'
import Image from 'next/image'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";



export default function Review() {
    return (
        <div id='testinomial' className='w-full px-[24px] lg:bg-[#F7F7F7] py-[48px] grid gap-[48px]'>

            <div className='gap-[24px] grid text-center'>
                <h1 className='font-[700] text-[32px] leading-[41px] lg:hidden'>What Our Student Say</h1>
                <h1 className='lg:block hidden font-[700] text-[48px] leading-[57px] text-left'>Customer testimonials</h1>
                <p className='font-[400] text-[18px] leading-[27px] text-center lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
                <CardFour picture={"three"} heading={"Wade Warren"} subHeading={"Position, Company name"} className='lg:hidden' />
                <CardFour picture={"three"} heading={"James Nduku"} subHeading={"Software Developer"} className='hidden lg:block' />
                <CardFour picture={"one"} heading={"Erick Kipkemboi"} subHeading={"Scrum Master"} />
                <CardFour picture={"six"} heading={"Stephen Kerubo"} subHeading={"UI/UX Designer"} />
            </div>

            <div className='w-full flex justify-between items-center md:px-10'>
                <div>
                <Image src={"/images/review/SliderDots.svg"} alt='Dots' width={100} height={100} className='w-[72px] h-[8px]' />
                </div>

                <div className='flex gap-[15px]'>
                <FaRegArrowAltCircleLeft  className='w-[48px] h-[48px] hover:text-white hover:bg-black hover:rounded-full' />
                <FaRegArrowAltCircleRight  className='w-[48px] h-[48px] hover:text-white hover:bg-black hover:rounded-full' />
                </div>
            </div>

        </div>
    )
}
