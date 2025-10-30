import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    // Plug EmailJS here if desired
    // if (name && email && message) { ... }
  };

  return (
    <div id="contact" className="container">
      <div className="items-container contact_wrapper">
        <h1>Contact</h1>
        <div className="contact-grid">
          {/* Left info */}
          <div className="contact-info card">
            <p className="muted">Got a project or an analytics challenge? Let’s connect.</p>
            <div className="contact-list">
              <div className="contact-row"><EmailIcon/><a href="mailto:aashya0409@gmail.com">aashya0409@gmail.com</a></div>
              <div className="contact-row"><LinkedInIcon/><a href="https://www.linkedin.com/in/aashyam/" target="_blank" rel="noreferrer">linkedin.com/in/aashyam</a></div>
              <div className="contact-row"><LocationOnIcon/><span>Toronto, Ontario, Canada</span></div>
            </div>
          </div>

          {/* Right form */}
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                InputLabelProps={{ sx: { color: 'var(--text)' } }}
              />
              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                InputLabelProps={{ sx: { color: 'var(--text)' } }}
              />
            </div>
            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={8}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              InputLabelProps={{ sx: { color: 'var(--text)' } }}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}
export default Contact;
