import React from "react";
import "./Testimonial.css";
import { TESTIMONIALS } from "./TestimonialData";

export default function Testimonial() {
  const looped = [...TESTIMONIALS, ...TESTIMONIALS]; // duplicate once

  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {looped.map(({ name, review }, i) => (
          <div key={name + i} className="testimonial">
            <img
              className="quote top-quote"
              src="/img/icons/icons8-quote-50.png"
              alt="Quote icon"
            />

            <h3 className="testimonial-name">{name}</h3>
            <p className="testimonial-review">{review}</p>

            <img
              className="quote bottom-quote"
              src="/img/icons/icons8-quote-50.png"
              alt="Quote icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
