import React from 'react'

export default function Achievements() {
  return (
    <div id='achievement' className='w-full px-[24px] py-[48px]'>
        <div className='flex gap-[16px] flex-col text-center lg:w-full'>
            <h1 className='font-[700] text-[32px] leading-[41px] '>Our Achivements</h1>
            <p  className='font-[400] text-[18px] leading-[27px] lg:hidden md:hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <p  className='font-[400] text-[18px] leading-[27px] hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 items-center gap-[24px] text-center mt-14 animate-pulse'>
            <h1 className='font-[700] text-[20px] lg:font-[700] lg:text-[40px]'>+200 <span className='font-[400] text-[16px] leading-[24px] block'>Courses</span></h1>
            <h1 className='font-[700] text-[20px] lg:font-[700] lg:text-[40px]'>50K <span className='font-[400] text-[16px] leading-[24px] block'>Mentors</span></h1>
            <h1 className='font-[700] text-[20px] lg:font-[700] lg:text-[40px]'>370K <span className='font-[400] text-[16px] leading-[24px] block'>Students</span></h1>
            <h1 className='font-[700] text-[20px] lg:font-[700] lg:text-[40px]'>100+ <span className='font-[400] text-[16px] leading-[24px] block'>Recognition</span></h1>
        </div>

    </div>
  )
}
