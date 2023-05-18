import React from "react";
import { Header } from "../components/Header/Header.tsx";

export const Home = (): React.JSX.Element => {
  return (
    <>
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
    </>
  );
};
