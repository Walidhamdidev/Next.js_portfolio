import Skill from "../components/Skill";

const Skills = () => {
  const items = [
    { skill: "HTML5" },
    { skill: "CSS3" },
    { skill: "Sass" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    // { skill: "SQL" },
    // { skill: "NoSQL" },
    { skill: "Git" },
    { skill: "TailwindCSS" },
    {skill: "Material UI"}
    { skill: "Bootstrap" },
    { skill: "React.js" },
    { skill: "Redux" },
    { skill: "Next.js" },
    { skill: "Node.js" },
    { skill: "APIs" },
    // { skill: "GraphQL" },
    // { skill: "Docker" },
    // { skill: "Dart" },
    // { skill: "Flutter" },
  ];

  return (
    <div className="mt-14  mx-auto lg:px-52 px-5" id="skills">
      <h1 className="border-b-4 inline-flex pb-1 text-white  mb-10 font-bold text-3xl md:text-4xl  border-yellow-500">
        Technical skills
      </h1>

      <ul className="">
        {items.map((item, index) => (
          <Skill key={index} skill={item.skill} />
        ))}
      </ul>
    </div>
  );
};

export default Skills;
