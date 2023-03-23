import Link from "next/link";
import Project from "../components/Project";

const items = [
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
      { title: "Sentry" },
    ],
    description:
      "Empower citizens with a web app integrating multiple sector communication systems, with a voice platform for opinions & insights using ML. Real-time data to decision-makers for a more informed, engaged and responsive society in Tunisia.",
  },
  {
    title: "Online Therapy",
    url: "https://github.com/walid-hamdi/Flutter_emotionAi",
    stacks: [
      { title: "Flutter" },
      { title: "Express.js" },
      { title: "WebRTC" },
      { title: "Socket.IO" },
      { title: "Tensorflow" },
      { title: "BLoC" },
      { title: "Sentry" },
    ],
    description:
      "The Virtual Emotion Coach & Online Therapy app offers emotional insights through your camera and access to licensed therapists for online therapy sessions. Convenient and accessible mental health support for your emotional well-being.",
    type: "mobile",
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
