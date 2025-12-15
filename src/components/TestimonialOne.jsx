import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import bg from "../assets/img/bg/testimonial-bg1-1.png";
import testi1 from "../assets/img/testimonial/testimonial-1-1.png";
import img from "../assets/img/icon/dialog (1).png";
// import { ReactComponent as SvgIcon } from "../assets/img/icon/quote.png";
const TestimonialOne = () => {
  return (
    <div
      className="testimonial-area-1 overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="testimonial-thumb1">
              <img src={testi1}
               alt="Fixturbo" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="space">
              <div className="title-area">
                <span className="sub-title">Clients testimonial</span>

                <h2 className="sec-title text-white">
                  Car Repair The Best <br /> Services
                </h2>
              </div>
              <div className="row global-carousel testi-slider-1">
                <Swiper
                  loop={true}
                  navigation={{
                    nextEl: ".testimonialOne-button-next",
                    prevEl: ".testimonialOne-button-prev",
                  }}
                  spaceBetween={20}
                  slidesPerGroup={1}
                  speed={1000}
                  autoplay={{ delay: 6000 }}
                  pagination={true}
                  className="mySwiper"
                  modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    500: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                    },
                    992: {
                      slidesPerView: 1,
                    },
                    1200: {
                      slidesPerView: 1,
                    },
                    1400: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div>
                      <div className="testi-card">
                        <div className="testi-card_content">
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-details">
                              <h4 className="testi-profile-title">
                             Rohit Menon

                              </h4>
                              <span className="testi-profile-desig">
                              Location: Bur Dubai
                              </span>
                            </div>
                            <div className="quote-icon">
                              
                             {/* <SvgIcon style={{ color: '#0000',stroke:"#fff",borderColor:"#fff",borderWidth:"2px" }} width={30} height={30}    /> */}
                             <img src={img} alt="" style={{width:"60px"}} />
                            </div>
                          </div>
                          <p className="testi-card_text">
                          Got a tyre puncture on Sheikh Zayed Road and contacted 800 SPEEDY. Their technician arrived in less than 25 minutes and fixed the tyre on the spot. Super professional and affordable. Highly recommended!
                          </p>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="testi-card">
                        <div className="testi-card_content">
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-details">
                              <h4 className="testi-profile-title">
                               Ahmed Al Hammadi
                              </h4>
                              <span className="testi-profile-desig">
                               Location: Jumeirah Village Circle (JVC)
                              </span>
                            </div>
                            <div className="quote-icon">
                              <img
                                src="assets/img/icon/quote1-1.svg"
                                alt="Fixturbo"
                              />
                            </div>
                          </div>
                          <p className="testi-card_text">
                           My car tyre burst late at night near JVC. 800 SPEEDY reached quickly and replaced my tyre with a new one. Honest pricing, fast service, and very polite staff. Excellent experience.
                          </p>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="testi-card">
                        <div className="testi-card_content">
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-details">
                              <h4 className="testi-profile-title">
                               Mark Dela Cruz
                              </h4>
                              <span className="testi-profile-desig">
                                Location: Al Barsha
                              </span>
                            </div>
                            <div className="quote-icon">
                              <img
                                src="assets/img/icon/quote1-1.svg"
                                alt="Fixturbo"
                              />
                            </div>
                          </div>
                          <p className="testi-card_text">
                         I had a flat tyre at work and couldn’t leave the office. These guys came to my location, fixed the puncture, checked all my tyres, and made sure everything was safe. Very reliable service!
                          </p>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div>
                      <div className="testi-card">
                        <div className="testi-card_content">
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-details">
                              <h4 className="testi-profile-title">
                               Emily Johansson
                              </h4>
                              <span className="testi-profile-desig">
                               Location: Dubai Marina
                              </span>
                            </div>
                            <div className="quote-icon">
                              <img
                                src="assets/img/icon/quote1-1.svg"
                                alt="Fixturbo"
                              />
                            </div>
                          </div>
                          <p className="testi-card_text">
                       I’ve used 800 SPEEDY twice now for tyre change and wheel balancing. The technicians are skilled, punctual, and explain everything clearly. Quality service and super convenient.
                          </p>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                     <SwiperSlide>
                    <div>
                      <div className="testi-card">
                        <div className="testi-card_content">
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-details">
                              <h4 className="testi-profile-title">
                            Samuel Okoye
                              </h4>
                              <span className="testi-profile-desig">
                              Location: Deira
                              </span>
                            </div>
                            <div className="quote-icon">
                              <img
                                src="assets/img/icon/quote1-1.svg"
                                alt="Fixturbo"
                              />
                            </div>
                          </div>
                          <p className="testi-card_text">
                     My tyre went flat in the parking area and I didn’t have tools with me. 800 SPEEDY arrived fast and changed to my spare tyre within minutes. Very professional and trustworthy team.
                          </p>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                <div className="testimonialOne arrow">
                  <div className=" testimonialOne-button-next testimonialOne-button">
                    <i className="fas fa-arrow-left"></i>
                  </div>
                  <div className=" testimonialOne-button-prev testimonialOne-button">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
