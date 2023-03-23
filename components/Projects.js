import Project from "../components/Project";

const items = [
  {
    title: "Restaurant Reservation",
    url: "https://reservation-restaurant.vercel.app/",
    stacks: [
      { title: "Next.js" },
      { title: "TailwindCSS" },
      { title: "Context API" },
      { title: "PostgreSQL" },
      { title: "Prisma" },
      { title: "TypeScript" },
    ],
    description:
      "This advanced restaurant reservation system is built with Next.js 13, Tailwind CSS, TypeScript, Prisma, and PostgreSQL. It allows for efficient and secure online table bookings and management.",
  },
  {
    title: "Rental Movies",
    url: "https://rental-movies.vercel.app/",
    stacks: [
      { title: "React.js" },
      { title: "TailwindCSS" },
      { title: "Context API" },
      { title: "Strapi" },
      { title: "Sentry" },
    ],
    description:
      "This rental movie app uses React.js and Tailwind CSS for styling, with reusable components, services for managing CRUD, auth, genres, and movies, and hooks like withRouter and useLocation. It integrates with Strapi CMS for authentication and data management and uses Sentry for error monitoring.",
  },

  {
    title: "The New Tunisia",
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
    description:
      "Empower citizens with a web app integrating multiple sector communication systems, with a voice platform for opinions & insights using ML. Real-time data to decision-makers for a more informed, engaged and responsive society in Tunisia.",
  },
  {
    title: "InJestic",
    url: "https://injestic.vercel.app/",
    stacks: [
      { title: "Next.js" },
      { title: "TailwindCSS" },
      { title: "Context API" },
      { title: "GraphQL" },
      { title: "Shopify" },
      { title: "Framer  motion" },
    ],
    description:
      "E-commerce platform! Designed specifically for Shopify store, this platform seamlessly integrates with an existing store to deliver an enhanced shopping experience to customers.",
  },
];

const Projects = () => {
  return (
    <div className=" mx-auto lg:px-52 px-7" id="projects">
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
