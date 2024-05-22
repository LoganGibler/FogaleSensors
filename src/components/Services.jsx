import React from "react";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import { FaBriefcaseMedical } from "react-icons/fa";
import { GiEggDefense } from "react-icons/gi";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col w-full text-black justify-center mt-10 pb-10">
      <div
        ref={ref1}
        className={`flex transition-transform duration-700 flex-col md:flex-row px-2 ${
          inView1
            ? "transform translate-x-0 opacity-100"
            : "transform translate-x-[300px] opacity-0" // Adjusted translation distance
        }`}
      >
        <img
          src={slide1}
          className="shadow-lg md:w-[50%] rounded-md px-0"
          alt="Slide 1"
        />
        <div className="flex flex-col px-2 justify-center md:px-6">
          <p className="font-semibold flex mt-2 text-lg">
            Medical <FaBriefcaseMedical className="ml-2 mt-[3px]" />
          </p>
          <p className="mt-1">
            Through design and commercialization of its products, FOGALE Sensors
            has been facilitating human and machine interactions for the medical
            industry. FOGALE Sensors mission is to transform medical staff and
            patient experience in surgical rooms by bringing ergonomic solutions
            and improving safety.
          </p>
        </div>
      </div>

      <div
        ref={ref2}
        className={`flex flex-col transition-transform duration-700 md:flex-row-reverse px-2 mt-10 md:mt-0 ${
          inView2
            ? "transform translate-x-0 opacity-100"
            : "transform -translate-x-[300px] opacity-0"
        }`}
      >
        <img
          src={slide2}
          className="shadow-lg md:w-[50%] rounded-md px-0"
          alt="Slide 2"
        />
        <div className="flex flex-col px-2 md:px-6 justify-center">
          <p className="font-semibold mt-2 text-lg flex">
            Instrumentation <GiEggDefense className="ml-2 text-xl mt-1" />
          </p>
          <p className="mt-1">
            Recognized for its expertise in metrological solutions, FOGALE
            Sensors has been historically serving the industrial, scientific
            research, nuclear and defense markets with unique products and
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
