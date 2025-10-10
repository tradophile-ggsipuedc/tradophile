import React, { useState, useEffect, useCallback } from "react";
import "tailwindcss/tailwind.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

import orn1 from "../assets/orientation/orn1.png";
import orn2 from "../assets/orientation/orn2.jpg";
import orn3 from "../assets/orientation/orn3.jpg";
import orn4 from "../assets/orientation/orn4.jpg";
import orn5 from "../assets/orientation/orn5.jpg";
import orn6 from "../assets/orientation/orn6.jpg";

const images = [
    orn1,
    orn2,
    orn3,
    orn4,
    orn5,
    orn6,
];

const OrientationCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex]);

    useEffect(() => {
        const timer = setTimeout(goToNext, 3500);
        return () => clearTimeout(timer);
    }, [useCallback]);

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
                    {/* Left Arrow */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-2 sm:left-4">
                        <button onClick={goToPrevious} className="text-2xl md:text-5xl"> <FaChevronLeft/> </button>
                    </div>
                    {/* Right Arrow */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-2 sm:right-4">
                    <button onClick={goToNext} className="text-2xl md:text-5xl"> <FaChevronRight/> </button>
                    </div>
                    {/* Navigation Dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex === index ? "bg-cyan-500 scale-110" : "bg-gray-300"
                                    }`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrientationCarousel;
