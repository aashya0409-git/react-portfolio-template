import React from "react";
import { experience } from "../data/portfolio";
import { Reveal } from "../hooks/useReveal";

export default function Timeline() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Experience</p>
          <h2 className="h2">Eight years, <span className="grad">four teams</span>, one thread: trusted data.</h2>
        </Reveal>

        <ol className="tl">
          {experience.map((job, i) => (
            <li className="tl__item" key={job.company + job.period}>
              <span className={`tl__dot ${job.current ? "is-now" : ""}`} />
              <Reveal className="tl__card glass" delay={i * 60}>
                <div className="tl__head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="tl__co">
                      {job.company} <span className="muted">· {job.location}</span>
                    </p>
                  </div>
                  <span className={`tl__date ${job.current ? "tl__date--now" : ""}`}>
                    {job.current && <span className="pulse" />} {job.period}
                  </span>
                </div>
                <ul className="tl__list">
                  {job.highlights.map((h, k) => (
                    <li key={k}>{h}</li>
                  ))}
                </ul>
                <ul className="chips chips--sm">
                  {job.tags.map((t) => (
                    <li key={t} className="chip">{t}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
