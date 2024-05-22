import React, { useEffect, useState } from "react";
import slide1 from "../images/slide2.jpg";
import Navbar from "./Navbar";
import { useInView } from "react-intersection-observer";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    // Trigger the fade-in effect after the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`relative flex grow transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex overflow-hidden min-h-[370px] w-full">
        <img
          src={slide1}
          className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
          alt="Slide"
          style={{ zIndex: 20 }} // Adjust the zIndex of the image
        />
      </div>

      <Navbar />
      <div
        ref={ref}
        className={`absolute md:top-[20%] top-[5%] mt-10 md:left-[13%] flex items-center z-20 transition-transform duration-700 ${
          inView
            ? "transform translate-x-0 opacity-100"
            : "transform translate-x-[300px] opacity-0"
        }`}
      >
        <div className="text-black mt-4 md:mt-0 bg-white opacity-100 md:opacity-95 p-4 rounded-sm shadow-xl">
          <div className="flex flex-col z-20 md:max-w-[500px] text-sm">
            {/* <div className="hidden md:flex text-xl">
              <p className="font-bold">
                <span className="text-blue-700 text-lg">F</span>
                <span className="text-black">ogale</span>
              </p>
              <p className="ml-1 text-slate-500 font-bold">
                <span className="text-orange-500 text-lg">S</span>
                <span className="text-black">ensors</span>
              </p>
            </div> */}
            <div className="mt-2 md:mt-6 font-semibold text-lg">
              <p>Make tomorrow's world possible... </p>
              <div className="flex justify-end">
                <p className="border-b-2 border-orange-500 pb-1">
                  ...through advanced sensing solutions.
                </p>
              </div>
            </div>
            <p className="mt-3 pb-1 italic text-slate-400">Our Mission</p>
            <p className="mt-1">
              Keep expanding our world-renowned expertise in capacitive and
              inductive metrology to further invent and develop state-of-the-art
              sensors, products, and systems.
            </p>

            <div className="flex mt-9 justify-center">
              <button className="relative overflow-hidden bg-blue-500 text-white px-3 mx-0.5 rounded-sm py-1 group">
                <span className="absolute inset-0 w-full h-full bg-orange-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10">Contact</span>
              </button>
              <button className="relative overflow-hidden bg-blue-500 text-white px-3 mx-0.5 rounded-sm py-0.5 group">
                <span className="absolute inset-0 w-full h-full bg-orange-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10">Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
