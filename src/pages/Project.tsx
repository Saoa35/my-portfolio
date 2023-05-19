import React from "react";
import { GitButton } from "../components/GitButton/GitButton.tsx";
import { useParams } from "react-router-dom";
import { projects } from "../assets/projects.js";
import img from "./../img/projects/burger-lord.png";

export const Project = (): React.JSX.Element => {
  const { id } = useParams();

  const project = projects[id as string];

  console.log(project);

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.img}
            alt="Pict"
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Technologies: {project.technologies}</p>
          </div>

          <GitButton link={project.gitHubLink} />
        </div>
      </div>
    </main>
  );
};
