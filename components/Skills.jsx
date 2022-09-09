import React from "react";
import Badge from "../shared/Badge";

const skills = [
  {
    classes: "bg-slate-800 border border-slate-700 text-slate-200 font-medium",
    name: "HTML5",
  },
  {
    classes: "bg-slate-800 border border-slate-700 text-slate-200 font-medium",
    name: "CSS3",
  },
  {
    classes: "bg-slate-800 border border-slate-700 text-slate-200 font-medium",
    name: "Bootstrap",
  },
  {
    classes: "bg-slate-800 border border-slate-700 text-slate-200 font-medium",
    name: "Tailwind CSS",
  },
  {
    classes: "bg-slate-800 border border-slate-700 text-slate-200 font-medium",
    name: "JavaScript",
  },
  {
    classes: "bg-slate-800 border border-slate-700 text-slate-200 font-medium",
    name: "React.js",
  },
  {
    classes: "bg-slate-800 border border-slate-700 text-slate-200 font-medium",
    name: "Redux",
  },
  {
    classes: "bg-slate-800 border border-slate-700 text-slate-200 font-medium",
    name: "React Query",
  },
  {
    classes: "bg-slate-800 border border-slate-700 text-slate-200 font-medium",
    name: "Redux Toolkit",
  },
];

const technologiesToLearn = [
  {
    classes: "border border-[1px] border-slate-700 text-slate-300",
    name: "TypeScript",
  },
  {
    classes: "border border-[1px] border-slate-700 text-slate-300",
    name: "Node.js",
  },
  {
    classes: "border border-[1px] border-slate-700 text-slate-300",
    name: "Express.js",
  },
  {
    classes: "border border-[1px] border-slate-700 text-slate-300",
    name: "GraphQL",
  },
  {
    classes: "border border-[1px] border-slate-700 text-slate-300",
    name: "Chakra UI",
  },
  {
    classes: "border border-[1px] border-slate-700 text-slate-300",
    name: "MUI",
  },
];

const renderBadges = (badgeList) =>
  badgeList.map(({ name, ...rest }, index) => (
    <Badge key={index} {...rest}>
      {name}
    </Badge>
  ));

const Skills = () => {
  return (
    <section className="py-10" id="skills">
      <h2 className="section-heading">Skills</h2>
      <div className="mx-auto mt-10 flex max-w-sm flex-wrap justify-center gap-3">
        {renderBadges(skills)}
      </div>
      <p className="mt-10 text-center text-lg font-medium tracking-tight text-slate-200">
        Here are few technologies I&apos;m planning to learn in 2022:
      </p>
      <div className="mx-auto mt-6 flex max-w-sm flex-wrap justify-center gap-3">
        {renderBadges(technologiesToLearn)}
      </div>
    </section>
  );
};

export default Skills;
