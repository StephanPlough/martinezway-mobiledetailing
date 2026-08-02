import React from "react";
import BookingButton from "./BookingButton";

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <img
          src="/martinezway-mobiledetailing/img/ai-hero.png"
          className="hero-pic1"
        />

        <div className="intro-hero">
          <div className="hero-title-bar">
            <h1 className="intro-hero-name">The Martinez Way Detailing</h1>
          </div>
          <h3 className="intro-hero-desc">
            Fully mobile and ready to serve you wherever and whenever!
          </h3>
          <a href="https://the-martinez-way-mobile-detailing-104486.square.site/">
            <BookingButton />
          </a>
        </div>
      </div>
    </>
  );
}
