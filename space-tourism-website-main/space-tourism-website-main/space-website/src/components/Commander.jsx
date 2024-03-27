import React from "react";
import Navbar from "./Navbar";
import desktopbg from "../assets/crew/background-crew-desktop.jpg";
import mobilebg from "../assets/crew/background-crew-mobile.jpg";
import tabletbg from "../assets/crew/background-crew-tablet.jpg";

const Commander = () => {
  return (
    <>
      <div className=" text-white">
        <div>
          <Navbar />
        </div>        

        
      <div className="h-screen max-w-full relative flex justify-center">

           <div className="absolute m-[10rem]">
             <h5 className="text-white text-[30px] font-[20] uppercase font-[bellefair]">commander</h5>
             <h1> Douglas hurley </h1>

        

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
