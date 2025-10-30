import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history" className="container">
      <div className="items-container timeline-wrap">
        <h1 className="timeline-title">Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(18,22,33,0.75)', color: 'white', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(18,22,33,0.75)' }}
            date="Jan 2024 — Present"
            iconStyle={{ background: '#5a6bff', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Power BI / SQL Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">TD Bank — Toronto, ON</h4>
            <p className="muted">
              Built risk & financial dashboards with DAX/KPIs and paginated reports; implemented RLS/OLS;
              optimized models; migrated SSIS workloads to ADF; enabled CI/CD with Azure DevOps;
              integrated Fabric/Synapse; Python-based data validation.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(18,22,33,0.75)', color: 'white', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(18,22,33,0.75)' }}
            date="Oct 2022 — Dec 2023"
            iconStyle={{ background: '#5a6bff', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">BI Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">IBM Canada — Ontario, Canada</h4>
            <p className="muted">
              Modernized reporting to Power BI; built Lakehouse layers & semantic models; ETL with SSIS & ADF;
              Synapse/Snowflake & SQL; CI/CD; DAX for operational KPIs.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(18,22,33,0.75)', color: 'white', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(18,22,33,0.75)' }}
            date="Sep 2018 — Aug 2022"
            iconStyle={{ background: '#5a6bff', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">MSBI Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Transol Systems</h4>
            <p className="muted">
              Power BI & SSRS dashboards; SSIS ETL (SCD Type 2); T-SQL performance tuning; star/snowflake models;
              UAT & adoption across teams.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}
export default Timeline;
