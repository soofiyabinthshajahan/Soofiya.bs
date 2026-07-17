import React from "react";
import "./Courses.css";

const coursesData = [
  {
    title: "AI Mastery",
    subtitle: "Become a Power User & Tools Expert",
    tagline: "Flagship Program",
    duration: "3 Weeks"
  },
  {
    title: "Agentic AI Engineering",
    subtitle: "Building Autonomous Workflows & Multi-Agent Frameworks",
    tagline: "Advanced Engineering",
    duration: "24 Weeks - Daily 8hrs"
  },
  {
    title: "Claude Mastery",
    subtitle: "Advanced Prompting, Artifacts, and API Integration",
    tagline: "Deep Dive Series",
    duration: "2 Weeks"
  },
  {
    title: "Generative AI",
    subtitle: "Mastering LLMs, Vector Databases, and RAG Systems",
    tagline: "Core Engineering",
    duration: "24 Weeks - Daily 8hrs"
  },
  {
    title: "AI Powered MERN Stack Development",
    subtitle: "Production-Grade Web Apps from Architecture to Deployment",
    tagline: "Development Core",
    duration: "24 Weeks - Daily 8hrs"
  },
  {
    title: "AI for Entrepreneurs",
    subtitle: "Strategy, Automation, and Operational Cost Reduction",
    tagline: "Business Strategy",
    duration: "3 Weeks"
  }
];

function Courses() {
  return (
    <section className="courses-section" id="courses">
      <div className="courses-container">
        
        {/* Editorial Header Row */}
        <div className="courses-header-row">
          <div className="c-header-left">
            <span className="section-label uppercase">Curriculums & Cohorts</span>
            <h2 className="section-title serif-font">
              Structured paths to accelerate your <span className="italic-accent serif-font">growth.</span>
            </h2>
          </div>
          <div className="c-header-right">
            <p className="header-description">
              Carefully organized curriculums for Practical and self-Learning. Ideal for individuals, teams, and organizations looking to upskill in AI and Web Development.
            </p>
          </div>
        </div>

        {/* Minimal Editorial Rows */}
        <div className="courses-list">
          {coursesData.map((course, index) => (
            <div key={index} className="course-editorial-row">
              
              {/* Left Column: Tagline & Category */}
              <div className="course-row-meta">
                <span className="course-tagline uppercase">{course.tagline}</span>
              </div>

              {/* Middle Column: Title & Subtitle */}
              <div className="course-row-details">
                <h3 className="course-row-title serif-font">{course.title}</h3>
                <p className="course-row-subtitle">{course.subtitle}</p>
              </div>

              {/* Right Column: Duration, Enroll Action & Circular Arrow */}
              <div className="course-row-action">
                <span className="course-duration uppercase">{course.duration}</span>
                
                <a href="#contact" className="course-action-btn" aria-label={`Enroll in ${course.title}`}>
                  <span className="course-btn-text">Enroll Now</span>
                  <div className="c-circle-arrow">
                    <span className="c-arrow-icon">→</span>
                  </div>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Courses;