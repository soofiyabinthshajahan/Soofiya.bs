import React, { useState } from "react";
import "./ServiceDetailModal.css";

function ServiceDetailModal({ service, onClose }) {
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    timeline: "flexible",
    message: "",
  });

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new URLSearchParams();
    formData.append("formType", "Services");
    formData.append("serviceTitle", service.title);
    formData.append("name", bookingData.name);
    formData.append("email", bookingData.email);
    formData.append("timeline", bookingData.timeline);
    formData.append("message", bookingData.message);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxtHhuY9U0X47MFZdrR8O14X8vDgM7FRKgqfU5XM0lN19UemnNA5LD1j3rSI1xz4pujbQ/exec", {
        method: "POST",
        body: formData,
        mode: "no-cors"
      });
      alert("Inquiry submitted successfully!");
      onClose();
    } catch (err) {
      console.error("Error submitting form", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">✕</button>
        
        <div className="modal-grid">
          <div className="modal-info-pane">
            <span className="modal-tagline uppercase">{service.tagline}</span>
            <h3 className="modal-service-title serif-font">{service.title}</h3>
            <p className="modal-service-desc">{service.description}</p>
            
            <div className="modal-deliverables-section">
              <span className="deliverables-heading uppercase">What's Included</span>
              <ul className="deliverables-list">
                {service.deliverables?.map((item, idx) => (
                  <li key={idx} className="deliverable-item">
                    <span className="bullet-dot">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="modal-form-pane">
            <span className="form-pane-label uppercase">Direct Request</span>
            <h4 className="form-pane-title serif-font">Secure Your Slot</h4>
            
            <form onSubmit={handleFormSubmit} className="modal-booking-form">
              <div className="modal-input-group">
                <label className="modal-label uppercase">Your Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={bookingData.name} 
                  onChange={handleChange} 
                  placeholder="Soofiya Binth Shajahan"
                  className="modal-input"
                />
              </div>

              <div className="modal-input-group">
                <label className="modal-label uppercase">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={bookingData.email} 
                  onChange={handleChange} 
                  placeholder="Soofiyashajahan@gmail.com"
                  className="modal-input"
                />
              </div>

              <div className="modal-input-group">
                <label className="modal-label uppercase">Desired Joining Timeline</label>
                <select 
                  name="timeline" 
                  value={bookingData.timeline} 
                  onChange={handleChange}
                  className="modal-select"
                >
                  <option value="immediate">Immediate (Within 2 weeks)</option>
                  <option value="next-month">Next Month</option>
                  <option value="flexible">Quick call for details</option>
                </select>
              </div>

              <div className="modal-input-group">
                <label className="modal-label uppercase">Notes / Project Objectives</label>
                <textarea 
                  name="message" 
                  rows="3" 
                  value={bookingData.message} 
                  onChange={handleChange} 
                  placeholder="Briefly share your learning goals..."
                  className="modal-textarea"
                />
              </div>

              <button type="submit" className="modal-submit-action-btn">
                <span>Submit Inquiry</span>
                <div className="modal-circle-arrow">
                  <span className="modal-arrow-icon">→</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailModal;