import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { LuMenuSquare } from "react-icons/lu";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  // border-b-transparent pb-1 hover:border-b-orange-500
  return (
    <div className="px-2 lg:px-8 py-1 mt-2 absolute top-3 left-10 right-10 z-20">
      <div className="flex text-lg">
        <div className="flex hover:cursor-pointer">
          <p className="font-bold">
            <span className="text-white text-xl">F</span>
            <span className="text-white">ogale</span>
          </p>
          <p className="ml-1 text-white font-semibold">
            <span className="text-white text-lg">S</span>
            <span className="text-white">ensors</span>
            (LOGO HERE)
          </p>
        </div>

        <div className="flex grow justify-end md:hidden text-white">
          {mobileMenu ? (
            <RiCloseLine
              className="text-2xl"
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          ) : (
            <LuMenuSquare
              className="text-2xl"
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          )}
        </div>
        <div className="hidden md:flex grow justify-end text-blue-700">
          <div className="flex text-sm text-white font-semibold">
            <p className="mx-3 hover:cursor-pointer hover:text-orange-500 tracking-wide">
              About
            </p>
            <p className="mx-3 hover:cursor-pointer hover:text-orange-600 tracking-wide">
              News
            </p>
            <p className="mx-3 hover:cursor-pointer hover:text-orange-500 tracking-wide">
              Careers
            </p>
            <p className="mx-3 hover:cursor-pointer hover:text-orange-500 tracking-wide">
              Contact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
