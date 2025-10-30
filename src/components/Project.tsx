import React from "react";
import retailMock from '../assets/images/retail-analytics.png';
import '../assets/styles/Project.scss';

function Project() {
  return(
    <div className="container" id="projects">
      <div className="items-container projects-container">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
          <div className="project">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <img src={retailMock} className="zoom" alt="Retail Analytics" width="100%"/>
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer"><h2>Retail Sales Analytics — End-to-End Microsoft BI</h2></a>
            <p className="muted">
              Complete BI solution across <strong>SQL Server</strong>, <strong>SSIS</strong>, <strong>SSAS</strong> and <strong>Power BI</strong>.
              ETL cleansing/error handling, SSAS cube with KPIs, and executive dashboards (KPIs, product, customer).
              Versioned with Git LFS and Markdown; bridges MSBI fundamentals to <strong>ADF / Synapse / Fabric</strong>.
            </p>

            <div className="tech-tags">
              {["SQL Server","SSIS","SSAS (Tabular/Multi)","Power BI","DAX","Data Modeling","ADF","Synapse","Fabric"]
                .map((t, i) => <span key={i} className="chip">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
