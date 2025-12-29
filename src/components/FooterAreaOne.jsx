import React from "react";
import { Link } from "react-router-dom";
import '../css/header.css';
import whatsappIcon from "../../src/assets/img/icon/new-500.png";
import call from "../../src/assets/img/icon/call (1).png";
import img from "../../src/assets/img/bg/footer-bg1-1.png";

const FooterAreaOne = () => {
  return (
    <footer
      className="footer-wrapper footer-layout1"
      style={{ backgroundImage: `url(${img})` ,backgroundRepeat:"no-repeat",backgroundSize:"contain",}}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-6  col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Company</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu" >
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/terms-and-conditions">Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ's</Link>
                    </li>
                    <li>
                       <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-6  col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Services</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="/service/tyre-repair">Tyre Repair</Link>
                    </li>
                    <li>
                      <Link to="/service/buy-new-tyre">Buy New Tyre</Link>
                    </li>
                    <li>
                      <Link to="/service/tyre-replacement">Tyre Replacement</Link>
                    </li>
                    <li>
                      <Link to="/service/air-fill">Air Fill</Link>
                    </li>
                    <li>
                      <Link to="/service/spare-tyre-change">Spare Tyre Change</Link>
                    </li>
                    <li>
                      <Link to="/service/fix-puncture-tyre">Fix Puncture</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-6  col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Contact</h3>
                <div className="widget-contact">
                  <p>
                    <Link to="tel:0543170355">0543170355</Link>
                  </p>
                  <p>
                    <Link to="mailto:info@800speedy.com">info@800speedy.com</Link>
                  </p>
                  <p>
                    Sajaya 7, Shop 14 B, Nad Al Shiba 3, <br /> Dubai
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-6  col-xl-auto">
              <div className="widget footer-widget widget-newsletter">
                <h3 className="widget_title">Get In Touch</h3>
                <p className="footer-text mb-50">
               Call now for fast on-site tyre service anywhere in Dubai.
                </p>
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
                {/* <form className="newsletter-form">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Your Email Address"
                      required=""
                    />
                  </div>
                  <button type="submit" className="btn">
                    <i className="fas fa-arrow-right" />
                  </button>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-md-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
               <Link to="https://staytop.ae/">© 2025 Stay Top Media • All Rights Reserved</Link>
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link to="/terms-and-conditions">Terms &amp; Condition</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-wrapper sticky-bottom">
      
        <a
          href="https://api.whatsapp.com/send/?phone=971564018282"
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
          href="tel:+971564018282"
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
    </footer>
  );
};

export default FooterAreaOne;
