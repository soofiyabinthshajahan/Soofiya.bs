import React, { useState } from "react";
import "./Courses.css";
import CourseEnrollModal from "./CourseEnrollModal";

const coursesData = [
  {
    id: "ai-mastery",
    title: "AI Mastery",
    subtitle: "Become a Power User & Tools Expert",
    tagline: "Flagship Program",
    duration: "3 Weeks",
    highlights: ["Advanced Prompt Engineering Patterns", "Workflow Automation Stack Execution", "Custom GPTs & Custom Workspace Setup", "AI-Powered Productivity System"]
  },
  {
    id: "agentic-ai",
    title: "Agentic AI Engineering",
    subtitle: "Building Autonomous Workflows & Multi-Agent Frameworks",
    tagline: "Advanced Engineering",
    duration: "24 Weeks",
    highlights: ["LangGraph & CrewAI Orchestration", "State Management & Memory Systems", "Human-in-the-loop Architectures", "Enterprise Multi-Agent Deployments"]
  },
  {
    id: "claude-mastery",
    title: "Claude Mastery",
    subtitle: "Advanced Prompting, Artifacts, and API Integration",
    tagline: "Deep Dive Series",
    duration: "2 Weeks",
    highlights: ["Claude 3.5 Sonnet Prompt Matrices", "Artifacts Workflow Architecture", "Anthropic Workbench & API Mastery", "Context Window Optimization Strategies"]
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    subtitle: "Mastering LLMs, Vector Databases, and RAG Systems",
    tagline: "Core Engineering",
    duration: "24 Weeks",
    highlights: ["Vector DB Integration (Pinecone/Chroma)", "Advanced RAG Pipelines & Embeddings", "Fine-Tuning Open Source Models", "LLM Evaluation and Monitoring"]
  },
  {
    id: "mern-stack",
    title: "AI Powered MERN Stack Development",
    subtitle: "Production-Grade Web Apps from Architecture to Deployment",
    tagline: "Development Core",
    duration: "24 Weeks",
    highlights: ["Scalable Node/Express API Foundations", "React Client State Management", "AI Feature Embeddings (MERN + LLMs)", "Production Devops & Deployment Pipelines"]
  },
  {
    id: "ai-entrepreneurs",
    title: "AI for Entrepreneurs",
    subtitle: "Strategy, Automation, and Operational Cost Reduction",
    tagline: "Business Strategy",
    duration: "3 Weeks",
    highlights: ["Operational Friction Assessment", "No-Code/Low-Code AI Internal Tools", "Automating Client Onboarding Hubs", "AI Strategy ROI Mapping Blueprint"]
  }
];

function Courses() {
  const [activeCourse, setActiveCourse] = useState(null);

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
                
                {/* Changed plain anchor link into an active state trigger */}
                <button 
                  onClick={() => setActiveCourse(course)}
                  className="course-action-btn" 
                  aria-label={`Enroll in ${course.title}`}
                >
                  <span className="course-btn-text">Enroll Now</span>
                  <div className="c-circle-arrow">
                    <span className="c-arrow-icon">→</span>
                  </div>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Render the structural enrollment modal wrapper when activeCourse state is captured */}
      {activeCourse && (
        <CourseEnrollModal 
          course={activeCourse} 
          onClose={() => setActiveCourse(null)} 
        />
      )}
    </section>
  );
}

export default Courses;