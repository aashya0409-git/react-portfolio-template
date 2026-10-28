import React from "react";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Expertise from "./components/Expertise";
import Timeline from "./components/Timeline";
import Project from "./components/Project";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./index.scss";
import "./assets/styles/Navigation.scss";
import "./assets/styles/Main.scss";
import "./assets/styles/Expertise.scss";
import "./assets/styles/Timeline.scss";
import "./assets/styles/Project.scss";
import "./assets/styles/Contact.scss";
import "./assets/styles/Footer.scss";
import "./assets/styles/Report.scss";

function App() {
  return (
    <>
      <div className="bg" aria-hidden="true">
        <div className="bg__blob bg__blob--1" />
        <div className="bg__blob bg__blob--2" />
        <div className="bg__blob bg__blob--3" />
        <div className="bg__grid" />
      </div>
      <Navigation />
      <main>
        <Main />
        <Expertise />
        <Timeline />
        <Project />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
