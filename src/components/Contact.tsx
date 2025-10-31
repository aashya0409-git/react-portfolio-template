import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlaceIcon from "@mui/icons-material/Place";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Contact() {
  const [name, setName] = useState("");
  const [reach, setReach] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !reach || !msg) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    const serviceID = "service_qgt5ovr";   // 🔹 Replace with your EmailJS service ID
    const templateID = "template_3u60v8t"; // 🔹 Replace with your EmailJS template ID
    const publicKey = "W5efJiRG1yZQ9eKbu";   // 🔹 Replace with your EmailJS public key

    const templateParams = {
      from_name: name,
      contact_info: reach,
      message: msg,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
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
              fullWidth
            />
            <TextField
              label="Email / Phone *"
              value={reach}
              onChange={(e) => setReach(e.target.value)}
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
            fullWidth
          />
 </div>
          <div className="actions">
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
    background: "#2e5652ff"   ,      // your new color
    "&:hover": { backgroundColor: "#568385ff" } // hover shade
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
