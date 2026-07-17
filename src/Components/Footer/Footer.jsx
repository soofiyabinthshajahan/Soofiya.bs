import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Top Branding Row */}
        <div className="footer-main-row">
          <div className="footer-brand">
            <span className="footer-logo serif-font">Soofiya BS</span>
            <p className="footer-tagline">AI Engineer & Technical Trainer</p>
          </div>
        </div>

        {/* Bottom Rights & Social Row */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            © {currentYear} Soofiya BS. All rights reserved.
          </p>
          
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="mailto:hello@afifaalvi.com" className="social-icon-link" aria-label="Email">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;