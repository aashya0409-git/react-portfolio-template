import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { certifications, education } from "../data/portfolio";
import { Reveal } from "../hooks/useReveal";

export default function Credentials() {
  return (
    <section className="section" id="credentials">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Credentials</p>
          <h2 className="h2">Certified and <span className="grad">always learning</span>.</h2>
        </Reveal>

        <div className="creds">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 70} className={`cert glass cert--${c.accent}`}>
              <WorkspacePremiumIcon />
              <h3>{c.title}</h3>
              <p className="muted">{c.issuer}</p>
            </Reveal>
          ))}
          <Reveal delay={300} className="cert cert--edu glass">
            <SchoolIcon />
            <h3>{education.degree}</h3>
            <p className="muted">{education.school}</p>
            <p className="muted">{education.period}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
