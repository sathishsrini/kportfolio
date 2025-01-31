import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    
    // Apply a background color to the entire section
    <div className="border-b border-neutral-900 pb-4"> {/* Change bg-blue-50 to your desired color */}
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-purple-600"> Me</span> {/* Change text-purple-600 to your desired color */}
      </h1>
      <div className="flex flex-wrap items-center justify-center lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md lg:w-1/2"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl w-full max-w-md lg:max-w-full shadow-lg" // Added shadow for better visuals
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-gray-700"> {/* Change text-gray-700 to your desired color */}
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;