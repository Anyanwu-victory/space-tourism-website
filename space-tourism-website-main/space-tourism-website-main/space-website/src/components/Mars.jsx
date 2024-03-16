import React, { useState, useEffect } from 'react';
import mars from '../assets/destination/image-mars.png';
import desktopbg from '../assets/destination/background-destination-desktop.jpg';
import mobilebg from '../assets/destination/background-destination-mobile.jpg';
import tabletbg from '../assets/destination/background-destination-tablet.jpg';
import Navbar from './Navbar';
import { getDestination } from '../fetcher';

const  Carousel = ()  => { 

    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 4); // Change 5 to the total number of slides
      }, 9000); // Change the interval time as needed
  
      return () => clearInterval(interval);
    }, []);
  
    return (
<>
      <div id="default-carousel" className="relative w-full
       flex justify-center bg-transparent items-center"
       data-carousel="slide">
        <div className=" h-[304px] overflow-hidden md:h-[680px]">
          {[...Array(4).keys()].map((slide, index) => (
            <div key={index} className="w-full h-full  top-0 left-0" style={{ transform: 
            `translateX(${index * 100}%)` }}>
              <img src={mars} className=" block w-[200px] h-[200px] object-cover" alt={`Slide ${index + 1}`} />

             
            </div>
          ))}
        </div>
        <div className="absolute z-30 flex justify-center space-x-6 rtl:space-x-reverse bottom-10 left-1/2 -translate-x-1/2">
          {[...Array(4).keys()].map((index) => (
            <button
              key={index}
              type="button"
              className={`w-10 h-1  ${currentSlide === index ? 'bg-[#ffffff]' : 'bg-[#000000]'}`}
              aria-current={currentSlide === index ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
      
      <div className='text-white  mt-[-14px]'>
        <h1 className=" text-white text-center text-[90px] font-[bellefair] text-400 uppercase ">Mars </h1>
        <p className="font-[barlow] text-[20px] text-center 
        leading-[32px] mx-[2rem] font-thin pt-[-20px]">
       
               Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
             the tallest planetary mountain in our solar system. It’s two and a half times 
            the size of Everest!
      
        </p>

        <hr className='my-[3rem] mx-[2.5rem] fill-[#383B4B] text-[#383B4B] h-3 '/>

        <p className="font-[bellefair] text-[50px] text-center 
        leading-[32px] mx-[2rem]  pt-[20px] uppercase">
         225 mil. km
        </p> 

        
        <p className="font-[bellefair] text-[50px] text-center 
        leading-[32px] mx-[2rem]  pt-[120px] uppercase">
          9 months
        </p> 

    </div>
</>

    );
  }

  
  

const Mars = () => {
   
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className='max-h-screen max-w-full relative flex justify-center  '>
        <div className='absolute pt-[190px]' >
        <Carousel />
        </div>
        
        <img src={desktopbg} className='hidden object-cover w-full h-full lg:block' alt="Desktop background"/>
        <img src={mobilebg} className="object-cover w-full h-full lg:hidden  " alt="Mobile background"/>
        <img src={tabletbg}  className="object-cover w-full h-full lg:hidden hidden md:block" alt="Tablet background"/>
      </div>

     
    </>
  );
};

export default Mars;
