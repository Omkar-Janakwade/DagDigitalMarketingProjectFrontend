import React, { useState } from 'react';
import './WebApp.css';
import custWebDevImg from '../../Assests/image4.png';
import eCommImg from '../../Assests/image2.png';
import aiDevImg from '../../Assests/image1.png';
import websiteDevImg from '../../Assests/Website Development.png';
import mainBannerImg from '../../Assests/carousel-2.jpg';
// import { FaHospital, FaShoppingCart, FaGraduationCap, FaBuilding, FaUniversity, FaPlane, FaIndustry, FaUtensils, FaBalanceScale, FaFilm, FaCar, FaDumbbell, FaLaptop, FaTools, FaPhone } from "react-icons/fa";



const WebApp = ({ toggleEnquiryForm }) => {

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
      <div className='webappmain'>

        
        {/* Main Banner Section */}
        {/* Carousel Start */}
        <div className="container-fluid header-carousel d-flex owl-carousel p-0 m-0">
          <img
            src={mainBannerImg}
            className=""
            width={100}
            id='carouselImg'
            alt="Main Banner"
          />
          <div className="carousel-caption animated fadeInUp">
            <div className="container">
              <div className="col-12 animated fadeInUp">
                <h1 className="text-uppercase rawColorTheme fs-6 fw-bold mb-4">Transform Your Business</h1>
                <h1 className="text-uppercase text-white mb-4">
                  Cutting-Edge Web and AI Solutions from DAG
                </h1>
                <div className="d-flex justify-content-center flex-shrink-0 mb-4">
                  <button className="btn rounded-pill py-3 px-4 px-md-5 ms-2" onClick={toggleEnquiryForm}>Enquire Now</button>
                  <button className="btn rounded-pill py-3 px-4 px-md-5 ms-2" onClick={handleCallNowClick}>Contact Us</button>
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
              <h2 className="text-success" style={{ fontSize: '48px', fontFamily: 'Roboto, sans-serif' }}>
                About Us
              </h2>
              <h2 className="fw-bold" style={{ fontFamily: 'Roboto, sans-serif' }}>
                We Build Intelligent, Scalable, and High-Impact Digital Solutions
              </h2>
              <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}>
                At DAG, we specialize in comprehensive Website Development and AI-Powered Web App Development services
                tailored to empower your business. Whether you’re a startup, an established brand, or a business looking
                to enhance its digital presence, we deliver customized solutions that combine functionality, creativity,
                and advanced technology.
              </p>
              <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}>
                Our mission is to not only build digital assets but to create intelligent platforms that drive engagement,
                streamline operations, and scale your business.
              </p>
              <button className="btn btn-success px-4 py-2">Discover Now</button>
            </div>
            <div className="col-md-6 text-center">
              <img src={mainBannerImg} alt="About Us" className="img-fluid rounded" />
            </div>
          </div>
        </div>


        {/* Services Section */}
        <div className="container-fluid service pb-5" id="services">
          <div className="container pb-5">
            <div className="text-center mx-auto pb-5">
              <h1 className="display-5 mb-4" style={{ fontFamily: 'Roboto, sans-serif', color: '#198754' }}>
                Our Services
              </h1>
            </div>
            <div className="row g-4">
              {/* Service Item - Custom Website Development */}
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="service-img">
                    <img
                      src={custWebDevImg}
                      className="img-fluid rounded-top w-100"
                      alt="Custom Website Development"
                    />
                  </div>
                  <div className="rounded-bottom p-4 text-center" style={{ fontFamily: "Roboto, sans-serif" }}>
                    <div>
                      <a
                        href="/old"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h4 d-inline-block mb-2"
                        style={{ textDecoration: "none", fontFamily: "Roboto, sans-serif" }}
                      >
                        Custom Website Development
                      </a>
                    </div>
                    <p style={{ textAlign: "left", margin: "10px 0", fontFamily: "Roboto, sans-serif" }}>
                      Launch a high-performance website that aligns perfectly with your brand identity and goals.
                    </p>
                    <div className="d-flex gap-2 justify-content-center">
                      <button className="btn btn-primary" onClick={toggleEnquiryForm}>Enquire Now</button>
                      <button className="btn btn-success" onClick={handleCallNowClick}>
                        <i className="fas fa-phone"></i> Call Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              {/* Service Item - E-Commerce Solutions */}
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="service-img">
                    <img
                      src={eCommImg}
                      className="img-fluid rounded-top w-100"
                      alt="E-Commerce Solutions"
                    />
                  </div>
                  <div className="rounded-bottom p-4 text-center" style={{ fontFamily: "Roboto, sans-serif" }}>
                    <div>
                      <a
                        href="/old"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h4 d-inline-block mb-2"
                        style={{ textDecoration: "none", fontFamily: "Roboto, sans-serif" }}
                      >
                        E-Commerce Solutions
                      </a>
                    </div>
                    <p style={{ textAlign: "left", margin: "10px 0", fontFamily: "Roboto, sans-serif" }}>
                      Transform your business with a robust, secure e-commerce platform.
                    </p>
                    <div className="d-flex gap-2 justify-content-center">
                      <button className="btn btn-primary" onClick={toggleEnquiryForm}>Enquire Now</button>
                      <button className="btn btn-success" onClick={handleCallNowClick}>
                        <i className="fas fa-phone"></i> Call Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              {/* Service Item - AI App Development */}
              <div className="col-md-6 col-lg-4">
                <div className="card service-card">
                  <div className="service-img">
                    <img
                      src={aiDevImg}
                      className="img-fluid rounded-top w-100"
                      alt="AI App Development"
                    />
                  </div>
                  <div className="rounded-bottom p-4 text-center">
                    <div>
                      <a
                        href="/old"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h4 d-inline-block mb-2 service-title"
                        style={{ textDecoration: "none", fontFamily: "Roboto, sans-serif" }}
                      >
                        AI App Development
                      </a>
                    </div>
                    <p className="service-description" style={{ textAlign: "left", margin: "10px 0", fontFamily: "Roboto, sans-serif" }}>
                      Create AI-powered applications that automate processes and drive insights.
                    </p>
                    <div className="d-flex gap-2 justify-content-center">
                      <button className="btn btn-primary" onClick={toggleEnquiryForm}>Enquire Now</button>
                      <button className="btn btn-success" onClick={handleCallNowClick}>
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
          <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Call Now</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <p>Would you like to call {phoneNumber}?</p>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                  <a className="btn btn-success" href={`tel:${phoneNumber}`}>Call Now</a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Why Choose DAG Section */}
        <div className="container py-5" id="why-choose-us">
          <div className="row align-items-center">
            <div className="text-center mb-3">
              <span className="text-success" style={{ fontSize: "48px", fontFamily: "Roboto, sans-serif" }}>
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

              <h2 className="fw-bold" style={{ fontSize: "28px", fontFamily: "Roboto, sans-serif" }}>
                Why Choose DAG for Your Web & AI Development Needs?
              </h2>
              <p className="text-muted" style={{ fontSize: "16px", fontFamily: "Roboto, sans-serif" }}>
                We provide top-notch solutions for web and AI-powered applications, ensuring seamless performance and innovation.
              </p>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-laptop fs-3 text-success me-3"></i>
                <div>
                  <h5 className="fw-bold" style={{ fontSize: "20px", fontFamily: "Roboto, sans-serif" }}>
                    End-to-End Website Development
                  </h5>
                  <p style={{ fontSize: "16px", fontFamily: "Roboto, sans-serif" }}>
                    From simple business websites to complex e-commerce platforms, we develop websites...
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-cpu fs-3 text-success me-3"></i>
                <div>
                  <h5 className="fw-bold" style={{ fontSize: "20px", fontFamily: "Roboto, sans-serif" }}>
                    AI-Powered App Development
                  </h5>
                  <p style={{ fontSize: "16px", fontFamily: "Roboto, sans-serif" }}>
                    Our AI-driven applications are designed to enhance user experience...
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-ui-checks fs-3 text-success me-3"></i>
                <div>
                  <h5 className="fw-bold" style={{ fontSize: "20px", fontFamily: "Roboto, sans-serif" }}>
                    Seamless User Experience
                  </h5>
                  <p style={{ fontSize: "16px", fontFamily: "Roboto, sans-serif" }}>
                    Every project we handle is crafted with a user-first approach...
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-shield-lock fs-3 text-success me-3"></i>
                <div>
                  <h5 className="fw-bold" style={{ fontSize: "20px", fontFamily: "Roboto, sans-serif" }}>
                    Scalability & Security
                  </h5>
                  <p style={{ fontSize: "16px", fontFamily: "Roboto, sans-serif" }}>
                    As your business grows, so should your digital tools...
                  </p>
                </div>
              </div>


              {/* <button className="btn btn-success mt-3">Discover Now</button> */}
            </div>

            {/* Image */}
            <div className="col-lg-6 text-center">
              <img src={websiteDevImg} className="img-fluid rounded w-100" alt="Web Development" />
            </div>
          </div>
        </div>




        {/* Industries We Serve Section */}
        <div className="container py-5">
          <h1
            className="text-center mb-4"
            style={{ fontSize: "48px", fontFamily: "Roboto, sans-serif", color: "#198754" }}
          >
            Industries We Serve
          </h1>

          {/* <div className="row g-4" style={{ fontFamily: "Roboto, sans-serif" }}>
            {[
              { icon: <FaHospital />, title: "Healthcare & Medical" },
              { icon: <FaShoppingCart />, title: "E-commerce & Retail" },
              { icon: <FaGraduationCap />, title: "Education & E-learning" },
              { icon: <FaBuilding />, title: "Real Estate" },
              { icon: <FaUniversity />, title: "Finance & Banking" },
              { icon: <FaPlane />, title: "Travel & Hospitality" },
              { icon: <FaIndustry />, title: "Manufacturing & Industrial" },
              { icon: <FaUtensils />, title: "Food & Beverage" },
              { icon: <FaBalanceScale />, title: "Legal & Consulting" },
              { icon: <FaFilm />, title: "Entertainment & Media" },
              { icon: <FaCar />, title: "Automobile & Transport" },
              { icon: <FaDumbbell />, title: "Fitness & Wellness" },
              { icon: <FaLaptop />, title: "Technology" },
              { icon: <FaTools />, title: "Construction & Architecture" }
            ].map((industry, index) => (
              <div className="col-md-4 col-lg-3" key={index}>
                <div className="card text-center p-3 shadow-sm">
                  <div className="icon mb-3" style={{ fontSize: "2rem", color: "#28a745" }}>{industry.icon}</div>
                  <h5 style={{ fontFamily: "Roboto, sans-serif" }}>{industry.title}</h5>
                </div>
              </div>
            ))}
          </div> */}
          {/* Ready to Start Your Project? Section */}
          <div className="text-center mt-5 mb-4" >
            <h2 className="text-success" style={{ fontFamily: "Roboto, sans-serif" }}>Ready to Start Your Project?</h2>
            <p style={{ fontFamily: "Roboto, sans-serif" }}>
              DAG is here to help you elevate your digital presence and take advantage of the latest technologies. Whether you need a
              New Website, an AI-powered Web App, or a revamp of your existing digital assets, we’re ready to discuss your needs.
            </p>
            <button className="btn btn-success px-4 py-2" onClick={handleCallNowClick} style={{ fontFamily: "Roboto, sans-serif" }}>Contact Us</button>
          </div>


          {/* Get a Free Consultation Today Section */}
          <div className="free-consultation container-fluid py-5" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="container py-5">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h2 style={{ fontFamily: "Roboto, sans-serif" }}>Get a Free Consultation Today</h2>
                  <p style={{ fontFamily: "Roboto, sans-serif" }}>
                    Discover the potential of your project with a free consultation.
                    Let’s discuss your goals, challenges, and how our solutions can help your business thrive.
                  </p>
                  <button className="btn btn-success" onClick={handleCallNowClick} style={{ fontFamily: "Roboto, sans-serif" }}>Contact Us</button>
                </div>
                <div className="col-md-6 text-center">
                  <img src={mainBannerImg} alt="Consultation" className="img-fluid rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Enquiry Section */}
          <div className="contact-enquiry-section container py-5" id="contact" style={{ fontFamily: "Roboto, sans-serif" }}>
            <div className="row">
              {/* Left Side: Contact Information */}
              <div className="col-md-6">
                <h2 className="text-success" style={{ fontFamily: "Roboto, sans-serif" }}>Get in Touch</h2>
                <p style={{ fontFamily: "Roboto, sans-serif" }}>Fill out the form below, and one of our experts will reach out to you within 24 hours.</p>
                <p style={{ fontFamily: "Roboto, sans-serif" }}><strong>Email Us:</strong> careers@directadmissionguideline.com</p>
                <p style={{ fontFamily: "Roboto, sans-serif" }}><strong>Call Us:</strong> +91 90961 74933</p>
              </div>

              {/* Right Side: Enquiry Form */}
              <div className="col-md-6">
                <h2 className="text-success text-center" style={{ fontFamily: "Roboto, sans-serif" }}>Enquiry Now</h2>
                <form>
                  <div className="mb-3" >
                    <label className="form-label" style={{ fontFamily: "Roboto, sans-serif" }}>Name</label>
                    <input type="text" className="form-control" placeholder="Enter your name" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" style={{ fontFamily: "Roboto, sans-serif" }}>Number</label>
                    <input type="text" className="form-control" placeholder="Enter your phone number" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" style={{ fontFamily: "Roboto, sans-serif" }}>Email ID</label>
                    <input type="email" className="form-control" placeholder="Enter your email" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" style={{ fontFamily: "Roboto, sans-serif" }}>Message</label>
                    <textarea className="form-control" rows="3" placeholder="Enter your message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-success" style={{ fontFamily: "Roboto, sans-serif" }}>Submit</button>
                </form>
              </div>
            </div>
          </div>

          {/* Transform Ideas Into Reality Section */}
          <div className="container text-center py-5">
            <h2 style={{ fontSize: "48px", fontFamily: "Roboto, sans-serif", color: "#198754" }}>
              Transform Ideas Into Reality – Partner with DAG for Innovative Digital Solutions
            </h2>
            <p className="text-muted mt-3" style={{ fontSize: "20px", fontFamily: "Roboto, sans-serif" }}>
              Ready to future-proof your business? Let’s build something amazing together.
            </p>
            <button className="btn btn-success mt-4 px-4 py-2" style={{ fontFamily: "Roboto, sans-serif" }}>Get Started</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default WebApp;
