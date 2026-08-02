import React from "react";
import Navigation from "../components/Navbar/Navigation";
import Hero from "../components/Hero/Hero";
import OurServices from "../components/OurServices/OurServices";
import ServiceCard from "../components/OurServices/ServiceCard";
import Package from "../components/ServicePackages/Package";
import Testimonial from "../components/Testimonials/Testimonial";
import Gallery from "../components/Gallery/Gallery";
import WhyMartinez from "../components/WhyMartinez/WhyMartinez";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyMartinez />
      <Gallery />
      <OurServices />
      <ServiceCard />
      <Package />
      <Testimonial />
    </div>
  );
}
