import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "./carousel.css";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
  <div className="carousel">
    <img src={pictures[currentIndex]} alt={`slide number ${currentIndex}`} className="img-slider"/>
    <button onClick={ handlePrev} className="img-slider-btn" style={{left: 0}}>
      <ArrowBigLeft />
    </button>
    <button onClick={handleNext} className="img-slider-btn"  style={{right: '100px'}}>
      <ArrowBigRight />
    </button>
  </div>
  )
};
export default Carousel;
