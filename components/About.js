import React, { useRef } from "react";
import { useRouter } from "next/router";

function About() {
  const router = useRouter();

  return (
    <div
      className={`
      
    h-screen
    flex
    flex-col
    -mt-10
    justify-center
    items-center
    text-center
    mx-auto lg:px-52 px-5
    `}
    >
      <h1 className="md:text-7xl text-5xl bold mb-5">Hey there</h1>
      <p className="text-2xl mb-7">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores,
        ea!
      </p>
      <button
        className="bg-yellow-300 mt-4 text-black active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
        onClick={(e) => {
          e.preventDefault();
          router.push("/projects");
        }}
      >
        Discover More
      </button>
    </div>
  );
}

export default About;
