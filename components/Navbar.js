"use-client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showBgNav, setShowBgNav] = useState(false);
  const dropdown = useRef(null);
  const router = useRouter();
  const [hash, setHash] = useState("/");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [widthScreen, setWidthScreen] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    const { innerWidth: width } = window;
    setWidthScreen(width);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const showBg = () => {
      if (window.scrollY > 250) {
        setShowBgNav(true);
      } else if (window.scrollY < 250) {
        setShowBgNav(false);
      }
    };

    window.addEventListener("scroll", showBg);
  }, [showBgNav]);

  useEffect(() => {
    const onHashChangeStart = (url) => {
      setHash(url);
    };

    router.events.on("hashChangeStart", onHashChangeStart);

    return () => {
      router.events.off("hashChangeStart", onHashChangeStart);
    };
  }, [router.events]);

  const handleScrollSection = () => {
    setShowNav(false);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  function isSmallScreen() {
    return widthScreen < 1026;
  }

  return (
    <div
      className={` 
      sticky
      top-0 
      flex
      flex-col
      justify-center
      items-center
      transition-all
      z-50
      bg-opacity-90
        ${
          showBgNav
            ? "bg-[#2c3e50] sm:px-32 px-5"
            : "bg-[#2c3e5000] sm:px-52 px-10"
        }
       text-white py-4  text-xl mx-auto `}
    >
      <nav className="container flex items-center justify-around">
        <div className="flex">
          {/* cursor-pointer */}
          <Link
            passHref
            href="/#about"
            className={`
            bg-white align-middle 
            overflow-hidden 
            rounded-full 
            inline-block relative 
            w-12 h-12 md:w-14 md:h-14 transform 
            transition-all 
            hover:scale-110
            `}
          >
            <Image
              fill="true"
              cover="true"
              sizes="100%"
              priority="true"
              src="/images/profile.png"
              alt="profile logo picture"
            />
          </Link>
          <div className="w-14 h-14 md:hidden"></div>
        </div>
        <button
          className="inline-block lg:hidden"
          onClick={() => {
            setShowNav(!showNav);
          }}
        >
          <h1 className="block  relative w-12 h-12">
            <Image
              fill="true"
              sizes="100%"
              priority="true"
              src="/images/menu.svg"
              alt="menu"
            />
          </h1>
        </button>
        <motion.ul
          animate={isSmallScreen() ? (showNav ? "open" : "closed") : {}}
          variants={variants}
          ref={dropdown}
          className={`${
            showNav
              ? `
              absolute
            
              top-20
               z-50
              py-10
              font-bold
              uppercase 
              text-center
              
              shadow-lg
              space-y-5
              bg-gradient-to-r from-[#314355] to-[#000000]
               
              `
              : "hidden space-x-20"
          } lg:flex w-full h-fit block justify-center items-center `}
        >
          {/* lg:inline lg:mt-0 lg:static lg:transform-none lg:capitalize lg:font-normal w-0 */}
          <li
            className={` transition duration-700 ease-in-out 
           
            hover:text-yellow-500  ${
              // hash === "/#about" ||
              scrollPosition >= 0 && scrollPosition < 580
                ? "text-yellow-500  md:border-b border-yellow-500 transition duration-700 ease-in-out"
                : ""
            } `}
          >
            <Link href="#about" passHref onClick={handleScrollSection}>
              About
            </Link>
          </li>
          <li
            className={` transition duration-700 ease-in-out 
            
            hover:text-yellow-500   ${
              // hash === "/#projects" ||
              scrollPosition >= 600 && scrollPosition < 1000.2
                ? "text-yellow-500  md:border-b border-yellow-500 transition duration-700 ease-in-out"
                : ""
            }`}
          >
            <Link onClick={handleScrollSection} href="#projects" passHref>
              Projects
            </Link>
          </li>
          <li
            className={`transition duration-700 ease-in-out 
            
            hover:text-yellow-500  ${
              // hash === "/#skills" ||
              isSmallScreen()
                ? scrollPosition >= 1000.2 && scrollPosition < 1800.2
                  ? "text-yellow-500  md:border-b border-yellow-500 transition duration-700 ease-in-out"
                  : ""
                : scrollPosition >= 1000.2 && scrollPosition < 1280.2
                ? "text-yellow-500  md:border-b border-yellow-500 transition duration-700 ease-in-out"
                : ""
            }`}
          >
            <Link onClick={handleScrollSection} href="#skills" passHref>
              Skills
            </Link>
          </li>
          <li
            className={`  transition duration-700 ease-in-out 
            
             hover:text-yellow-500  ${
               // hash === "/#contact" ||
               isSmallScreen()
                 ? scrollPosition >= 1800.2
                   ? "text-yellow-500  md:border-b border-yellow-500 transition duration-700 ease-in-out"
                   : ""
                 : scrollPosition >= 1280.2
                 ? "text-yellow-500  md:border-b border-yellow-500 transition duration-700 ease-in-out"
                 : ""
             }`}
          >
            <Link onClick={handleScrollSection} href="#contact" passHref>
              Contact
            </Link>
          </li>
        </motion.ul>
        {/* social media linkedin and github */}
        <div className="flex items-center space-x-2 ">
          {/* cursor-pointer */}
          <Link
            passHref
            className="relative w-14 h-14 block transform transition-all hover:scale-110"
            target="_blank"
            href="https://github.com/walid-hamdi"
          >
            <Image
              fill="true"
              sizes="100%"
              priority="true"
              src="/images/github.svg"
              alt="github social media icon"
            />
          </Link>

          <Link
            passHref
            className="relative w-14 h-14 block transform transition-all hover:scale-110"
            target="_blank"
            href="https://www.youtube.com/@walid-hamdi"
          >
            <Image
              fill="true"
              sizes="100%"
              priority="true"
              src="/images/youtube.svg"
              alt="youtube social media icon"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}
