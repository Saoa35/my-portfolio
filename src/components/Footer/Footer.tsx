import React from "react";
import "./style.css";

import telegram from "./../../img/icons/telegram.svg";
import skype from "./../../img/icons/skype.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import whatsapp from "./../../img/icons/whatsapp.svg";
import gitHub from "./../../img/icons/gitHub.svg";

export const Footer = (): React.JSX.Element => {
  const social = [
    { link: "https://join.skype.com/invite/Akb6lZbgAL2D", image: skype },
    {
      link: "https://www.linkedin.com/in/oleksandr-makharadze/",
      image: linkedIn,
    },
    {
      link: "https://web.whatsapp.com/send/?phone=380666784893",
      image: whatsapp,
    },
    { link: "https://github.com/Saoa35", image: gitHub },
    { link: "https://t.me/Alexandr_Makharadze", image: telegram },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            {social.map((obj, i) => {
              return (
                <li className="social__item" key={i}>
                  <a href={obj.link} target="_blank" rel="noreferrer">
                    <img src={obj.image} alt="Link" />
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="copyright">
            <p>© 2023 web-development</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
