import Skill from "../components/Skill";

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
  { skill: "Redux", type: "frontend" },
  { skill: "Node.js", type: "backend" },
  { skill: "Strapi", type: "backend" },
  { skill: "Flutter", type: "new" },
  { skill: "React Native", type: "new" },
];

const Skills = () => {
  return (
    <div className="mt-14  mx-auto lg:px-52 px-5" id="skills">
      <h1 className="border-b-4 inline-flex pb-1 text-white  font-bold text-3xl md:text-4xl  border-yellow-500">
        Technical skills
      </h1>

      <ul className="mt-7">
        {items.map((item, index) => (
          <Skill key={index} skill={item.skill} skillType={item.type} />
        ))}
      </ul>
    </div>
  );
};

export default Skills;
