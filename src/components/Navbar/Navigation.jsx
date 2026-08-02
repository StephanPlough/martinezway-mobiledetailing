import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";
import BookingButton from "../Hero/BookingButton";

export default function Navigation() {
  return (
    <nav className="nav-container">
      <img
        src="/martinezway-mobiledetailing/img/log.png"
        className="nav-logo-img"
        alt="Martinez Way Logo"
      ></img>
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
