import React from "react";
import "./Hero.css";
import Background from "../../assets/images/Herobg.png";
import {
  FaReact,
  FaJsSquare,
  FaPython,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import { SiTensorflow } from "react-icons/si"; // TensorFlow is in the SimpleIcons set

function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="Container"
    >
      <div className="left">
        <div className="content-inner">
          <p className="greeting uppercase">
            Hi, I'm{" "}
            <span className="highlight-text serif-font">Soofiya BS</span>
          </p>

          <h1 className="main-headline serif-font">
            Guiding your self-learning journey and building real{" "}
            <span className="highlight-text italic-accent">impact.</span>
          </h1>

          <div className="badges-group">
            <span className="info-badge uppercase">
              <i className="fa fa-robot" aria-hidden="true"></i> AI Engineer
            </span>
            <span className="info-badge uppercase">
              <i className="fa fa-code" aria-hidden="true"></i> Software
              Engineer
            </span>
            <span className="info-badge uppercase">
              <i className="fa fa-chalkboard-teacher" aria-hidden="true"></i>{" "}
              Technical Trainer
            </span>
            <span className="info-badge uppercase">
              <i className="fa fa-pencil-alt" aria-hidden="true"></i> Content
              Creator
            </span>
          </div>

          <div className="description">
            <p>
              I build AI-powered solutions, scale modern web applications, and
              create structured materials that simplify complex technologies for
              learners.
            </p>
          </div>

          <div className="action-buttons">
            <button className="primary-btn">
              <span>Secure Your Spot</span>
              <div className="circle-arrow-mini">
                <span className="arrow-icon-mini">→</span>
              </div>
            </button>
            <button className="secondary-btn">
              Work with Me{" "}
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
             
          </div>

          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number serif-font">3+</span>
              <span className="stat-label uppercase">Years Exp</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number serif-font">20+</span>
              <span className="stat-label uppercase">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number serif-font">2K+</span>
              <span className="stat-label uppercase">Learners</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number serif-font">30+</span>
              <span className="stat-label uppercase">Articles</span>
            </div>
          </div>

          <div className="tech-section">
            <p className="tech-heading uppercase">Technologies I work with</p>
            <div className="tech-icons">
              <FaReact title="React" />
              <FaJsSquare title="JavaScript" />
              <FaPython title="Python" />
              <FaDatabase title="Databases" />
              <SiTensorflow title="TensorFlow" />
              <FaGithub title="GitHub" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
