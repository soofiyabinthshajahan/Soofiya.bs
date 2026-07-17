import React, { useState } from "react";
import "./Service.css";
import ServiceDetailModal from "./ServiceDetailModal";

const servicesData = [
  {
    id: "1-1-tech-Mentorship",
    number: "01",
    title: "1:1 Technical Mentorship",
    tagline: "Personalized Coaching",
    description: "Tailored mentoring sessions for students, freshers, and working professionals. ",
    deliverables: ["Customized Multi-Month Curriculum", "Weekly Live 1:1 Review Sessions", "Direct Chat Access & Code Reviews", "Resume & Portfolio Strategy"],
  },
  {
    id: "group-masterclasses",
    number: "02",
    title: "Group Masterclasses",
    tagline: "Workshops & Bootcamps",
    description: "Comprehensive, hands-on training sessions in Full-Stack MERN and AI Engineering, specifically designed for universities, schools, and corporate dev academies.",
    deliverables: ["Curriculum Tailored to Your Cohort", "Hands-on Guided Capstone Projects", "Post-Workshop Dev Checklists", "Interactive Q&A Sessions"],
  },
  {
    id: "strategic-consulting",
    number: "03",
    title: "Strategic AI Consultation",
    tagline: "For Founders & Teams",
    description: "Helping entrepreneurs and startups map out operational bottlenecks, understand current LLM capabilities, and integrate intelligent solutions safely into their business workflows.",
    deliverables: ["Operational Friction Audit", "Custom AI Architecture Roadmap", "Security & Compliance Check", "Tool Stack Recommendations"],
  },
  {
    id: "agent-development",
    number: "04",
    title: "Agent Development",
    tagline: "Intelligent Automation",
    description: "Designing and deploying custom autonomous AI agents that handle complex, multi-step operations—connecting your databases, custom APIs, and LLM orchestration.",
    deliverables: ["LangGraph / CrewAI Architecture", "Custom API Integrations", "Autonomous Self-Correction Loops", "Full Production Handover"],
  },
  {
    id: "web-development",
    number: "05",
    title: "Web Development",
    tagline: "Scalable MERN Architectures",
    description: "Building production-grade full-stack web applications with clean codebases, secure API designs, and highly responsive modern user interfaces.",
    deliverables: ["Production-Ready MERN App", "Optimized MongoDB Schemas", "JWT/OAuth Multi-Layer Security", "Vercel / AWS CI/CD Setup"],
  },
  {
    id: "roadmaps-workbooks",
    number: "06",
    title: "Roadmaps & Workbooks",
    tagline: "Structured Self-Study",
    description: "Comprehensive, step-by-step visual roadmaps and actionable PDF workbooks designed to take self-paced learners from absolute MERN beginners to production-ready AI Engineers.",
    deliverables: ["Structured Step-by-Step Path", "Practical Actionable Tasks", "Code Repository Access", "Lifetime Resource Updates"],
  }
];

function Services() {
  const [hoveredService, setHoveredService] = useState(servicesData[0]);
  const [modalService, setModalService] = useState(null);

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        
        {/* Compact Title Area */}
        <div className="services-minimal-header">
          <span className="section-label uppercase">Mentorship & Expertise</span>
          <h2 className="section-title serif-font">My Services Overview</h2>
        </div>

        {/* Compressed Split Screen Layout */}
        <div className="services-split-workspace">
          
          {/* Left Column: Interactive Navigation List */}
          <div className="services-navigation-pane">
            {servicesData.map((service) => (
              <div 
                key={service.id} 
                className={`nav-item-row ${hoveredService.id === service.id ? "active-row" : ""}`}
                onMouseEnter={() => setHoveredService(service)}
                onClick={() => setModalService(service)}
              >
                <span className="nav-number serif-font">{service.number}</span>
                <div className="nav-text-block">
                  <span className="nav-tagline uppercase">{service.tagline}</span>
                  <h3 className="nav-title serif-font">{service.title}</h3>
                </div>
                <div className="nav-indicator-arrow">→</div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky High-End Preview Box */}
          <div className="services-preview-pane">
            <div className="preview-card-inner">
              <span className="preview-tagline uppercase">{hoveredService.tagline}</span>
              <h3 className="preview-title serif-font">{hoveredService.title}</h3>
              <p className="preview-description">{hoveredService.description}</p>
              
              <div className="preview-deliverables">
                <span className="deliverables-heading uppercase">Key Focus Areas:</span>
                <ul className="preview-list">
                  {hoveredService.deliverables.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="preview-list-item">
                      <span className="bullet-dot">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => setModalService(hoveredService)} 
                className="preview-action-trigger"
              >
                <span>Book / Inquire Now</span>
                <div className="preview-circle-arrow">
                  <span className="preview-arrow-icon">→</span>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>

      {modalService && (
        <ServiceDetailModal 
          service={modalService} 
          onClose={() => setModalService(null)} 
        />
      )}
    </section>
  );
}

export default Services;