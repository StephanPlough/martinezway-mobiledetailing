import React from "react";
import "./Gallery.css";

export default function Gallery() {
  return (
    <div className="gallery-container">
      <img className="gallery-img" src="/img/black-ford.jpg" alt="Black Ford" />
      <img
        className="gallery-img"
        src="/img/black-honda.png"
        alt="Black Honda"
      />
      <img className="gallery-img" src="/img/black-suv.png" alt="Black SUV" />
      <img className="gallery-img" src="/img/coolcar.png" alt="Cool Car" />
      <img
        className="gallery-img"
        src="/img/grey-toyota.png"
        alt="Grey Toyota"
      />
      <img className="gallery-img" src="/img/honda-tire.png" alt="Honda Tire" />
      <img className="gallery-img" src="/img/soapy-ford.png" alt="Soapy Ford" />
    </div>
  );
}
