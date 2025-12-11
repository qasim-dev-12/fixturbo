import React from "react";
import { Link } from "react-router-dom";

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
              <span className="sub-title text-white">We are 800SPEEDY</span>
              <h1 className="hero-title text-white">
                Fastest On-Site{" "}
                <span>
                  {/* <img src="assets/img/hero/hero_shape_1.png" alt="Fixturbo" /> */}
                  Tyre Repair in Dubai— 
                </span>{" "}
                Arriving in Just 20–30 Minutes
              </h1>
              <p className="hero-text text-white">
              We offer fast spare tyre changes, puncture fixes, and flat tyre repairs.
Buy brand-new tyres from us at great prices with reliable service every time
              </p>
              <div className="btn-group">
                <Link to="/about" className="btn">
                  Learn About Us
                </Link>
                <Link to="/service" className="btn style-border">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 hero-img">
            <div className="hero-thumb text-center">
              <img src="assets/img/hero/hero-thumb1-new.png" alt="Fixturbo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
