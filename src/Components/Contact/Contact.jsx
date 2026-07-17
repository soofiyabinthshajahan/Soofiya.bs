import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your form submission logic here (e.g., EmailJS, Web3Forms, or custom backend)
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Left Column: Editorial Content */}
        <div className="contact-info-column">
          <span className="section-label uppercase">Get In Touch</span>
          <h2 className="contact-title serif-font">
            Let’s collaborate to build something <span className="italic-accent serif-font">meaningful.</span>
          </h2>
          <p className="contact-description">
            Whether you are looking for 1:1 career mentorship, booking a group bootcamp, or planning an AI-driven project, I’d love to hear from you. Drop a message, and let’s start the conversation.
          </p>
          
          <div className="direct-contact-details">
            <div className="contact-detail-item">
              <span className="detail-label uppercase">Email Directly</span>
              <a href="mailto:soofiyashajahan@gmail.com" className="detail-value">soofiyashajahan@gmail.com</a>
            </div>
            <div className="contact-detail-item">
              <span className="detail-label uppercase">Location</span>
              <span className="detail-value text-muted">Kozhikode, Kerala, India</span>
            </div>
          </div>
        </div>

        {/* Right Column: Minimalist Structured Form Card */}
        <div className="contact-form-column">
          <div className="contact-form-card">
            <form onSubmit={handleSubmit}>
              
              <div className="form-group">
                <label htmlFor="name" className="form-label uppercase">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Soofiya Binth Shajahan"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label uppercase">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="soofiyashajahan@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service" className="form-label uppercase">Inquiry Type</label>
                <div className="select-wrapper">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="form-select"
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="1-1-mentorship">1:1 Career Mentorship</option>
                    <option value="group-masterclasses">Group Masterclasses & Bootcamps</option>
                    <option value="strategic-consulting">Strategic AI Consultation</option>
                    <option value="agent-development">Agent Development</option>
                    <option value="web-development">Web Development (MERN)</option>
                    <option value="roadmaps-workbooks">Roadmaps & Workbooks</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label uppercase">Tell me about your goals</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell me a bit about what you are looking to achieve..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-input form-textarea"
                />
              </div>

              <button type="submit" className="submit-btn">
                <span className="submit-btn-text">Send Message</span>
                <div className="submit-circle-arrow">
                  <span className="submit-arrow-icon">→</span>
                </div>
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;