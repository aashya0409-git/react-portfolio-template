import React from "react";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Timeline from "./components/Timeline";
import Project from "./components/Project";
import Contact from "./components/Contact";

// Global styles (load once here)
import "./index.scss";
import "./assets/styles/Navigation.scss";
import "./assets/styles/Main.scss";
import "./assets/styles/Expertise.scss";
import "./assets/styles/Timeline.scss";
import "./assets/styles/Project.scss";
import "./assets/styles/Contact.scss";

function App() {
  return (
    <>
      <Navigation />
      {/* Row 1: About + Expertise (rendered inside Main) */}
      <Main />

      {/* Row 2: Career History + Projects */}
      <section id="history-projects" className="container-full row-2">
       
          <div className="col">
            <h2 className="section-title">Career History</h2>
            <Timeline />
          </div>
           </section>
           <section id="projects" className="container-full row-2">
          <div className="col">
            <h2 className="section-title">Personal Projects</h2>
            <Project />
          </div>
          / </section>
     

      {/* Contact */}
      <Contact />
    </>
  );
}

export default App;
