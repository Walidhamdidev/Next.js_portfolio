import Link from "next/link";
import Project from "../components/Project";
import { useState } from "react";

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
    type: "web",
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
    type: "web",
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
    type: "web",
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
    type: "web",
  },
  {
    title: "Zoned Express app",
    url: "https://github.com/walid-hamdi/Flutter_zoned_express",
    stacks: [
      { title: "Flutter" },
      { title: "Firebase" },
      { title: "Provider" },
    ],
    description:
      "A platform for subscribing to newsletters covering design, tech, marketing and more. Easy to use interface with search, newsletter cards and horizontal list.",
    type: "mobile",
  },
  {
    title: "Done With It app",
    url: "https://github.com/walid-hamdi/ReactNative_donewithit",
    stacks: [
      { title: "React Native" },
      { title: "Strapi" },
      { title: "Context API" },
      { title: "TypeScript" },
    ],
    description:
      "This React Native app is designed for users to easily sell their used goods. The app allows sellers to upload product details and images, set prices, and manage orders. Buyers can search for items by category and location, view product details, and make purchases using secure payment methods. The app also supports push notifications.",
    type: "mobile",
  },
  {
    title: "Online Therapy app",
    url: "https://github.com/walid-hamdi/Flutter_emotionAi",
    stacks: [
      { title: "Flutter" },
      { title: "Express.js" },
      { title: "WebRTC" },
      { title: "Socket.IO" },
      { title: "Tensorflow" },
      { title: "BLoC" },
      { title: "Sentry" },
      { title: "AWS" },
      { title: "CI/CD" },
      { title: "Figma" },
    ],
    description:
      "The Virtual Emotion Coach & Online Therapy app offers emotional insights through your camera and access to licensed therapists for online therapy sessions. Convenient and accessible mental health support for your emotional well-being.",
    type: "mobile",
  },
  {
    title: "News app",
    url: "https://github.com/walid-hamdi/Flutter_news",
    stacks: [{ title: "Flutter" }, { title: "BLoc" }],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis commodi rerum cumque sit tempora. Maxime ullam vitae nemo sint pariatur.",
    type: "mobile",
  },
];

const Projects = () => {
  // const [projectType, setProjectType] = useState("web");

  // const styleProjectFilter = (type) => {
  //   return `inline-block border-2 m-1 cursor-pointer shadow-xl ${
  //     type === "web" ? "bg-blue-700" : "bg-blue-500"
  //   }
  // text-white hover:scale-105 px-3 py-2 rounded
  // transition `;
  // };

  return (
    <div className=" mx-auto lg:px-52 px-5" id="projects">
      <h1 className="border-b-4 inline-flex pb-1  text-white  mb-10 font-bold text-3xl md:text-4xl  border-yellow-500">
        Recent works
      </h1>

      {/* <div className="mb-3">
        <span
          onClick={() => setProjectType("web")}
          className={styleProjectFilter("web")}
        >
          Web apps
        </span>
        <span
          onClick={() => setProjectType("mobile")}
          className={styleProjectFilter("mobile")}
        >
          Mobile apps
        </span>
      </div> */}
      <div className="grid gap-5   md:grid-cols-2 ">
        {items.map((item) => {
          return item.type === "web" ? (
            <Project
              key={item.title}
              title={item.title}
              url={item.url}
              stacks={item.stacks}
              description={item.description}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Projects;
