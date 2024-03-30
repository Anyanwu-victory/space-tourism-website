import React,{useState,useEffect} from "react";
import Navbar from "./Navbar";
import desktopbg from "../assets/crew/background-crew-desktop.jpg";
import mobilebg from "../assets/crew/background-crew-mobile.jpg";
import tabletbg from "../assets/crew/background-crew-tablet.jpg";
import douglas from "../assets/crew/image-douglas-hurley.png";

const Commander = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    
  return (
    <>
      <div className=" text-white overflow-hidden">
        <div>
          <Navbar />
        </div>

        <div className="h-screen max-w-full relative flex justify-center ">
          <div className="absolute mt-[7rem] text-center lg:flex">
            <div className="mx-[8.9rem] md:mt-[3.9rem] lg:hidden md:hidden">
              <img src={douglas} className=" h-[19rem] " alt="Douglas" />
            </div>
            <hr className="mx-[1.5rem] fill-[#D0D6F9] mb-[2rem]" />

            <div className="lg:mt-[9rem] lg:text-start ">
                {/* circles for mobile */}
              <div className="pb-[3rem] mt-[3rem] lg:ml-[3rem]">
                     <div className="absolute z-30 flex justify-center space-x-6
                      rtl:space-x-reverse 
                      left-1/2 -translate-x-1/2 mb-[3rem] lg:hidden ">
                     {[...Array(4).keys()].map((index) => (
                 <button
                    key={index}
                     type="button"
                     className={`w-3 h-3 rounded-full  ${currentSlide === index ? 'bg-[#000000] w-4 h-4' : 'bg-[#E5E6E8]'}`}
                    aria-current={currentSlide === index ? 'true' : 'false'}
                    aria-label={`Slide ${index + 1}`}
                  />
                    ))}
                  </div>
              </div>

              <h5 className="text-[#96969f] text-[23px] font-[20] uppercase font-[bellefair] lg:ml-[4.5rem] ">
                commander
              </h5>
              <h1 className="font-[bellefair] uppercase text-[34px] lg:ml-[4.5rem]">
                    Douglas hurley
              </h1>
              <p className="font-[barlow] text-[#D0D6F9] text-[20px] leading-[30px] 
              px-[42px] mt-[8px] lg:mt-[20px] lg:text-balance lg:ml-[2rem] lg:overflow-hidden lg:w-[626px] ">
                
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </p>

              <div className="pb-[3rem] mt-[5rem]   hidden lg:block">
                     <div className="absolute z-30 flex   space-x-6
                      rtl:space-x-reverse 
                      left-1/2 -translate-x-1/2 mb-[3rem]   lg:block">
                     {[...Array(4).keys()].map((index) => (
                 <button
                    key={index}
                     type="button"
                     className={`w-3 h-3 rounded-full lg:ml-[-40rem]  ${currentSlide === index ? 'bg-[#E5E6E8] w-3 h-3' : 'bg-[#979797]'}`}
                    aria-current={currentSlide === index ? 'true' : 'false'}
                    aria-label={`Slide ${index + 1}`}
                  />
                    ))}
                  </div>
              </div>
            </div>
               
            <div className="md:mx-[8rem] md:mt-[3.9rem] hidden lg:mt-[4.9rem] lg:block md:block">
              <img src={douglas} className=" h-[23rem] lg:h-[37rem] lg:w-[48rem] justify-center px-[4rem]" alt="Douglas" />
            </div>
          </div>

          <img
            src={desktopbg}
            className="hidden object-cover w-full h-full lg:block"
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
};

export default Commander;
