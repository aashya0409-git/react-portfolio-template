import React, { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { projects } from "../data/portfolio";
import type { Project as ProjectT } from "../data/portfolio";
import { Reveal } from "../hooks/useReveal";
import CoverArt from "./CoverArt";

function Shot({ p }: { p: ProjectT }) {
  const [open, setOpen] = useState(false);
  const shot = p.shot!;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <figure className="shot">
        <div className="shot__bar">
          <span /><span /><span /><em>power-bi · dashboard</em>
        </div>
        <button className="shot__btn" onClick={() => setOpen(true)} aria-label={`Enlarge: ${shot.label}`}>
          <img src={shot.src} alt={`${p.title}: ${shot.label}`} loading="lazy" />
          <span className="shot__zoom">Click to enlarge</span>
        </button>
        {p.link && (
          <figcaption className="shot__more">
            <a href={p.link.href} target="_blank" rel="noreferrer">More dashboard pages on GitHub →</a>
          </figcaption>
        )}
      </figure>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={shot.label} onClick={() => setOpen(false)}>
          <button className="lightbox__close" aria-label="Close" onClick={() => setOpen(false)}>×</button>
          <img src={shot.src} alt={`${p.title}: ${shot.label}`} onClick={(e) => e.stopPropagation()} />
          <p onClick={(e) => e.stopPropagation()}>{p.title} — {shot.label}</p>
        </div>
      )}
    </>
  );
}

export default function Project() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Projects</p>
          <h2 className="h2">Things I’ve <span className="grad">built and shipped</span>.</h2>
        </Reveal>

        <div className="projects">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className={`pcard glass ${i === 0 ? "pcard--lead" : ""}`}>
              <div className="pcard__art">
                {p.shot ? <Shot p={p} /> : <CoverArt variant={p.art} />}
              </div>
              <div className="pcard__body">
                <p className="pcard__kicker">{p.kicker}</p>
                <h3>{p.title}</h3>
                <p className="muted">{p.description}</p>
                <ul className="pcard__list">
                  {p.highlights.map((h, k) => (
                    <li key={k}>{h}</li>
                  ))}
                </ul>
                <ul className="chips chips--sm">
                  {p.tags.map((t) => (
                    <li key={t} className="chip">{t}</li>
                  ))}
                </ul>
                {p.link && (
                  <a className="pcard__link" href={p.link.href} target="_blank" rel="noreferrer">
                    <GitHubIcon fontSize="small" /> {p.link.label}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
