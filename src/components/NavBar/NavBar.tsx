import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";

export const NavBar = (): React.JSX.Element => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to={"/"} className="logo">
            <strong>My</strong> portfolio
          </NavLink>

          <button className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to={"/"}
                className="nav-list__link nav-list__link--active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to={"/projects"} className="nav-list__link">
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to={"/contacts"} className="nav-list__link">
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
