import Project from "../components/Project";

const Projects = () => {
  const items = [
    {
      title: "Thenewtunisia.com",
      url: "https://thenewtunisia.vercel.app/",

      stacks: [
        { title: "Next.js" },
        { title: "Peer.js" },
        { title: "WebRTC" },
        { title: "Socket.io" },
        { title: "Context API" },
        // { title: "D3.js" },
        { title: "PWA" },
        { title: "Firebase" },
        { title: "CSS modules" },
        { title: "Framer  motion" },
      ],
      description: "Voice based communication system platform.",
    },
    {
      title: "Injestic.com",
      url: "https://injestic.vercel.app/",
      stacks: [
        { title: "Next.js" },
        { title: "TypeScript" },
        { title: "TailwindCSS" },
        { title: "Context API" },
        { title: "GraphQL" },
        { title: "Shopify" },
        { title: "Framer  motion" },
      ],
      description:
        "Store to sell products online based on shopify as a backend.",
    },
  ];

  return (
    <div className=" mx-auto lg:px-52 px-5" id="projects">
      <h1 className="border-b-4 inline-flex pb-1  text-white  mb-10 font-bold text-3xl md:text-4xl  border-yellow-500">
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
