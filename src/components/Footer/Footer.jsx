import React from "react";
import ContactInfo from "./ContactInfo";
import SocialsList from "./SocialsList";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <img
          src="/MartinezWay/img/log.png"
          className="footer-logo-img"
          alt="Martinez Way Logo"
        />

        <p className="footer-serving">
          Serving Temecula, Murrieta, and surrounding areas.
        </p>
      </div>
      <ContactInfo />
      <div className="footer-map">
        <iframe
          title="Business Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53236.94189574807!2d-117.17183153937202!3d33.493340313036555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db6252f51abe23%3A0x68bc0e88a03806a8!2sTemecula%2C%20CA!5e0!3m2!1sen!2sus!4v1784067915080!5m2!1sen!2sus"
          width="400"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
}
