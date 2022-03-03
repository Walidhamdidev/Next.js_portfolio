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
    { skill: "Node.js" },
    { skill: "GraphQL" },
    { skill: "NoSQL" },
    { skill: "SQL" },
    { skill: "Git" },
    { skill: "Docker" },
  ];

  return (
    <div className="mt-20  mx-auto lg:px-52 px-5" id="skills">
      <p className="border-b-4 inline-flex pb-1 text-white  mb-14 font-bold text-3xl md:text-4xl  border-yellow-500">
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
