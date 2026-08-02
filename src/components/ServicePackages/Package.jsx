import React from "react";
import "./Package.css";

export default function Package() {
  return (
    <div className="package-container">
      <h2 className="package-hero-title">Our Packages</h2>

      <div className="packages">
        {/* MINI DETAIL */}
        <div className="single-package">
          <h3 className="package-title">MINI DETAIL</h3>
          <p className="package-price">Starting at $75</p>
          <ul className="package-list">
            <li>Pre-wash & contact wash</li>
            <li>Door jambs</li>
            <li>Wheels & tires cleaned + tire shine</li>
            <li>Basic panel/dashboard wipe down</li>
            <li>Windows cleaned</li>
            <li>Light vacuuming</li>
            <li>Vent dusting</li>
          </ul>
          <button className="package-btn">BOOK NOW</button>
        </div>

        <div className="single-package popular">
          <h3 className="package-title">EXPRESS DETAIL</h3>
          <p className="package-price">Starting at $140</p>
          <ul className="package-list">
            <li>Pre-wash & contact wash</li>
            <li>Door jambs</li>
            <li>Wheels, tires & fender wells</li>
            <li>Tire shine</li>
            <li>Compressor blowout</li>
            <li>Black trim restoration</li>
            <li>Panel wipe down</li>
            <li>Seat wipe down</li>
            <li>Vacuuming & mat cleaning</li>
            <li>Rubber mat restoration</li>
            <li>Spray sealant</li>
            <li>Free air freshener</li>
          </ul>
          <a href="https://book.squareup.com/appointments/zcwymgvjzbyh1e/location/LWYE3WRQWCW8C/services/VKUYIOSABXROIF6YX557PUWF">
            <button className="package-btn popular-btn">BOOK NOW</button>
          </a>
        </div>

        {/* PREMIUM DETAIL */}
        <div className="single-package">
          <h3 className="package-title">PREMIUM DETAIL</h3>
          <p className="package-price">Starting at $220</p>
          <ul className="package-list">
            <li>Includes Express Package</li>
            <li>Clay bar decontamination</li>
            <li>Hand wax</li>
            <li>4–6 month paint sealant</li>
            <li>Interior deep cleaning</li>
            <li>Interior air blowout</li>
            <li>Windows cleaned</li>
            <li>Seat wipe down</li>
            <li>Vacuuming & mat cleaning</li>
            <li>Rubber mat restoration</li>
            <li>Steam cleaning (tough grime)</li>
            <li>Leather conditioner (if applicable)</li>
            <li>Light shampoo/extraction (cloth mats)</li>
            <li>Free air freshener</li>
          </ul>
          <a href="https://book.squareup.com/appointments/zcwymgvjzbyh1e/location/LWYE3WRQWCW8C/services/7YGQR3XBQAFAFXIDH5BNPQHZ">
            <button className="package-btn">BOOK NOW</button>
          </a>
        </div>

        <div className="single-package">
          <h3 className="package-title">CERAMIC COATING</h3>
          <p className="package-price">Price varies</p>
          <ul className="package-list">
            <li>Preparation pre-wash</li>
            <li>Iron decontamination</li>
            <li>Contact wash</li>
            <li>Clay bar</li>
            <li>Paint correction</li>
            <li>1–2 year ceramic coating</li>
            <li>Black trim restoration</li>
            <li>Door jambs</li>
            <li>Wheels & tires</li>
            <li>Panel wipe down</li>
            <li>Windows cleaned</li>
            <li>Seat wipe down</li>
            <li>Vacuuming & mat cleaning</li>
            <li>Rubber mat restoration</li>
            <li>Free air freshener</li>
          </ul>
          <a href="https://book.squareup.com/appointments/zcwymgvjzbyh1e/location/LWYE3WRQWCW8C/services/SMHLX626Y2KTBXKMM45H3JFO">
            <button className="package-btn">BOOK NOW</button>
          </a>
        </div>
      </div>
    </div>
  );
}
