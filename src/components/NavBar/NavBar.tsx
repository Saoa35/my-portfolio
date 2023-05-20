import React from "react";
import { NavLink } from "react-router-dom";
import { DarkButton } from "../DarkButton/DarkButton.tsx";
import "./style.css";

export const NavBar = (): React.JSX.Element => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  interface Links {
    link: string;
    title: string;
  }

  const links: Links[] = [
    { link: "/", title: "Home" },
    { link: "/projects", title: "Projects" },
    { link: "/contacts", title: "Contacts" },
  ];

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to={"/"} className="logo">
            <strong>My</strong> portfolio
          </NavLink>

          <DarkButton />

          <ul className="nav-list">
            {links.map((link, index) => {
              return (
                <li className="nav-list__item" key={index}>
                  <NavLink
                    to={link.link}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
