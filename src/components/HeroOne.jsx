import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css"

const HeroOne = () => {
  return (
    <div
      className="hero-wrapper hero-1"
      id="hero"
      style={{ backgroundImage: "url(assets/img/hero/hero_banner.png)" }}
    >
      <div className="container">
        <div className="row flex-row-reverse hero-row">
          <div className="col-xl-6">
            <div className="hero-style1">
              <span className="sub-title text-gold">We are 800SPEEDYyyy</span>
              <h1 className="hero-title text-white">
                Fastest On-Site{" "}
                <span>
                  {/* <img src="assets/img/hero/hero_shape_1.png" alt="800speedy" /> */}
                  Tyre Repair in Dubai— 
                </span>{" "}
                Arriving in Just 20–30 Minutes
              </h1>
         <ul className="hero-points hero-text  hero-para">
  <li>
    <span className="icon">🚗</span>
    Fast spare tyre changes
  </li>
  <li>
    <span className="icon">🛠️</span>
    Quick puncture fixes
  </li>
  <li>
    <span className="icon">⚡</span>
    Reliable flat tyre repairs
  </li>
  <li>
    <span className="icon">🛞</span>
    Brand-new tyres at great prices
  </li>
  {/* <li>
    <span className="icon">⭐</span>
    Trusted service every time
  </li> */}
  <li>
  <span className="icon">💳</span>
  Pay by card or pay by link
</li>
</ul>

              {/* <div className="btn-group">
                <Link to="/about" className="btn">
                  Learn About Us
                </Link>
                <Link to="/service" className="btn style-border">
                  Our Services
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-xl-6 hero-img">
            <div className="hero-thumb text-center">
              <img src="assets/img/hero/hero-thumb1-new.png" alt="800speedy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
