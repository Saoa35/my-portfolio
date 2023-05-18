import React from "react";
import "./styles/main.scss";

import { NavBar } from "./components/NavBar/NavBar.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { Contacts } from "./pages/Contacts.tsx";
import { Home } from "./pages/Home.tsx";
import { Projects } from "./pages/Projects.tsx";

function App(): React.JSX.Element {
  return (
    <div className="App">
      <NavBar />

      {/* <Home /> */}

      <Projects />

      {/* <Contacts /> */}

      <Footer />
    </div>
  );
}

export default App;
