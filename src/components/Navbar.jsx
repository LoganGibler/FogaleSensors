import React from "react";

const Navbar = () => {
  // border-b-transparent pb-1 hover:border-b-orange-500
  return (
    <div className="px-8 py-1 mt-2 absolute top-3 left-10 right-10 z-20">
      <div className="flex">
        <div className="flex hover:cursor-pointer">
          <p className="font-bold">
            <span className="text-blue-700 text-lg">F</span>
            <span className="text-white">ogale</span>
          </p>
          <p className="ml-1 text-slate-500 font-semibold">
            <span className="text-orange-500 text-lg">S</span>
            <span className="text-white">ensors</span>
          </p>
        </div>
        <div className="flex grow justify-end text-blue-700">
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
