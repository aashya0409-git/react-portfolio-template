import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlaceIcon from "@mui/icons-material/Place";
import Expertise from "./Expertise";
import "../assets/styles/Main.scss";
import avatar from "../assets/images/portfolio-avatar.001.png";
const EmbeddedExpertise = Expertise as any;


// === Profile image ===
// Put your photo at: src/assets/images/profile.jpg  (or rename below)
 // fallback handled in markup

export default function Main() {
  return (
    <section className="hero container-full" id="about">
      <div className="hero-grid">
        {/* LEFT: About Me */}
        <article className="card glass about-card">
          {/* Avatar */}
          <div className="avatar-wrap" aria-hidden={avatar ? "false" : "true"}>
            {avatar ? (
              <img src={avatar} alt="Aashya profile" className="avatar" />
            ) : (
              <div className="avatar avatar--fallback" aria-label="Profile">
                AM
              </div>
            )}
          </div>

          <h1 className="about-title">Aashya M</h1>
          <p className="tagline">Business Intelligence &amp; Data Engineering</p>

          {/* Social / contact row */}
          <div className="about-links">
            <a
              href="https://github.com/aashya0409-git"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="icon-link"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aashyam/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="icon-link"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:aashya0409@gmail.com"
              className="icon-link"
              aria-label="Email"
            >
              <EmailIcon />
              <span>Email</span>
            </a>
            <span className="icon-link muted">
              <PlaceIcon />
              <span>Toronto, ON</span>
            </span>
          </div>

          <div className="about-body">
            <p>
              Business Intelligence &amp; Data Engineering professional with 7+ years
              designing and optimizing end-to-end analytics solutions across banking,financial and enterprise
              domains. I design reliable BI systems and data models, building{" "}
              <strong>Power BI</strong> dashboards and <strong>ETL pipelines</strong>{" "}
              with <strong>SQL Server, SSIS, ADF</strong>, and{" "}
              <strong>Microsoft Fabric</strong> — focused on performance, governance,
              and clear data storytelling.
            </p>
            <p>
              I specialize in transforming raw data into actionable insights through semantic modeling, DAX optimization, and data storytelling that supports executive-level decision making. Experienced in integrating on-prem MSBI stack with modern cloud platforms such as Azure Synapse, Databricks (PySpark), and Fabric Lakehouse for governed, high-performance analytics.
            </p>
            <ul className="bullets">
              <li>7+ years in BI, data modeling, and reporting automation</li>
              <li>Power BI, DAX, SQL, SSIS, ADF, Fabric; CI/CD with Azure DevOps</li>
              <li>Banking &amp; financial services, risk &amp; regulatory reporting</li>
              <li>Data quality, performance tuning(RLS/OLS), governance</li>
            </ul>
          </div>
        </article>

        {/* RIGHT: Expertise embedded */}
        <aside className="expertise-aside" id="expertise">
          <EmbeddedExpertise embedded />
        </aside>
      </div>
    </section>
  );
}
