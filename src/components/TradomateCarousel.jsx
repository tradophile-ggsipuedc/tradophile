import React from "react";
import "tailwindcss/tailwind.css";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa6"; 

import tmweb from "../assets/tradomate/tweb.jpg";
import tm1 from "../assets/tradomate/tmate1.jpg";
import tm2 from "../assets/tradomate/tmate2.jpg";
import tm3 from "../assets/tradomate/tmate3.jpg";
import tm4 from "../assets/tradomate/tmate4.jpg";
import tm5 from "../assets/tradomate/tmate5.jpg";

const images = [tmweb, tm1, tm2, tm3, tm4, tm5];

const TradomateCarousel = () => {
  return (
    <section>
      <div className="flex justify-center mb-10 md:mb-20">
        <div className="relative h-56 md:h-64 w-[90%] md:w-[75%] overflow-hidden rounded-xl md:rounded-3xl border-white border-2">
     
          <div
            className="grid h-full w-full"
            style={{ gridTemplateColumns: `repeat(${images.length}, minmax(0, 1fr))` }}
          >
            {images.map((src, i) => (
              <div key={i} className="relative overflow-hidden">
                <img
                  src={src}
                  alt={`Tradomate item ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover object-center select-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>
          
          <div className="pointer-events-none opacity-0">
            <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4">
              <button className="text-2xl md:text-5xl"><FaChevronLeft /></button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4">
              <button className="text-2xl md:text-5xl"><FaChevronRight /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradomateCarousel;
