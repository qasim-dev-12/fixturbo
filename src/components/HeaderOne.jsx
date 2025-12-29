import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ".././css/header.css";
import whatsappIcon from "../../src/assets/img/icon/new-500.png";
import call from "../../src/assets/img/icon/call (1).png";



const HeaderOne = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='mean-expand-class'>+</span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".mean-expand-class");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };
  
  return (
    <>
      <header className="nav-header header-layout1">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fas fa-envelope" />
                      <Link to="mailto:info@800speedy.com">info@800speedy.com</Link>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                     Sajaya 7, Shop 14 B, Nad Al Shiba 3, Dubai
                    </li>
                    <li>
                      <i className="fas fa-clock" />
                     Mon-Sun 8Am - 8Pm
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-links ps-0">
                  <ul>
                    <li>
                      <div className="social-links">
                      <Link
  to={{ pathname: "https://www.facebook.com/800speedy" }}
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fab fa-facebook-f" />
</Link>

<Link
  to={{ pathname: "https://www.instagram.com/800speedy" }}
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fab fa-instagram" />
</Link>

<Link
  to={{ pathname: "https://www.tiktok.com/@800speedy" }}
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fab fa-tiktok" />
</Link>

<Link
  to={{ pathname: "https://www.linkedin.com/company/800speedy" }}
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fab fa-linkedin-in" />
</Link>

                        {/* <Link to="https://www.twitter.com/">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link to="https://www.linkedin.com/">
                          <i className="fab fa-linkedin" />
                        </Link> */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`sticky-wrapper ${scroll && "sticky"}`}>
         
          <div className="menu-area">
            <div
            
            
  className="header-navbar-logo"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto 0",
    height: "100%",
    
   
   
       
                    
  }}
>
 
  <Link to="/">
  <img
    src="/assets/img/logo-white.png"
    alt="800speedy"
    className="logo-img"
  />
</Link>



 
</div>

            <div className="container">
              <div className="row align-items-center justify-content-lg-start justify-content-between">
                {/* <div className="col-auto d-xl-none d-block">
                  <div className="header-logo">
                    <Link to="/" >
                      <img style={{
                        width:"171px"
                      }} src="assets/img/logo-white.png" alt="800speedy" />
                    </Link>
                  </div>
                </div> */}
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                        
                       
                        {/* <ul className="sub-menu">
                          <li>
                            <NavLink
                              to="/"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Home 01
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/home-2"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Home 02
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/home-3"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Home 03
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/home-4"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Home 04
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/home-5"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Home 05
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/home-6"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Home 06
                            </NavLink>
                          </li>
                        </ul> */}
                      </li>
                      <li>
                          <Link to="/service/tyre-repair"> Tyre Repair</Link>
                      </li>
                       <li>
                          <Link to="/service/buy-new-tyre"> Buy New Tyre</Link>
                      </li>
                      <li>
                          <Link to="/service/tyre-replacement"> Tyre Replacement</Link>
                      </li>
                       <li>
                          <Link to="/service/air-fill"> Air Fill</Link>
                      </li>
                        <li>
                          <Link to="/service/spare-tyre-change">Spare Tyre Change</Link>
                      </li>
                       <li>
                          <Link to="/service/fix-puncture-tyre">Fix Puncture Tyre</Link>
                      </li>
                      {/* <li>
                        <NavLink
                          to="/about"
                          className={(navData) =>
                            navData.isActive ? "active" : ""
                          }
                        >
                          About Us
                        </NavLink>
                      </li> */}
                      {/* <li className="menu-item-has-children">
                        <Link to="#">Services</Link>
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              to="/service"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Service
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/service-details"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Tyre repair
                            </NavLink>
                          </li>
                            <li>
                            <NavLink
                              to="/service-details"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Tyre repair
                            </NavLink>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li className="menu-item-has-children">
                        <Link to="#">Projects</Link>
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              to="/project"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Projects
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/project-details"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Projects Details
                            </NavLink>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li className="menu-item-has-children">
                        <Link to="#">Blog</Link>
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              to="/blog"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Blog
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/blog-details"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Blog Details
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Pages</Link>
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              to="/team"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Team Page
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/team-details"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Team Details
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/shop"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Shop Page
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/shop-details"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Shop Details
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/cart"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Cart
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/checkout"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Checkout
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/wishlist"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Wishlist
                            </NavLink>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li>
                        <NavLink
                          to="/contact"
                          className={(navData) =>
                            navData.isActive ? "active" : ""
                          }
                        >
                          Contact
                        </NavLink>
                      </li> */}
                      
                     
                      
                    </ul>
                  </nav>
                  
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button
                      type="button"
                      className="menu-toggle icon-btn"
                      onClick={mobileMenu}
                    >
                      <i className="fas fa-bars" />
                    </button>
                    
                  </div>
                </div>


<div className="col-auto">
                  <nav className="main-menu d-md-inline-blobk d-lg-none">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                        
                      </li>
                    <li className="menu-item-has-children">
  <Link to="#">Services</Link>

  <ul className="sub-menu">
    <li>
      <NavLink
        to="/service/tyre-repair"
        className={(navData) => (navData.isActive ? "active" : "")}
      >
        Tyre Repair
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/service/buy-new-tyre"
        className={(navData) => (navData.isActive ? "active" : "")}
      >
       New Tyre
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/service/tyre-replacement"
        className={(navData) => (navData.isActive ? "active" : "")}
      >
        Tyre Replacement
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/service/air-fill"
        className={(navData) => (navData.isActive ? "active" : "")}
      >
        Air Fill
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/service/spare-tyre-change"
        className={(navData) => (navData.isActive ? "active" : "")}
      >
        Spare Tyre Change
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/service/fix-puncture-tyre"
        className={(navData) => (navData.isActive ? "active" : "")}
      >
        Fix Puncture Tyreee
      </NavLink>
    </li>
   
  </ul>
</li>


                      
                     
                       
                    
                   
                  
                     
                     
                    </ul>
                  </nav>
                  
                
                </div>



                {/* <div className="col-auto ms-auto d-xl-block d-none">
                  <div className="navbar-right-desc">
                    <img src="/assets/img/icon/chat.svg" alt="800speedy" />
                    <div className="navbar-right-desc-details">
                      <h6 className="title">Need help?</h6>
                      <Link className="link" to="tel:+2590256215">
                        (307) 555-0133
                      </Link>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="logo-bg" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu-wrapper  ${active && "body-visible"}`}>
          <div className="mobile-menu-area">
            <div className="mobile-logo">
              <Link to="/">
                <img src="/assets/img/logo.svg" alt="800speedy" />
              </Link>
              <button className="menu-toggle" onClick={mobileMenu}>
                <i className="fa fa-times" />
              </button>
            </div>
            <div className="mobile-menu d-block">
              <ul id="offcanvas-navigation">
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">Home</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <NavLink
                        to="/"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Home 01
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/home-2"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Home 02
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/home-3"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Home 03
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/home-4"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Home 04
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/home-5"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Home 05
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/home-6"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Home 06
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={(navData) => (navData.isActive ? "active" : "")}
                  >
                    About
                  </NavLink>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">Pages</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <NavLink
                        to="/team"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Team Page
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/team-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Team Details
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/shop"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Shop Page
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/shop-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Shop Details
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/cart"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Cart
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/checkout"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Checkout
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/wishlist"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Wishlist
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">Project</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <NavLink
                        to="/project"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Projects
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/project-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Project Details
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">Service</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <NavLink
                        to="/service"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Service
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/service-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Service Details
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">Shop</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <NavLink
                        to="/shop"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Shop
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/shop-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Shop Details
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/cart"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Cart
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/checkout"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Checkout
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/wishlist"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Wishlist
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">Blog</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <NavLink
                        to="/blog"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Blog Details
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={(navData) => (navData.isActive ? "active" : "")}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
