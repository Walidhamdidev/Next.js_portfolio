import React from "react";

export default function Skill({ skill }) {
  return (
    <li className=" bg-gray-800 text-3xl rounded-md p-5 my-1 mr-3 inline-block cursor-pointer transition-colors hover:bg-white hover:text-black">
      {skill}
    </li>
  );
}
