import React from "react";
import Chip from "@mui/material/Chip";
import retailAnalysis from "../assets/images/retail-analytics.png";

export default function Project() {
  const tags = ["SQL Server","SSIS","SSAS (Tabular/Multi)","Power BI","DAX","Data Modeling"];

  return (
    <div className="projects-container">
      <div className="project-card card glass">
        <img src={retailAnalysis} alt="Retail Sales Analytics dashboard mock" />
        <div className="project-body">
          <h3>Retail Sales Analytics — End-to-End Microsoft BI</h3>
          <p>
            Complete BI solution across SQL Server, SSIS, SSAS and Power BI. ETL cleansing/error handling,
            SSAS cube with KPIs, and executive dashboards. Versioned with Git LFS & Markdown; bridges MSBI fundamentals to ADF / Synapse / Fabric.This project demonstrates the design of a full Microsoft BI pipeline — from raw CSVs to Power BI dashboards — showcasing ETL, data modeling, analytics, and reporting skills. I built it to simulate a real-world retail sales analytics environment, integrating data from multiple sources into a clean, analytical model.
          </p>
          <div className="chips">
            {tags.map((t) => <Chip key={t} label={t} className="chip" />)}
          </div>
        </div>
      </div>
    </div>
  );
}
