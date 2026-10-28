import retailKpis from "../assets/images/projects/retail-executive_kpis.png";
import healthRisk from "../assets/images/projects/health-patientrisk.png";

export const profile = {
  name: "Aashya M",
  roles: [
    "Data Engineer",
    "BI Developer",
    "Power BI & DAX Specialist",
    "Azure & Fabric Builder",
  ],
  location: "Toronto, ON",
  email: "aashya0409@gmail.com",
  github: "https://github.com/aashya0409-git",
  linkedin: "https://www.linkedin.com/in/aashya-m-76b490142/",
  headline: "Turning messy data into trusted insight.",
  intro:
    "Data professional with 8+ years across banking, healthcare/pharmacy and enterprise environments. I design ETL/ELT pipelines, dimensional models and dbt transformations that feed governed Power BI semantic models and DAX dashboards.",
  about: [
    "I build the whole path from source system to executive dashboard: pipelines in SSIS and Azure Data Factory, warehouses on SQL Server, Snowflake and Azure Synapse, dbt transformations, and governed Power BI semantic models on top.",
    "My work has improved reporting efficiency by up to 40% for 1,000+ business users. I'm comfortable with legacy-to-cloud migration, row-level security, data quality validation, CI/CD in Azure DevOps, UAT and Agile delivery, and I enjoy mentoring teammates and supporting technical hiring.",
  ],
};

export const stats = [
  { value: 8, suffix: "+", label: "Years in data & BI" },
  { value: 1000, suffix: "+", label: "Business users served" },
  { value: 200, suffix: "", prefix: "~", label: "Legacy reports migrated" },
  { value: 40, suffix: "%", prefix: "up to ", label: "Reporting efficiency gain" },
];

export const techStrip = [
  "Power BI", "DAX", "SQL Server", "T-SQL", "Azure Data Factory", "dbt",
  "Microsoft Fabric", "Snowflake", "Azure Synapse", "SSIS", "SSAS Tabular",
  "Python", "Azure DevOps", "Git", "Power Query", "SSRS",
];

export const pipelineNodes = [
  { label: "Sources", sub: "ERP · Salesforce · SQL Server" },
  { label: "Ingest", sub: "SSIS · Azure Data Factory" },
  { label: "Transform", sub: "dbt · T-SQL · SCD2" },
  { label: "Model", sub: "Semantic models · DAX" },
  { label: "Deliver", sub: "Power BI · Paginated" },
];

export const skillGroups = [
  {
    title: "Data Engineering",
    icon: "pipeline",
    featured: true,
    blurb: "Pipelines and platforms that move data reliably from source to warehouse.",
    items: [
      "Azure Data Factory", "SSIS", "dbt", "Microsoft Fabric", "Snowflake",
      "Azure Synapse", "ADLS Gen2", "Azure SQL Database", "Data Migration", "Pipeline Automation",
    ],
  },
  {
    title: "BI & Analytics",
    icon: "chart",
    featured: true,
    blurb: "Governed semantic models and dashboards business users actually trust.",
    items: [
      "Power BI", "DAX", "Power Query", "Semantic Models", "Paginated Reports",
      "SSRS", "SSAS (Tabular)", "KPI Development", "Advanced Excel",
    ],
  },
  {
    title: "Modeling & Databases",
    icon: "db",
    blurb: "Dimensional design built for performance and history.",
    items: [
      "Star / Snowflake schemas", "SCD Type 2", "Data Warehouse / Mart / Lake",
      "SQL Server", "Oracle", "MySQL",
    ],
  },
  {
    title: "Languages & DevOps",
    icon: "code",
    blurb: "Version-controlled, automated delivery.",
    items: [
      "T-SQL", "Python", "DAX", "YAML", "Azure DevOps (CI/CD)", "Git / GitHub",
    ],
  },
  {
    title: "Quality & Governance",
    icon: "shield",
    blurb: "Data you can defend in front of auditors and executives.",
    items: [
      "Data Validation", "Anomaly Detection", "Data Governance", "Row-Level Security", "Object-Level Security",
    ],
  },
  {
    title: "Ways of Working",
    icon: "team",
    blurb: "Clear communication from requirements to go-live.",
    items: [
      "Agile / Scrum", "Requirements Gathering", "UAT", "Stakeholder Communication", "Mentoring",
    ],
  },
];

export const experience = [
  {
    role: "Data Engineer / BI Developer",
    company: "BioScript Solutions Ltd",
    location: "Oakville, ON",
    period: "Dec 2025 — Present",
    current: true,
    highlights: [
      "Leading the migration of ~200 legacy SQL Server reports into 2 Power BI semantic models by reverse-engineering stored-procedure logic and rebuilding it as DAX, validating output parity with the legacy reports.",
      "Auditing semantic models against each report's underlying SQL to catch missing data or business rules, and turning gaps into requests that Product Owners convert into user stories.",
      "Maintaining dbt models across 4 layers (raw, staging, dbo, EDW), with the EDW layer feeding the semantic models; changes reviewed and merged through Git in Azure DevOps.",
      "Writing YAML-driven configs for the internal PyAds automation tool (job steps, embedded DAX, Excel export, delivery) to move QA-validated reports into automated production delivery.",
      "DAX subject-matter evaluator in technical interviews for 4 contractor hires; onboarding the team and leading daily stand-ups when senior members are away.",
    ],
    tags: ["dbt", "Power BI", "DAX", "SQL Server", "Azure DevOps", "Python", "YAML"],
  },
  {
    role: "Power BI / SQL Developer",
    company: "TD Bank",
    location: "Ontario",
    period: "Jan 2024 — Nov 2025",
    highlights: [
      "Wrote T-SQL stored procedures and SSIS packages to load merchant transaction and lending data, using SCD Type 2 to preserve accurate history.",
      "Helped migrate legacy SSIS workloads to Azure Data Factory and built ADF pipelines across Data Lake, Synapse and Fabric to prepare data for Power BI.",
      "Built semantic models and SSAS cubes, and implemented Row-Level and Object-Level Security to protect sensitive financial data.",
      "Delivered Power BI dashboards and paginated reports with DAX for merchant transactions and financial performance; automated SSIS/ADF deployments via Azure DevOps.",
      "Wrote Python data-quality and anomaly checks, ran UAT with stakeholders, and led a small team of BI developers and analysts.",
    ],
    tags: ["T-SQL", "SSIS", "Azure Data Factory", "Synapse", "Fabric", "SSAS", "Power BI", "Python"],
  },
  {
    role: "BI Developer",
    company: "IBM Canada",
    location: "Toronto, ON",
    period: "Oct 2022 — Dec 2023",
    highlights: [
      "Built ETL/ELT workflows in SSIS and Azure Data Factory to ingest ERP, Salesforce and other sources into Snowflake and SQL Server, and tuned T-SQL for performance.",
      "Built SSAS Tabular semantic models for self-service BI and DAX measures that improved operational dashboards and financial reporting.",
      "Migrated financial reports from SSRS to Power BI for 1,000+ finance and operations staff, plus paginated reports for compliance.",
      "Implemented RLS/OLS for sensitive data and presented KPI dashboards to executives in plain terms for non-technical audiences.",
    ],
    tags: ["SSIS", "Azure Data Factory", "Snowflake", "SSAS Tabular", "Power BI", "SSRS"],
  },
  {
    role: "MSBI Developer",
    company: "Transol Systems",
    location: "India",
    period: "Sep 2018 — Aug 2022",
    highlights: [
      "Built SSIS packages to automate ETL from flat files, Excel and Oracle into SQL Server; tuned stored procedures with SQL Profiler.",
      "Designed star/snowflake models for sales and finance reporting, with Power BI dashboards and SSRS reports (including sub-reports) for operations.",
      "Set up Git and Azure DevOps pipelines for BI deployments; ran UAT, resolved defects, trained end users and led knowledge-transfer sessions.",
    ],
    tags: ["SSIS", "SQL Server", "Oracle", "SSRS", "Power BI", "Azure DevOps"],
  },
];

export type Project = {
  title: string;
  kicker: string;
  art: "health" | "retail" | "migration";
  shot?: { src: string; label: string }; // one real dashboard screenshot (click to enlarge)
  description: string;
  highlights: string[];
  tags: string[];
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    title: "Patient Risk & Utilization Insights",
    kicker: "Healthcare analytics pipeline",
    art: "health",
    shot: { src: healthRisk, label: "Patient Risk & Cost dashboard" },
    description:
      "An end-to-end Azure pipeline that ingests patient claims and beneficiary data and turns it into risk and utilization insight by demographic group.",
    highlights: [
      "Azure Data Factory pipeline loading into ADLS Gen2 and Azure SQL Database",
      "dbt models across staging, intermediate and mart layers (dim_patient, fact_inpatient_claims)",
      "dbt tests (not_null, accepted_values, unique combinations, custom rules via dbt_utils) plus fixes for duplicate keys, bad types and mismatched IDs with TRY_CAST / TRY_CONVERT",
      "Power BI dashboard with drill-through from summary to patient-level detail",
    ],
    tags: ["Azure Data Factory", "ADLS Gen2", "Azure SQL", "dbt", "Power BI", "Python"],
    link: { label: "View on GitHub", href: "https://github.com/aashya0409-git/healthcare-claims-risk-analytics" },
  },
  {
    title: "Retail Sales Analytics",
    kicker: "End-to-end Microsoft BI solution",
    art: "retail",
    shot: { src: retailKpis, label: "Executive KPIs dashboard" },
    description:
      "A full Microsoft BI stack, from raw CSVs through a data warehouse and SSAS cube to executive dashboards, built to simulate a real retail analytics environment.",
    highlights: [
      "SSIS ETL with data cleaning and error handling into a SQL Server warehouse",
      "SSAS cube with Sales, Total Cost, Profit and Profit Margin measures",
      "Power BI dashboards for Executive KPIs, Product Performance and Customer Insights",
    ],
    tags: ["SQL Server", "SSIS", "SSAS", "Power BI", "DAX", "Data Modeling"],
    link: { label: "View on GitHub", href: "https://github.com/aashya0409-git/retail-sales-bi-analytics" },
  },
  {
    title: "Legacy Reports to Power BI",
    kicker: "Featured work · BioScript Solutions",
    art: "migration",
    description:
      "Modernizing ~200 SQL Server reports into governed Power BI semantic models with provable parity against the legacy output.",
    highlights: [
      "Stored-procedure logic reverse-engineered and rebuilt as DAX",
      "dbt EDW layer feeding semantic models; Git-based review in Azure DevOps",
      "YAML + PyAds automation to deliver QA-validated reports on schedule",
    ],
    tags: ["Power BI", "DAX", "dbt", "SQL Server", "Azure DevOps", "YAML"],
  },
];

export const certifications = [
  { title: "Power BI Data Analyst Associate", issuer: "Microsoft · PL-300", accent: "yellow" },
  { title: "Solutions Architect – Associate", issuer: "AWS Certified", accent: "orange" },
  { title: "Power BI Data Analyst Professional Certificate", issuer: "Coursera · Microsoft", accent: "blue" },
  { title: "BI Developer: Power BI, SSIS, SSRS, SSAS, DW, T-SQL", issuer: "Udemy", accent: "violet" },
];

export const education = {
  degree: "B.E. in Computer Science",
  school: "Visvesvaraya Technological University, India",
  period: "Aug 2014 — Jul 2018",
};

export const navItems: [string, string][] = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Credentials", "credentials"],
  ["Contact", "contact"],
];
