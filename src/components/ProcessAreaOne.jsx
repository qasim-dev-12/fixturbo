import React from "react";

const ProcessAreaOne = () => {
  return (
    <section className="process-area-1 space position-relative">
      <div className="portfolio-shape-img shape-mockup d-lg-block d-none">
        <img
        style={{
          width:"150px"
        }}
          className="about1-shape-img-1 spin"
          src="/assets/img/normal/about_shape1-2.svg"
          alt="Fixturbo"
        />
        <img
          className="about1-shape-img-2 spin2"
          src="/assets/img/normal/about_shape1-1.svg"
          alt="Fixturbo"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Work Process</span>
              <h2 className="sec-title">
                How We Deliver Fast & Reliable Tyre Service
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-30">
          <div className="col-lg-4 process-card-wrap">
            <div className="process-card">
              <div className="process-card-icon">
                <img src="/assets/img/icon/process-icon-1-1.svg" alt="Fixturbo" />
              </div>
              <h4 className="process-card-title">Mobile Tyre Inspection </h4>
              <p className="process-card-text">
               We arrive at your location in 20–30 minutes and inspect your tyre for punctures, leaks, or damage using professional tools.
              </p>
            </div>
          </div>
          <div className="col-lg-4 process-card-wrap">
            <div className="process-card process-card-center">
              <div className="process-card-icon">
                <img src="/assets/img/icon/process-icon-1-2.svg" alt="Fixturbo" />
              </div>
              <h4 className="process-card-title">On-Site Repair or Replacement</h4>
              <p className="process-card-text">
               Based on the issue, our technician will repair the puncture, install a new tyre, or perform a spare tyre change—right where you are.
              </p>
            </div>
          </div>
          <div className="col-lg-4 process-card-wrap">
            <div className="process-card">
              <div className="process-card-icon">
                <img src="/assets/img/icon/process-icon-1-3.svg" alt="Fixturbo" />
              </div>
              <h4 className="process-card-title"> Final Safety Check & Completion</h4>
              <p className="process-card-text">
               Before we leave, we ensure your tyre pressure, wheel nuts, and overall safety are fully checked so you can drive with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessAreaOne;
