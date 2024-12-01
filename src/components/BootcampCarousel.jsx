import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

import btc1 from "../assets/bootcamp/btc1.jpg";
import btc2 from "../assets/bootcamp/btc2.jpeg";
import btc3 from "../assets/bootcamp/btc3.jpeg";
import btc4 from "../assets/bootcamp/btc4.jpeg";
import btc5 from "../assets/bootcamp/btc5.jpeg";
import btc6 from "../assets/bootcamp/btc6.jpeg";
import btc7 from "../assets/bootcamp/btc7.jpeg";

const images = [
    btc1,
    btc2,
    btc3,
    btc4,
    btc5,
    btc6,
    btc7,
];

const BootcampCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const timer = setTimeout(goToNext, 3500);
        return () => clearTimeout(timer);
    }, [currentIndex]);

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

export default BootcampCarousel;
