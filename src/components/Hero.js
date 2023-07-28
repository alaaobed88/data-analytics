import React from "react";
import Typed from 'react-typed';
const Hero = () => {
  return (
    <div className="text-white">
      
      <div className="flex z-10 flex-col text-center max-w-[800px] w-full mt-[-96px] mx-auto h-screen justify-center">
        <p className="text-[#00df9a] font-bold p-2">Growing With Data Analytics</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl md:py-6  font-bold">Grow with data</h1>
        <div className="flex justify-center items-center"><p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">fast, flexible financing for</p>
        <Typed strings={['BTC','BTB','SASS']} className="md:text-5xl sm:text-4xl text-xl font-bold px-2 md:px-4" typeSpeed={120} backSpeed={150} loop/>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms</p>
        <button className="bg-[#00df9a] w-[200px] py-3 mx-auto rounded-md my-6 font-medium text-black">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
