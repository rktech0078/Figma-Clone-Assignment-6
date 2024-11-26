import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




export default function Social() {
  return (
    <div className='hidden lg:flex items-center justify-between px-[64px] h-[54px]  bg-[#F7F7F7] border-b-[1px] border-b-black text-[14px] lg:mb-2'>
      <div>
        <span className='border-r-2  border-r-[#ccc] pr-4'>Phone Number: 956 742 455 678</span>
        <span className='pl-4'>Email:info@ddsgnr.com</span>
      </div>
      <div className='flex gap-3 text-[17px] animate-bounce'>
        <FaFacebookF className='hover:animate-spin' />
        <FaInstagram className='hover:animate-spin' />
        <FaTwitter className='hover:animate-spin' />
        <FaLinkedin className='hover:animate-spin' />
      </div>

      {/* <div className='w-2 h-2 bg-black'>ddd</div> */}
    </div>
  )
}
