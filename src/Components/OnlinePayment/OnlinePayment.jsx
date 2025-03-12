import React, { useState } from "react";
import "./OnlinePayment.css";
import QuickSettlementsImg from "../../Assests/QuickSettlements.jpg";
import MultiplePaymentModesImg from "../../Assests/MultiplePaymentModes.jpg";
import securepaymentgatewayImg from "../../Assests/securepaymentgateway.jpg";
import websiteDevImg from "../../Assests/Website Development.png";
import banerOnlinePaymentImg from "../../Assests/banerOnlinePayment.jpg";
import aboutusonlinepaymentImg from "../../Assests/aboutusonlinepayment.jpg";
import WhyChooseDAGONLINEPAYMENTImg from "../../Assests/WhyChooseDAGONLINEPAYMENT.jpg";




import {
  FaOm,
  FaGopuram,
  FaPrayingHands,
  FaKhanda,
  FaMapMarkerAlt,
  FaHandsHelping,
  FaLeaf,
  FaGlobe,
  FaShoppingCart,
  FaClinicMedical,
  FaGraduationCap,
  FaPlane,
  FaWallet,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";
const OnlinePayment= ({ toggleEnquiryForm }) => {
    const [showModal, setShowModal] = useState(false);
  
    const phoneNumber = "+1234567890"; // Define the phone number globally
  
    const handleCallNowClick = () => {
      const confirmCall = window.confirm(`Do you want to call ${phoneNumber}?`);
      if (confirmCall) {
        window.location.href = `tel:${phoneNumber}`;
      }
    };
  
    return (
      <>
        <div className="webappmain">
          {/* Main Banner Section */}
          {/* Carousel Start */}
          <div className="container-fluid header-carousel d-flex owl-carousel p-0 m-0">
            <img
              src={banerOnlinePaymentImg}
              className=""
              width={100}
              id="carouselImg"
              alt="Main Banner"
            />
            <div className="carousel-caption animated fadeInUp">
              <div className="container">
                <div className="col-12 animated fadeInUp">
                  <h1 className="text-uppercase rawColorTheme fs-6 fw-bold mb-4">
                    Transform Your Business
                  </h1>
                  <h1 className="text-uppercase text-white mb-4">
                  Secure & Seamless Online Payments for Your Business
                  </h1>
                  <div className="d-flex justify-content-center flex-shrink-0 mb-4">
                    <button
                      className="btn rounded-pill py-3 px-4 px-md-5 ms-2"
                      onClick={toggleEnquiryForm}
                    >
                      Enquire Now
                    </button>
                    <button
                      className="btn rounded-pill py-3 px-4 px-md-5 ms-2"
                      onClick={handleCallNowClick}
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Carousel End */}
  
          {/* About Us Section */}
          <div className="about-section container py-5" id="about">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2
                  className="text-success"
                  style={{ fontSize: "48px", fontFamily: "Roboto, sans-serif" }}
                >
                  About Us
                </h2>
                <h2
                  className="fw-bold"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                 Empowering Businesses with Secure Digital Transactions
                </h2>
                <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "16px" }}>
                DAG ONLINE PAYMENT provides businesses with a seamless and secure online payment gateway. Our goal is to simplify digital transactions, ensuring smooth payment experiences for both businesses and customers.
                </p>
                <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "16px" }}>
                DAG ONLINE PAYMENT empowers businesses with fast, secure, and user-friendly payment solutions. Accept payments effortlessly with our advanced payment gateway and digital transaction services.
                </p>
                <button className="btn btn-success px-4 py-2">
                  Discover Now
                </button>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src={aboutusonlinepaymentImg}
                  alt="About Us"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
  
          {/* Services Section */}
          <div className="container-fluid service pb-5" id="services">
            <div className="container pb-5">
              <div className="text-center mx-auto pb-5">
                <h1
                  className="display-5 mb-4"
                  style={{ fontFamily: "Roboto, sans-serif", color: "#198754" }}
                >
                  Key Features
                </h1>
              </div>
              <div className="row g-4">
                {/* Service Item - WeddingRitualsImg */}
                <div className="col-md-6 col-lg-4">
                  <div className="card">
                    <div className="service-img">
                      <img
                        src={MultiplePaymentModesImg}
                        className="img-fluid rounded-top w-100"
                        alt="WeddingRitualsImg"
                      />
                    </div>
                    <div
                      className="rounded-bottom p-4 text-center"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      <div>
                        <a
                          href="/old"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h4 d-inline-block mb-2"
                          style={{
                            textDecoration: "none",
                            fontFamily: "Roboto, sans-serif",
                          }}
                        >
                          Multiple Payment Modes

                        </a>
                      </div>
                      <p
                        style={{
                          textAlign: "left",
                          margin: "10px 0",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                       Accept payments via UPI, credit/debit cards, net banking, and wallets.

                      </p>
                      <div className="d-flex gap-2 justify-content-center">
                        <button
                          className="btn btn-primary"
                          onClick={toggleEnquiryForm}
                        >
                          Enquire Now
                        </button>
                        <button
                          className="btn btn-success"
                          onClick={handleCallNowClick}
                        >
                          <i className="fas fa-phone"></i> Call Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
  
                {/* Service Item - grahpreveshservice */}
                <div className="col-md-6 col-lg-4">
                  <div className="card">
                    <div className="service-img">
                      <img
                        src={QuickSettlementsImg}
                        className="img-fluid rounded-top w-100"
                        alt="grahpreveshserviceImg"
                      />
                    </div>
                    <div
                      className="rounded-bottom p-4 text-center"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      <div>
                        <a
                          href="/old"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h4 d-inline-block mb-2"
                          style={{
                            textDecoration: "none",
                            fontFamily: "Roboto, sans-serif",
                          }}
                        >
                         Quick Settlements
                        </a>
                      </div>
                      <p
                        style={{
                          textAlign: "left",
                          margin: "10px 0",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                       Receive payments directly in your bank account with fast settlement cycles.{" "}
                      </p>
                      <div className="d-flex gap-2 justify-content-center">
                        <button
                          className="btn btn-primary"
                          onClick={toggleEnquiryForm}
                        >
                          Enquire Now
                        </button>
                        <button
                          className="btn btn-success"
                          onClick={handleCallNowClick}
                        >
                          <i className="fas fa-phone"></i> Call Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
  
                {/* Service Item - SatyanarayanPuja */}
                <div className="col-md-6 col-lg-4">
                  <div className="card service-card">
                    <div className="service-img">
                      <img
                        src={securepaymentgatewayImg}
                        className="img-fluid rounded-top w-100"
                        alt="SatyanarayanPuja"
                      />
                    </div>
                    <div className="rounded-bottom p-4 text-center">
                      <div>
                        <a
                          href="/old"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h4 d-inline-block mb-2 service-title"
                          style={{
                            textDecoration: "none",
                            fontFamily: "Roboto, sans-serif",
                          }}
                        >
                          Secure Transactions
                        </a>
                      </div>
                      <p
                        className="service-description"
                        style={{
                          textAlign: "left",
                          margin: "10px 0",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        PCI-DSS compliant security to protect transactions from fraud.

                      </p>
                      <div className="d-flex gap-2 justify-content-center">
                        <button
                          className="btn btn-primary"
                          onClick={toggleEnquiryForm}
                        >
                          Enquire Now
                        </button>
                        <button
                          className="btn btn-success"
                          onClick={handleCallNowClick}
                        >
                          <i className="fas fa-phone"></i> Call Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Modal for Call Now Confirmation */}
          {showModal && (
            <div
              className="modal show d-block"
              tabIndex="-1"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Call Now</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setShowModal(false)}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>Would you like to call {phoneNumber}?</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      className="btn btn-secondary"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <a className="btn btn-success" href={`tel:${phoneNumber}`}>
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
  
          {/* Why Choose DAG Section */}
          <div className="container py-5" id="why-choose-us">
            <div className="row align-items-center">
              <div className="text-center mb-3">
                <span
                  className="text-success"
                  style={{ fontSize: "48px", fontFamily: "Roboto, sans-serif" }}
                >
                  Why Choose Us
                </span>
              </div>
              {/* Text Content */}
              <div className="col-lg-6">
                {/* <div className="text-center mb-3"> 
            <span className="text-success" style={{ fontSize: "48px", fontFamily: "Roboto, sans-serif" }}>
              Why Choose Us
            </span>
          </div> */}
  
                <h2
                  className="fw-bold"
                  style={{ fontSize: "28px", fontFamily: "Roboto, sans-serif" }}
                >
                  Why Choose DAG ONLINE PAYMENT?
                </h2>
                <p
                  className="text-muted"
                  style={{ fontSize: "16px", fontFamily: "Roboto, sans-serif" }}
                ></p>
  
                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-laptop fs-3 text-success me-3"></i>
                  <div>
                    <h5
                      className="fw-bold"
                      style={{
                        fontSize: "20px",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
Trusted & Secure
                    </h5>
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
Advanced encryption and fraud prevention tools.
                    </p>
                  </div>
                </div>
  
                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-cpu fs-3 text-success me-3"></i>
                  <div>
                    <h5
                      className="fw-bold"
                      style={{
                        fontSize: "20px",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
Easy Integration                    </h5>
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
Developer-friendly APIs for quick setup.
                    </p>
                  </div>
                </div>
  
                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-ui-checks fs-3 text-success me-3"></i>
                  <div>
                    <h5
                      className="fw-bold"
                      style={{
                        fontSize: "20px",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      24/7 Support 
                    </h5>
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
Dedicated support to assist businesses anytime.
                    </p>
                  </div>
                </div>
  
                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-shield-lock fs-3 text-success me-3"></i>
                  <div>
                    <h5
                      className="fw-bold"
                      style={{
                        fontSize: "20px",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
Competitive Pricing                    </h5>
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                    Transparent and affordable transaction fees.
{" "}
                    </p>
                  </div>
                </div>
  
                {/* <button className="btn btn-success mt-3">Discover Now</button> */}
              </div>
  
              {/* Image */}
              <div className="col-lg-6 text-center">
                <img
                  src={WhyChooseDAGONLINEPAYMENTImg}
                  className="img-fluid rounded w-100"
                  alt="Web Development"
                />
              </div>
            </div>
          </div>
  
          {/* Industries We Serve Section */}
          <div className="container py-5">
            <h1
              className="text-center mb-4"
              style={{
                fontSize: "48px",
                fontFamily: "Roboto, sans-serif",
                color: "#198754",
              }}
            >
              Industries We Serve
            </h1>
            <div className="row g-4" style={{ fontFamily: "Roboto, sans-serif" }}>
              {[
              { title: "E-Commerce & Retail", icon: <FaShoppingCart /> },
              { title: "Healthcare & Medical", icon: <FaClinicMedical /> },
              { title: "Education & E-Learning", icon: <FaGraduationCap /> },
              { title: "International Payments", icon: <FaGlobe /> },
              { title: "Travel & Hospitality", icon: <FaPlane /> },
              { title: "Subscription Services", icon: <FaWallet /> },
              { title: "Freelancers & Consultants", icon: <FaHandshake /> },
              { title: "Financial Services", icon: <FaChartLine /> },
              ].map((industry, index) => (
                <div className="col-md-4 col-lg-3" key={index}>
                  <div className="card text-center p-3 shadow-sm">
                    <div
                      className="icon mb-3"
                      style={{ fontSize: "2rem", color: "#28a745" }}
                    >
                      {industry.icon}
                    </div>
                    <h5 style={{ fontFamily: "Roboto, sans-serif" }}>
                      {industry.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
  
           {/* Ready to Get Started with DAG Online Payment? Section */}
<div className="text-center mt-5 mb-4">
  <h2 className="text-success" style={{ fontFamily: "Roboto, sans-serif" }}>
    Ready to Get Started with DAG Online Payment?
  </h2>
  <p style={{ fontFamily: "Roboto, sans-serif" }}>
    Experience **secure, seamless, and fast** online transactions with DAG Online Payment.  
    Accept payments effortlessly via **UPI, Credit/Debit Cards, Net Banking, and Wallets**.  
    Join us today and **simplify digital payments** for your business!
  </p>
  <button
    className="btn btn-success px-4 py-2 mx-2"
    // onClick={() => navigate('/sign-up')}
    style={{ fontFamily: "Roboto, sans-serif" }}
  >
    Learn More
  </button>
  {/* <button
    className="btn btn-outline-success px-4 py-2 mx-2"
    // onClick={() => navigate('/#features')}
    style={{ fontFamily: "Roboto, sans-serif" }}
  >
    Learn More
  </button> */}
</div>

  
  
            {/* Get a Free Consultation Today Section */}
            <div
              className="free-consultation container-fluid py-5"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h2 style={{ fontFamily: "Roboto, sans-serif" }}>
                    Get Started with DAG ONLINE PAYMENT Today! {" "}
                    </h2>
                    <p style={{ fontFamily: "Roboto, sans-serif" }}>
                    Experience seamless online transactions with our secure payment solutions. Sign up now and take your business to the next level.

                    </p>
                    <button
                      className="btn btn-success"
                      onClick={handleCallNowClick}
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      Contact Us
                    </button>
                  </div>
                  <div className="col-md-6 text-center">
                    <img
                      src={banerOnlinePaymentImg}
                      alt="Consultation"
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
  
            {/* Contact & Enquiry Section */}
            <div
              className="contact-enquiry-section container py-5"
              id="contact"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              <div className="row">
                {/* Left Side: Contact Information */}
                <div className="col-md-6">
                  <h2
                    className="text-success"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    Get in Touch
                  </h2>
                  <p style={{ fontFamily: "Roboto, sans-serif" }}>
                    Fill out the form below, and one of our experts will reach out
                    to you within 24 hours.
                  </p>
                  <p style={{ fontFamily: "Roboto, sans-serif" }}>
                    <strong>Email Us:</strong>{" "}
                    careers@directadmissionguideline.com
                  </p>
                  <p style={{ fontFamily: "Roboto, sans-serif" }}>
                    <strong>Call Us:</strong> +91 90961 74933
                  </p>
                </div>
  
                {/* Right Side: Enquiry Form */}
                <div className="col-md-6">
                  <h2
                    className="text-success text-center"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    Enquiry Now
                  </h2>
                  <form>
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                      >
                        Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                      >
                        Email ID
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Enter your message"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
  
            {/* Transform Ideas Into Reality Section
            <div className="container text-center py-5">
              <h2
                style={{
                  fontSize: "48px",
                  fontFamily: "Roboto, sans-serif",
                  color: "#198754",
                }}
              >
                Transform Ideas Into Reality – Partner with DAG for Innovative
                Digital Solutions
              </h2>
              <p
                className="text-muted mt-3"
                style={{ fontSize: "20px", fontFamily: "Roboto, sans-serif" }}
              >
                Ready to future-proof your business? Let’s build something amazing
                together.
              </p>
              <button
                className="btn btn-success mt-4 px-4 py-2"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Get Started
              </button>
            </div> */}
          </div>
        </div>
      </>
    );
  };
export default OnlinePayment;