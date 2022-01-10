import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

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
    -mt-10
    justify-center
    md:items-start
    items-center
    text-center
    md:text-left
    mx-auto lg:px-52 px-5
    `}
    >
      <h1 className="md:text-7xl text-5xl  mb-5 font-extrabold leading-relaxed ">
        <span className="block">
          Hey<span className="text-yellow-400 hidden md:inline-block">,</span>
        </span>
        <span className="block">
          {" "}
          I&apos;m Walid
          <span className="text-yellow-400 hidden md:inline-block">,</span>
        </span>{" "}
        <span className="block">web developer</span>
      </h1>
      {/* <p className="text-2xl mb-7">React.js / Next.js</p> */}
      <button
        className="bg-yellow-300 mt-4 text-black active:bg-yellow-400 text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
        onClick={(e) => {
          e.preventDefault();
          router.push("/projects");
        }}
      >
        Discover More
      </button>
    </motion.div>
  );
}

export default About;
