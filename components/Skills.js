import Skill from "../components/Skill";

const Skills = () => {
  const items = [
    { skill: "HTML5", type: "foundation" },
    { skill: "CSS3", type: "foundation" },
    { skill: "Sass", type: "foundation" },
    { skill: "JavaScript", type: "foundation" },
    { skill: "TypeScript", type: "foundation" },
    { skill: "SQL", type: "foundation" },
    { skill: "NoSQL", type: "foundation" },
    { skill: "Git", type: "foundation" },
    { skill: "Docker", type: "foundation" },
    { skill: "TailwindCSS", type: "cssFramework" },
    { skill: "Bootstrap", type: "cssFramework" },
    { skill: "Material UI", type: "cssFramework" },
    { skill: "React.js", type: "jsFramework" },
    { skill: "Next.js", type: "jsFramework" },
    { skill: "Node.js", type: "jsFramework" },
    { skill: "Redux", type: "jsFramework" },
    { skill: "Angular", type: "jsFramework" },
    { skill: "Shopify" },
    { skill: "APIs" },
    { skill: "GraphQL" },
    { skill: "Dart" },
    { skill: "Flutter" },
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
