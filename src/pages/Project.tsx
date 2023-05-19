import React from "react";
import { GitButton } from "../components/GitButton/GitButton.tsx";
import img from "./../img/projects/burger-lord.png";

export const Project = (): React.JSX.Element => {
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">Video service</h1>

          <img src={img} alt="Pict" className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: React, Node.js, MongoDB</p>
          </div>

          <GitButton />
        </div>
      </div>
    </main>
  );
};
