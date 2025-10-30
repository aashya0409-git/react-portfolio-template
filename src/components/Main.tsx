import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlaceIcon from "@mui/icons-material/Place";
import Expertise from "./Expertise"; // we’ll render it embedded
import "../assets/styles/Main.scss";

function Main() {
  return (
    <section className="hero container-full" id="about">
      <div className="hero-grid">
        {/* LEFT: About Me */}
        <article className="card glass about-card">
          <h1 className="about-title">Aashya M</h1>
          <p className="tagline">Power BI & Data Engineering</p>

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
              Business Intelligence & Data Engineering professional with 7+ years
              delivering end-to-end analytics solutions across banking and enterprise
              domains. I design reliable BI systems and data models, building{" "}
              <strong>Power BI</strong> dashboards and <strong>ETL pipelines</strong>{" "}
              with <strong>SQL Server, SSIS/ADF</strong>, and <strong>Microsoft Fabric</strong>—focused on performance, governance, and clear data
              storytelling.
            </p>
            <p>
              Work spans financial risk analytics, regulatory reporting, and KPI
              modeling. I enjoy integrating proven MSBI fundamentals with modern cloud
              platforms like Synapse, Databricks (PySpark), and Fabric to create
              scalable, auditable analytics.
            </p>
            <ul className="bullets">
              <li>7+ years in BI, data modeling, and reporting automation</li>
              <li>Power BI, DAX, SQL, SSIS/ADF, Fabric; CI/CD with Azure DevOps</li>
              <li>Banking & financial services, risk & regulatory reporting</li>
              <li>Data quality, performance tuning, RLS/OLS governance</li>
            </ul>
          </div>
        </article>

        {/* RIGHT: Expertise (embedded so it doesn’t render as a separate page section) */}
        <aside className="expertise-aside" id="expertise">
          <Expertise embedded />
        </aside>
      </div>
    </section>
  );
}

export default Main;
