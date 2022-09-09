import React from "react";
import Project from "./Project";

const projects = [
  {
    name: "Anime World",
    thumbnail: "/images/anime_world.png",
    description: `Anime World is a perfect place for weebs to choose their choice of Anime and Manga. It shows the list of all anime with the ratings,
        characters, and episodes.`,
    skills: ["React.js", "React Query", "Jikan API"],
  },
  {
    name: "Instagram Clone",
    thumbnail: "/images/instagram_clone.png",
    description: `An Instagram clone where users can like, share, comment, and
    create the posts. Users can also search the other users and follow
    them.`,
    skills: ["React.js", "React Query", "Node.js", "Express", "MongoDB"],
  },
  {
    name: "Student Ocean",
    thumbnail: "/images/student_ocean.png",
    description: `Student Ocean is an online student community where students can ask and answer the questions. It also allows students to like, comment, and post articles.`,
    skills: [
      "React.js",
      "React Query",
      "Node.js",
      "Express",
      "MySQL",
      "Prisma",
    ],
  },
];

const ProjectList = () => {
  return (
    <section className="mx-auto max-w-screen-lg py-10" id="projects">
      <h2 className="section-heading">Projects</h2>
      <div className="projects mt-8">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
