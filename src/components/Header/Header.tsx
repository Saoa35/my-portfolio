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
          <br />a web developer
        </h1>
        <div className="header__text">
          <p>with passion for coding, learning and creating.</p>
        </div>
        <a
          href="https://drive.google.com/file/d/1k6XY-PbUHFJkLZTzJirJmXtoCqtxb6yO/view?usp=sharing"
          download=""
          className="btn"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};
