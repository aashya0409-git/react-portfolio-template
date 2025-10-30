import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Timeline from "./components/Timeline";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.scss";

function App() {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const modeChange = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  useEffect(() => {
    document.body.classList.toggle("dark-mode", mode === "dark");
  }, [mode]);

  return (
    <div className={`app-root ${mode === "dark" ? "dark-mode" : ""}`}>
      <Navigation parentToChild={{ mode }} modeChange={modeChange} />
      {/* HERO: About (left) + Expertise (right) */}
      <Main />
      {/* Below sections */}
      <Timeline />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
