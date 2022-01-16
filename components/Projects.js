import Project from "../components/Project";

const Projects = () => {
  const items = [
    {
      title: "The New Tunisia",
      url: "https://thenewtunisia.vercel.app/",

      stacks: [
        { title: "Next.js" },
        { title: "Peer.js" },
        { title: "Context" },
        { title: "D3.js" },
        { title: "Firebase" },
        { title: "CSS modules" },
        { title: "Framer  motion" },
      ],
      description: "Digital communication platform",
    },
    {
      title: "Movie Streaming",
      url: "https://streaming-videos-kv86v273u-walid-hamdi.vercel.app/",
      stacks: [
        { title: "Next.js" },
        { title: "Youtube API" },
        { title: "Context" },
        { title: "GraphQL" },
        { title: "CSS modules" },
        { title: "Framer  motion" },
      ],
      description: "Streaming videos platform",
    },
    {
      title: "E-commerce",
      url: "https://shopify-starter-walid-hamdi.vercel.app/",
      stacks: [
        { title: "Next.js" },
        { title: "TailwindCSS" },
        { title: "Context" },
        { title: "GraphQL" },
        { title: "Shopify" },
        { title: "Framer  motion" },
      ],
      description: "Headless E-commerce that provide goods",
    },
    {
      title: "Find Around",
      url: "https://find-around.vercel.app/",

      stacks: [
        { title: "Next.js" },
        { title: "YOJ API" },
        { title: "Unsplash API" },
        { title: "Context" },
        { title: "CSS modules" },
        { title: "Framer  motion" },
      ],
      description: "Allows you to find stores, places near me",
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
