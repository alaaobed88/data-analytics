import React from "react";
import Laptop from "../Assets/laptop.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Analytics = () => {
  const slideVariants = {
    hidden: { x: "-60%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="w-full bg-white pb-20 sm:pt-[15rem] pt-[5rem] md:pt-[3rem] px-4">
      {console.log(inView)}
      <AnimatePresence>
        <motion.div
          key="e1"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideVariants}
          transition={{ duration: 1 }}
        >
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img
              src={Laptop}
              alt="laptop"
              className="w-[500px] mx-auto my-20 hover:translate-x-4 hover:translate-y--4 hover:scale-105 ease-in-out duration-500"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-[#00df9a] font-bold ">
                DATA ANALYTICS DASHBOARD
              </h2>
              <h4 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                Manage Data Analytics Centrally
              </h4>
              <p>
                Sit et qui eu Lorem irure consectetur Lorem non. Ipsum cillum
                aliqua laboris quis commodo cillum. Esse magna eu veniam eiusmod
                mollit quis do sint. Et sint eu sunt adipisicing culpa
                adipisicing eu. Nostrud excepteur deserunt qui do esse laborum
                eiusmod culpa minim consequat. Nulla nulla sit consequat sit.
                Dolor Lorem Lorem excepteur ea occaecat qui aute mollit commodo.
              </p>
              <button className="bg-black text-[#00df9a] w-[200px] py-3 mx-auto rounded-md my-6 md:mx-0 font-medium hover:scale-105 ease-in-out duration-500 hover:text-black hover:bg-[#00df9a]">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Analytics;
