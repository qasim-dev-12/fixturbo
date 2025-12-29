import React from "react";
import { Link } from "react-router-dom";
import logo from "../../src/assets/img/logo/logo-white.png";
import whatsappIcon from "../../src/assets/img/icon/new-500.png";
import call from "../../src/assets/img/icon/call (1).png";

const SubscribeOne = () => {
  return (
    <div className="container">
      <div
        className="footer-top-1 bg-theme"
        style={{ backgroundImage: "url(assets/img/bg/footer-top-bg1-1.png)" }}
      >
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="800speedy" />
          </Link>
        </div>
        <div className="call-media-wrap">
          {/* <div className="icon">
            <img src="assets/img/icon/phone-1.svg" alt="800speedy" />
          </div> */}
          <div className="media-body">
             <div className="button-wrapper-2 d-none d-md-inline-block">
      
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
       <div className="social-btn">
  <a
    href="https://www.facebook.com/800speedy"
    target="_blank"
    rel="noopener noreferrer"
    style={{ backgroundColor: "hsla(183, 75%, 70%, 1.00)" }}
  >
    <i className="fab fa-facebook-f" />
  </a>

  <a
    href="https://www.instagram.com/800speedy"
    target="_blank"
    rel="noopener noreferrer"
    style={{ backgroundColor: "hsla(183, 75%, 70%, 1.00)" }}
  >
    <i className="fab fa-instagram" />
  </a>

  <a
    href="https://www.tiktok.com/@800speedy"
    target="_blank"
    rel="noopener noreferrer"
    style={{ backgroundColor: "hsla(183, 75%, 70%, 1.00)" }}
  >
    <i className="fab fa-tiktok" />
  </a>

  <a
    href="https://www.linkedin.com/company/800speedy"
    target="_blank"
    rel="noopener noreferrer"
    style={{ backgroundColor: "hsla(183, 75%, 70%, 1.00)" }}
  >
    <i className="fab fa-linkedin-in" />
  </a>
</div>

      </div>
    </div>
  );
};

export default SubscribeOne;
