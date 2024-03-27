import React,{useState, useEffect} from 'react'
import SpaceData  from '../db/data.json'


  const  Carousel = ()  => { 

    const [currentSlide, setCurrentSlide] = useState(0);

    
   const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 4); // Change 5 to the total number of slides
  };

  const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1)); // Change 5 to the total number of slides
  };
  
  } 


export default Carousel;
