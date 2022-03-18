import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#2c3e50a4] bg-opacity-90 p-5 w-full md:h-14 text-white space-y-5 md:space-y-0 flex flex-col md:flex-row items-center justify-around text-center">
      <p>Copyright &copy; {new Date().getFullYear()} Powered by Walid Hamdi</p>
      <Link href="https://play.google.com/store/apps/dev?id=7080076801678661649">
        <a
          className="bg-yellow-700 px-3 py-1 hover:bg-yellow-600 rounded transform transition-all flex items-center justify-center hover:scale-110"
          target="_blank"
        >
          <Image
            width={30}
            height={30}
            src="/images/google-play.svg"
            objectFit="cover"
            alt="Google play icon"
          />
          <p className=" ">My Google Play Apps</p>
        </a>
      </Link>
    </div>
  );
}
