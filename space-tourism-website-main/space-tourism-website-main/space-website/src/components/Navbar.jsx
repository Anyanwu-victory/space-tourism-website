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
                <g fill="#D0D6F9" fillRule="evenodd">
                  <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/>
                  <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/>
                </g>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                <g fill="#D0D6F9" fillRule="evenodd">
                  <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/>
                </g>
              </svg>
            )}
          </button>
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto bg-transparent `}
            id="navbar-hamburger"
          >
            {/* Your menu items */}
            <ul className="font-medium flex w- flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white lg:bg-[#f6f2f223] lg:w-[47rem] lg:mx-[-9rem] lg:py-[1.5rem] lg:px-[5rem]">
              <li className="">
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 lg:hover:border-b-4 border-spacing-y-[20px] border-b-white    "
                  aria-current="page"
                >
                  00 Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0  lg:hover:border-b-4 lg:hover:border-b-white"
                >
                  01 Destination
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0  lg:hover:border-b-4 lg:hover:border-b-white "
                >
                  02 Crew
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0  lg:hover:border-b-4 lg:hover:border-b-white "
                >
                  03 Technology
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0  lg:hover:border-b-4 lg:hover:border-b-white"
                >
                  <span className="">04</span> Shared
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;
