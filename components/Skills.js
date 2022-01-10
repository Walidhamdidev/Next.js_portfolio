import Skill from "../components/Skill";

const Skills = () => {
  const items = [
    { skill: "HTML5" },
    { skill: "CSS3" },
    { skill: "Sass" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "TailwindCSS" },
    { skill: "React.js" },
    { skill: "Next.js" },
    { skill: "React Native" },
    { skill: "Node.js" },
    { skill: "GraphQL" },
    { skill: "NoSQL" },
    { skill: "SQL" },
    { skill: "Git" },
  ];

  return (
    <div className="mt-20  mx-auto lg:px-52 px-5" id="skills">
      {/* <p className="border-b-2 inline-flex  text-white mt-10 font-bold text-3xl uppercase border-yellow-500">
        Technical skills
      </p> */}

      <p className="border-b-4 inline-flex pb-1 text-white  mb-14 font-bold text-3xl md:text-5xl  border-yellow-500">
        Technical skills
      </p>

      <ul className="">
        {items.map((item, index) => (
          <Skill key={index} skill={item.skill} />
        ))}
      </ul>
    </div>
  );
};

export default Skills;
