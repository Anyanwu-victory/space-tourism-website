import React, { useState } from "react";
import star from '../assets/svgs/blackstar.svg';
import desktopbg from '../assets/home/background-home-desktop.jpg';
import mobilebg from '../assets/home/background-home-mobile.jpg';
import tabletbg  from '../assets/home/background-home-tablet.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <nav className="absolute top-0 left-0 w-full bg-transparent border-gray-200 text-white z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-7">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={star}
              className="h-8"
              alt="star"
            />
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-white"
            aria-controls="navbar-hamburger"
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
                <g fill="#D0D6F9" fill-rule="evenodd">
                  <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/>
                  <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/>
                </g>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                <g fill="#D0D6F9" fill-rule="evenodd">
                  <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/>
                </g>
              </svg>


            )}
          </button>
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto`}
            id="navbar-hamburger"
          >
            {/* Your menu items */}
          </div>
        </div>
      </nav>

      <div className='relative w-full h-screen'>
        <img src={desktopbg} className='hidden object-cover w-full h-full lg:block' alt="Desktop background"/>
        <img src={mobilebg} className="object-cover w-full h-full lg:hidden " alt="Mobile background"/>
        <img src={tabletbg}  className="object-cover w-full h-full lg:hidden hidden md:block" alt="Tablet background"/>
      </div>
    </div>
  );
};

export default Navbar;
