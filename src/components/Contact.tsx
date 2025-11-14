import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import PlaceIcon from "@mui/icons-material/Place";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Contact() {
  const [name, setName] = useState("");
  const [reach, setReach] = useState(""); // email or phone
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !reach.trim() || !msg.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    // === EmailJS IDs (use your own) ===
    const serviceID = "service_qgt5ovr";
    const templateID = "template_3u60v8t";
    const publicKey  = "W5efJiRG1yZQ9eKbu";

    // Keys MUST match your EmailJS template variables exactly
    const templateParams = {
      name: name,          // {{name}}
      email: reach,        // {{email}}
      message: msg,        // {{message}}
      time: new Date().toLocaleString("en-CA", {
        timeZone: "America/Toronto",
        hour12: true,
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),                  // {{time}} (optional)
      reply_to: reach,     // lets you hit Reply in your inbox
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert("Thanks for reaching out! I’ll get back to you soon.");
        setName("");
        setReach("");
        setMsg("");
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Oops! Something went wrong. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="container-full contact-wrap">
      <h2 className="section-title">Contact</h2>

      <div className="contact-grid">
        <aside className="card glass contact-card">
          <p>
            I’m currently open to opportunities in <strong>Data Analysis, BI, and Reporting</strong>.
            Feel free to reach out if you’re hiring, have a project idea, or simply want to connect
            about analytics and Power BI solutions.
          </p>
          <p className="rowline">
            <PlaceIcon />
            <span>Toronto, Ontario, Canada</span>
          </p>
        </aside>

        <form className="card glass contact-form" onSubmit={submit} noValidate>
          <div className="form-row">
            <TextField
              label="Your Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
            />
            <TextField
              label="Email / Phone *"
              value={reach}
              onChange={(e) => setReach(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div className="form-column">
            <TextField
              label="Message *"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              multiline
              rows={6}
              required
              fullWidth
            />
          </div>

          <div className="actions">
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                background: "#2e5652ff",
                "&:hover": { backgroundColor: "#568385ff" },
              }}
            >
              {loading ? "Sending..." : "Send"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
