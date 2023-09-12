import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [isNav, setIsNav] = useState(true);
  const navToggle = () => {
    setIsNav((previousState) => !previousState);
  };
  return (
    <header className="flex justify-between items-center z-999 h-24 px-4 mx-auto max-w-[1240px] text-white">
      <h1 className="w-full z-10 text-3xl font-bold text-[#00df9a]">xIQ</h1>
      <nav className="hidden md:flex md:z-10">
        <ul className="hidden md:flex md:z-10">
          <li className="p-4 mx-1 cursor-pointer border-b hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6 ">
            <button>Home</button>
          </li>
          <li className="p-4 cursor-pointer border-b hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6 ">
           <button>Company</button> 
          </li>
          <li className="p-4 cursor-pointer border-b hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6 ">
            <button>Resources</button>
          </li>
          <li className="p-4 cursor-pointer border-b hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6 ">
           <button>About</button>
          </li>
          <li className="p-4 cursor-pointer border-b hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6 ">
          <button>Contact</button>
          </li>
        </ul>
      </nav>
      <button onClick={navToggle} className="md:hidden z-10">
        {isNav ? (
          <AiOutlineMenu
            aria-label="open navigation menu"
            size={20}
            className="cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6"
          />
        ) : (
          <AiOutlineClose
            aria-label="close navigation menu"
            size={20}
            className="cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6"
          />
        )}
      </button>
      <nav
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
      </nav>
    </header>
  );
};

export default Navbar;
