import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [showNav, setShowNav] = useState(false);
  const [showBgNav, setShowBgNav] = useState(false);

  const dropdown = useRef(null);

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
      if (window.scrollY > 300) {
        setShowBgNav(true);
      }
      if (window.scrollY < 300) {
        setShowBgNav(false);
      }
    };

    window.addEventListener("scroll", showBg);
  }, [showBgNav]);

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
       bg-opacity-90 ${
         showBgNav
           ? "bg-[#2c3e50] sm:px-32 px-5"
           : "bg-[#2c3e5000] sm:px-52 px-10"
       }
       text-white py-10  text-xl mx-auto `}
    >
      <nav className="container flex items-center justify-around">
        <div className="flex">
          <Link href="/" className="cursor-pointer">
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
                src="/images/profile.svg"
                alt="github"
              />
            </a>
          </Link>
          <div className="w-14 h-14 md:hidden"></div>
        </div>
        <button
          className="inline-block lg:hidden"
          onClick={() => setShowNav(!showNav)}
        >
          <a className="block  relative w-12 h-12">
            <Image layout="fill" src="/images/menu.svg" alt="menu" />
          </a>
        </button>
        <ul
          ref={dropdown}
          className={`${
            showNav
              ? `
              absolute
              top-32
             
              py-10
              font-bold
              uppercase 
              text-center
              space-y-5
              bg-gradient-to-r from-[#314355] to-[#000000]
               
              `
              : "hidden space-x-20"
          } lg:flex w-full h-fit block justify-center items-center `}
        >
          {/* lg:inline lg:mt-0 lg:static lg:transform-none lg:capitalize lg:font-normal w-0 */}
          <li
            onClick={() => {
              // router.push("/");
              setShowNav(false);

              window.scrollTo({
                top: dropdown.current.offsetTop,
                behavior: "smooth",
              });
            }}
            className={` transition duration-700 ease-in-out border-yellow-300 border-opacity-60 lg:border-b-2 hover:text-yellow-500 ${
              router.pathname === "/" ? "text-yellow-500" : ""
            } `}
          >
            About
          </li>
          <li
            onClick={() => {
              // router.push("/");
              setShowNav(false);
              window.scrollTo({
                top: dropdown.current.offsetTop,
                behavior: "smooth",
              });
            }}
            className={` transition duration-700 ease-in-out border-yellow-300 border-opacity-60 lg:border-b-2 hover:text-yellow-500  ${
              router.pathname === "/projects" ? "text-yellow-500" : ""
            }`}
          >
            Projects
          </li>
          <li
            onClick={() => {
              // router.push("/");
              setShowNav(false);
              window.scrollTo({
                top: dropdown.current.offsetTop,
                behavior: "smooth",
              });
            }}
            className={` transition duration-700 ease-in-out border-yellow-300 border-opacity-60 lg:border-b-2 hover:text-yellow-500 ${
              router.pathname === "/skills" ? "text-yellow-500" : ""
            }`}
          >
            Skills
          </li>
          <li
            onClick={() => {
              // router.push("/");
              setShowNav(false);
              window.scrollTo({
                top: dropdown.current.offsetTop,
                behavior: "smooth",
              });
            }}
            className={`  transition duration-700 ease-in-out border-yellow-300 border-opacity-60 lg:border-b-2 hover:text-yellow-500  ${
              router.pathname === "/contact" ? "text-yellow-500" : ""
            }`}
          >
            Contact
          </li>
        </ul>
        {/* social media linkedin and github */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <Link href="https://github.com/walid-hamdi">
            <a
              className="relative w-14 h-14 block transform transition-all hover:scale-110"
              target="_blank"
            >
              <Image layout="fill" src="/images/github.svg" alt="github" />
            </a>
          </Link>

          <Link href="https://www.youtube.com/channel/UC5YyWAQ7uctClSMW7Nqf0qA">
            <a
              className="relative w-14 h-14 block transform transition-all hover:scale-110"
              target="_blank"
            >
              <Image layout="fill" src="/images/youtube.svg" alt="github" />
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
}
