import React, { useEffect, useState } from "react";
import "./style.scss";

import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";

export const DarkButton = (): React.JSX.Element => {
  const [darkMode, setDarkMode] = useState("light");

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode((current) => {
      return current === "light" ? "dark" : "light";
    });
  };

  return (
    <button className="dark-mode-btn" onClick={toggleMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};
