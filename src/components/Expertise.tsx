import React from "react";
import { skillGroups } from "../data/portfolio";
import { Reveal } from "../hooks/useReveal";

const icons: Record<string, JSX.Element> = {
  pipeline: (
    <svg viewBox="0 0 24 24"><path d="M4 6h5v4H4zM15 14h5v4h-5zM9 8h3a3 3 0 0 1 3 3v3" /></svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /></svg>
  ),
  db: (
    <svg viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></svg>
  ),
  code: (
    <svg viewBox="0 0 24 24"><path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" /></svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24"><path d="M12 3 4 6v6c0 4.5 3.2 7.6 8 9 4.8-1.4 8-4.5 8-9V6z" /><path d="m9 12 2 2 4-4" /></svg>
  ),
  team: (
    <svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.5c3 0 6 1.5 6 5.5" /></svg>
  ),
};

export default function Expertise() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Skills</p>
          <h2 className="h2">The toolkit behind <span className="grad">reliable analytics</span>.</h2>
        </Reveal>

        <div className="bento">
          {skillGroups.map((g, i) => (
            <Reveal
              key={g.title}
              delay={i * 70}
              className={`bento__cell glass ${g.featured ? "bento__cell--wide" : ""}`}
            >
              <div className="bento__icon">{icons[g.icon]}</div>
              <h3>{g.title}</h3>
              <p className="muted">{g.blurb}</p>
              <ul className="chips">
                {g.items.map((it) => (
                  <li key={it} className="chip">{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
