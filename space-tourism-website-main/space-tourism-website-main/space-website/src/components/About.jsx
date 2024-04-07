import React from "react";
import desktopbg from "../assets/home/background-home-desktop.jpg";
import mobilebg from "../assets/home/background-home-mobile.jpg";
import tabletbg from "../assets/home/background-home-tablet.jpg";

const About = () => {
  return (
    <div className="text-center px-[] ">
      <div className="relative w-full h-screen">
        <img
          src={desktopbg}
          className="hidden object-cover w-full h-full lg:block"
          alt="Desktop background"
        />
        <img
          src={mobilebg}
          className="object-cover w-full h-full lg:hidden "
          alt="Mobile background"
        />
        <img
          src={tabletbg}
          className="object-cover w-full h-full lg:hidden hidden md:block"
          alt="Tablet background"
        />
      </div>

      <div className="absolute mt-[-37rem]  text-white lg:flex ">
        <div className="lg:mt-[3rem] lg:pl-[9rem] lg:ml-[-2rem] lg:text-start">
          <p className="hidden lg:hidden">So, you want to travel to</p>
          <h1
            className=" text-white text-center text-[97px] font-[bellefair]
         text-400 lg:text-300 lg:text-[130px] lg:text-start lg:pl-[2rem]"
          >
            SPACE
          </h1>

          <p
            className="font-[barlow] text-[20px] text-center leading-[38px] mx-[2rem]
             font-thin pt-[15px] 
             lg:text-start lg:pr-[32rem]"
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div
          className="w-[180px] h-[180px] rounded-full bg-white 
          py-[5rem] mx-[160px] my-[2.9rem] lg:w-[250px]
           lg:h-[200px] lg:mx-0 lg:rounded-full lg:mt-[14rem] 
           lg:mr-[10rem] lg:px-[3rem]"
        >
          <h3 className="text-[#000000] text-center text-2xl font-[bellefair]">
            EXPLORE
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
