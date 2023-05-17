import React from "react";
import "./styles/main.scss";

function App(): React.JSX.Element {
  return (
    <div className="App">
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <a href="./index.html" className="logo">
              <strong>My</strong> portfolio
            </a>

            <button className="dark-mode-btn">
              <img
                src="./img/icons/sun.svg"
                alt="Light mode"
                className="dark-mode-btn__icon"
              />
              <img
                src="./img/icons/moon.svg"
                alt="Dark mode"
                className="dark-mode-btn__icon"
              />
            </button>

            <ul className="nav-list">
              <li className="nav-list__item">
                <a
                  href="./index.html"
                  className="nav-list__link nav-list__link--active"
                >
                  Home
                </a>
              </li>
              <li className="nav-list__item">
                <a href="./projects.html" className="nav-list__link">
                  Projects
                </a>
              </li>
              <li className="nav-list__item">
                <a href="./contacts.html" className="nav-list__link">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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
          <a href="#!" className="btn">
            Download CV
          </a>
        </div>
      </header>

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
                  <img src="./img/icons/vk.svg" alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src="./img/icons/instagram.svg" alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src="./img/icons/twitter.svg" alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src="./img/icons/gitHub.svg" alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src="./img/icons/linkedIn.svg" alt="Link" />
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
