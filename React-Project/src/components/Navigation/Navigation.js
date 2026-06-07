import React, { useState } from "react";
import "./Navigation.css";

const Navigation = ({ onNavigate, activePage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (page, e) => {
    e.preventDefault();
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a
          href="#home"
          className="nav-logo"
          onClick={(e) => handleNavigation("home", e)}
        >
          <div className="nav-logo-symbol">🕉</div>

          <div className="nav-logo-text">
            Shree Ram Janaki
            <br />
            Mandir
          </div>
        </a>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a
              href="#home"
              onClick={(e) => handleNavigation("home", e)}
              className={activePage === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={(e) => handleNavigation("about", e)}
              className={activePage === "about" ? "active" : ""}
            >
              Our Story
            </a>
          </li>

          <li>
            <a
              href="#members"
              onClick={(e) => handleNavigation("members", e)}
              className={activePage === "members" ? "active" : ""}
            >
              Members
            </a>
          </li>

          <li>
            <a
              href="#photos"
              onClick={(e) => handleNavigation("photos", e)}
              className={activePage === "photos" ? "active" : ""}
            >
              Photos
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={(e) => handleNavigation("contact", e)}
              className={activePage === "contact" ? "active" : ""}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;