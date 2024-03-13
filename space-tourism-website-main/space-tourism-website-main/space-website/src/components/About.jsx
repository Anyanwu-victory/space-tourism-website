import React from 'react'
import mobilebg from '../assets/home/background-home-desktop.jpg'

const About = () => {
  return (
    <div className='text-center px-[25px]'>
        <div className='absolute mt-[-37rem]  text-white'>
        <p className='hidden lg:block'>So, you want to travel to</p>
        <h1 className=" text-white text-center text-[97px] font-[bellefair] text-400 "> SPACE</h1>

        <p className="font-[barlow] text-[20px] text-center leading-[32px] px-[29px] font-thin pt-[15px]">Let’s face it; if you want to go to space, you might as well genuinely go to 
           outer space and not hover kind of on the edge of it. Well sit back, and relax 
           because we’ll give you a truly out of this world experience!
         </p>

         <div className='w-[180px] h-[180px]  rounded-full bg-white 
         font-[bellefair] py-[5rem] mx-[130px] my-[2rem] '>
           <h3 className='text-[#000000] text-center text-2xl '>EXPLORE</h3>
         </div>
      </div>

    
    </div>
  )
}

export default About;    