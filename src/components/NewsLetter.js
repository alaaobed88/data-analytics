import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
const NewsLetter = () => {
  const slideVariants = {
    hidden: { x: "-60%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const secondSlideVariants = {
    hidden: { x: "-60%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [secondRef, secondInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div className="w-full py-16 text-white">
      <AnimatePresence>
      <div className="max-w-[1240px] mx-auto px-4 grid lg:grid-cols-3">
        
          <div className="lg:col-span-2 my-4">
            <motion.div
              key="elm1"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideVariants}
              transition={{ duration: 1 }}
            >
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                Want tips & tricks to optimize your flow?
              </h1>
              <p>Sign up to our newsletter and stay up to date.</p>
            </motion.div>
          </div>
          <div className="my-4">
            <motion.div
              key="elm2"
              ref={secondRef}
              initial="hidden"
              animate={secondInView ? "visible" : "hidden"}
              variants={secondSlideVariants}
              transition={{ duration: 2 }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-between w-full px-2">
                <input
                  className="p-3 flex w-full rounded-md text-black"
                  type="email"
                  placeholder="Enter Email"
                ></input>
                <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 hover:bg-black hover:text-[#00df9a] hover:scale-105 ease-in-out duration-500">
                  Sign Up
                </button>
              </div>
              <p className="mx-2">
                We care about the protection of your data. Read our{" "}
                <span className="text-[#00df9a] cursor-pointer hover:text-lg ease-in-out duration-200">Privacy Policy</span>
              </p>
            </motion.div>
          </div>
        
      </div>
      </AnimatePresence>
    </div>
  );
};

export default NewsLetter;
