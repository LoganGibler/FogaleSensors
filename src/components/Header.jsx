import React from "react";
import slide1 from "../images/slide2.jpg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="relative flex grow overflow-hidden">
      <img
        src={slide1}
        className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
        alt="Slide"
        style={{ zIndex: 20 }} // Adjust the zIndex of the image
      />
      <Navbar />
      <div className="absolute top-12 mt-10 left-[20%] flex items-center z-20">
        {" "}
        {/* Lower z-index for the overlay */}
        <div className="text-black bg-white opacity-90 p-4 rounded-sm shadow-xl h-[300px] w-[450px]">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
