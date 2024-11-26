import React from 'react'
import GirlsImage from "../public/images/girlsImage.svg"
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='flex flex-col md:flex-row md:justify-between'>

      <div className='flex justify-center items-center md:mx-auto'>
        <div className='px-[24px] py-[64px]'>

          <div className='font-[700] text-[40px] leading-[48px] mb-5 '>
            <h1>Learn new skills</h1>
            <h1>online with ease</h1>
          </div>

          <p className='leading-[27px] font-[400] text-[18px] w-[380px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

          <div className='mt-10 flex gap-4'>
            <button className='w-[178px] h-[48px] rounded-[5px] hover:border-[2px] hover:border-black bg-black text-white font-[18px] hover:bg-white hover:text-black'>Start learning now</button>
            <button className='w-[178px] h-[48px] rounded-[5px] hover:border-[2px] hover:border-black bg-black text-white font-[18px] hover:bg-white hover:text-black'>Explore Courses</button>
          </div>
        </div>
      </div>

      <div>
        <Image src={GirlsImage} alt='Hero Image' className='w-[428px] h-[390px] min-[428px]:hidden' />
        <Image src={"/images/heroImage.svg"} width={100} height={100} alt='Hero Image' className='max-[427px]:hidden w-full'/>
      </div>
    </div>
  )
}
