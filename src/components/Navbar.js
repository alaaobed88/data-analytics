import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [isNav, setIsNav] = useState(true);
  const navToggle = () => {
    setIsNav((previousState) => !previousState);
  };
  return (
    <div className="flex justify-between items-center z-999 h-24 px-4 mx-auto max-w-[1240px] text-white">
      <h1 className="w-full z-10 text-3xl font-bold text-[#00df9a]">xIQ</h1>
      <ul className="hidden md:flex md:z-10">
        <li className="p-4 mx-1 cursor-pointer border-b hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6 ">
          Home
        </li>
        <li className="p-4 cursor-pointer border-b hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6 ">
          Company
        </li>
        <li className="p-4 cursor-pointer border-b hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6 ">
          Resources
        </li>
        <li className="p-4 cursor-pointer border-b hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6 ">
          About
        </li>
        <li className="p-4 cursor-pointer border-b hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6 ">
          Contact
        </li>
      </ul>
      <div onClick={navToggle} className="md:hidden z-10">
        {isNav ? (
          <AiOutlineMenu
            size={20}
            className="cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6"
          />
        ) : (
          <AiOutlineClose
            size={20}
            className="cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6"
          />
        )}
      </div>
      <div
        className={
          !isNav
            ? "z-10 fixed top-0 left-0 border-r w-[60%] h-full border-r-gray-900 ease-in-out duration-500 bg-[#000300]"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-8">REACT</h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6 border-gray-600">
            Home
          </li>
          <li className="p-4 border-b cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6 border-gray-600">
            Company
          </li>
          <li className="p-4 border-b cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6 border-gray-600">
            Resources
          </li>
          <li className="p-4 border-b cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6 border-gray-600">
            About
          </li>
          <li className="p-4 cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
