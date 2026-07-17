import React, { useState } from "react";
import "./CourseEnrollModal.css";

function CourseEnrollModal({ course, onClose }) {
  const [enrollmentData, setEnrollmentData] = useState({
    name: "",
    email: "",
    objective: "career-transition",
    message: ""
  });

  const handleChange = (e) => {
    setEnrollmentData({ ...enrollmentData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(`Cohort Enrollment Request for [${course.title}]:`, enrollmentData);
    // Integration logic path for Form Spree, EmailJS or API endpoints goes here
    onClose();
  };

  return (
    <div className="c-modal-overlay" onClick={onClose}>
      <div className="c-modal-wrapper" onClick={(e) => e.stopPropagation()}>
        
        <button className="c-modal-close-btn" onClick={onClose} aria-label="Close modal">✕</button>
        
        <div className="c-modal-grid">
          
          {/* Left Side: Syllabus Breakdown & Duration Stats */}
          <div className="c-modal-info-pane">
            <div className="c-modal-meta-row">
              <span className="c-modal-tagline uppercase">{course.tagline}</span>
              <span className="c-modal-duration uppercase">{course.duration} Batch</span>
            </div>
            <h3 className="c-modal-course-title serif-font">{course.title}</h3>
            <p className="c-modal-course-subtitle">{course.subtitle}</p>
            
            <div className="c-modal-highlights-section">
              <span className="c-highlights-heading uppercase">Curriculum Modules Includes</span>
              <ul className="c-highlights-list">
                {course.highlights?.map((item, idx) => (
                  <li key={idx} className="c-highlight-item">
                    <span className="c-bullet-dot">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Spot Booking Form Card Layout */}
          <div className="c-modal-form-pane">
            <span className="c-form-pane-label uppercase">Registration Desk</span>
            <h4 className="c-form-pane-title serif-font">Secure Your Spot</h4>
            
            <form onSubmit={handleFormSubmit} className="c-modal-booking-form">
              <div className="c-modal-input-group">
                <label className="c-modal-label uppercase">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={enrollmentData.name} 
                  onChange={handleChange} 
                  placeholder="Soofiya Binth Shajahan"
                  className="c-modal-input"
                />
              </div>

              <div className="c-modal-input-group">
                <label className="c-modal-label uppercase">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={enrollmentData.email} 
                  onChange={handleChange} 
                  placeholder="soofiyashajahan@gmail.com"
                  className="c-modal-input"
                />
              </div>

              <div className="c-modal-input-group">
                <label className="c-modal-label uppercase">Primary Learning Goal</label>
                <div className="c-select-wrapper">
                  <select 
                    name="objective" 
                    value={enrollmentData.objective} 
                    onChange={handleChange}
                    className="c-modal-select"
                  >
                    <option value="career-transition">Upskilling / Career Acceleration</option>
                    <option value="freelance">Freelancing & Client Work</option>
                    <option value="corporate-training">Corporate Deployment Need</option>
                    <option value="hobbyist">Academic Research / Build Products</option>
                  </select>
                </div>
              </div>

              <div className="c-modal-input-group">
                <label className="c-modal-label uppercase">Background / Message</label>
                <textarea 
                  name="message" 
                  rows="3" 
                  value={enrollmentData.message} 
                  onChange={handleChange} 
                  placeholder="Tell me briefly about your current programming proficiency..."
                  className="c-modal-textarea"
                />
              </div>

              <button type="submit" className="c-modal-submit-action-btn">
                <span>Confirm Application</span>
                <div className="c-modal-circle-arrow">
                  <span className="c-modal-arrow-icon">→</span>
                </div>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CourseEnrollModal;