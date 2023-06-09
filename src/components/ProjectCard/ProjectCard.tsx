import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

export const ProjectCard = (props): React.JSX.Element => {
  return (
    <NavLink to={`/project/${props.id}`}>
      <li className="project">
        <img src={props.img} alt="Project img" className="project__img" />
        <h3 className="project__title">{props.title}</h3>
      </li>
    </NavLink>
  );
};
