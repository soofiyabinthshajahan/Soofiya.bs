import React from "react";
import "./Navbar.css";

const navItems = [
  { id: "home", label: "Home", icon: "fa-home" },
  { id: "courses", label: "Courses", icon: "fa-graduation-cap" },
  { id: "services", label: "Services", icon: "fa-briefcase" },
  { id: "projects", label: "Projects", icon: "fa-folder-open" },
  { id: "blog", label: "Blog", icon: "fa-book-open" },
  { id: "contact", label: "Contact", icon: "fa-envelope" }
];

function Navbar() {
  return (
    <nav className="floating-navbar">
      <div className="navbar-dock">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="nav-icon-link"
            data-label={item.label}
          >
            <div className="icon-circle">
              <i className={`fa ${item.icon}`} aria-hidden="true"></i>
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;