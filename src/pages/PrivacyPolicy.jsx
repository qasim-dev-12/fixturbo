import React from "react";
import HeaderOne from "../components/HeaderOne";
import FooterAreaOne from "../components/FooterAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import "../css/global.css";

const PrivacyPolicy = () => {
  return (
    <>
      {/* Header */}
      <HeaderOne />
<Breadcrumb title={"Privacy Policy"} /> 
      {/* Page Content */}
      <section className="privacy-area pt-120 pb-120" style={{backgroundColor:"#f4f4f4"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="privacy-content">

                <h2 className="mb-20">Privacy Policy</h2>
                <p className="mb-40">Last updated: December 2025</p>

                <h4>1. Introduction</h4>
                <p>
                  At <strong>800Speedy</strong>, we respect your privacy and are
                  committed to protecting your personal information. This
                  Privacy Policy explains how we collect, use, and safeguard
                  your data when you use our website or services.
                </p>

                <h4>2. Information We Collect</h4>
                <p>We may collect the following information:</p>
                <ul>
                  <li>Name and contact details (phone number, email)</li>
                  <li>Vehicle information and service details</li>
                  <li>Location data for on-site service delivery</li>
                  <li>Payment-related information (not stored on our servers)</li>
                  <li>Website usage data and cookies</li>
                </ul>

                <h4>3. How We Use Your Information</h4>
                <p>Your information is used to:</p>
                <ul>
                  <li>Provide and manage our tyre repair services</li>
                  <li>Communicate service updates and confirmations</li>
                  <li>Improve website performance and user experience</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>

                <h4>4. Information Sharing</h4>
                <p>
                  We do not sell or rent your personal data. Information may be
                  shared only with service partners or technicians when
                  necessary to deliver the requested service.
                </p>

                <h4>5. Data Security</h4>
                <p>
                  We implement appropriate technical and organizational
                  measures to protect your personal data against unauthorized
                  access, misuse, or disclosure.
                </p>

                <h4>6. Cookies</h4>
                <p>
                  Our website may use cookies to enhance functionality and
                  analyze website traffic. You can choose to disable cookies
                  through your browser settings.
                </p>

                <h4>7. Third-Party Links</h4>
                <p>
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices of those sites.
                </p>

                <h4>8. Your Rights</h4>
                <p>
                  You have the right to request access, correction, or deletion
                  of your personal data, subject to applicable laws.
                </p>

                <h4>9. Policy Updates</h4>
                <p>
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with an updated date.
                </p>

                <h4>10. Contact Us</h4>
                <p>
                  If you have questions regarding this Privacy Policy, contact
                  us at:
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

      {/* Footer */}
      <FooterAreaOne />
    </>
  );
};

export default PrivacyPolicy;
