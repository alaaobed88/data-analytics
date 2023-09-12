import React from "react";
import Typed from "react-typed";
import DataVD from "../Assets/DataVD.mp4";
import { useRef, useEffect, useCallback } from "react";
const Hero = () => {
  const videoRef = useRef();

  const handleVideoEnded = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("ended", handleVideoEnded);

      return () => {
        video.removeEventListener("ended", handleVideoEnded);
      };
    }
  }, [handleVideoEnded]);
  return (
    <section className="text-white mt-[10rem] pb-[6rem] min-w-full">
      <div className="absolute inset-0">
        <video
          alt="data flow video"
          ref={videoRef}
          autoPlay
          muted
          preload="auto"
          className="w-full min-h-[750px] max-h-[780px] object-cover"
        >
          <source src={DataVD} type="video/mp4" />
        </video>
      </div>
      <div className="flex relative flex-col text-center max-w-[800px] w-full mx-auto justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          Growing With Data Analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl md:py-6  font-bold">
          Grow with data
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            fast, flexible financing for
          </p>
          <Typed
            strings={["BTC", "BTB", "SASS"]}
            className="md:text-5xl sm:text-4xl text-xl font-bold px-2 md:px-4"
            typeSpeed={120}
            backSpeed={150}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms
        </p>
        <button className="bg-[#00df9a] w-[200px] py-3 mx-auto rounded-md my-6 font-medium text-black hover:bg-black hover:text-[#00df9a] hover:scale-105 ease-in-out duration-500">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
