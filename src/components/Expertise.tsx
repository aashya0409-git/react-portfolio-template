import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faDatabase, faCloud } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";

const labelsAnalyst = [
  "Power BI Desktop/Service","DAX (KPIs, Measures)","Power Query (M)","Excel Pivot & PowerPivot",
  "Data storytelling","Trend & variance analysis","KPI Dashboards","Drill-through reports",
  "Paginated Reports","RLS / OLS Security","Tableau (Visual Analytics)"
];

const labelsBIDev = [
  "MS SQL Server 2016–2019","T-SQL (SPs, Views, CTEs)","SSIS (ETL, SCD Type 2)",
  "SSAS Tabular Modeling","SSAS Multidimensional Cubes","Data Modeling (Star/Snowflake)",
  "Query Optimization","Database Indexing & Performance Tuning","SQL Profiler / Plan Explorer",
  "Version Control (Git / Azure DevOps)"
];

const labelsDataEng = [
  "Azure Data Factory (ADF)","Microsoft Fabric (Pipelines, Lakehouse, OneLake)","Azure Synapse Analytics",
  "Azure Data Lake","Databricks (PySpark / Spark SQL)","Snowflake",
  "Python (Pandas, Validation, Automation)","dbt (Exploring)","CI/CD Pipelines (Azure DevOps)","Metadata-driven ETL Frameworks"
];

export default function Expertise({ embedded }: { embedded?: boolean }) {
  const Block = ({
    icon, title, desc, chips,
  }: { icon: any; title: string; desc: string; chips: string[] }) => (
    <div className="exp-card card glass">
      <div className="exp-card__icon"><FontAwesomeIcon icon={icon} /></div>
      <h3>{title}</h3>
      <p className="muted">{desc}</p>
      <div className="exp-card__chips">
        {chips.map((c, i) => <Chip key={i} label={c} className="chip" />)}
      </div>
    </div>
  );

  return (
    <div className={`skills-container ${embedded ? "embedded" : ""}`}>
      <h2 className="section-title">{embedded ? "Expertise" : "Expertise"}</h2>
      <div className="exp-grid">
        <Block
          icon={faChartLine}
          title="Data Analyst"
          desc="KPI dashboards, variance analysis, ad-hoc insights in Power BI; DAX models, drill-through, RLS/OLS; polished visual storytelling."
          chips={labelsAnalyst}
        />
        <Block
          icon={faDatabase}
          title="Power BI / BI / SQL Developer"
          desc="Enterprise BI: T-SQL, SSIS ETL, SSAS Tabular & Multidimensional; semantic modeling, performance tuning, and CI/CD deployments."
          chips={labelsBIDev}
        />
        <Block
          icon={faCloud}
          title="Data Engineer"
          desc="Azure data workflows with ADF, Synapse, Fabric; Databricks (PySpark) for scalable transforms; governance & monitoring."
          chips={labelsDataEng}
        />
      </div>
    </div>
  );
}
