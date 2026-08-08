import React from "react";
import "./ContactJosh.css";

export default function ContactJosh() {
  return (
    <>
      <div className="whole-contact-container">
        <div className="contactjosh-container">
          <div className="whole-get-in-touch-div">
            <h2 className="get-in-touch">Get in touch</h2>
            <p className="contact-josh-invite">
              Would you like to get in touch? I would love to hear from you!
              Here is how you can contact me.
            </p>
          </div>

          {/* CONTACT CARDS */}
          <div className="contact-form-container">
            <div className="contact-form phone">
              <h3 className="form-title">Call or Text Me</h3>

              <img
                className="icon-img"
                src="/img/icons/phone-icon.png"
                alt="Phone"
              />

              <p className="calltext-josh-text">
                Interested in calling me or shooting me a text? Let's do it! I
                will get back to you as soon as I can.
              </p>
              <a className="contact-number" href="tel:9517468945">
                951-746-8945
              </a>
            </div>

            <div className="contact-form mail">
              <h3 className="form-title">Email Me</h3>

              <img
                className="icon-img"
                src="/img/icons/mail-icon.png"
                alt="Mail"
              />

              <p className="calltext-josh-text">
                Maybe you would prefer sending me an email. You can also do that
                and I will get to you as soon as I can!
              </p>
              <a
                className="contact-email"
                href="mailto:martinezwaymobiledetailing@gmail.com"
              >
                martinezwaymobiledetailing@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="contact-background-section"></div>
      </div>
    </>
  );
}
