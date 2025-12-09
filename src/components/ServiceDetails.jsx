import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import allServices from "../data/services"; // Adjust the path as necessary

const ServiceDetails = () => {
const { slug } = useParams();
const service = allServices.find(s => s.slug === slug);
   const navigate = useNavigate();
  
 
 
 console.log("Service ID from URL:", service);
  if (!service) {
    return <div>Service not found.</div>;
  }
  return (
    <div className="service-details-area space-top space-extra-bottom overflow-hidden">
      <div className="container">
        <div className="row gx-40 flex-row-reverse">
          <div className="col-xxl-8 col-lg-7">
            <div className="service-page-single">
              <div className="page-img mb-45">
                <img
                  src={service?.img1}
                  alt="Fixturbo"
                />
              </div>
              <div className="page-content">
                <h2 className="page-title">{service?.title_detail}</h2>
                <p className="mb-25">
                 {service?.p1}
                </p>
                <p className="mb-25">
                {service?.p2}
                </p>
                <h3 className="page-subtitle mb-15">
                  Trusted Car Repair Professionals
                </h3>
                <p className="mb-30">
                  Web designing in a powerful way of just not an only
                  professions, however, in a passion for our Company. We have to
                  a tendency to believe the idea that smart looking of any
                  websitet in on visitors.Web designing in a powerful way of
                  just not an only profession Web designing in a powerful way of
                  just not an only{" "}
                </p>
                <div className="row gy-30">
                  <div className="col-sm-6">
                    <div className="page-img">
                      <img
                        src={service?.img2}
                        alt="Fixturbo"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="page-img">
                      <img
                        src={service?.img3}
                        alt="Fixturbo"
                      />
                    </div>
                  </div>
                </div>
                <div className="checklist style2 mt-35 mb-20">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" /> A car repair
                      is a service provided to fix any issues or damages with
                      your vehicle
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      It involves diagnosing the problem, repairing or replacing
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Trusted Car Repair Professionals et Your Car Fixed Right
                      Away
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Quality Car Repair Services Affordable Car Repair
                      Solutions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
              <div className="widget widget_service-list">
                <h3 className="widget_title">{service?.heading_title}</h3>
                <ul>
                  <li>
                    <Link to="/blog">
                      <i className="fas fa-angle-double-right" />
                     {service?.h1}
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      <i className="fas fa-angle-double-right" />
                      {service?.h2}
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      <i className="fas fa-angle-double-right" />
                      {service?.h3}
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      <i className="fas fa-angle-double-right" />
                    {service?.h4}
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      <i className="fas fa-angle-double-right" />
                      Affordable Car Repair Solutions
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="widget widget_contact">
                <div className="widget-contact-wrap text-center">
                  <h3 className="widget_title">Contact Us</h3>
                  <p className="widget-contact-text">
                    It is a long established fact that a reader will be
                    distracted by the and readable content repair
                  </p>
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <p className="widget-contact-text">Need help?</p>
                  <h5>
                    <Link to="tel:80855510111">(808) 555-0111</Link>
                  </h5>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
