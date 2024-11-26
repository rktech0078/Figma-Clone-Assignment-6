import Image from 'next/image'
import React from 'react'

export default function Footer2() {
    return (

        <div className='w-full text-center md:text-left grid md:grid-cols-4 gap-[32px] pb-[48px]'>
            <div className='flex justify-center'>
                <Image src={"/images/logo.svg"} alt='Logo' width={100} height={100} className='w-[130px] h-[40px]' />
            </div>

            <div className='grid'>
                <h1 className=' font-[600] text-[16px] leading-[24px] mb-6'>Courses</h1>
                <ul className='grid gap-[16px] font-[400] text-[14px] leading-[21px] '>
                    <li className='hover:underline'>Business</li>
                    <li className='hover:underline'>Development</li>
                    <li className='hover:underline'>Technology</li>
                    <li className='hover:underline'>Design</li>
                    <li className='hover:underline'>Programming</li>
                </ul>
            </div>

            <div className='grid'>
                <h1 className='font-[600] text-[16px] leading-[24px] mb-6'>Resources</h1>
                <ul className='grid gap-[16px] font-[400] text-[14px] leading-[21px]'>
                    <li className='hover:underline'>Career</li>
                    <li className='hover:underline'>Resume</li>
                    <li className='hover:underline'>Learning</li>
                    <li className='hover:underline'>Interview Preparation</li>
                    <li className='hover:underline'>Jobs</li>
                </ul>
            </div>

            <div className='grid'>
                <h1 className='font-[600] text-[16px]  leading-[24px] mb-6'>About Us</h1>
                <ul className='grid gap-[16px] font-[400] text-[14px] leading-[21px]'>
                    <li className='hover:underline'>Contact</li>
                    <li className='hover:underline'>Help/Support</li>
                    <li className='hover:underline'>FAQ</li>
                    <li className='hover:underline'>Terms and Conditions</li>
                    <li className='hover:underline'>Partners</li>
                </ul>
            </div>

        </div>
    )
}
