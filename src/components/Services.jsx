import React, { useState } from "react";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slide4.jpg";
import { FaArrowAltCircleUp, FaBriefcaseMedical } from "react-icons/fa";
import { GiEggDefense } from "react-icons/gi";
import { useInView } from "react-intersection-observer";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi2";
import { Transition } from "@headlessui/react";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Services = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [activeSlide, setActiveSlide] = useState(null);

  return (
    <div className="flex flex-col w-full text-black justify-center mt-5 pb-10 drop-shadow-xl">
      <div className="flex justify-center">
        <div
          ref={ref4}
          className={`flex flex-col max-w-[1100px] transition-transform duration-700 md:flex-row px-2 mt-6 md:mt-0 " ${
            inView4
              ? "transform translate-x-0 opacity-100"
              : "transform -translate-x-[300px] opacity-0"
          }`}
        >
          <img
            src={slide4}
            className="shadow-lg md:w-[50%] rounded-md px-0"
            alt="Slide 2"
          />
          <div className="flex flex-col px-2 md:px-6 justify-center">
            <p className="font-semibold mt-2 text-lg flex">
              Innovation{" "}
              <HiLightBulb className="ml-2 text-xl mt-1 text-yellow-400" />
            </p>
            <p className="mt-1">
              FOGALE Sensors is powered by a team with a strong value creation
              DNA.
            </p>
            <div className="flex justify-end text-orange-500 pr-3 mt-3">
              {activeSlide !== 1 ? (
                <p
                  className="flex text-sm hover:cursor-pointer"
                  onClick={() => {
                    setActiveSlide(1);
                  }}
                >
                  View More{" "}
                  <FaArrowAltCircleRight className="ml-1 text-base mt-[1px] text-orange-500" />
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center drop-shadow-xl">
        {activeSlide === 1 ? (
          <Transition
            appear={true}
            show={activeSlide}
            enter="transition-all duration-650 ease-out"
            enterFrom="opacity-0 transform scale-y-0"
            enterTo="opacity-100 transform scale-y-100"
            leave="transition-all duration-700 ease-in"
            leaveFrom="opacity-100 transform scale-y-100"
            leaveTo="opacity-0 transform scale-y-0"
          >
            <div className="flex flex-col px-2 mt-3 md:mt-[4rem] text-[14px] pb-10 max-w-[1000px]">
              <div className="flex flex-col px-5">
                {/* <BiSolidRightArrow className="text-sm mt-1 mr-2 text-blue-500" /> */}
                <p>
                  FOGALE Sensors is identified by a strong spirit of innovation.
                </p>
                <p className="mt-10">
                  A unique technical know-how and state-of-the-art products and
                  systems protected by IP give the company a significant
                  technological advance on its market segments.
                </p>
                <p className="mt-10">
                  The Engineering department, at the heart of the companies
                  strategy, conceptualizes and develop ideas for new products
                  dedicated to growing or emerging markets such as:
                </p>
                <div className="flex flex-col">
                  <div className="flex flex-col justify-center mt-10 px-2 md:px-10">
                    <div className="flex">
                      {" "}
                      <BiSolidRightArrow className="flex-shrink-0 text-xs mt-1 mr-2 text-blue-500" />
                      <p>
                        Liquid Hydrogen for new transportation energy vector
                      </p>
                    </div>
                    <div className="flex mt-10">
                      {" "}
                      <BiSolidRightArrow className="flex-shrink-0 text-xs mt-1 mr-2 text-blue-500" />
                      <p>Robotics.</p>
                    </div>
                    <div className="flex justify-end">
                      <p
                        className="flex text-orange-500 mt-10 hover:cursor-pointer"
                        onClick={() => {
                          setActiveSlide(null);
                        }}
                      >
                        View less{" "}
                        <FaArrowAltCircleUp className="ml-1 mt-[2px] text-base" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        ) : null}
      </div>

      <div className="flex justify-center">
        <div
          ref={ref1}
          className={`flex transition-transform duration-700 md:mt-10 mt-10 flex-col md:flex-row-reverse px-2 max-w-[1100px] ${
            inView1
              ? "transform translate-x-0 opacity-100"
              : "transform translate-x-[300px] opacity-0"
          }`}
        >
          <img
            src={slide1}
            className="shadow-lg md:w-[50%] rounded-md px-0"
            alt="Slide 1"
          />
          <div className="flex flex-col px-2 justify-center md:px-6">
            <p className="font-semibold flex mt-2 text-lg">
              Medical{" "}
              <FaBriefcaseMedical className="ml-2 mt-[3px] text-red-600" />
            </p>
            <p className="mt-1">
              Through design and commercialization of its products, FOGALE
              Sensors has been facilitating human and machine interactions for
              the medical industry. FOGALE Sensors mission is to transform
              medical staff and patient experience in surgical rooms by bringing
              ergonomic solutions and improving safety.
            </p>
            <div className="flex justify-end mt-4">
              {activeSlide !== 2 ? (
                <p
                  className="flex text-sm hover:cursor-pointer text-orange-500"
                  onClick={() => {
                    setActiveSlide(2);
                  }}
                >
                  View More{" "}
                  <FaArrowAltCircleRight className="ml-1 text-base mt-[1px] text-orange-500" />
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center drop-shadow-xl">
        {activeSlide === 2 ? (
          <Transition
            appear={true}
            show={activeSlide}
            enter="transition-all duration-650 ease-out"
            enterFrom="opacity-0 transform scale-y-0"
            enterTo="opacity-100 transform scale-y-100"
            leave="transition-all duration-700 ease-in"
            leaveFrom="opacity-100 transform scale-y-100"
            leaveTo="opacity-0 transform scale-y-0"
          >
            <div className="flex flex-col px-2 mt-3 md:mt-[4rem] text-[14px] pb-10 max-w-[1000px]">
              <div className="flex flex-col px-5">
                {/* <BiSolidRightArrow className="text-sm mt-1 mr-2 text-blue-500" /> */}
                <p>
                  Our Engineering team has been a mean for FOGALE Sensors to
                  regularly bids and be part of worldwide, large and cyclical
                  scientific projects such as, for examples, large scientific
                  systems (synchrotron, ...) or giant telescopes.
                </p>
                <p className="mt-10">
                  Unique solutions were adopted through research programs to
                  become commercialized products. They include:
                </p>
                <div className="flex flex-col">
                  <div className="flex flex-col justify-center mt-10 px-2 md:px-10">
                    <div className="flex">
                      {" "}
                      <BiSolidRightArrow className="flex-shrink-0 text-xs mt-1 mr-2 text-blue-500" />
                      <p>
                        The
                        <span className="ml-1 mr-1 font-semibold">
                          Alignment Systems product line:
                        </span>
                        Initially developed to level and align over distances
                        longer than 1 km, the hundreds of magnets making up the
                        machine of a synchrotron down to a few hundred
                        micrometers, they are also used to measure the
                        deformations of civil engineering structures.
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-10">
                      <li>
                        The{" "}
                        <span className="font-semibold">
                          Wiring Positioning System
                        </span>{" "}
                        (WPS): based on a stretched wire used as a horizontal
                        alignment reference.
                      </li>
                      <li>
                        The{" "}
                        <span className="font-semibold">
                          Hydrostatic Leveling System
                        </span>{" "}
                        (HLS): based on a surface of water used as leveling
                        reference.
                      </li>
                    </div>
                    <div className="flex mt-10">
                      {" "}
                      <BiSolidRightArrow className="flex-shrink-0 text-xs mt-1 mr-2 text-blue-500" />
                      <p>
                        The
                        <span className="ml-1 mr-1 font-semibold">
                          Edge Sensors product line:
                        </span>
                        for positioning (with nanometric precision) the hundreds
                        of segments that make up a very large telescope mirrors.
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <p
                        className="flex text-orange-500 mt-10 hover:cursor-pointer"
                        onClick={() => {
                          setActiveSlide(null);
                        }}
                      >
                        View less{" "}
                        <FaArrowAltCircleUp className="ml-1 mt-[2px] text-base" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        ) : null}
      </div>

      <div className="flex justify-center">
        <div
          ref={ref2}
          className={`flex flex-col transition-transform duration-700 md:flex-row px-2 mt-10 md:mt-10 max-w-[1100px] ${
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
              Instrumentation{" "}
              <GiEggDefense className="ml-2 text-xl mt-1 text-blue-500" />
            </p>
            <p className="mt-1">
              Recognized for its expertise in metrological solutions, FOGALE
              Sensors has been historically serving the industrial, scientific
              research, nuclear and defense markets with unique products and
              solutions.
            </p>
            <div className="flex justify-end text-orange-500 pr-3 mt-3">
              {activeSlide !== 3 ? (
                <p
                  className="flex text-sm hover:cursor-pointer"
                  onClick={() => {
                    setActiveSlide(3);
                  }}
                >
                  View More{" "}
                  <FaArrowAltCircleRight className="ml-1 text-base mt-[1px] text-orange-500" />
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center drop-shadow-xl">
        {activeSlide === 3 ? (
          <Transition
            appear={true}
            show={activeSlide}
            enter="transition-all duration-650 ease-out"
            enterFrom="opacity-0 transform scale-y-0"
            enterTo="opacity-100 transform scale-y-100"
            leave="transition-all duration-700 ease-in"
            leaveFrom="opacity-100 transform scale-y-100"
            leaveTo="opacity-0 transform scale-y-0"
          >
            <div className="flex flex-col px-2 mt-3 md:mt-[4rem] text-[14px] pb-10 max-w-[1000px]">
              <div className="flex flex-col px-5">
                {/* <BiSolidRightArrow className="text-sm mt-1 mr-2 text-blue-500" /> */}
                <p>
                  Our Engineering team has been a mean for FOGALE Sensors to
                  regularly bids and be part of worldwide, large and cyclical
                  scientific projects such as, for examples, large scientific
                  systems (synchrotron, ...) or giant telescopes.
                </p>
                <p className="mt-10">
                  Unique solutions were adopted through research programs to
                  become commercialized products. They include:
                </p>
                <div className="flex flex-col">
                  <div className="flex flex-col justify-center mt-10 px-2 md:px-10 ">
                    <div className="flex">
                      {" "}
                      <BiSolidRightArrow className="flex-shrink-0 text-xs mt-1 mr-2 text-blue-500" />
                      <p>
                        The
                        <span className="ml-1 mr-1 font-semibold">
                          Alignment Systems product line:
                        </span>
                        Initially developed to level and align over distances
                        longer than 1 km, the hundreds of magnets making up the
                        machine of a synchrotron down to a few hundred
                        micrometers, they are also used to measure the
                        deformations of civil engineering structures.
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-10">
                      <li>
                        The{" "}
                        <span className="font-semibold">
                          Wiring Positioning System
                        </span>{" "}
                        (WPS): based on a stretched wire used as a horizontal
                        alignment reference.
                      </li>
                      <li>
                        The{" "}
                        <span className="font-semibold">
                          Hydrostatic Leveling System
                        </span>{" "}
                        (HLS): based on a surface of water used as leveling
                        reference.
                      </li>
                    </div>
                    <div className="flex mt-10">
                      {" "}
                      <BiSolidRightArrow className="flex-shrink-0 text-xs mt-1 mr-2 text-blue-500" />
                      <p>
                        The
                        <span className="ml-1 mr-1 font-semibold">
                          Edge Sensors product line:
                        </span>
                        for positioning (with nanometric precision) the hundreds
                        of segments that make up a very large telescope mirrors.
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <p
                        className="flex text-orange-500 mt-10 hover:cursor-pointer"
                        onClick={() => {
                          setActiveSlide(null);
                        }}
                      >
                        View less{" "}
                        <FaArrowAltCircleUp className="ml-1 mt-[2px] text-base" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        ) : null}
      </div>
      <div className="flex justify-center">
        <div
          ref={ref3}
          className={`flex flex-col max-w-[1100px] transition-transform duration-700 md:flex-row-reverse px-2 mt-10 md:mt-10 ${
            inView3
              ? "transform translate-x-0 opacity-100"
              : "transform translate-x-[300px] opacity-0"
          }`}
        >
          <img
            src={slide3}
            className="shadow-lg md:w-[50%] rounded-md px-0"
            alt="Slide 2"
          />
          <div className="flex flex-col px-2 md:px-6 justify-center">
            <p className="font-semibold mt-2 text-lg flex">
              Energy & Transportation{" "}
              <MdEnergySavingsLeaf className="ml-2 text-xl mt-1 text-green-500" />
            </p>
            <p className="mt-1">
              FOGALE Sensors develops and manufactures sensing solutions that
              require advanced preformance and high reliability, notably to
              operate in harsh envirements.
            </p>
            <div className="flex justify-end text-orange-500 pr-3 mt-3">
              {activeSlide !== 4 ? (
                <p
                  className="flex text-sm hover:cursor-pointer"
                  onClick={() => {
                    setActiveSlide(4);
                  }}
                >
                  View More{" "}
                  <FaArrowAltCircleRight className="ml-1 text-base mt-[1px] text-orange-500" />
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center drop-shadow-xl">
        {activeSlide === 4 ? (
          <Transition
            appear={true}
            show={activeSlide}
            enter="transition-all duration-650 ease-out"
            enterFrom="opacity-0 transform scale-y-0"
            enterTo="opacity-100 transform scale-y-100"
            leave="transition-all duration-700 ease-in"
            leaveFrom="opacity-100 transform scale-y-100"
            leaveTo="opacity-0 transform scale-y-0"
          >
            <div className="flex flex-col px-2 mt-3 md:mt-[4rem] text-[14px] pb-10 max-w-[1000px]">
              <div className="flex flex-col px-5">
                {/* <BiSolidRightArrow className="text-sm mt-1 mr-2 text-blue-500" /> */}
                <p>
                  Our Engineering team has been a mean for FOGALE Sensors to
                  regularly bids and be part of worldwide, large and cyclical
                  scientific projects such as, for examples, large scientific
                  systems (synchrotron, ...) or giant telescopes.
                </p>
                <p className="mt-10">
                  Unique solutions were adopted through research programs to
                  become commercialized products. They include:
                </p>
                <div className="flex flex-col">
                  <div className="flex flex-col justify-center mt-10 px-2 md:px-10">
                    <div className="flex">
                      {" "}
                      <BiSolidRightArrow className="flex-shrink-0 text-xs mt-1 mr-2 text-blue-500" />
                      <p>
                        The
                        <span className="ml-1 mr-1 font-semibold">
                          Alignment Systems product line:
                        </span>
                        Initially developed to level and align over distances
                        longer than 1 km, the hundreds of magnets making up the
                        machine of a synchrotron down to a few hundred
                        micrometers, they are also used to measure the
                        deformations of civil engineering structures.
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-10">
                      <li>
                        The{" "}
                        <span className="font-semibold">
                          Wiring Positioning System
                        </span>{" "}
                        (WPS): based on a stretched wire used as a horizontal
                        alignment reference.
                      </li>
                      <li>
                        The{" "}
                        <span className="font-semibold">
                          Hydrostatic Leveling System
                        </span>{" "}
                        (HLS): based on a surface of water used as leveling
                        reference.
                      </li>
                    </div>
                    <div className="flex mt-10">
                      {" "}
                      <BiSolidRightArrow className="flex-shrink-0 text-xs mt-1 mr-2 text-blue-500" />
                      <p>
                        The
                        <span className="ml-1 mr-1 font-semibold">
                          Edge Sensors product line:
                        </span>
                        for positioning (with nanometric precision) the hundreds
                        of segments that make up a very large telescope mirrors.
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <p
                        className="flex text-orange-500 mt-10 hover:cursor-pointer"
                        onClick={() => {
                          setActiveSlide(null);
                        }}
                      >
                        View less{" "}
                        <FaArrowAltCircleUp className="ml-1 mt-[2px] text-base" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        ) : null}
      </div>
    </div>
  );
};

export default Services;
