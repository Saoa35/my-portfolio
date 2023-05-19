import React from "react";
import { ProjectCard } from "../components/ProjectCard/ProjectCard.tsx";
import { projects } from "./../assets/projects.js";

export const Projects = (): React.JSX.Element => {
  interface Project {
    id: number;
    title: string;
    technologies: string;
    img: any;
    gitHubLink: string;
  }

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project: Project) => {
            return <ProjectCard key={project.id} {...project} />;
          })}
        </ul>
      </div>
    </main>
  );
};
