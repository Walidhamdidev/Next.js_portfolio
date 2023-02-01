import { motion } from "framer-motion";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="mt-14 mx-auto lg:px-52 px-5" id="contact">
      <div className=" flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="border-b-4 inline-flex pb-1 text-white  mb-10 font-bold text-3xl md:text-4xl  border-yellow-500">
            Contact Me
          </h1>
          <div className="flex justify-between ">
            <div className="w-full">
              <div className=" flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl mb-4 text-black font-semibold">
                    Send A Message
                  </h4>

                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative self-center md:block space-y-8"></div>
      </div>
    </div>
  );
};
export default Contact;
