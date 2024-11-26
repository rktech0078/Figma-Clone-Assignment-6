import Image from "next/image"
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";


type CardOne = {
    picture: string;
    heading: string;
    className?: string;
}
type CardTwo = {
    picture1: string;
    subHeading: string;
    heading1: string;
    className?: string;
}
type CardThree = {
    image: string;
    name: string;
    work: string;
    className?: string;
}
type CardFour = {
    picture: string;
    heading: string;
    subHeading: string;
    className?: string;
}

const CardOne = ({ picture, heading, className }: CardOne) => {
    return (
        <div className={className} >

            <div className='w-full rounded-[5px] p-[16px] bg-[#F7F7F7] flex gap-[32px] mt-6 hover:shadow-xl transition-shadow duration-300 shadow-md hover:border-gray-400 border-opacity-50'>
                <div className='w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF] '>
                    <Image src={`/images/cards/${picture}.svg`} alt='card-1' width={100} height={100} />
                </div>

                <div className='w-[216px] flex flex-col justify-center '>
                    <h1 className='font-[600] text-[18px]'>{heading}</h1>
                    <p className='font-[400] text-[18px] leading-[27px]'>50+ Courses Available</p>
                </div>
            </div>

        </div>
    )
}

export default CardOne



export function CardTwo({ picture1, subHeading, heading1, className }: CardTwo) {
    return (

        <div className={`${className} w-full rounded-[8px] grid gap-[24px] bg-[#F7F7F7] mt-12 hover:shadow-xl transition-shadow duration-300 shadow-md hover:border-gray-400 border-opacity-50`}>
            <div className="-mt-5">
                <Image src={`/images/courses/${picture1}.svg`} alt="courses" width={100} height={100} className="w-full rounded-[5px]" />
            </div>

            <div className="px-[16px] pb-[24px] grid gap-[8px]">
                <h1 className="font-[600] text-[14px] leading-[21px] flex justify-between items-center ">{subHeading}  <span className="inline-block"><Image src={"/images/courses/Star.svg"} alt="star" width={100} height={100} className="w-[48px] h-[24px]" /></span> </h1>
                <h1 className="font-[700] text-[24px] leading-[33px]">{heading1}</h1>
                <p className="font-[400] text-[16px] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>

            <div className="flex items-center mb-7">
                <button className="ml-[16px] font-[400] text-[16px] leading-[24px] w-[125px] h-[40px] rounded-[8px] border-[1px] border-black px-[20px] py-[8px] hover:bg-black hover:text-white ">Enroll Now</button>
                <h1 className="ml-8 font-[500] text-[16px] leading-[24px]">$400</h1>
            </div>

        </div>
    )
}




export function CardThree({ image, name, work, className }: CardThree) {
    return (

        <div className={`${className} grid gap-[24px] items-center justify-center text-center lg:w-full md:w-full `}>
            <div className="items-center text-center flex justify-center ">
                <Image src={`/images/team/${image}.svg`} alt="team" width={100} height={100} className="w-[80px] h-[80px] " />
            </div>

            <div className="">
                <h1 className="font-[600] text-[20] leading-[30px]">{name}</h1>
                <p className="font-[400] text-[18px] leading-[27px]">{work}</p>
            </div>

            <div className="flex gap-[14px] justify-center">
                <FaLinkedin className="text-[18px]" />
                <FaTwitter className="text-[18px]" />
                <FaDribbble className="text-[18px]" />
            </div>

        </div>
    )
}


import React from 'react'

export function CardFour({ picture, heading, subHeading, className }: CardFour) {
    return (
        <div className={className}>
            <div className="w-full border-[1px] p-[32px] grid gap-[24px] border-black mt-4 hover:shadow-xl transition-shadow duration-300 shadow-md hover:border-gray-400 border-opacity-50 ">

                <Image src={"/images/review/Stars.svg"} alt="Stars" width={100} height={100} className="" />

                <p className="font-[400] text-[18px] leading-[27px]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>

                <div className="flex items-center">

                    <Image src={`/images/team/${picture}.svg`} alt="Team" width={100} height={100} className="w-[56px] h-[56px] rounded-full " />

                    <div className="ml-6">
                        <h1 className="font-[600] text-[16px] leading-[24px]">{heading}</h1>
                        <p className="font-[400] text-[16px] leading-[24px]">{subHeading}</p>
                    </div>

                </div>



            </div>
        </div>
    )
}
