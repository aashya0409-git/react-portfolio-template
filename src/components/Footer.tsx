import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__links">
        <a href="https://github.com/aashya0409-git" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/aashyam/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p className="muted">© {new Date().getFullYear()} Aashya Bodugula</p>
    </footer>
  );
}
export default Footer;
