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
    <footer className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <AnimatePresence>
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
            <nav className="flex md:w-[70%] justify-between my-6">
              <button>
                <FaFacebookSquare
                  className="cursor-pointer hover:text-[#00df9a] hover:scale-105 hover:-rotate-45 ease-in-out duration-300"
                  size={30}
                  alt="facebook direction link"
                  aria-label="go to facebook"
                />
              </button>
              <button>
                <FaInstagram
                  className="cursor-pointer hover:text-[#00df9a] hover:scale-105 hover:-rotate-45 ease-in-out duration-300"
                  size={30}
                  alt="instagram direction link"
                  aria-label="go to instagram"
                />
              </button>
              <button>
                <FaDribbbleSquare
                  className="cursor-pointer hover:text-[#00df9a] hover:scale-105 hover:-rotate-45 ease-in-out duration-300"
                  size={30}
                  alt="drible direction link"
                  aria-label="go to dribbble"
                />
              </button>
            </nav>
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
              <nav>
                <ul>
                  <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                   <button>Analytics</button> 
                  </li>
                  <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  <button>Marketing</button>
                  </li>
                  <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  <button>Commerce</button> 
                  </li>
                  <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  <button>Insights</button>
                  </li>
                </ul>
              </nav>
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
              <nav>
                <ul>
                  <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  <button>Pricing</button> 
                  </li>
                  <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  <button>Documentations</button> 
                  </li>
                  <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  <button>Guides</button> 
                  </li>
                  <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  <button>Api Status</button> 
                  </li>
                </ul>
              </nav>
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
              <nav>
                <ul>
                  <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  <button>About</button>
                  </li>
                  <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  <button>Blog</button>  
                  </li>
                  <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  <button>Jobs</button> 
                  </li>
                  <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  <button>Press</button> 
                  </li>
                </ul>
              </nav>
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
              <nav>
                <ul>
                  <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  <button>Claim</button>
                  </li>
                  <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  <button>Policy</button>
                  </li>
                  <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:scale-105 ease-in-out duration-300 hover:rotate-6">
                  <button>Terms</button>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
