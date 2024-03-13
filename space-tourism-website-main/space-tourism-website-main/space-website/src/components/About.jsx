import React from 'react'
import mobilebg from '../assets/home/background-home-desktop.jpg'

const About = () => {
  return (
    <div className='text-center px-[30px]'>
        <div className='absolute mt-[-36rem] px-[66px] text-white'>
        <p className='hidden lg:block'>So, you want to travel to</p>
        <h1 className=" text-white text-center text-[97px] font-[bellefair] text-400 "> Space</h1>

        <p className="font-[bellefair] text-3xl text-center leading-loose">Let’s face it; if you want to go to space, you might as well genuinely go to 
           outer space and not hover kind of on the edge of it. Well sit back, and relax 
           because we’ll give you a truly out of this world experience! </p>
      </div>

      <div className='w-[40px] h-[40px]  rounded-full bg-white '>
        <h3 className='font-[bellefair] text-black'>EXPLORE</h3>
      </div>
    </div>
  )
}

export default About;    