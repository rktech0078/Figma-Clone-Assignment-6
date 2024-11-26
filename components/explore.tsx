"use client"


import React from 'react'
import CardOne from './Card'
import { useState } from "react"

export default function Explore() {

  const [isView, setIsView] = useState(false)
  const handleView = () => {
    setIsView(!isView)
  }

  return (
    <div id='services' className='w-full px-[24px] py-[48px]'>

      <div className='mt-9 mb-11 w-full flex gap-[24px] flex-col justify-center items-center text-center md:w-full lg:w-full'>
        <h1 className='font-[700] text-[32px] leading-[41px]'>Explore Courses By Category</h1>
        <p className='w-[385px] font-[400] text-[18px] leading-[27px] md:w-full lg:w-full'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
      </div>

      <div className='mt-9 grid lg:grid-cols-3 md:grid-cols-2 gap-[30px]'>
        <CardOne picture={"pen-tool"} heading="Design & Development" />
        <CardOne picture={"volume"} heading="Marketing" />
        <CardOne picture={"group"} heading="Development" />
        <CardOne picture={"microphone"} heading="Communication" className={isView ? "block" : "hidden"} />
        <CardOne picture={"link"} heading="Digital Marketing" className={isView ? "block" : "hidden"} />
        <CardOne picture={"arrow-2"} heading="Self Development" className={isView ? "block" : "hidden"} />
        <CardOne picture={"briefcase"} heading="Business" className={isView ? "block" : "hidden"} />
        <CardOne picture={"finance"} heading="Finance" className={isView ? "block" : "hidden"} />
        <CardOne picture={"book"} heading="Consulting" className={isView ? "block" : "hidden"} />
      </div>

      <div className=' flex justify-center items-center'>
        <button onClick={handleView} className='hover:underline hover:bg-black hover:text-white w-[175px] rounded-[5px] border-[2px] border-black px-[24px] py-[12px] mt-14'>
          {isView ? "View Less" : "View All"}
        </button>
      </div>

    </div>
  )
}

