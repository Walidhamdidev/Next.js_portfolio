import Project from "../components/Project";

const Projects = () => {
  const items = [
    {
      title: "Communication System",
      url: "https://thenewtunisia.vercel.app/",

      stacks: [
        { title: "Next.js" },
        { title: "Peer.js" },
        { title: "Context" },
        // { title: "D3.js" },
        { title: "PWA" },
        { title: "Firebase" },
        { title: "CSS modules" },
        { title: "Framer  motion" },
      ],
      description: "Voice Communication Platform",
    },
    {
      title: "Headless E-Commerce",
      url: "https://injestic.vercel.app/",
      stacks: [
        { title: "Next.js" },
        { title: "TailwindCSS" },
        { title: "Context" },
        { title: "GraphQL" },
        { title: "Shopify" },
        { title: "Framer  motion" },
      ],
      description: "Headless E-Commerce that provides goods",
    },
    {
      title: "Movie Streaming",
      url: "https://streamingvideos.vercel.app/",
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
      title: "Find Around",
      url: "https://findaround.vercel.app/",

      stacks: [
        { title: "Next.js" },
        { title: "Foursquare API " },
        { title: "Unsplash API" },
        { title: "Airtable" },
        { title: "Context" },
        { title: "CSS modules" },
        { title: "Framer  motion" },
      ],
      description: "Allows you to find stores nearby",
    },
  ];

  return (
    <div className=" mx-auto lg:px-52 px-5" id="projects">
      <h1 className="border-b-4 inline-flex pb-1  text-white  mb-14 font-bold text-3xl md:text-4xl  border-yellow-500">
        My Recent Works
      </h1>

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
