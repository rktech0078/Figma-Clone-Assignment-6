import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer3() {
  const className = {
    paragraph:"text-[14px] underline hover:font-bold"
  }
  return (
    <div className="border-t-[1px] border-black md:flex md:justify-between px-[10px] lg:px-[80px] mb-10">

            <div className="text-center mt-[32px] md:flex md:gap-[24px]">
                <p className="font-Roboto font-[400] text-[14px]">2023 Ddsgnr. All right reserved.</p>
                <div className="flex justify-around mt-[32px] md:mt-0 md:gap-[24px]">
                    <p className={className.paragraph}>Privacy Policy</p>
                    <p className={className.paragraph}>Terms of Service</p>
                    <p className={className.paragraph}>Cookies Settings</p>
                </div>
            </div>

            <div className="flex gap-[12px] text-[24px] mt-[32px] justify-center">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedin />
            </div>


        </div>
  )
}
