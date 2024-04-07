import React,{useState,useEffect} from 'react';
import vehicle from '../assets/technology/image-space-capsule-landscape.jpg';
import vehicle1 from '../assets/technology/image-space-capsule-portrait.jpg';
import Navbar from "./Navbar";
import desktopbg from "../assets/technology/background-technology-desktop.jpg";
import mobilebg from "../assets/technology/background-technology-mobile.jpg";
import tabletbg from "../assets/technology/background-technology-tablet.jpg";

const Capsule = () => {
    const [currentSlide, setCurrentSlide] = useState(2);
    
    return (
      <>
        <div className=" text-white overflow-hidden">
          <div>
            <Navbar />
          </div>
  
          <div className="h-screen max-w-full relative flex justify-center ">
            <div className="absolute mt-[7rem] text-center lg:flex">
              <div className=" md:mt-[3.9rem] lg:hidden md:hidden">
                <img src={vehicle} className=" h-[17rem] w-[100%]  object-fill " alt="launch vehicle" />
              </div>
  
              <div className="lg:mt-[9rem] lg:text-start ">
                  {/* circles for mobile */}
                <div className="pb-[6rem] mt-[2rem]">
                       <div className="absolute z-30 flex justify-center space-x-6
                        rtl:space-x-reverse 
                        left-1/2 -translate-x-1/2 mb-[3rem] lg:hidden ">
                       {[...Array(3).keys()].map((index) => (
                   <button
                      key={index}
                       type="button"
                       className={`w-12 h-12 rounded-full  ${currentSlide === index ? 'bg-[#ffffff]  text-black' : 'bg-[transparent] border border-white '}`}
                      aria-current={currentSlide === index ? 'true' : 'false'}
                      value={index}
                      aria-label={`Slide ${index + 1}`}
                    > {index + 1}</button>
                      ))}
                    </div>
                </div>
                {/* for Laptop design - div */}
                <div className='lg:flex'>
                  <div className='lg:-mt-[4rem] lg:w-[756px] lg:ml-[4rem]'>
                     
                <h1 className="mb-[1rem] font-[bellefair] uppercase text-[34px] lg:ml-[13rem]">
                   Space Capsule
                </h1>
                <p className="font-[barlow] text-[#D0D6F9] text-[20px] leading-[30px] 
                px-[42px] mt-[8px] lg:mt-[20px] lg:text-balance
                lg:ml-[10rem] lg:justify-center lg:overflow-hidden  ">
  
  A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
  you'll spend your time during the flight. It includes a space gym, cinema, 
  and plenty of other activities to keep you entertained.
                </p>
                  </div>
                 
                 {/* circles laptop */}
                 <div className="pb-[3rem] mt-[5rem] hidden lg:block">
                     <div className="absolute z-30 flex flex-col space-y-6 
                     rtl:space-x-reverse left-1/2 -translate-x-1/2 mb-[3rem] 
                     lg:translate-y-1/2 lg:space-y-6 lg:-mt-[16rem] lg:-ml-[39rem] lg:rtl:space-y-reverse">
                      {[...Array(3).keys()].map((index) => (
                        <button
                          key={index}
                          type="button"
                          className={`w-16 h-16 text-2xl rounded-full ${currentSlide === index ? 'bg-[#E5E6E8] text-black border border-white' : 'bg-transparent text-white border border-white'}`}
                          aria-current={currentSlide === index ? 'true' : 'false'}
                          value={index}
                          aria-label={`Slide ${index + 1}`}
                     > {index + 1} </button>
                        ))}
                     </div>
                  </div>

                {/* Laptop circles end here  */}

                </div>
              </div>
                 
              <div className=" md:mt-[3.9rem] hidden lg:mt-[4rem] lg:block md:block ">
                <img src={vehicle1} className=" h-[23rem] lg:h-[30rem] 
                lg:w-[40rem] lg:ml-[5rem] object-cover justify-center" alt="Douglas" />
              </div>
            </div>
  
            <img
              src={desktopbg}
              className="hidden object-cover w-full h-full lg:block lg:object-fill"
              alt="Desktop background"
            />
            <img
              src={mobilebg}
              className="object-cover w-full h-full lg:hidden  "
              alt="Mobile background"
            />
            <img
              src={tabletbg}
              className="object-cover w-full h-full lg:hidden hidden md:block"
              alt="Tablet background"
            />
          </div>
        </div>
      </>
    );
}

export default Capsule;