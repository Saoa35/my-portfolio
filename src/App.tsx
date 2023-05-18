import React from "react";
import "./styles/main.scss";

import vk from "./img/icons/vk.svg";
import twitter from "./img/icons/twitter.svg";
import linkedIn from "./img/icons/linkedIn.svg";
import instagram from "./img/icons/instagram.svg";
import gitHub from "./img/icons/gitHub.svg";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";

function App(): React.JSX.Element {
  return (
    <div className="App">
      <NavBar />

      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Redux Toolkit, HTML, CSS, SASS,
                NPM, BootStrap, TailwindCSS, Git
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, MongoDB</p>
            </li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="#!">
                  <img src={vk} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={twitter} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={linkedIn} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={instagram} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={gitHub} alt="Link" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2023 frontend-dev.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
