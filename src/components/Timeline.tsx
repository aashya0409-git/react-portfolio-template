import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";

export default function Timeline() {
  const icon = <WorkIcon />;

  return (
    <div id="history" className="timeline-wrap">
      <VerticalTimeline lineColor="rgba(255,255,255,0.28)">
        <VerticalTimelineElement
          className="vt-card"
          contentStyle={{ background: "transparent", color: "inherit", boxShadow: "none" }}
          contentArrowStyle={{ borderRight: "7px solid rgba(255,255,255,0.10)" }}
          date="Jan 2024 — Present"
          iconStyle={{ background: "#4f6b68ff", color: "#0b1222" }}
          icon={icon}
        >
          <div className="card glass">
            <h4>Power BI / SQL Developer</h4>
            <p className="muted">TD Bank — Toronto, ON</p>
            <p>
              Built enterprise <strong>risk and financial dashboards</strong> using Power BI with advanced DAX, KPIs, and paginated reports. Migrated SSIS workloads to <strong>Azure Data Factory</strong> and implemented <strong>CI/CD automation</strong> via Azure DevOps to streamline analytics delivery.
            </p>
            <p>
              Integrated <strong>Microsoft Fabric</strong> and <strong>Synapse</strong> to modernize BI architecture, applying <strong>RLS/OLS security</strong> and performance tuning for scalable, regulatory-compliant reporting used across capital markets and finance teams.
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vt-card"
          contentStyle={{ background: "transparent", color: "inherit", boxShadow: "none" }}
          contentArrowStyle={{ borderRight: "7px solid rgba(255,255,255,0.10)" }}
          date="Oct 2022 — Dec 2023"
          iconStyle={{ background: "#4f6b68ff", color: "#0b1222" }}
          icon={icon}
        >
          <div className="card glass">
            <h4>BI Developer</h4>
            <p className="muted">IBM Canada — Ontario, Canada</p>
           <p>
              Modernized reporting infrastructure by migrating on-prem SSIS/SSRS workloads to <strong>Azure Synapse</strong> and <strong>Fabric Lakehouse</strong>. Developed <strong>semantic models</strong>, KPI dashboards, and reusable DAX measures for financial and operational analytics.
            </p>
            <p>
              Automated ETL and validation using <strong>ADF, Snowflake,</strong> and <strong>Databricks (PySpark)</strong>, ensuring accuracy and governance across pipelines. Collaborated with stakeholders to deploy governed BI assets through <strong>CI/CD</strong> and GitHub version control.
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vt-card"
          contentStyle={{ background: "transparent", color: "inherit", boxShadow: "none" }}
          contentArrowStyle={{ borderRight: "7px solid rgba(255,255,255,0.10)" }}
          date="Sep 2018 — Aug 2022"
          iconStyle={{ background: "#4f6b68ff", color: "#0b1222" }}
          icon={icon}
        >
          <div className="card glass">
            <h4>MSBI Developer</h4>
            <p className="muted">Transol Systems</p>
                       <p>
              Designed and maintained <strong>SSIS ETL packages</strong>, <strong>SSRS reports</strong>, and <strong>Power BI dashboards</strong> for healthcare clients. Built <strong>star/snowflake schemas</strong> and optimized SQL queries for reliable data processing and performance.
            </p>
            <p>
              Delivered end-to-end data migration and validation for large-scale projects, ensuring compliance with <strong>US healthcare data standards (HIPAA)</strong>. Improved efficiency of ETL workflows through data quality checks and tuning.
            </p>

          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
