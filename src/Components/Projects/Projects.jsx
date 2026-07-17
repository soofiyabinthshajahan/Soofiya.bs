import React from "react";
import "./Projects.css";

const projectsData = [
  {
    category: "Autonomous Agent",
    title: "SBS Analyst",
    tagline: "AUTO-RESEARCH & AGENTIC WORKFLOWS",
    description: "An autonomous agent that monitors global tech trends, scrapes key newsletters, parses complex research papers, and drafts deeply analyzed summaries for teams.",
    tech: ["Python", "LangGraph", "OpenAI API", "Pinecone"],
    actionLabel: "View Blueprint",
  },
  {
    category: "Software System",
    title: "SBS LMS Platform",
    tagline: "ENTERPRISE-GRADE EDUCATION",
    description: "A comprehensive learning management system built for scalability. Features offline course buffering, custom student roadmaps, and automated assessment tracking.",
    tech: ["Node.js", "Express", "MongoDB", "Redis"],
    actionLabel: "Explore Case Study",
  },
  {
    category: "Bespoke Website",
    title: "FormaStairs Portfolio",
    tagline: "EDITORIAL FRONTEND CRAFT",
    description: "A highly interactive, visually striking, and responsive frontend interface created for an architectural fabrication brand. Focused on smooth animations and rich imagery.",
    tech: ["React.js", "Framer Motion", "Tailwind CSS"],
    actionLabel: "Live Preview",
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        
        {/* Editorial Header Row */}
        <div className="projects-header-row">
          <div className="p-header-left">
            <span className="section-label uppercase">Curated Works</span>
            <h2 className="section-title serif-font">
              Selected projects that shape digital <span className="italic-accent serif-font">landscapes.</span>
            </h2>
          </div>
          <div className="p-header-right">
            <p className="header-description">
              A curated showcase of autonomous AI agents, production-grade software applications, and bespoke web interfaces. Dive into the source or join as a collaborator.
            </p>
          </div>
        </div>

        {/* Dynamic Project Layout */}
        <div className="projects-showcase-list">
          {projectsData.map((project, index) => (
            <div key={index} className="project-editorial-row">
              
              {/* Left Segment: Category & Big Number */}
              <div className="project-row-meta">
                <span className="project-index serif-font">0{index + 1}</span>
                <span className="project-category uppercase">{project.category}</span>
              </div>

              {/* Middle Segment: Details */}
              <div className="project-row-details">
                <span className="project-tagline uppercase">{project.tagline}</span>
                <h3 className="project-row-title serif-font">{project.title}</h3>
                <p className="project-row-desc">{project.description}</p>
                
                <div className="project-tech-tags">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-pill uppercase">{t}</span>
                  ))}
                </div>
              </div>

              {/* Right Segment: Dual Action Links Stack */}
              <div className="project-row-action">
                <div className="project-action-stack">
                  
                  {/* Primary Action Button */}
                  <a href="#view" className="project-action-btn" aria-label={`View ${project.title}`}>
                    <span className="p-btn-text">{project.actionLabel}</span>
                    <div className="p-circle-arrow">
                      <span className="p-arrow-icon">→</span>
                    </div>
                  </a>

                  {/* Secondary Collaboration Trigger */}
                  <a href="#contact" className="project-contribute-link uppercase">
                    <span>Interested in Contributing?</span>
                  </a>

                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View More Projects Button Interaction Block */}
        <div className="projects-action-wrapper">
          <button className="view-more-projects-btn">
            <span>View More Projects</span>
            <div className="view-more-projects-circle">
              <span className="view-more-projects-arrow">↓</span>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}

export default Projects;