import React from "react";
import { useInView } from "react-intersection-observer";
import { PiStrategyBold } from "react-icons/pi";
import { GrUserExpert } from "react-icons/gr";
import { AiFillBuild } from "react-icons/ai";
import { FaLeaf } from "react-icons/fa";

const BulletPoint = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <li
      ref={ref}
      className={` flex transition-transform duration-700 ${
        inView
          ? "transform translate-x-0 opacity-100"
          : "transform -translate-x-[300px] opacity-0"
      }`}
    >
      {children}
    </li>
  );
};

const CompanyInfo = () => {
  return (
    <div className="flex drop-shadow-xl text-black w-full h-[300px] px-3 mt-[2rem] justify-center items-center relative">
      <div className="flex flex-col max-w-2xl">
        <h1 className="text-2xl">
          We focus on bringing together experts in their own field to:
        </h1>
        <ul className="mt-4 space-y-4">
          <BulletPoint>
            <PiStrategyBold className="text-2xl mr-2 text-blue-500" />
            Accelerate the execution of our buisness strategies
          </BulletPoint>
          <BulletPoint>
            <GrUserExpert className="text-xl ml-1 mr-2 text-red-500" />
            Aggregate world class sensor technology expertise
          </BulletPoint>
          <BulletPoint>
            <AiFillBuild className="text-2xl mr-2 text-yellow-500" />
            Build up on our Innovation & Patent management methods.
          </BulletPoint>
          <BulletPoint>
            <FaLeaf className="text-2xl mr-2 text-green-500" />
            Maintain sustainable practices
          </BulletPoint>
        </ul>
      </div>
    </div>
  );
};

export default CompanyInfo;
