import { CardThree } from './Card'
import { useState } from 'react'

export default function Team() {

    const [isView, setIsView] = useState(false)

    function viewButton (){
      setIsView(!isView)
    }


  return (
    <div id='about' className='w-full px-[24px] py-[48px] grid gap-[48px] bg-[#F7F7F7] lg:w-full md:w-full'>
        
        <div className='w-full h-[120px] grid gap-[24px] text-center lg:w-full md:w-full'>
            <h1 className='font-[700] text-[32px] leading-[41px]'>Our Team</h1>
            <p className='font-[400] text-[18px] leading-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>

        <div className='w-full grid gap-[96px] lg:grid-cols-3 lg:w-full md:grid-cols-2 md:w-full'>
            <CardThree image={"one"} name="James Nduku" work="Marketing Coordinator"/>
            <CardThree image={"two"} name="Joseph Munyambu" work="Nursing Assistant"/>
            <CardThree image={"three"} name="Joseph Ngumbau" work="Medical Assistant"/>
            <CardThree image={"four"} name="Erick Kipkemboi" work="Web Designer" className={isView ? "block" : "hidden"}/>
            <CardThree image={"five"} name="Stephen Kerubo" work="President of Sales" className={isView ? "block" : "hidden"}/>
            <CardThree image={"six"} name="John Leboo" work="Dog Trainer" className={isView ? "block" : "hidden"}/>
        </div>

        <div className=' flex justify-center items-center'>
            <button onClick={viewButton} className='hover:bg-black hover:text-white w-[130px] rounded-[5px] border-[2px] border-black px-[24px] py-[12px] mt-4'>
            {isView ? "View Less" : "View All"}
            </button>
        </div>

    </div>
  )
}
