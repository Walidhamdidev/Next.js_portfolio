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
    // only add the event listener when the dropdown is opened
    if (!showNav) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setShowNav(false);
      }
    }
    window.addEventListener("click", handleClick);

    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [showNav]);

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
       text-white py-8  text-xl mx-auto `}
    >
      <nav className="container flex items-center justify-around">
        <div className="flex">
          {/* cursor-pointer */}
          <Link href="/#about" className="">
            <a
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
                layout="fill"
                objectFit="cover"
                src="/images/profile.png"
                alt="profile logo picture"
              />
            </a>
          </Link>
          <div className="w-14 h-14 md:hidden"></div>
        </div>
        <button
          className="inline-block lg:hidden"
          onClick={() => setShowNav(!showNav)}
        >
          <h1 className="block  relative w-12 h-12">
            <Image layout="fill" src="/images/menu.svg" alt="menu" />
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
              top-28
               z-50
              py-10
              font-bold
              uppercase 
              text-center
              border-b-2 border-b-white
              shadow-lg
              space-y-5
              bg-gradient-to-r from-[#314355] to-[#000000]
               
              `
              : "hidden space-x-20"
          } lg:flex w-full h-fit block justify-center items-center `}
        >
          {/* lg:inline lg:mt-0 lg:static lg:transform-none lg:capitalize lg:font-normal w-0 */}
          <li
            className={` transition duration-700 ease-in-out border-yellow-300 border-opacity-60 lg:border-b-2 hover:text-yellow-500 ${
              // hash === "/#about" ||
              scrollPosition >= 0 && scrollPosition < 580
                ? "text-yellow-500"
                : ""
            } `}
          >
            <Link href="#about" passHref>
              <a onClick={handleScrollSection}>About</a>
            </Link>
          </li>
          <li
            className={` transition duration-700 ease-in-out border-yellow-300 border-opacity-60 lg:border-b-2 hover:text-yellow-500  ${
              // hash === "/#projects" ||
              scrollPosition >= 600 && scrollPosition < 1222.2
                ? "text-yellow-500"
                : ""
            }`}
          >
            <Link href="#projects" passHref>
              <a onClick={handleScrollSection}>Projects</a>
            </Link>
          </li>
          <li
            className={` transition duration-700 ease-in-out border-yellow-300 border-opacity-60 lg:border-b-2 hover:text-yellow-500 ${
              // hash === "/#skills" ||
              scrollPosition >= 1222.2 && scrollPosition < 1622.2
                ? "text-yellow-500"
                : ""
            }`}
          >
            <Link href="#skills" passHref>
              <a onClick={handleScrollSection}> Skills</a>
            </Link>
          </li>
          <li
            className={`  transition duration-700 ease-in-out border-yellow-300 border-opacity-60 lg:border-b-2 hover:text-yellow-500  ${
              // hash === "/#contact" ||
              scrollPosition >= 1623 ? "text-yellow-500" : ""
            }`}
          >
            <Link href="#contact" passHref>
              <a onClick={handleScrollSection}>Contact</a>
            </Link>
          </li>
        </motion.ul>
        {/* social media linkedin and github */}
        <div className="flex items-center space-x-2 ">
          {/* cursor-pointer */}
          <Link href="https://github.com/walid-hamdi">
            <a
              className="relative w-14 h-14 block transform transition-all hover:scale-110"
              target="_blank"
            >
              <Image
                layout="fill"
                src="/images/github.svg"
                alt="github social media icon"
              />
            </a>
          </Link>

          <Link href="https://www.youtube.com/channel/UCsYOmU1a31CEEMRcQaCxR5g">
            <a
              className="relative w-14 h-14 block transform transition-all hover:scale-110"
              target="_blank"
            >
              <Image
                layout="fill"
                src="/images/youtube.svg"
                alt="youtube social media icon"
              />
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
}
