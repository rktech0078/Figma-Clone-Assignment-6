"use client";
import React from 'react'
import { CardTwo } from './Card'
import { useState } from 'react'

export default function Courses() {

    const [isView, setIsView] = useState(false)

    function handleView() {
        setIsView(!isView)
    }


    return (
        < div id='courses' className='w-full px-[24px] py-[48px]' >

            <div className='w-full grid gap-[24px] text-center'>
                <h1 className='font-[700] text-[32px] leading-[41px]'>Courses</h1>
                <p className='font-[400] text-[18px] leading-[27px]'>Your Ultimate Guide to learning</p>
            </div>

            <div className='flex gap-[25px] justify-center my-[48px]'>
                <h1 className='font-[400] text-[16px] leading-[24px] hover:underline'>Popular</h1>
                <h1 className='font-[400] text-[16px] leading-[24px] hover:underline'>Recommended</h1>
                <h1 className='font-[400] text-[16px] leading-[24px] hover:underline'>Best  Price</h1>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-[30px]'>
                <CardTwo picture1={"one"} subHeading="Design" heading1="UX/UI Design 201" />
                <CardTwo picture1={"two"} subHeading="Programmimg" heading1="Introduction to Python" />
                <CardTwo picture1={"three"} subHeading="Business" heading1="Data Analysis for Beginners" />
                <CardTwo picture1={"four"} subHeading="Art" heading1="Art Specialization" className={isView ? "block" : "hidden"} />
                <CardTwo picture1={"five"} subHeading="Law" heading1="Law" className={isView ? "block" : "hidden"} />
                <CardTwo picture1={"six"} subHeading="Tech" heading1="Introduction to webflow" className={isView ? "block" : "hidden"} />
            </div>

            <div className='flex justify-center items-center'>
                <button onClick={handleView} className=' hover:bg-black hover:text-white w-[200px] rounded-[5px] border-[2px] border-black px-[24px] py-[12px] mt-14'>
                    {isView ? "View Less Courses" : "View All course"}
                </button>
            </div>

        </div >
    )
}
