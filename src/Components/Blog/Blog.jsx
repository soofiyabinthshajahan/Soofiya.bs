import React from "react";
import "./Blog.css";

const blogData = [
  {
    date: "12 Mar 2026",
    title: "The Self-Learning Blueprint for AI Engineers",
    tagline: "EDUCATION & ROADMAPS",
    readTime: "5 min read",
  },
  {
    date: "28 Feb 2026",
    title: "Building Production-Grade MERN Apps in the LLM Era",
    tagline: "FULL STACK ARCHITECTURE",
    readTime: "8 min read",
  },
  {
    date: "14 Feb 2026",
    title: "Demystifying Autonomous Agents: LangGraph Explained",
    tagline: "AGENT DEVELOPMENT",
    readTime: "6 min read",
  },
  {
    date: "03 Jan 2026",
    title: "How to Secure Your First Engineering Mentorship Role",
    tagline: "CAREER GROWTH",
    readTime: "4 min read",
  }
];

function Blog() {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        
        {/* Editorial Header Row */}
        <div className="blog-header-row">
          <div className="b-header-left">
            <span className="section-label uppercase">Insights & Writings</span>
            <h2 className="section-title serif-font">
              Shared thoughts on code, tech, and <span className="italic-accent serif-font">learning.</span>
            </h2>
          </div>
          <div className="b-header-right">
            <p className="header-description">
              Actionable guides, structural blueprints, and technical breakdowns written explicitly to simplify complex software concepts and supercharge your self-guided path.
            </p>
          </div>
        </div>

        {/* 4 Blogs Displayed Horizontally */}
        <div className="blog-horizontal-grid">
          {blogData.map((post, index) => (
            <article key={index} className="blog-editorial-card">
              <div className="blog-card-top">
                <span className="blog-date uppercase">{post.date}</span>
                <span className="blog-tagline uppercase">{post.tagline}</span>
              </div>
              
              <div className="blog-card-middle">
                <h3 className="blog-card-title serif-font">{post.title}</h3>
              </div>

              <div className="blog-card-bottom">
                <span className="blog-read-time">{post.readTime}</span>
                <a href="#read" className="blog-arrow-link" aria-label={`Read ${post.title}`}>
                  <div className="b-circle-arrow">
                    <span className="b-arrow-icon">→</span>
                  </div>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Show More Interactive Layout Block */}
        <div className="blog-action-wrapper">
          <button className="show-more-btn">
            <span>Read More Articles</span>
            <div className="show-more-circle">
              <span className="show-more-arrow">↓</span>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}

export default Blog;