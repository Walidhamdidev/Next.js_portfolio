import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      id="about"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
      className={`
    h-screen
  
    flex
    flex-col
    md:flex-row
    -mt-10
    gap-5
    justify-evenly	
    lg:justify-start
    items-center
    text-center
    md:text-left
    mx-auto lg:px-52 px-5
    `}
    >
      <div className="lg:2/6 xl:w-2/4 mt-14  lg:ml-16 text-left">
        <h1 className="md:text-7xl text-5xl  mb-5 font-extrabold">
          <span className="block pb-2 md:pb-0">
            Hey
            <span className="text-yellow-400 hidden md:inline-block ">,</span>
          </span>
          <span className="block pb-3 md:pb-0">
            I&apos;m Walid
            <span className="text-yellow-400 hidden md:inline-block">,</span>
          </span>{" "}
          <span className="block text-3xl md:text-4xl">
            a web developer
            <span className="text-yellow-400 hidden md:inline-block">.</span>
          </span>
        </h1>
      </div>
      <div className="mt-12 lg:mt-32 lg:ml-20 text-left">
        <Link
          className="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-white animate-bounce hover:text-yellow-400 hover:bg-black transition duration-300 ease-in-out cursor-pointer"
          href="#projects"
          passHref
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

export default About;
