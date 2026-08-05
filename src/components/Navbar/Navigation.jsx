import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="nav-container">
      <img
        src="/martinezway-mobiledetailing/img/log.png"
        className="nav-logo-img"
        alt="Martinez Way Logo"
      />

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* MOBILE MENU */}
      <ul className={`mobile-nav ${open ? "show" : ""}`}>
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("gallery")}>Gallery</li>
        <li onClick={() => scrollToSection("services")}>Services</li>
        <li onClick={() => scrollToSection("packages")}>Packages</li>
      </ul>

      {/* DESKTOP NAV (unchanged) */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
