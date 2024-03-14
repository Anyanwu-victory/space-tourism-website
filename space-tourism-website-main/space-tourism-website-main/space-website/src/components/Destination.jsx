import React from 'react';
import moon from '../assets/destination/image-moon.png';
import desktopbg from '../assets/destination/background-destination-desktop.jpg';
import mobilebg from '../assets/destination/background-destination-mobile.jpg';
import tabletbg from '../assets/destination/background-destination-tablet.jpg';
import Navbar from './Navbar';


const Destination = () => {
  return (
    <>
       <div>
        <Navbar/>
       </div>

      <div className='h-screen max-w-full relative'>
          <img src={moon} className='absolute w-[250px] h-[250px] ' alt="Moon picture"/>

          <img src={desktopbg} className='hidden object-cover w-full h-full lg:block' alt="Desktop background"/>
        <img src={mobilebg} className="object-cover w-full h-full lg:hidden  " alt="Mobile background"/>
        <img src={tabletbg}  className="object-cover w-full h-full lg:hidden hidden md:block" alt="Tablet background"/>
      </div>
    </>
  );
};

export default Destination;
