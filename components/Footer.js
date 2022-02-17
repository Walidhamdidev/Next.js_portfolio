import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#2c3e50a4] bg-opacity-90 p-5 w-full  text-white  flex items-center justify-around text-center">
      <p>Copyright &copy; {new Date().getFullYear()} Powered by Walid Hamdi</p>
    </div>
  );
}
