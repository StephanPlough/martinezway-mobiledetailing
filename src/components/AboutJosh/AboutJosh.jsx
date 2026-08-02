import React from "react";
import "./AboutJosh.css";

export default function AboutJosh() {
  return (
    <>
      <div className="aboutjosh-container">
        {/* LEFT TEXT BLOCK */}
        <div className="text-about">
          <h2 className="aboutjosh-header">Hi, I'm Josh Martinez</h2>
          <h3 className="aboutjosh-header-sub">What I Do</h3>

          <p className="aboutjosh-desc">
            I started out with a small bucket car wash kit for my first brand
            new vehicle I purchased at 19 years old, with a desire to use
            effective, but safe chemicals to keep my car looking its best each
            month! With what became a fun hobby for myself, became a side hustle
            and from there turned into a small detailing business it is today!
            Being able to return someone's vehicle to showroom ready is really
            something special
          </p>
        </div>

        {/* RIGHT PHOTO BLOCK */}
        <div className="photo-about-container">
          <img className="josh-front" src="./img/Josh-front.jpg" alt="Josh" />
        </div>
      </div>
      <div className="aboutjosh-container reverse">
        {/* LEFT TEXT BLOCK */}
        <div className="text-about">
          <h2 className="aboutjosh-header">From Hobby to Business</h2>
          <h3 className="aboutjosh-header-sub">How it Started</h3>

          <p className="aboutjosh-desc">
            So I got the necessary, beginner equipment along with the chemicals
            suited for detailing, got a truck to put all of it in and started my
            very own mobile detailing business "The Martinez Way" with a focus
            of keeping client's vehicles not just clean but protected, while
            also educating them in the process
          </p>
        </div>

        {/* RIGHT PHOTO BLOCK */}
        <div className="photo-about-container">
          <img className="josh-front" src="./img/Josh-back.jpg" alt="Josh" />
        </div>
      </div>
    </>
  );
}
