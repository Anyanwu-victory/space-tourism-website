import React, { useState, useEffect } from 'react';
import titan from '../assets/destination/image-titan.png';
import desktopbg from '../assets/destination/background-destination-desktop.jpg';
import mobilebg from '../assets/destination/background-destination-mobile.jpg';
import tabletbg from '../assets/destination/background-destination-tablet.jpg';
import Navbar from './Navbar';
import { getDestination } from '../fetcher';
import Carousel from './Carousel';
import currentSlide from './Carousel';

  



const Titan = () => {
   
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className='max-h-screen max-w-full relative flex justify-center  '>
        <div className='absolute pt-[190px]' >
        <Carousel />

        <div id="default-carousel" className="relative w-full
       flex justify-center bg-transparent items-center"
       data-carousel="slide">
        <div className=" h-[304px] overflow-hidden md:h-[680px]">
          {[...Array(4).keys()].map((slide, index) => (
            <div key={index} className="w-full h-full  top-0 left-0" style={{ transform: 
            `translateX(${index * 100}%)` }}>
              <img src={titan} className=" block w-[200px] h-[200px] object-cover" alt={`Slide ${index + 1}`} />

             
            </div>
          ))}
        </div>
        <div className="absolute z-30 flex justify-center space-x-6 rtl:space-x-reverse bottom-10 left-1/2 -translate-x-1/2">
          {[...Array(4).keys()].map((index) => (
            <button
              key={index}
              type="button"
              className={`w-10 h-1  ${currentSlide === index ? 'bg-[#000]':'bg-[#fff]'}`}
              aria-current={currentSlide === index ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
      
      <div className='text-white  mt-[-14px]'>
        <h1 className=" text-white text-center text-[90px] font-[bellefair] text-400 uppercase ">titan</h1>
        <p className="font-[barlow] text-[20px] text-center 
        leading-[32px] mx-[2rem] font-thin pt-[-20px]">
              
              
  The only moon known to have a dense atmosphere other than Earth, Titan 
  is a home away from home (just a few hundred degrees colder!). As a 
  bonus, you get striking views of the Rings of Saturn.
      
        </p>

        <hr className='my-[3rem] mx-[2.5rem] fill-[#383B4B] text-[#383B4B] h-3 '/>

        <p className="font-[bellefair] text-[50px] text-center 
        leading-[32px] mx-[2rem]  pt-[20px] uppercase">
           1.6 bil. km
        </p> 

        
        <p className="font-[bellefair] text-[50px] text-center 
        leading-[32px] mx-[2rem]  pt-[120px] uppercase">
          9 years
        </p> 

    </div>
        </div>
        
        <img src={desktopbg} className='hidden object-cover w-full h-full lg:block' alt="Desktop background"/>
        <img src={mobilebg} className="object-cover w-full h-full lg:hidden  " alt="Mobile background"/>
        <img src={tabletbg}  className="object-cover w-full h-full lg:hidden hidden md:block" alt="Tablet background"/>
      </div>

     
    </>
  );
};

export default Titan;
