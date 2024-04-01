import React,{useState,useEffect} from 'react';
import engineer from '../assets/crew/image-anousheh-ansari.png';
import Navbar from "./Navbar";
import desktopbg from "../assets/crew/background-crew-desktop.jpg";
import mobilebg from "../assets/crew/background-crew-mobile.jpg";
import tabletbg from "../assets/crew/background-crew-tablet.jpg";


const Engineer = () => {
    const [currentSlide, setCurrentSlide] = useState(3);
    
    return (
      <>
        <div className=" text-white overflow-hidden">
          <div>
            <Navbar />
          </div>
  
          <div className="h-screen max-w-full relative flex justify-center ">
            <div className="absolute mt-[7rem] text-center lg:flex">
              <div className="mx-[8.9rem] md:mt-[3.9rem] lg:hidden md:hidden">
                <img src={engineer} className=" h-[19rem] " alt="Mark" />
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
                  flight engineer
                </h5>
                <h1 className="font-[bellefair] uppercase text-[34px] lg:ml-[4.5rem]">
                   anousheh ansari
                </h1>
                <p className="font-[barlow] text-[#D0D6F9] text-[20px] leading-[30px] 
                px-[42px] mt-[8px] lg:mt-[20px] lg:text-balance lg:ml-[2rem] lg:overflow-hidden lg:w-[626px] ">
                      Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
  Ansari was the fourth self-funded space tourist, the first self-funded woman to 
  fly to the ISS, and the first Iranian in space. 
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
                <img src={engineer} className=" h-[23rem] lg:h-[37rem] lg:w-[48rem] justify-center px-[4rem]" alt="Douglas" />
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
}

export default Engineer