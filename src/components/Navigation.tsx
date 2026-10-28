import React, { useEffect, useMemo, useState } from "react";
import { navItems, profile } from "../data/portfolio";
import { useScrollSpy } from "../hooks/useReveal";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<string>(() => document.documentElement.dataset.theme || "report");
  const toggleTheme = () => {
    const next = theme === "report" ? "dark" : "report";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) { /* ignore */ }
    setTheme(next);
  };
  const ids = useMemo(() => navItems.map(([, id]) => id), []);
  const active = useScrollSpy(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a
          href="#top"
          className="nav__brand"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label={`${profile.name} — back to top`}
        >
          <span className="nav__logo">AM</span>
          <span className="nav__name">Aashya M</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navItems.map(([label, id]) => (
            <button
              key={id}
              className={`nav__link ${active === id ? "is-active" : ""}`}
              onClick={() => go(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <button className="nav__theme" onClick={toggleTheme} aria-label="Switch design">
          {theme === "report" ? "◐ Dark" : "◑ Report"}
        </button>

        <button className="btn btn--sm btn--glow nav__cta" onClick={() => go("contact")}>
          Let’s talk
        </button>

        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__sheet ${open ? "is-open" : ""}`}>
        {navItems.map(([label, id]) => (
          <button key={id} className="nav__sheetlink" onClick={() => go(id)}>
            {label}
          </button>
        ))}
      </div>
    </header>
  );
}
