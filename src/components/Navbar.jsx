import React, { useState } from "react";
import star from '../assets/svgs/blackstar.svg';
import desktopbg from '../assets/home/background-home-desktop.jpg';
import mobilebg from '../assets/home/background-home-mobile.jpg';
import tabletbg from '../assets/home/background-home-tablet.jpg';
import { Link , useNavigate} from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDestinationOpen, setIsDestinationOpen] = useState(false);
  const [isCrewOpen, setIsCrewOpen] = useState(false);
  const [isTechnologyOpen, setIsTechnologyOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDestination = () => {
    setIsDestinationOpen(!isDestinationOpen);
  };

  const toggleCrew = () => {
    setIsCrewOpen(!isCrewOpen);
  };

  const toggleTechnology = () => {
    setIsTechnologyOpen(!isTechnologyOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <nav className="absolute top-0 left-0 w-full bg-transparent border-gray-200 text-white z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-7">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={star} className="h-8" alt="star" />
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
                  <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                  <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                </g>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                <g fill="#D0D6F9" fillRule="evenodd">
                  <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                </g>
              </svg>
            )}
          </button>
          <div
            className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto bg-transparent `}
            id="navbar-hamburger"
          >
            <ul className="font-medium bg-[rgba(0,0,0,0.6)] flex ml-[10rem]
             h-[50rem] flex-col p-4 items-center md:p-0 mt-4 md:h-[3rem] md:bg-[rgba(0,0,0,0)]
             md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 
             lg:bg-[rgba(246,242,242,0.14)] lg:w-[47rem] lg:h-[5rem] lg:mx-[-9rem] lg:py-[1.5rem] lg:px-[5rem]">
                {/* Home page  */}
             <div className=" lg:hover:border-b-4 border-spacing-y-[20px] border-b-white lg:h-[inherit] lg:pt-[1.8rem]">  
               <li className="">
                  <a
                  href="#"
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0
                   lg:text-white uppercase"
                  aria-current="page"
                >
                  <Link to='/'>00 Home</Link>
                  </a>
                 </li>
              </div>


              {/* Destination Page ends here*/}
              <div className="lg:hover:border-b-4 border-spacing-y-[20px] border-b-white lg:h-[inherit] lg:pt-[1.8rem]"
              onMouseEnter={toggleDestination}
              onMouseLeave={toggleDestination}

              >
                
              <li
                
                className="relative "
              >
                <a
                  href="#"
                  className="block py-2 px-3 text-white uppercase rounded md:bg-transparent md:text-white md:p-0"
                >
                  01 Destination
                </a>
                {/* Dropdown */}
                {isDestinationOpen && (
                  <div className="absolute z-10 text-black top-full left-0 w-[130%]
                   md:left-auto md:top-auto md:w-auto bg-black 
                   lg:bg-transparent rounded-lg shadow-lg mt-1 md:mt-5 lg:w-[150%]">
                    <ul className="py-2">
                      <li className="px-4 py-2">
                        <a href="#" className="text-white">
                          Pick a Location
                        </a>
                      </li>
                      <hr className="pb-3 mt-2 mx-2" />
                      <li className="px-4 py-2 hover:bg-[#f9d1d123]">
                        <a href="#" className="text-white">
                          <Link to='/moon' >Moon </Link>
                        </a>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#f9d1d123]">
                        <a href="#" className="text-white">
                         <Link to='/mars'>Mars</Link>
                        </a>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#f9d1d123]">
                        <a href="#" className="text-white">
                         <Link to='/europa' >Europa</Link>
                        </a>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#f9d1d123]">
                        <a href="#" className="text-white">
                          <Link to='/titan'>Titan</Link>
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              </div>
              {/* Destination Page Ends here  */}

              {/* crew page begins here */}
              <div className="lg:hover:border-b-4 border-spacing-y-[20px]
               border-b-white lg:h-[inherit] lg:pt-[1.8rem]"
               onMouseEnter={toggleCrew}
               onMouseLeave={toggleCrew}
               >
              <li
              
              className="relative">
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded
                   md:bg-transparent uppercase md:text-white md:p-0 "
                >
                  02 Crew
                </a>
                {/* DropDown */}
                {isCrewOpen && (
                  <div className="absolute z-10 text-white top-full left-0 w-[200%]
                   md:left-auto md:top-auto md:w-auto bg-[#000000]
                   lg:bg-transparent rounded-lg shadow-xl mt-1 md:mt-5 lg:w-[350%]">
                    <ul className="py-2">
                      <li className="px-4 py-2">
                        <a href="#" className="text-white">
                          Meet Your Crew Members
                        </a>
                      </li>
                      <hr className="pb-3 mt-2 mx-2" />
                      <li className="px-4 py-2 hover:bg-[#f9d1d123]">
                        <a href="#" className="text-white">
                          <Link to='/commander' >Commander </Link>
                        </a>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#f9d1d123]">
                        <a href="#" className="text-white">
                         <Link to='/specialist'>Specialist</Link>
                        </a>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#f9d1d123]">
                        <a href="#" className="text-white">
                         <Link to='/pliot' >Pliot</Link>
                        </a>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#f9d1d123]">
                        <a href="#" className="text-white">
                          <Link to='/engineer'>Flight Engineer</Link>
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              </div>
              {/* Crew page Ends here  */}
              
              {/* Technology Begins Here */}
              <div className="lg:hover:border-b-4 border-spacing-y-[20px]
               border-b-white lg:h-[inherit] lg:pt-[1.8rem]"
               onMouseEnter={toggleTechnology}
               onMouseLeave={toggleTechnology}
               > 
              <li
               className="relative"
              >
                <a
                 
                  href="#"
                  className="block py-2 px-3 uppercase text-white rounded md:bg-transparent md:text-white
                   md:p-0 "
                >
                  03 Technology
                </a>
                {/* Dropdrow */}
                {isTechnologyOpen && (
                  <div className="absolute z-10 text-white top-full left-0 w-[130%]
                   md:left-auto md:top-auto md:w-auto
                   bg-[#000000] lg:bg-transparent rounded-lg shadow-xl mt-1 md:mt-5 lg:w-[150%]">
                    <ul className="py-2">
                      <li className="px-4 py-2">
                        <a href="#" className="text-white">
                          Technology
                        </a>
                      </li>
                      <hr className="pb-3 mt-2 mx-2" />
                      <li className="px-4 py-2 hover:bg-[#a4949423]">
                        <a href="#" className="text-white">
                          <Link to='/vehicle' >Space Vehicle</Link>
                        </a>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#f9d1d123]">
                        <a href="#" className="text-white">
                         <Link to='/port'>SpacePort 101</Link>
                        </a>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#f9d1d123] ">
                        <a href="#" className="text-white">
                         <Link to='/Capsule' >Space Capsule </Link>
                        </a>
                      </li>
                     
                    </ul>
                  </div>
                )}
              </li>
              </div> 

              {/* Technology Page Ends Here  */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
