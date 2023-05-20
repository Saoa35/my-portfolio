import React from "react";
import "./style.css";

export const Header = (): React.JSX.Element => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hello, my name is <em>Oleksandr</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a
          href="https://drive.google.com/file/d/1H-7zheSrfNfUyhCcPv4_gOcuz-J-eFOr/view?usp=sharing"
          className="btn"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};
