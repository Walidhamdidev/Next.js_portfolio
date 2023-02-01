export default function Footer() {
  return (
    <div className="bg-[#2c3e50a4] mt-4 md:mt-0 bg-opacity-90 p-5 w-full md:h-14 text-white space-y-5 md:space-y-0 flex flex-col md:flex-row items-center justify-around text-center">
      <p>&copy; {new Date().getFullYear()} Walid Hamdi.</p>
    </div>
  );
}
