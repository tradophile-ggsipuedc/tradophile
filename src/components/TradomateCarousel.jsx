import React, { useState, useEffect, useCallback } from "react";
import "tailwindcss/tailwind.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

import tm1 from "../assets/tradomate/tmate1.jpg";
import tm2 from "../assets/tradomate/tmate2.jpg";
import tm3 from "../assets/tradomate/tmate3.jpg";
import tm4 from "../assets/tradomate/tmate4.jpg";
import tm5 from "../assets/tradomate/tmate5.jpg";
import tmposter from "../assets/tradomate/tmate_poster.jpg";

const images = [tm1, tm2, tm3, tm4, tm5];

const TradomateCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(i => (i === 0 ? images.length - 1 : i - 1));
  };


  const goToNext = useCallback(() => {
    setCurrentIndex(i => (i === images.length - 1 ? 0 : i + 1));
  }, []);

  useEffect(() => {
    const timer = setTimeout(goToNext, 3500);
    return () => clearTimeout(timer);
  }, [goToNext]); 

  return (
    <section>
      <div className="flex justify-center mb-10 md:mb-20">
        <div className="relative h-full w-[90%] md:w-[75%] overflow-hidden rounded-xl md:rounded-3xl border-white border-2">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-contain"
              />
            ))}
          </div>

          <div className="absolute top-1/2 transform -translate-y-1/2 left-2 sm:left-4">
            <button onClick={goToPrevious} className="text-2xl md:text-5xl">
              <FaChevronLeft />
            </button>
          </div>

          <div className="absolute top-1/2 transform -translate-y-1/2 right-2 sm:right-4">
            <button onClick={goToNext} className="text-2xl md:text-5xl">
              <FaChevronRight />
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === index ? "bg-cyan-500 scale-110" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradomateCarousel;
