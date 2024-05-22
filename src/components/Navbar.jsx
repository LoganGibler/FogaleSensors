import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { LuMenuSquare } from "react-icons/lu";
import { RiFolderInfoFill } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";
import { IoNewspaperSharp } from "react-icons/io5";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  // border-b-transparent pb-1 hover:border-b-orange-500
  return (
    <div className="px-0 lg:px-8 py-1 mt-2 absolute top-3 left-10 right-10 z-20">
      <div className="flex text-lg">
        <div className="flex hover:cursor-pointer drop-shadow-xl">
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
          <div className="flex text-white drop-shadow-2xl">
            <p className="mx-3 flex hover:cursor-pointer hover:text-orange-300 tracking-wide">
              About <RiFolderInfoFill className="mt-1 ml-1" />
            </p>
            <p className="mx-3 flex hover:cursor-pointer hover:text-orange-300 tracking-wide">
              News
              <IoNewspaperSharp className="mt-1 ml-1" />
            </p>
            <p className="mx-3 flex hover:cursor-pointer hover:text-orange-300 tracking-wide">
              Careers
              <MdOutlineWork className="mt-1 ml-1" />
            </p>
            <p className="mx-3 flex hover:cursor-pointer hover:text-orange-300 tracking-wide">
              Contact
              <RiContactsBook3Fill className="mt-1 ml-1" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
