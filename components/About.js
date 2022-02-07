import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { motion } from "framer-motion";

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

function About() {
  const router = useRouter();

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
    
    justify-center
    md:justify-around
    items-center
    text-center
    md:text-left
    mx-auto lg:px-52 px-5
    `}
    >
      <div className="w-fit">
        <h1 className="md:text-7xl text-5xl  mb-5 font-extrabold">
          <span className="block pb-2 md:pb-0">
            Hey
            <span className="text-yellow-400 hidden md:inline-block ">,</span>
          </span>
          <span className="block pb-3 md:pb-0">
            {" "}
            I&apos;m Walid
            <span className="text-yellow-400 hidden md:inline-block">,</span>
          </span>{" "}
          <span className="block text-3xl md:text-4xl">
            a web developer
            <span className="text-yellow-400 hidden md:inline-block">.</span>
          </span>
        </h1>
        <Link href="https://thenewtunisia.vercel.app/" passHref>
          <motion.a
            whileHover={{
              position: "relative",
              zIndex: 1,
              scale: [0.9, 1.2, 1],
              rotate: [0, 10, -10, 0],
              transition: {
                duration: 0.2,
              },
            }}
            target="_blank"
            className="bg-yellow-300 mt-4 inline-block  text-black active:bg-yellow-400 text-sm px-6 py-3 font-semibold rounded shadow hover:shadow-lg outline-none focus:outline-none"
          >
            Discover More
          </motion.a>
        </Link>
      </div>

      <div className=" relative hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
          <motion.path
            d="M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5"
            fill="transparent"
            strokeWidth="12"
            stroke="rgba(255, 255, 255, 0.69)"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
        </svg>
        <motion.div
          className="box"
          initial={{ offsetDistance: "0%", scale: 2.5 }}
          animate={{ offsetDistance: "100%", scale: 1 }}
          transition={transition}
        />
      </div>
    </motion.div>
  );
}

export default About;
