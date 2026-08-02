import React from "react";
import "./OurServices.css";

export default function OurServices() {
  return (
    <>
      <div className="service-photo-container">
        <img className="service-img" src="public/img/ai-service-hero.png" />

        <div className="service-text-wrapper">
          <h1 className="service-title">Services</h1>
          <h3 className="service-desc">
            “It's not just anyway...it's The Martinez Way! Forget waiting in
            line and having to drive to a local car wash that leaves swirl
            marks, water spots, etc, we make it a point to leave your vehicles
            looking like it came straight from the show-room floor! From
            Exterior/Interior, Engine bay cleaning, to paint corrections and
            ceramic coatings, we offer plenty of services to choose from!"
          </h3>
        </div>
      </div>

      <div className="all-services-container">
        <div className="car-outline-container">
          <div className="contact-disclaimer">
            <h3 className="disclaimer-title">Booking & Travel Disclaimer</h3>
            <p className="disclaimer-text">
              Appointments require a{" "}
              <span className="disc-highlight">$50 non‑refundable deposit</span>{" "}
              for full detailing services, applied toward your final total.
            </p>
            <p className="disclaimer-text">
              A{" "}
              <span className="disc-highlight">$30 non‑refundable deposit</span>{" "}
              is required for basic or maintenance services and also goes toward
              your service total.
            </p>
            <p className="disclaimer-text">
              A <span className="disc-highlight">$20 travel fee</span> applies
              to locations outside a 15‑mile radius.
            </p>
            <p className="disclaimer-text">
              By booking with The Martinez Way Mobile Detailing, you agree to
              these terms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
