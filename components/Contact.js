import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

  return (
    <div
      className="mt-20 mx-auto lg:px-52 px-5 flex items-center gap-10"
      id="contact"
    >
      <div>
        <p className="border-b-4 inline-flex pb-1 text-white  mb-14 font-bold text-3xl md:text-5xl  border-yellow-500">
          Contact Me
        </p>
        <div className="flex justify-between pb-10">
          <div className="w-full">
            <div className=" flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl mb-4 text-black font-semibold">
                  Send A Message
                </h4>
                <form>
                  <div className=" w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                      placeholder=" "
                      required
                    />
                  </div>
                  <div className=" w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      maxLength="300"
                      name="feedback"
                      id="feedback"
                      rows="4"
                      cols="80"
                      className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                      placeholder=""
                      required
                    ></textarea>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      id="feedbackBtn"
                      className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
};
export default Contact;
