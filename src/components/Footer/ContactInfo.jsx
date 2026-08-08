import React from "react";
import SocialsList from "./SocialsList";
import "./ContactInfo.css";
import "./SocialsList.css";

export default function ContactInfo() {
  return (
    <div className="contact-card">
      <h3>Contact</h3>
      <hr />

      <div className="phone-mail-footer-container">
        <img
          className="icon-img"
          src="/img/icons/mail-icon.png"
          alt="Envelope"
        />

        <p className="footer-email">martinezwaymobiledetailing@gmail.com</p>

        <img className="icon-img" src="/img/icons/phone-icon.png" alt="Phone" />

        <a className="footer-number" href="tel:9517468945">
          951-746-8945
        </a>
      </div>

      <SocialsList />
    </div>
  );
}
