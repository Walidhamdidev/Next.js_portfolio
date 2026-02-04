import Project from "../components/Project";

const items = [
  {
    title: "Fluener",
    url: "https://fluener.com",
    stacks: [
      { title: "Next.js" },
      { title: "TypeScript" },
      { title: "PWA" },
      { title: "Push Notifications" },
      { title: "Chakra UI" },
      { title: "Zustand" },
      { title: "Node.js" },
      { title: "Socket.io" },
      { title: "MongoDB" },
      { title: "Redis" },
      { title: "AI (TTS/STT/LLM)" },
      { title: "Sentry" },
    ],
    description:
      "Language-learning platform with interactive communities where users can practice speaking, play engaging games, and win prizes. Features real-time voice practice and gamified learning experiences to boost language skills.",
  },
  {
    title: "The New Tunisia",
    url: "https://thenewtunisia.vercel.app/",
    stacks: [
      { title: "Next.js" },
      { title: "Peer.js" },
      { title: "Context API" },
      { title: "PWA" },
      { title: "Firebase" },
      { title: "CSS modules" },
      { title: "Framer motion" },
      { title: "Sentry" },
    ],
    description:
      "Empower citizens with a web app integrating multiple sector communication systems, with a voice platform for opinions & insights using ML. Real-time data to decision-makers for a more informed, engaged and responsive society in Tunisia.",
  },
  {
    title: "InJestic",
    url: "https://injestic.vercel.app/",
    stacks: [
      { title: "Next.js" },
      { title: "TailwindCSS" },
      { title: "Shopify API" },
      { title: "Context API" },
      { title: "GraphQL" },
    ],
    description:
      "E-commerce platform! Designed specifically for Shopify stores, this platform seamlessly integrates with your existing store to deliver an enhanced shopping experience to your customers.",
  },
];

const Projects = () => {
  return (
    <div className=" mx-auto lg:px-52 px-5" id="projects">
      <h1 className="border-b-4 inline-flex pb-1  text-white  mb-10 font-bold text-3xl md:text-4xl  border-yellow-500">
        Recent works
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
