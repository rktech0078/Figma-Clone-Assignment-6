  import Image from 'next/image'
  import React from 'react'

  export default function Company() {
    return (
      <div className='w-full px-[24px] py-[48px] lg:bg-[#F7F7F7] lg:w-full lg:flex lg:justify-between lg:items-center'>

          <div className='flex'>
              <h1 className='font-[700] text-[18px] leading-[27px] lg:hidden'>Trusted by the worlds best companies <span className='block'>[social proof to build credibility]</span> </h1>
              <h1 className='hidden lg:block font-[700] text-[24px]'>Trusted by 2000+ companies worldwide.</h1>
          </div>

          <div className='flex py-[16px] overflow-hidden mx-auto'>
            <Image src={"/images/logo/logo2.svg"} alt='Comapny' width={100} height={100} className='w-[107px] lg:w-[123px]'/>
            <Image src={"/images/logo/logo1.svg"} alt='Comapny' width={100} height={100} className='w-[107px] lg:w-[123px]'/>
            <Image src={"/images/logo/logo3.svg"} alt='Comapny' width={100} height={100} className='w-[107px] lg:w-[123px]'/>
            <Image src={"/images/logo/logo4.svg"} alt='Comapny' width={100} height={100} className='w-[107px] lg:w-[123px]'/>
            <Image src={"/images/logo/logo5.svg"} alt='Comapny' width={100} height={100} className='w-[107px] lg:w-[123px]'/>
            <Image src={"/images/logo/logo6.svg"} alt='Comapny' width={100} height={100} className='w-[107px] lg:w-[123px]'/>
          </div>

      </div>
    )
  }
