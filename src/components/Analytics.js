import React from "react";
import Laptop from "../Assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white pt-[15rem] md:pt-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="laptop" className="w-[500px] mx-auto my-20" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">Data ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Sit et qui eu Lorem irure consectetur Lorem non. Ipsum cillum aliqua
            laboris quis commodo cillum. Esse magna eu veniam eiusmod mollit
            quis do sint. Et sint eu sunt adipisicing culpa adipisicing eu.
            Nostrud excepteur deserunt qui do esse laborum eiusmod culpa minim
            consequat. Nulla nulla sit consequat sit. Dolor Lorem Lorem
            excepteur ea occaecat qui aute mollit commodo.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] py-3 mx-auto rounded-md my-6 md:mx-0 font-medium">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
