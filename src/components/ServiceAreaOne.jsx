// src/components/ServiceAreaOne.jsx
import React from "react";
import { Link } from "react-router-dom";
import services from "../data/services"; // adjust path if your structure differs

const ServiceAreaOne = () => {
  return (
    <div className="service-area-1 space-top bg-smoke overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Latest service</span>
              <h2 className="sec-title">Professional Car Repair The Best Services</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row gy-4 justify-content-center">
          {services.map((s) => (
            <div className="col-lg-4 col-md-6" key={s.id}>
              <div className="service-card">
                <div className="service-card_content">
                  <div className="service-card_icon">
                    <img src={s.icon} alt={s.title} />
                  </div>

                  <h4 className="service-card_title h5">
                    <Link to={`/service/${s.slug}`}>{s.title}</Link>
                  </h4>

                  <p className="service-card_text">{s.short}</p>

                  <Link to={`/service/${s.slug}`} className="link-btn">
                    Read More <i className="fas fa-arrow-right" />
                  </Link>
                </div>

                <div className="service-card_img">
                  <img src={s.image} alt={s.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaOne;
