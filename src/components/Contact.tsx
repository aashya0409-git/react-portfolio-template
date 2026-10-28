import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlaceIcon from "@mui/icons-material/Place";
import { profile } from "../data/portfolio";
import { Reveal } from "../hooks/useReveal";

type Status = { kind: "idle" | "error" | "ok"; text: string };

export default function Contact() {
  const [name, setName] = useState("");
  const [reach, setReach] = useState(""); // email or phone
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle", text: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !reach.trim() || !msg.trim()) {
      setStatus({ kind: "error", text: "Please fill in all fields." });
      return;
    }

    setLoading(true);
    setStatus({ kind: "idle", text: "" });

    // === EmailJS IDs (unchanged) ===
    const serviceID = "service_qgt5ovr";
    const templateID = "template_3u60v8t";
    const publicKey = "W5efJiRG1yZQ9eKbu";

    const templateParams = {
      name,
      email: reach,
      message: msg,
      time: new Date().toLocaleString("en-CA", {
        timeZone: "America/Toronto",
        hour12: true,
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
      reply_to: reach,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setStatus({ kind: "ok", text: "Thanks for reaching out! I’ll get back to you soon." });
        setName("");
        setReach("");
        setMsg("");
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus({ kind: "error", text: "Something went wrong. Please try again, or email me directly." });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="h2">Let’s build something <span className="grad">data-driven</span>.</h2>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__card glass" delay={60}>
            <p>
              I’m open to opportunities in <strong>Data Engineering, BI Development and Analytics</strong>.
              If you’re hiring, have a project in mind, or just want to talk Power BI and pipelines, I’d love to hear from you.
            </p>
            <ul className="contact__links">
              <li><a href={`mailto:${profile.email}`}><EmailIcon /> {profile.email}</a></li>
              <li><a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a></li>
              <li><a href={profile.github} target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a></li>
              <li><span><PlaceIcon /> {profile.location}, Canada</span></li>
            </ul>
          </Reveal>

          <Reveal as="div" className="contact__formwrap" delay={140}>
            <form className="form glass" onSubmit={submit} noValidate>
              <div className="form__row">
                <label>
                  <span>Your name</span>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" autoComplete="name" />
                </label>
                <label>
                  <span>Email or phone</span>
                  <input value={reach} onChange={(e) => setReach(e.target.value)} placeholder="jane@company.com" autoComplete="email" />
                </label>
              </div>
              <label>
                <span>Message</span>
                <textarea rows={6} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Tell me about the role or project…" />
              </label>
              <div className="form__actions">
                <button className="btn btn--glow" type="submit" disabled={loading}>
                  {loading ? "Sending…" : "Send message"}
                </button>
                {status.text && (
                  <p className={`form__status form__status--${status.kind}`} role="status">{status.text}</p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
