import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "./ContactForm";

const Contact = () => {
  // const infoBox = (image, alt, label) => {
  //   return (
  //     <motion.div
  //       initial="hidden"
  //       animate="visible"
  //       whileHover={{
  //         position: "relative",
  //         zIndex: 1,
  //         // cursor: "pointer",
  //         scale: [1, 1, 1],
  //         rotate: [0, 10, -10, 0],
  //         transition: {
  //           duration: 0.2,
  //         },
  //       }}
  //       variants={{
  //         hidden: {
  //           scale: 0.8,
  //           opacity: 0,
  //         },
  //         visible: {
  //           scale: 1,
  //           opacity: 1,
  //           transition: {
  //             delay: 0.4,
  //           },
  //         },
  //       }}
  //       className="flex items-center border-2 border-gray-800 p-2 rounded shadow"
  //     >
  //       <Link href="#">
  //         <a
  //           className="relative w-12 h-10 block transform transition-all hover:scale-110"
  //           target="_blank"
  //         >
  //           <Image layout="fill" src={`/images/${image}`} alt={alt} />
  //         </a>
  //       </Link>
  //       <p className="ml-2">{label}</p>
  //     </motion.div>
  //   );
  // };

  return (
    <div className="mt-14 mx-auto lg:px-52 px-5" id="contact">
      <div className=" flex flex-col md:flex-row items-center   md:gap-10">
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

        {/* <div className=" relative  md:block space-y-10 ">
          {infoBox("email.svg", "email icon", "Walidhamdidev@gmail.com")}
          {infoBox("whatsapp.svg", "What's up icon", "+21656560457‌")}
          {infoBox("place.svg", "place icon", "Tunisia")}
          // instagram - facebook 

        </div> */}
      </div>
    </div>
  );
};
export default Contact;
