import React, { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlaceIcon from "@mui/icons-material/Place";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import avatar from "../assets/images/portfolio-avatar.001.png";
import { pipelineNodes, profile, stats, techStrip } from "../data/portfolio";
import { CountUp, Reveal } from "../hooks/useReveal";

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = window.setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2600);
    return () => window.clearInterval(t);
  }, []);
  return (
    <span className="rotator" aria-live="polite">
      {profile.roles.map((r, idx) => (
        <span key={r} className={`rotator__item ${idx === i ? "is-on" : ""}`}>
          {r}
        </span>
      ))}
      <span className="rotator__sizer">{profile.roles.reduce((a, b) => (a.length > b.length ? a : b))}</span>
    </span>
  );
}

function PipelineCard() {
  return (
    <div className="pipe glass">
      <div className="pipe__bar">
        <span /><span /><span />
        <em>data-flow.sql</em>
      </div>
      <ol className="pipe__list">
        {pipelineNodes.map((n, idx) => (
          <li key={n.label} className="pipe__node" style={{ animationDelay: `${idx * 160 + 400}ms` }}>
            <span className="pipe__dot" />
            <div>
              <strong>{n.label}</strong>
              <small>{n.sub}</small>
            </div>
          </li>
        ))}
      </ol>
      <div className="pipe__foot">
        <span className="pulse" /> Governed · validated · automated
      </div>
    </div>
  );
}

export default function Main() {
  return (
    <>
      <section className="hero section" id="top">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <span className="pill">
              <span className="pulse" /> Open to opportunities · <PlaceIcon fontSize="inherit" /> {profile.location}
            </span>

            <h1 className="hero__title">
              {profile.headline.replace(".", "").split(" ").slice(0, 3).join(" ")}{" "}
              <span className="grad">{profile.headline.replace(".", "").split(" ").slice(3).join(" ")}</span>
              .
            </h1>

            <p className="hero__role">
              <img src={avatar} alt="" className="hero__avatar" />
              <span>
                Hi, I’m <strong>Aashya</strong> — <RotatingRole />
              </span>
            </p>

            <p className="hero__intro">{profile.intro}</p>

            <div className="hero__cta">
              <a className="btn btn--glow" href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
                View my work <ArrowOutwardIcon fontSize="small" />
              </a>
              <a className="btn btn--ghost" href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                Get in touch
              </a>
              <div className="hero__social">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
                <a href={`mailto:${profile.email}`} aria-label="Email"><EmailIcon /></a>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <PipelineCard />
            <div className="orb orb--a" />
            <div className="orb orb--b" />
          </div>
        </div>

        <div className="wrap">
          <div className="stats">
            {stats.map((s) => (
              <div className="stat glass" key={s.label}>
                <div className="stat__num">
                  {s.prefix && <small>{s.prefix}</small>}
                  <CountUp to={s.value} />
                  {s.suffix}
                </div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[...techStrip, ...techStrip].map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="wrap about">
          <Reveal>
            <p className="eyebrow">About</p>
            <h2 className="h2">From source system to <span className="grad">executive dashboard</span>.</h2>
          </Reveal>
          <div className="about__cols">
            <Reveal className="about__text" delay={80}>
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
            <Reveal className="about__now glass" delay={160}>
              <span className="pill pill--soft"><span className="pulse" /> Right now</span>
              <h3>Data Engineer / BI Developer</h3>
              <p className="muted">BioScript Solutions Ltd · Oakville, ON</p>
              <p>
                Migrating ~200 legacy SQL Server reports into Power BI semantic models, maintaining dbt layers
                that feed them, and automating report delivery.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
