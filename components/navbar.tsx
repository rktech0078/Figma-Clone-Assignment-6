import Image from 'next/image'
import React from 'react'
import logo from "../public/images/logo.svg"
import { MdOutlineMenu } from "react-icons/md";
import Link from 'next/link';



export default function Navbar() {

const className = {
  underline:"hover:font-bold hover:underline text-shadow hover:text-shadow transition duration-300"
}

  return (
    <div className='w-full z-50 sticky top-0 bg-opacity-100 bg-[#FFFFFF] h-[72px] flex justify-between items-center border-b-[1px] border-b-black px-[24px] lg:bg-[#F7F7F7]'>

      <Link href={"#/"}>
      <div id='#/' className='lg:ml-[20px]'>
        <Image src={logo} alt='Logo' />
      </div>
      </Link>

      <div>
        <MdOutlineMenu className='text-[28px] lg:hidden ' />
      </div>

      <div className='w-[620px] h-[48px] bg-white flex items-center justify-center  max-[1024px]:hidden'>
          <nav className='flex gap-[38px]'>
            <Link href={"#/"} className={className.underline}>Home</Link>
            <Link href={"#courses"} className={className.underline}>Courses</Link>
            <Link href={"#services"} className={className.underline}>Services</Link>
            <Link href={"#achievement"} className={className.underline}>Achievement</Link>
            <Link href={"#about"} className={className.underline}>About Us</Link>
            <Link href={"#testinomial"} className={className.underline}>Testinomial</Link>
          </nav>
      </div>

      <div className='max-[1024px]:hidden'>
        <button className='w-[80px] h-[40px]  bg-black rounded-[5px] text-[16px] hover:text-black hover:bg-white hover:border-[2px] border-black items-center text-white font-bold mx-3'> 
          Login
        </button>
        
        <button className='w-[80px] h-[40px]  bg-black rounded-[5px] text-[16px] hover:text-black hover:bg-white hover:border-[2px] border-black items-center text-white font-bold'> 
          Sign Up
        </button>
      </div>


    </div>
  )
}
