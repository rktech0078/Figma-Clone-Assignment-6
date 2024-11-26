import React from 'react'

export default function Footer() {
    return (

        <div className='w-full p-[80px] flex gap-[48px] '>

            <div className='w-full md:flex md:justify-between items-center'>
                <div className='text-center md:text-left'>
                    <h1 className='font-[600] text-[18px] leading-[27px]'>Subscribe to our newsletter</h1>
                    <p className='font-[400] text-[16px] leading-[24px] mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className='grid gap-[16px] mt-5'>
                    <div className='md:flex w-full'>
                        <input type="email" id='email' placeholder='Enter your email' className='w-full lg:w-[250px] h-[48px] rounded-[5px] border-[1px] border-black p-[12px] focus:border-black focus:ring-2 focus:ring-black outline-none' />
                        <button className='w-full lg:w-[130px] rounded-[5px] border-[1px] border-black px-[24px] py-[10px] gap-[8px] hover:bg-black hover:text-white hover:font-extrabold mt-3 sm:mt-0 lg:ml-3 '>Subscribe</button>
                    </div>
                    <p className='font-[400] text-[12px] leading-[18px] text-center lg:text-left'>By subscribing you agree to with our <span className='underline'>Privacy Policy</span></p>
                </div>

            </div>
        </div>

    )
}



