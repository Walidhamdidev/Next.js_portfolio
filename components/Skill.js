import { motion } from "framer-motion";
import React from "react";

export default function Skill({ skill, skillType }) {
  return (
    <motion.li
      initial="hidden"
      animate="visible"
      whileHover={{
        position: "relative",
        zIndex: 1,
        scale: [1, 1.4, 1.2],
        rotate: [0, 10, -10, 0],
        transition: {
          duration: 0.2,
        },
      }}
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
      //  cursor-pointer
      className={`${
        skillType === "foundation"
          ? "bg-gray-900"
          : skillType === "cssFramework"
          ? "bg-gray-800"
          : skillType === "jsFramework"
          ? "bg-gray-700"
          : "bg-slate-700"
      }  text-xl w-fit rounded-md p-3 my-1 mr-3 inline-block transition-colors hover:bg-white hover:text-black`}
    >
      {skill}
    </motion.li>
  );
}
