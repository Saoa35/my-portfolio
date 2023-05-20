import React, { useEffect, useRef, useState } from "react";
import "./style.scss";

import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";

export const DarkButton = (): React.JSX.Element => {
  const [darkMode, setDarkMode] = useState<DarkMode>("light");
  const btnRef = useRef<HTMLButtonElement>(null);

  type DarkMode = "light" | "dark";

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
      btnRef.current?.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      btnRef.current?.classList.remove("dark-mode-btn--active");
    }
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode((current) => {
      return current === "light" ? "dark" : "light";
    });
  };

  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={toggleMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};
