import React from "react";
import Single from "../Assets/single.png";
import Double from "../Assets/double.png";
import Triple from "../Assets/triple.png";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const slideVariants = {
  hidden: { x: "-30%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const Packages = () => {
  const [firstRef, firstinView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [secondRef, secondinView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [ThirdRef, thirdinView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <AnimatePresence>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <motion.div
            key="el1"
            ref={firstRef}
            initial="hidden"
            animate={firstinView ? "visible" : "hidden"}
            variants={slideVariants}
            transition={{ duration: 1 }}
          >
            <div className="w-full cursor-pointer shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
              <img
                className="w-20 mx-auto mt-[-3rem] bg-white"
                src={Single}
                alt="single-package"
              />
              <h2 className="text-2xl font-bold text-center py-8">
                Single User
              </h2>
              <p className="text-center text-4xl font-bold">$100</p>
              <div className="text-center font-medium">
                <p className="py-2 border-b mx-8 mt-8">250gb Storage</p>
                <p className="py-2 border-b mx-8">1 Granted User</p>
                <p className="py-2 border-b mx-8">Send up to 2 GB</p>
              </div>
              <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3  hover:bg-black hover:text-[#00df9a] hover:scale-105 ease-in-out duration-500">
                Start Trial
              </button>
            </div>
          </motion.div>
          <motion.div
            key="el2"
            ref={secondRef}
            initial="hidden"
            animate={secondinView ? "visible" : "hidden"}
            variants={slideVariants}
            transition={{ duration: 1.5 }}
          >
            <div className="w-full cursor-pointer bg-gray-100 shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
              <img
                className="w-20 mx-auto mt-[-3rem] bg-transparent"
                src={Double}
                alt="single-package"
              />
              <h2 className="text-2xl font-bold text-center py-8">
                Partnership
              </h2>
              <p className="text-center text-4xl font-bold">$199</p>
              <div className="text-center font-medium">
                <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
                <p className="py-2 border-b mx-8">3 Granted Users</p>
                <p className="py-2 border-b mx-8">Send up to 10 GB</p>
              </div>
              <button className="bg-[#000300] text-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3  hover:bg-[#00df9a] hover:text-black hover:scale-105 ease-in-out duration-500">
                Start Trial
              </button>
            </div>
          </motion.div>
          <motion.div
            key="el3"
            ref={ThirdRef}
            initial="hidden"
            animate={thirdinView ? "visible" : "hidden"}
            variants={slideVariants}
            transition={{ duration: 2 }}
          >
            <div className="w-full cursor-pointer shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
              <img
                className="w-20 mx-auto mt-[-3rem] bg-white"
                src={Triple}
                alt="single-package"
              />
              <h2 className="text-2xl font-bold text-center py-8">
                Group Account
              </h2>
              <p className="text-center text-4xl font-bold">$299</p>
              <div className="text-center font-medium">
                <p className="py-2 border-b mx-8 mt-8">5 TB Storage</p>
                <p className="py-2 border-b mx-8">10 Granted User</p>
                <p className="py-2 border-b mx-8">Send up to 20 GB</p>
              </div>
              <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3  hover:bg-black hover:text-[#00df9a] hover:scale-105 ease-in-out duration-500">
                Start Trial
              </button>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Packages;
