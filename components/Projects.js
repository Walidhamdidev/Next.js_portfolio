import Project from "../components/Project";

const Projects = () => {
  const items = [
    {
      title: "Movie Streaming",
      url: "https://streaming-videos-kv86v273u-walid-hamdi.vercel.app/",
      stacks: [
        { title: "Next.js" },
        { title: "Node.js" },
        { title: "Material-UI" },
      ],
      description:
        "This web app is an e-commerce that provide goods for tunisian community",
    },
    {
      title: "The New Tunisia",
      url: "https://thenewtunisia.vercel.app/",

      stacks: [
        { title: "React.js" },
        { title: "Firebase" },
        { title: "D3.js" },
        { title: "SASS" },
      ],
      description:
        "This web app is communcation system to solve issues exists in Tunisia",
    },
    {
      title: "Injestic Ecommerce",
      url: "https://shopify-starter-8btdcxbx4-walid-hamdi.vercel.app/",

      stacks: [{ title: "Next.js" }, { title: "Tailwindcss" }],
      description:
        "This web app is communcation system to solve issues exists in Tunisia",
    },
    {
      title: "Find Around",
      url: "https://find-around.vercel.app/",

      stacks: [{ title: "Next.js" }, { title: "Tailwindcss" }],
      description:
        "This web app is communcation system to solve issues exists in Tunisia",
    },
  ];

  return (
    <div className=" mx-auto lg:px-52 px-5" id="projects">
      <p className="border-b-4 inline-flex pb-1  text-white  mb-14 font-bold text-3xl md:text-5xl  border-yellow-500">
        My Recent Work
      </p>

      <div className="grid gap-5   md:grid-cols-2 ">
        {items.map((item) => {
          return (
            <Project
              key={item.title}
              title={item.title}
              url={item.url}
              stacks={item.stacks}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
