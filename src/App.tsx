import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { Contacts } from "./pages/Contacts.tsx";
import { Home } from "./pages/Home.tsx";
import { Projects } from "./pages/Projects.tsx";
import { Project } from "./pages/Project.tsx";
import "./styles/main.css";
import ScrollToTop from "./utils/ScrollToTop.tsx";

function App(): React.JSX.Element {
  return (
    <div className="App">
      <ScrollToTop />

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
