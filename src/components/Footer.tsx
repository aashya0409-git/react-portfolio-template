import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { profile } from "../data/portfolio";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p className="muted">© {new Date().getFullYear()} {profile.name}. Built with React &amp; TypeScript.</p>
        <div className="footer__links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
