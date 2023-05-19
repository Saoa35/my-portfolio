import React from "react";
import "./style.scss";

import gitHubIcon from "./../../img/icons/gitHub-black.svg";

export const GitButton = (): React.JSX.Element => {
  return (
    <a href="#!" className="btn-outline">
      <img src={gitHubIcon} alt="Pict" />
      GitHub repository
    </a>
  );
};
