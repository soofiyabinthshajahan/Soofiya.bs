import React, { useState } from "react";
import "./WorkWithMeModal.css";

function WorkWithMeModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "collaborate",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Package text data along with the base file configuration matrix
    const submissionPayload = {
      ...formData,
      resume: resumeFile,
    };

    console.log("Work With Me Submission Payload:", submissionPayload);
    // Integrated backend or third-party email API submission trigger goes here
    onClose();
  };

  return (
    <div className="hero-modal-overlay" onClick={onClose}>
      <div className="hero-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          className="hero-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <span className="form-pane-label uppercase">Collaboration Portal</span>
        <h4 className="form-pane-title serif-font">Let's Build Together</h4>

        <form onSubmit={handleSubmit} className="hero-modal-form">
          <div className="hero-input-group">
            <label className="hero-modal-label uppercase">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className="hero-modal-input"
            />
          </div>

          <div className="hero-input-group">
            <label className="hero-modal-label uppercase">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className="hero-modal-input"
            />
          </div>

          <div className="hero-input-group">
            <label className="hero-modal-label uppercase">
              How would you like to work together?
            </label>
            <div className="hero-select-wrapper">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="hero-modal-select"
              >
                <option value="collaborate">Collaborate in projects</option>
                <option value="Academy">Collaborate as an Academy</option>
                <option value="Company">Collaborate as a Company</option>
                <option value="trainer">Work as a trainer</option>
                <option value="reviewer">Work as a reviewer</option>
              </select>
            </div>
          </div>

          {/* New Resume Upload Interface Field */}
          <div className="hero-input-group">
            <label className="hero-modal-label uppercase">Upload Resume / Proposal</label>
            <div className="custom-file-upload">
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
                className="hidden-file-input"
              />
              <label htmlFor="resume" className="file-upload-trigger">
                <i className="fa fa-cloud-upload-alt" aria-hidden="true"></i>
                <span className="file-upload-text">
                  {resumeFile ? resumeFile.name : "Choose PDF / Word document"}
                </span>
              </label>
            </div>
          </div>

          <div className="hero-input-group">
            <label className="hero-modal-label uppercase">
              Tell me about your background
            </label>
            <textarea
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share a brief overview of your background or specific project goals..."
              className="hero-modal-textarea"
            />
          </div>

          <button type="submit" className="hero-modal-submit-btn">
            <span>Send Proposal</span>
            <div className="hero-modal-circle-arrow">
              <span className="hero-modal-arrow-icon">→</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default WorkWithMeModal;
