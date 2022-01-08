import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const userouter = useRouter();
  const [showNav, setShowNav] = useState(false);

  return (
    <div
      className={`   
      bg-[#2c3e5000] bg-opacity-90
       text-white py-10  text-xl mx-auto lg:px-52 px-10`}
    >
      <nav className="container flex items-center justify-around">
        {/* <Link href="/" className="cursor-pointer ml-10">
          <a className="bg-white inline-block w-14 h-14 align-middle  transform transition-all hover:scale-110 relative overflow-hidden rounded-full">
            <Image src="/images/profile.svg" layout="fill" alt="logo" />
          </a>
        </Link> */}

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
            onClick={() => setShowNav(false)}
            className={` transition duration-700 ease-in-out border-yellow-300 border-opacity-60 lg:border-b-2 hover:text-yellow-500 ${
              userouter.pathname === "/" ? "text-yellow-500" : ""
            } `}
          >
            <Link href="/">About</Link>
          </li>
          <li
            onClick={() => setShowNav(false)}
            className={` transition duration-700 ease-in-out border-yellow-300 border-opacity-60 lg:border-b-2 hover:text-yellow-500  ${
              userouter.pathname === "/projects" ? "text-yellow-500" : ""
            }`}
          >
            <Link href="/projects">Projects</Link>
          </li>
          <li
            onClick={() => setShowNav(false)}
            className={` transition duration-700 ease-in-out border-yellow-300 border-opacity-60 lg:border-b-2 hover:text-yellow-500 ${
              userouter.pathname === "/skills" ? "text-yellow-500" : ""
            }`}
          >
            <Link href="/skills">Skills</Link>
          </li>
          <li
            onClick={() => setShowNav(false)}
            className={`  transition duration-700 ease-in-out border-yellow-300 border-opacity-60 lg:border-b-2 hover:text-yellow-500  ${
              userouter.pathname === "/contact" ? "text-yellow-500" : ""
            }`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* </div> */}

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
