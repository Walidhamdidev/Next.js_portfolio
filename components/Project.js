import Link from "next/link";

const Project = ({ title, url, stacks, description }) => {
  return (
    <div className="w-full h-full p-5 bg-gray-800 bg-opacity-90 text-white  rounded-sm shadow-md cursor-pointer ">
      <p className="font-bold text-2xl uppercase mb-5">{title}</p>
      <p>{description}</p>
      <div className="mt-5">
        {stacks.map((stack) => (
          <span
            key={stack.title}
            className="inline-block border-2 m-1 border-gray-900 hover:bg-yellow-500 bg-white px-3 py-2 text-black rounded"
          >
            {stack.title}
          </span>
        ))}
      </div>
      <Link href={url}>
        <a target="_blank">
          <span className="inline-block border-2 m-1 shadow-xl bg-yellow-500 transition hover:scale-105  px-3 py-2 text-black rounded">
            Demo
          </span>
        </a>
      </Link>
    </div>
  );
};

export default Project;
