import React from "react";
import "./WhyMartinez.css";

export default function WhyMartinez() {
  return (
    <section className="why-container">
      <div className="why-header">
        <h1>Why The Martinez Way?</h1>

        <p>
          Your vehicle deserves more than just a quick wash. At
          <span> The Martinez Way Mobile Detailing</span>, we combine premium detailing
          products, meticulous workmanship, and the convenience of a completely
          mobile service. Whether you're at home or work, we bring the detail
          shop directly to you so you can enjoy a spotless vehicle without
          disrupting your day.
        </p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-icon">🚗</div>
          <h3>100% Mobile</h3>
          <p>We come directly to your home, apartment, office, or workplace.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⭐</div>
          <h3>25+ Five-Star Reviews</h3>
          <p>
            Trusted by customers throughout Temecula, Murrieta, and surrounding
            areas.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🧽</div>
          <h3>Premium Products</h3>
          <p>
            We use professional-grade chemicals, tools, and equipment for every
            detail.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⏰</div>
          <h3>Convenient Scheduling</h3>
          <p>Book a time that works best for you—we'll handle the rest.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💎</div>
          <h3>Attention To Detail</h3>
          <p>
            Every vehicle is treated with the same care and precision as our
            own.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">✨</div>
          <h3>Results That Shine</h3>
          <p>
            From daily drivers to luxury vehicles, we leave every car looking
            its absolute best.
          </p>
        </div>
      </div>
    </section>
  );
}
