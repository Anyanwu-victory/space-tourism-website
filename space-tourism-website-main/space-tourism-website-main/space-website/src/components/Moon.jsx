import React, { useState, useEffect } from 'react';
import moon from '../assets/destination/image-moon.png';
import desktopbg from '../assets/destination/background-destination-desktop.jpg';
import mobilebg from '../assets/destination/background-destination-mobile.jpg';
import tabletbg from '../assets/destination/background-destination-tablet.jpg';
import Navbar from './Navbar';
import SpaceData from '../db/data.json';



const  Carousel = ()  => { 
  
function mapDataToArray(data) {
  try {
    return Object.keys(data).map((key) => data[key]);
  } catch (error) {
    console.error("An error occurred while mapping data:", error);
    return [];
  }
}

    const Feed = mapDataToArray(SpaceData);
    const [currentSlide, setCurrentSlide] = useState(0);
   
    return (
<>
      <div id="default-carousel" className="relative w-full flex justify-center bg-transparent items-center"
       data-carousel="slide">
        <div className=" h-[304px] overflow-hidden md:h-[680px]">
          {Feed.map((slide, index) => (
            <div key={index} className="w-full h-full  top-0 left-0" style={{ transform: 
            `translateX(${index * 100}%)` }}>
              <img src={moon} className="
               block w-[200px] h-[200px] object-cover lg:w-[400px] lg:h-[400px] lg:ml-[7rem] lg:mt-[3rem] lg:mr-[9rem]" alt={slide[0].name} />             
            </div>
          ))}
        </div>
        <div className="absolute z-30 flex justify-center space-x-6 rtl:space-x-reverse bottom-10
         left-1/2 -translate-x-1/2 lg:hidden ">
          {[...Array(4).keys()].map((index) => (
            <button
              key={index}
              type="button"
              className={`w-10 h-1  ${currentSlide === index ? 'bg-[#000000]' : 'bg-[#E5E6E8]'}`}
              aria-current={currentSlide === index ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
      
      <div className='text-white  mt-[-10px] lg:text-start lg:mt-[1rem] '>

      <div className=" z-30  justify-center space-x-6 rtl:space-x-reverse bottom-10
         left-1/2 -translate-x-1/2 lg:ml-[22rem] lg:mb-[1rem] hidden lg:block">
          {[...Array(4).keys()].map((index) => (
            <button
              key={index}
              type="button"
              className={`w-10 h-1   ${currentSlide === index ? 'bg-[#000000]' : 'bg-[#E5E6E8]'}`}
              aria-current={currentSlide === index ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      
        <h1 className=" text-white text-center text-[90px] font-[bellefair] 
        text-400 uppercase  lg:text-start lg:pl-[5rem]">MOON </h1>
        <p className="font-[barlow] text-[2,kl0px] text-center 
        leading-[32px] mx-[2rem] font-thin pt-[-20px]
         lg:text-[22px] lg:text-start lg:mx-[5rem] ">
        See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
        regain perspective and come back refreshed. While you’re there, take in some history 
        by visiting the Luna 2 and Apollo 11 landing sites.
        </p>

        <hr className='my-[3rem] mx-[2.5rem] fill-[#383B4B] text-[#383B4B] 
        h-3 lg:text-start lg:mx-[5rem]'/>
      
       <div className='lg:text-start lg:flex lg:pl-[3rem]'> 
         
          <p className="font-[bellefair] text-[50px] text-center 
           leading-[32px] mx-[2rem]  pt-[20px] uppercase">
          384,400 KM
          </p> 

        
          <p className="font-[bellefair] text-[50px] text-center 
          leading-[32px] mx-[2rem]  pt-[100px] uppercase lg:pt-[17px]">
          3  days
          </p> 
        </div>
      </div>
</>

    );
  }

  
  

const Moon = ({data}) => {
   
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className='max-h-screen max-w-full relative flex justify-center  '>
        <div className='absolute pt-[190px] lg:flex' >
        <Carousel className=''/>
        </div>
        
        <img src={desktopbg} className='hidden object-cover w-full h-full lg:block' alt="Desktop background"/>
        <img src={mobilebg} className="object-cover w-full h-full lg:hidden  " alt="Mobile background"/>
        <img src={tabletbg}  className="object-cover w-full h-full lg:hidden hidden md:block" alt="Tablet background"/>
      </div>

     
    </>
  );
};

export default Moon;
