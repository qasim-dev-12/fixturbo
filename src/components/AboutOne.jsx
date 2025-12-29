import React from "react";
import { Link } from "react-router-dom";
import shape1 from "../assets/img/normal/about_shape1-2.svg";
import shape2 from "../assets/img/normal/about_shape1-1.svg";
import whatsappIcon from "../../src/assets/img/icon/new-500.png";
import call from "../../src/assets/img/icon/call (1).png";

const AboutOne = () => {
  return (
    <div className="about-area-1 space-bottom ">
      <div className="about1-shape-img shape-mockup">
        <img
        style={{
          width:"150px",
          height:"150px",
          marginLeft:"100px",
        }}
          className="about1-shape-img-1 spin"
          src={shape1}
          alt="800speedy"
        />
        <img
          className="about1-shape-img-2 spin2"
          src={shape2}
          alt="800speedy"
        />
      </div>
      <div className="container">
        <div className="row gx-60 align-items-center">
          <div className="col-xl-6">
            <div className="about-thumb1 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img src="/assets/img/normal/about_1.png" alt="800speedy" />
              </div>
              <div className="about-img-2">
                <img src="/assets/img/normal/about_1-2.png" alt="800speedy" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-content-wrap">
              <div className="title-area me-xl-5 mb-20">
                <span className="sub-title">Know About Us</span>
                <h2 className="sec-title">
                  Your Trusted Mobile Tyre Experts in Dubai
                </h2>
                <p className="sec-text">
                 Premium service, fair pricing, and the fastest response time in Dubai (20–30 minutes)
                </p>
              </div>
              <div className="row gy-4 justify-content-xl-between justify-content-end align-items-center flex-row-reverse">
                <div className="col-lg-auto" style={{width:"100%"}}>
                  <div className="about-year-wrap" style={{
                    width:"100%"
                    
                    }}>
                    <div
                      className="about-year-mask-wrap"
                      style={{
                        maskImage: "url(assets/img/bg/about_counter-bg1-1.png)",
                      }}
                    >
                      <img src="assets/img/icon/about_icon1-1.svg" alt="800speedy" />
                      <h3 className="about-year-wrap-title">
                        <span className="counter-number">10</span>+
                      </h3>
                      <p className="about-year-wrap-text">
                        Years of Combined Expertise
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-auto col-lg-6">
                  <div className="checklist">
                    <ul>
                      <li>
                        <i className="fas fa-check-circle" />
                        24/7 Mobile Tyre Repair & Replacement across all Dubai areas
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />A car repair is a
                        Certified technicians with years of real automotive experience
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Fast arrival time — we reach you in 20–30 minutes
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                      High-quality tyres & professional tools for every job
                      </li>
                       <li>
                        <i className="fas fa-check-circle" />
                     Pay by card or pay by link
                      </li>
                       <li>
                        <i className="fas fa-check-circle" />
                     Services start from AED 79
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
              
                {/* <Link to="/about" className="btn style2 mt-xl-0 mt-20">
                  Read More <i className="fas fa-arrow-right ms-2" />
                </Link> */}
             <div className="button-wrapper-2 mt-30">
      
        <a
          href="https://api.whatsapp.com/send/?phone=0543170355"
          className="custom-btn whatsapp-btn wobble-btn"
          style={{ padding: "8px 12px" }}
        >
          <img
            src={whatsappIcon}
            alt="WhatsApp"
            className="btn-icon"
            style={{ width: "20px", height: "20px" }}
          />
          <span style={{ color: "#000" }}>WhatsApp Us</span>
        </a>
      
        <a
          href="tel:+0543170355"
          className="custom-btn call-btn wobble-btn"
          style={{ padding: "8px 12px" }}
        >
          <img
            src={call}
            alt="Call Us"
            className="btn-icon"
            style={{ width: "20px", height: "20px" }}
          />
          <span style={{ color: "#000" }}>Call Us</span>
        </a>
      
      </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
