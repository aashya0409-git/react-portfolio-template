import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faDatabase, faCloud } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

type Props = { embedded?: boolean };

/* Data Analyst */
const labelsAnalyst = [
  "Power BI Desktop/Service",
  "DAX (KPIs, Measures)",
  "Power Query (M)",
  "Excel Pivot & PowerPivot",
  "Data storytelling",
  "Trend & variance analysis",
  "KPI Dashboards",
  "Drill-through reports",
  "Paginated Reports",
  "RLS / OLS Security",
  "Tableau (Visual Analytics)",
];

/* BI / SQL Developer */
const labelsBIDev = [
  "MS SQL Server 2016–2019",
  "T-SQL (SPs, Views, CTEs)",
  "SSIS (ETL, SCD Type 2)",
  "SSAS Tabular Modeling",
  "SSAS Multidimensional Cubes",
  "Data Modeling (Star/Snowflake)",
  "Query Optimization",
  "Database Indexing & Performance Tuning",
  "SQL Profiler / Plan Explorer",
  "Version Control (Git / Azure DevOps)",
];

/* Data Engineer */
const labelsDataEng = [
  "Azure Data Factory (ADF)",
  "Microsoft Fabric (Pipelines, Lakehouse, OneLake)",
  "Azure Synapse Analytics",
  "Azure Data Lake",
  "Databricks (PySpark / Spark SQL)",
  "Snowflake",
  "Python (Pandas, Validation, Automation)",
  "dbt (Exploring)",
  "CI/CD Pipelines (Azure DevOps)",
  "Metadata-driven ETL Frameworks",
];

export default function Expertise({ embedded = false }: Props) {
  return (
    <div className={`skills-container ${embedded ? "embedded" : ""}`}>
      {!embedded && <h1>Expertise</h1>}

      <div className="skills-grid">
        {/* Data Analyst */}
        <div className="skill card glass">
          <div className="skill__icon">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <h3>Data Analyst</h3>
          <p>
            I transform raw data into business insights using Power BI and Tableau,
            creating KPI dashboards, variance analysis, and executive-ready reports.
            Experienced in data cleaning, modeling with Power Query and DAX, and
            presenting visual stories for financial, risk, and operations teams. I
            implement RLS/OLS and optimize visuals for secure and high-performing
            analytics.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Key Tools:</span>
            {labelsAnalyst.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
        </div>

        {/* Power BI / BI / SQL Developer */}
        <div className="skill card glass">
          <div className="skill__icon">
            <FontAwesomeIcon icon={faDatabase} />
          </div>
          <h3>Power BI / BI / SQL Developer</h3>
          <p>
            I build and maintain enterprise BI ecosystems using SQL Server, SSIS, and
            SSAS (both Tabular and Multidimensional Cubes). My work spans semantic
            modeling, DAX optimization, and T-SQL development to deliver governed,
            high-performance data solutions. I also migrate SSRS/Tableau workloads into
            Power BI and implement CI/CD pipelines in Azure DevOps to streamline report
            deployments.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech Stack:</span>
            {labelsBIDev.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
        </div>

        {/* Data Engineer */}
        <div className="skill card glass">
          <div className="skill__icon">
            <FontAwesomeIcon icon={faCloud} />
          </div>
          <h3>Data Engineer</h3>
          <p>
            I design and automate cloud data pipelines on Azure — integrating ADF,
            Synapse, Fabric, and Databricks to enable real-time analytics. I build
            metadata-driven ETL workflows, apply data validation in Python, and ensure
            scalability, governance, and monitoring through CI/CD in Azure DevOps. My
            solutions support modern lakehouse and warehouse architectures across BI and
            data science teams.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech Stack:</span>
            {labelsDataEng.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
