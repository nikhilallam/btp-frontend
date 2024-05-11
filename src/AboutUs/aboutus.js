// src/components/AboutUs.js

import React from "react";
import companyLogo from "../assets/company-logo.jpg";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-image">
          <img src={companyLogo} alt="Company Logo" />
        </div>
        <div className="about-us-text">
          <h2>About Our Company</h2>
          <p>
            Welcome to RozGaar, where we revolutionize labor market
            dynamics through our pioneering project - "Bridging Labor Supply and
            Industry Demand". In an ever-evolving landscape of the labor market,
            efficient workforce synchronization is paramount for both job
            seekers and employers. At RozGaar, we understand the
            challenges faced by both laborers and local industries in finding
            the right match. Our platform serves as a bridge between the two,
            facilitating seamless job matching and enhancing the overall supply
            chain dynamics in the region. Our vision at RozGaar is to create a labor market ecosystem where job seekers and employers can connect effortlessly, leading to mutually beneficial outcomes. We envision a future where every skilled laborer finds suitable opportunities and every industry finds the right talent to meet their needs.
          </p>
          {/* <p>Sed non risus auctor, viverra turpis nec, cursus justo. Sed eu enim eu lectus efficitur consequat.</p> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
