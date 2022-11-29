import Skill from "../components/Skill";

const Skills = () => {
  const items = [
    { skill: "HTML/CSS", type: "foundation" },
    { skill: "Sass", type: "foundation" },
    { skill: "JavaScript", type: "foundation" },
    { skill: "TypeScript", type: "foundation" },
    { skill: "SQL", type: "foundation" },
    { skill: "NoSQL", type: "foundation" },
    { skill: "Git", type: "foundation" },
    { skill: "Docker", type: "foundation" },
    { skill: "TailwindCSS", type: "cssFramework" },
    { skill: "React.js", type: "frontend" },
    { skill: "Next.js", type: "frontend" },
    { skill: "Redux Toolkit", type: "frontend" },
    { skill: "Node.js", type: "backend" },
    { skill: "Strapi", type: "new" },
    { skill: "Flutter", type: "new" },
  ];

  return (
    <div className="mt-14  mx-auto lg:px-52 px-5" id="skills">
      <h1 className="border-b-4 inline-flex pb-1 text-white  mb-10 font-bold text-3xl md:text-4xl  border-yellow-500">
        Technical skills
      </h1>

      <ul className="">
        {items.map((item, index) => (
          <Skill key={index} skill={item.skill} skillType={item.type} />
        ))}
      </ul>
    </div>
  );
};

export default Skills;
