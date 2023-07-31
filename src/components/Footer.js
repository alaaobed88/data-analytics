import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  const slideVariants = {
    hidden: { x: "-60%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const secondSlideVariants = {
    hidden: { y: "60%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <AnimatePresence>
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <motion.div
            key="element1"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideVariants}
            transition={{ duration: 0.75 }}
          >
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">
              AnalytixIQ Labs
            </h1>
            <p className="py-4">
              Incididunt proident voluptate consectetur est dolor labore
              consectetur excepteur elit id. Id laboris mollit sunt eiusmod nisi
              sit ullamco voluptate magna eu nulla minim velit.
            </p>
            <div className="flex md:w-[70%] justify-between my-6">
              <FaFacebookSquare
                className="cursor-pointer hover:text-[#00df9a] hover:scale-105 hover:-rotate-45 ease-in-out duration-300"
                size={30}
              />
              <FaInstagram
                className="cursor-pointer hover:text-[#00df9a] hover:scale-105 hover:-rotate-45 ease-in-out duration-300"
                size={30}
              />
              <FaDribbbleSquare
                className="cursor-pointer hover:text-[#00df9a] hover:scale-105 hover:-rotate-45 ease-in-out duration-300"
                size={30}
              />
            </div>
          </motion.div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <motion.div
              key="element2"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={secondSlideVariants}
              transition={{ duration: 1 }}
            >
              <h6 className="font-medium text-[#00df9a] mb-2">Solutions</h6>
              <ul>
                <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  Analytics
                </li>
                <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  Marketing
                </li>
                <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  Commerce
                </li>
                <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  Insights
                </li>
              </ul>
            </motion.div>
          </div>
          <div>
            <motion.div
              key="element3"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={secondSlideVariants}
              transition={{ duration: 1.25 }}
            >
              <h6 className="font-medium mb-2 text-[#00df9a] ">Support</h6>
              <ul>
                <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  Pricing
                </li>
                <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  Documentations
                </li>
                <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  Guides
                </li>
                <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  Api Status
                </li>
              </ul>
            </motion.div>
          </div>
          <div>
            <motion.div
              key="element4"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={secondSlideVariants}
              transition={{ duration: 1.5 }}
            >
              <h6 className="font-medium text-[#00df9a] mb-2">Company</h6>
              <ul>
                <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  About
                </li>
                <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  Blog
                </li>
                <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  Jobs
                </li>
                <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  Press
                </li>
              </ul>
            </motion.div>
          </div>
          <div>
            <motion.div
              key="element5"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={secondSlideVariants}
              transition={{ duration: 1.75 }}
            >
              <h6 className="font-medium text-[#00df9a] mb-2">Legal</h6>
              <ul>
                <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  Claim
                </li>
                <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  Policy
                </li>
                <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  Terms
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Footer;
