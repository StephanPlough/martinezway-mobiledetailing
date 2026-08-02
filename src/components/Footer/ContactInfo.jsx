import React from "react";
import SocialsList from "./SocialsList";
import "./ContactInfo.css";
import "./SocialsList.css";

export default function ContactInfo() {
  return (
    <div className="contact-card">
      <h3>Contact</h3>
      <hr></hr>
      <div className="phone-mail-footer-container">
        <img
          className="icon-img"
          src="/martinezway-mobiledetailing/img/icons/mail-icon.png"
          alt="Envelope"
        ></img>
        <p className="footer-email">martinezwaymobiledetailing@gmail.com</p>
        <img
          className="icon-img"
          src="/martinezway-mobiledetailing/img/icons/phone-icon.png"
          alt="Phone"
        ></img>
        <p className="footer-number">951-746-8945</p>
      </div>

      <SocialsList />
    </div>
  );
}
