import React, { useState } from 'react';
import './RealEstate.css';
import Footer from '../Footer/Footer';
import custWebDevImg from '../../Assests/image4.png';
import eCommImg from '../../Assests/image2.png';
import aiDevImg from '../../Assests/image1.png';
import websiteDevImg from '../../Assests/Website Development.png';
import EnquiryModal from "../EnquiryModal";
import mainBannerImg from '../../Assests/carousel-1.jpg';




const RealEstate = ({ toggleEnquiryForm }) => {

    const [showModal, setShowModal] = useState(false);

    const toggleEnquiry = () => setShowModal(!showModal);

    const phoneNumber = "+91 9096174933"; // Define the phone number globally

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
                                <h1 className="text-uppercase rawColorTheme fs-6 fw-bold mb-4"> Transform Your Business</h1>
                                <h1 className="text-uppercase text-white mb-4">
                                    Elevate Your Real Estate Business with Advanced Digital Solutions
                                </h1>
                                <div className="d-flex justify-content-center flex-shrink-0 mb-4">
                                    <button className="btn rounded-pill py-3 px-4 px-md-5 ms-2" onClick={toggleEnquiry}>Request a Consultation</button>
                                    <button className="btn rounded-pill py-3 px-4 px-md-5 ms-2" onClick={handleCallNowClick}>Contact Us</button>
                                    {/* Pass a custom heading */}
                                    <EnquiryModal show={showModal} toggleForm={toggleEnquiry} heading="Enquire Now" />
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
                                Driving Success in the Real Estate Industry
                            </h2>
                            <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}>
                                At DAG, we are committed to redefining the real estate industry by providing strategic solutions that maximize property value, enhance customer engagement, and streamline business operations. Our expertise lies in helping real estate agencies, property developers, and investors achieve sustainable growth through data-driven insights, technology, and market expertise.
                            </p>
                            <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}>
                                We don’t just create solutions—we build businesses that thrive. Our focus is on empowering real estate professionals with tools and strategies that drive efficiency, increase visibility, and generate high-value opportunities in an evolving marketplace.
                            </p>
                            {/* <button className="btn btn-success px-4 py-2">Discover Now</button> */}
                        </div>
                        <div className="col-md-6 text-center">
                            <img src={mainBannerImg} alt="About Us" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>


                {/* Services Section */}
                <div className="container-fluid service pb-5" id="services" style={{ marginTop: '50px' }}>
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
                                            alt="Real Estate Business Strategy"
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
                                                Real Estate Business Strategy
                                            </a>
                                        </div>
                                        <p style={{ textAlign: "left", margin: "10px 0", fontFamily: "Roboto, sans-serif" }}>
                                            Develop customized strategies to optimize real estate investments and business operations.
                                        </p>
                                        <div className="d-flex gap-2 justify-content-center">
                                            <button className="btn btn-primary" onClick={toggleEnquiry}>Enquire Now</button>
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
                                            alt="Market Analysis & Lead Generation"
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
                                                Market Analysis & Lead Generation
                                            </a>
                                        </div>
                                        <p style={{ textAlign: "left", margin: "10px 0", fontFamily: "Roboto, sans-serif" }}>
                                            Leverage data-driven insights to attract quality leads and identify market trends for better decision-making.
                                        </p>
                                        <div className="d-flex gap-2 justify-content-center">
                                            <button className="btn btn-primary" onClick={toggleEnquiry}>Enquire Now</button>
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
                                            alt="AI-Driven Real Estate Solutions"
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
                                                AI-Driven Real Estate Solutions
                                            </a>
                                        </div>
                                        <p className="service-description" style={{ textAlign: "left", margin: "10px 0", fontFamily: "Roboto, sans-serif" }}>
                                            Implement smart technology such as AI-powered chatbots, predictive analytics, and virtual property tours to enhance customer engagement and business efficiency.
                                        </p>
                                        <div className="d-flex gap-2 justify-content-center">
                                            <button className="btn btn-primary" onClick={toggleEnquiry}>Enquire Now</button>
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
                            <h2 className="fw-bold" style={{ fontSize: "28px", fontFamily: "Roboto, sans-serif" }}>
                                Why Choose DAG for Real Estate Business Growth?
                            </h2>
                            <p className="text-muted" style={{ fontSize: "16px", fontFamily: "Roboto, sans-serif" }}>
                                We provide top-notch solutions for web and AI-powered applications, ensuring seamless performance and innovation.
                            </p>

                            {/* Comprehensive Real Estate Consulting */}
                            <div className="d-flex align-items-start mb-3">
                                {/* <FaBusinessTime className="fs-3 text-success me-3" /> */}
                                <div>
                                    <h5 className="fw-bold" style={{ fontSize: "20px", fontFamily: "Roboto, sans-serif" }}>
                                        Comprehensive Real Estate Consulting
                                    </h5>
                                    <p style={{ fontSize: "16px", fontFamily: "Roboto, sans-serif" }}>
                                        We offer end-to-end solutions, from market analysis to sales optimization, ensuring business success.
                                    </p>
                                </div>
                            </div>

                            {/* Lead Management & CRM Integration */}
                            <div className="d-flex align-items-start mb-3">
                                {/* <FaUsersCog className="fs-3 text-success me-3" /> */}
                                <div>
                                    <h5 className="fw-bold" style={{ fontSize: "20px", fontFamily: "Roboto, sans-serif" }}>
                                        Lead Management & CRM Integration
                                    </h5>
                                    <p style={{ fontSize: "16px", fontFamily: "Roboto, sans-serif" }}>
                                        Streamline client interactions and sales processes with tailored CRM solutions that enhance customer relationships and increase conversions.
                                    </p>
                                </div>
                            </div>

                            {/* Strategic Branding & Digital Presence */}
                            <div className="d-flex align-items-start mb-3">
                                {/* <FaBullhorn className="fs-3 text-success me-3" /> */}
                                <div>
                                    <h5 className="fw-bold" style={{ fontSize: "20px", fontFamily: "Roboto, sans-serif" }}>
                                        Strategic Branding & Digital Presence
                                    </h5>
                                    <p style={{ fontSize: "16px", fontFamily: "Roboto, sans-serif" }}>
                                        Build a strong, recognizable brand in the real estate sector with marketing strategies that boost online and offline engagement.
                                    </p>
                                </div>
                            </div>

                            {/* Scalability & Competitive Edge */}
                            <div className="d-flex align-items-start mb-3">
                                {/* <FaChartLine className="fs-3 text-success me-3" /> */}
                                <div>
                                    <h5 className="fw-bold" style={{ fontSize: "20px", fontFamily: "Roboto, sans-serif" }}>
                                        Scalability & Competitive Edge
                                    </h5>
                                    <p style={{ fontSize: "16px", fontFamily: "Roboto, sans-serif" }}>
                                        Our solutions are designed to adapt to market changes and scale with business growth, keeping you ahead of the competition.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="col-lg-6 text-center">
                            <img src={websiteDevImg} className="img-fluid rounded w-100" alt="Web Development" />
                        </div>
                    </div>
                </div>




                {/* Industries We Serve Section */}
                <div className="container py-5">
                    <h1 className="text-center mb-4" style={{ fontSize: "48px", fontFamily: "Roboto, sans-serif", color: "#198754" }}>
                        Industries We Serve
                    </h1>

                    {/* <div className="row g-4 justify-content-center">
    {[
      { icon: <FaBuilding />, title: "Residential & Commercial Real Estate" },
      { icon: <FaCity />, title: "Property Development Firms" },
      { icon: <FaLandmark />, title: "Real Estate Investment Groups" },
      { icon: <FaHome />, title: "Real Estate Agencies & Brokerages" },
      { icon: <FaMoneyCheckAlt />, title: "Mortgage & Financial Services" },
      { icon: <FaDraftingCompass />, title: "Construction & Architectural Firms" },
      { icon: <FaHotel />, title: "Luxury & Vacation Properties" }
    ].map((industry, index) => (
      <div className="col-md-4 col-lg-3 d-flex" key={index}>
        <div className="card text-center p-3 shadow-sm w-100">
          <div className="icon mb-3">{industry.icon}</div>
          <h5>{industry.title}</h5>
        </div>
      </div>
    ))}
  </div> */}



                    {/* Ready to Start Your Project? Section */}
                    <div className="text-center mt-5 mb-4" >
                        <h2 className="text-success" style={{ fontFamily: "Roboto, sans-serif" }}>Ready to Grow Your Business?</h2>
                        <p style={{ fontFamily: "Roboto, sans-serif" }}>
                            DAG specializes in helping real estate professionals expand their business, attract qualified buyers, and streamline operations for maximum profitability. Whether you are looking for branding, lead generation, or business automation, we have the expertise to elevate your success.
                        </p>
                        <button className="btn btn-success px-4 py-2" onClick={handleCallNowClick} style={{ fontFamily: "Roboto, sans-serif" }}>Contact Us</button>
                    </div>


                    {/* Get a Free Consultation Today Section */}
                    <div className="free-consultation container-fluid py-5" style={{ backgroundColor: "#f8f9fa" }}>
                        <div className="container py-5">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <h2 style={{ fontFamily: "Roboto, sans-serif" }}>Get Expert Consultation</h2>
                                    <p style={{ fontFamily: "Roboto, sans-serif" }}>
                                        Explore new growth opportunities in real estate with our strategic consulting services. Let's discuss your goals and design a customized roadmap to success.
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
                            Build a Profitable Real Estate Business – Partner with DAG for Market-Driven Solutions.
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

export default RealEstate;
