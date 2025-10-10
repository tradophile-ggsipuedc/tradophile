import React, { useState, useEffect, useCallback, useRef } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState(null);

  const containerRef = useRef(null);
  const imgRefs = useRef([]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(i => (i === 0 ? images.length - 1 : i - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex(i => (i === images.length - 1 ? 0 : i + 1));
  }, []);

  const recalcHeight = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const width = el.clientWidth || 0;
    if (!width) return;

    let minH = Infinity;
    let haveAllSizes = true;

    for (const img of imgRefs.current) {
      if (!img || !img.naturalWidth || !img.naturalHeight) {
        haveAllSizes = false;
        break;
      }
      const displayedH = img.naturalHeight * (width / img.naturalWidth);
      if (displayedH < minH) minH = displayedH;
    }

    if (haveAllSizes && isFinite(minH)) {
      setContainerHeight(Math.round(minH)); 
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(goToNext, 3500);
    return () => clearTimeout(timer);
  }, [goToNext]);

  useEffect(() => {
    const onResize = () => recalcHeight();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [recalcHeight]);

  const handleImageLoad = useCallback(() => {
    recalcHeight();
  }, [recalcHeight]);

  return (
    <section>
      <div className="flex justify-center mb-10 md:mb-20">
        <div
          ref={containerRef}
          className="relative w-[90%] md:w-[75%] overflow-hidden rounded-xl md:rounded-3xl border-white border-2"
          style={containerHeight ? { height: `${containerHeight}px` } : {}}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                ref={(el) => (imgRefs.current[index] = el)}
                onLoad={handleImageLoad}
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover object-center flex-shrink-0"
                draggable={false}
              />
            ))}
          </div>

          {/* Left Arrow */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4">
            <button onClick={goToPrevious} className="text-2xl md:text-5xl">
              <FaChevronLeft />
            </button>
          </div>

          {/* Right Arrow */}
          <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4">
            <button onClick={goToNext} className="text-2xl md:text-5xl">
              <FaChevronRight />
            </button>
          </div>

          {/* Nav Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
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
