import React, { useState } from "react";
import HeaderOne from "../components/HeaderOne";
import FooterAreaOne from "../components/FooterAreaOne";
import "../css/global.css";
import Breadcrumb from "../components/Breadcrumb";

// repair-tyre

const faqData = [
  {
    question: "How fast can you reach my location?",
    answer:
      "Our average arrival time is 20–30 minutes, depending on traffic and your location in Dubai.",
  },
  {
    question: "Do you provide services anywhere in Dubai?",
    answer:
      "Yes, we offer on-site tyre services across all areas of Dubai, including highways and residential locations.",
  },
  {
    question: "What tyre services do you offer?",
    answer:
      "We provide tyre repair, puncture fixing, spare tyre replacement, air filling, and new tyre installation.",
  },
  {
    question: "Can you repair all types of tyres?",
    answer:
      "We repair most car tyres. Severely damaged tyres may require replacement for safety reasons.",
  },
  {
    question: "Do you offer emergency roadside service?",
    answer:
      "Yes, our on-site tyre service is available for emergency and roadside assistance.",
  },
  {
    question: "How much does the service cost?",
    answer:
      "Pricing depends on tyre size, vehicle type, and service complexity. Final pricing is confirmed before service starts.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Header */}
      <HeaderOne />
      <Breadcrumb title={"faq"}/>

      {/* FAQ Section */}
      <section className="faq-area pt-120 pb-120" style={{paddingTop:"4rem"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <h2 className="mb-20 mt-60">Frequently Asked Questions</h2>
              <p className="mb-40">
                Quick answers to common questions about our on-site tyre services in Dubai.
              </p>

              <div className="faq-accordion">
                {faqData.map((item, index) => (
                  <div key={index} className="faq-item mb-20">

                    <div
                      className="faq-question d-flex justify-content-between align-items-center"
                      style={{ cursor: "pointer" }}
                      onClick={() => toggleFaq(index)}
                    >
                      <h5 className="mb-0">{item.question}</h5>
                      <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                        {activeIndex === index ? "−" : "+"}
                      </span>
                    </div>

                    {activeIndex === index && (
                      <div className="faq-answer mt-15">
                        <p className="mb-0">{item.answer}</p>
                      </div>
                    )}

                  </div>
                ))}
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

export default Faq;
