import React, { useEffect, useState } from "react";
import HeaderOne from "../components/HeaderOne";

import FooterAreaOne from "../components/FooterAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import SubscribeOne from "../components/SubscribeOne";
import ServiceAreaOneMultiImg from "../components/ServiceAreaOneMultiImg";
import Preloader from "../helper/Preloader";

const TermsandConditions = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Service"} />

      {/* Service Area One */}
      {/* <ServiceAreaOneMultiImg /> */}
  
        {/* <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="terms-content">

                <h1 className="mb-20">Terms & Conditions</h1>
                <p className="mb-40">Last updated: December 2025</p>

                <h4>1. Introduction</h4>
                <p>
                  Welcome to <strong>800Speedy</strong>. By accessing our website
                  or using our on-site tyre repair services, you agree to be
                  bound by these Terms & Conditions. If you do not agree, please
                  do not use our services.
                </p>

                <h4>2. Services</h4>
                <p>
                  800Speedy provides on-site tyre repair, puncture fixing, air
                  filling, spare tyre replacement, and new tyre installation
                  services. All services are subject to availability based on
                  location, traffic, and operational conditions.
                </p>

                <h4>3. Service Time Disclaimer</h4>
                <p>
                  Any stated arrival time (such as 20–30 minutes) is an estimate
                  only and may vary due to traffic, weather conditions, or
                  unforeseen circumstances.
                </p>

                <h4>4. Pricing & Payments</h4>
                <p>
                  Prices depend on vehicle type, tyre size, service complexity,
                  and location. Final pricing will be confirmed before service
                  begins. Payment must be made immediately after service
                  completion.
                </p>

                <h4>5. Cancellations & Refunds</h4>
                <p>
                  Cancellations after technician dispatch may incur a service
                  charge. Refunds are evaluated on a case-by-case basis. No
                  refunds are provided once the service has been completed.
                </p>

                <h4>6. Customer Responsibilities</h4>
                <p>
                  Customers must provide accurate location details, ensure safe
                  access to the vehicle, and inform us of any special vehicle
                  requirements prior to service.
                </p>

                <h4>7. Liability Limitation</h4>
                <p>
                  800Speedy is not responsible for pre-existing vehicle damage
                  or delays caused by external conditions. Our liability is
                  limited to the amount paid for the service.
                </p>

                <h4>8. Repair Disclaimer</h4>
                <p>
                  Temporary tyre repairs may not be permanent solutions.
                  Customers are advised to seek professional inspection or tyre
                  replacement where necessary.
                </p>

                <h4>9. Intellectual Property</h4>
                <p>
                  All content on this website, including logos, text, images,
                  and designs, is the property of 800Speedy and may not be
                  copied or reused without permission.
                </p>

                <h4>10. Governing Law</h4>
                <p>
                  These Terms & Conditions are governed by and interpreted in
                  accordance with the laws of the United Arab Emirates (UAE).
                </p>

                <h4>11. Contact Information</h4>
                <p>
                  If you have any questions about these Terms & Conditions,
                  please contact us at:
                  <br />
                  <strong>Email:</strong> support@800speedy.com
                  <br />
                  <strong>Phone:</strong> 800-SPEEDY
                </p>

              </div>
            </div>
          </div>
        </div> */}
      

      {/* Subscribe One */}
      {/* <SubscribeOne /> */}
  <section className="terms-area pt-120 pb-120" style={{backgroundColor:"#f4f4f4"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="terms-content">

                <h2 className="mb-20">Terms & Conditions</h2>
                <p className="mb-40">Last updated: December 2025</p>

                <h4>1. Introduction</h4>
                <p>
                  Welcome to <strong>800Speedy</strong>. By accessing our website
                  or using our on-site tyre repair services, you agree to be
                  bound by these Terms & Conditions. If you do not agree, please
                  do not use our services.
                </p>

                <h4>2. Services</h4>
                <p>
                  800Speedy provides on-site tyre repair, puncture fixing, air
                  filling, spare tyre replacement, and new tyre installation
                  services. All services are subject to availability based on
                  location, traffic, and operational conditions.
                </p>

                <h4>3. Service Time Disclaimer</h4>
                <p>
                  Any stated arrival time (such as 20–30 minutes) is an estimate
                  only and may vary due to traffic, weather conditions, or
                  unforeseen circumstances.
                </p>

                <h4>4. Pricing & Payments</h4>
                <p>
                  Prices depend on vehicle type, tyre size, service complexity,
                  and location. Final pricing will be confirmed before service
                  begins. Payment must be made immediately after service
                  completion.
                </p>

                <h4>5. Cancellations & Refunds</h4>
                <p>
                  Cancellations after technician dispatch may incur a service
                  charge. Refunds are evaluated on a case-by-case basis. No
                  refunds are provided once the service has been completed.
                </p>

                <h4>6. Customer Responsibilities</h4>
                <p>
                  Customers must provide accurate location details, ensure safe
                  access to the vehicle, and inform us of any special vehicle
                  requirements prior to service.
                </p>

                <h4>7. Liability Limitation</h4>
                <p>
                  800Speedy is not responsible for pre-existing vehicle damage
                  or delays caused by external conditions. Our liability is
                  limited to the amount paid for the service.
                </p>

                <h4>8. Repair Disclaimer</h4>
                <p>
                  Temporary tyre repairs may not be permanent solutions.
                  Customers are advised to seek professional inspection or tyre
                  replacement where necessary.
                </p>

                <h4>9. Intellectual Property</h4>
                <p>
                  All content on this website, including logos, text, images,
                  and designs, is the property of 800Speedy and may not be
                  copied or reused without permission.
                </p>

                <h4>10. Governing Law</h4>
                <p>
                  These Terms & Conditions are governed by and interpreted in
                  accordance with the laws of the United Arab Emirates (UAE).
                </p>

                <h4>11. Contact Information</h4>
                <p>
                  If you have any questions about these Terms & Conditions,
                  please contact us at:
                  <br />
                  <strong>Email:</strong> support@800speedy.com
                  <br />
                  <strong>Phone:</strong> 800-SPEEDY
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default TermsandConditions;
