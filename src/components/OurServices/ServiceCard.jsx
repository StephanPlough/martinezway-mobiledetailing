import React from "react";
import "./ServiceCard.css";

export default function ServiceCard() {
  return (
    <div className="service-card-container">
      <div className="service-card">
        <img
          className="service-card-img"
          src="img/ai-paint-correction.png"
          alt=""
        />
        <h4 className="service-name">Paint Correction</h4>
        <p className="service-card-text">
          Restore your vehicle’s shine with a multi‑stage machine polishing
          process that removes swirl marks, oxidation, and light scratches. This
          service enhances gloss, revives dull paint, and prepares the surface
          for long‑lasting protection.
        </p>
      </div>

      <div className="service-card">
        <img
          className="service-card-img"
          src="img/ai-ceramic-coating.png"
          alt=""
        />
        <h4 className="service-name">Ceramic Coatings</h4>
        <p className="service-card-text">
          A long‑lasting protective layer that shields your paint from UV rays,
          oxidation, water spots, and contaminants. Delivers deep gloss, extreme
          hydrophobicity, and easier maintenance for months to years depending
          on the package.
        </p>
      </div>

      <div className="service-card">
        <img className="service-card-img" src="img/ai-waxing.png" alt="" />
        <h4 className="service-name">Waxing</h4>
        <p className="service-card-text">
          Enhances shine and adds a protective layer that shields your paint
          from UV rays, contaminants, and light weathering. Leaves your vehicle
          with a smooth, glossy finish and easier maintenance.
        </p>
      </div>

      <div className="service-card">
        <img className="service-card-img" src="img/ai-clay-red.png" alt="" />
        <h4 className="service-name">Clay Baring</h4>
        <p className="service-card-text">
          Removes embedded contaminants like tar, overspray, brake dust, and
          industrial fallout that regular washing can’t touch. Restores a
          smooth, glass‑like surface and preps the paint for polishing or
          protection.
        </p>
      </div>

      <div className="service-card">
        <img className="service-card-img" src="img/ai-engine.png" alt="" />
        <h4 className="service-name">Engine Bay Cleaning</h4>
        <p className="service-card-text">
          Safely removes dirt, grease, and debris from the engine compartment
          using controlled cleaning methods. Restores a tidy, presentable bay
          and helps improve visibility for maintenance and inspections.
        </p>
      </div>

      <div className="service-card">
        <img className="service-card-img" src="img/ai-headlight.webp" alt="" />
        <h4 className="service-name">Headlight Restoration</h4>
        <p className="service-card-text">
          Removes oxidation, yellowing, and haze from headlight lenses to
          restore clarity and improve nighttime visibility. Finished with a
          protective sealant to slow future fading.
        </p>
      </div>

      <div className="service-card">
        <img className="service-card-img" src="img/ai-shampooing.jpg" alt="" />
        <h4 className="service-name">Minor Shampooing</h4>
        <p className="service-card-text">
          Light fabric shampooing to remove surface stains, dirt, and odors from
          seats, carpets, and mats. Refreshes interior appearance without the
          full deep‑clean process.
        </p>
      </div>

      <div className="service-card">
        <img
          className="service-card-img"
          src="img/ai-stain-removal.png"
          alt=""
        />
        <h4 className="service-name">Minor Stain Removal</h4>
        <p className="service-card-text">
          Targets small, surface‑level stains on seats, carpets, and mats using
          gentle, fabric‑safe cleaners. Restores a cleaner, fresher look without
          the need for full interior shampooing.
        </p>
      </div>
    </div>
  );
}
