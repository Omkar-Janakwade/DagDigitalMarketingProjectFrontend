import React, { act, useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import carouselImg from '../../Assests/carousel-1.jpg';
import aboutJPG from '../../Assests/about-10.jpeg';
import { Services } from '../../Services/Service';
import AOS from 'aos';
import 'aos/dist/aos.css';
import spinner from '../../Assests/spinner.gif'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [services, setServices] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await Services.getAllServices();

        if (response && response.data) {
          console.log(response.data);
          setServices(response.data);
        }
      } catch (error) {
        alert("Service not getting");
      }
    };

    fetchServices();
    AOS.init({
      duration: 1000,
      once: false,
      disable: false
    });
  }, []);

  const renderPage = (title) => {
    if (title === "WEBSITE DEVELOPMENT") {
      navigate('/page/webapp', { replace: true })
    }

    if (title === "DAG DIGITAL MARKETING") {
      navigate('/page/digmark', { replace: true })
    }

    if (title == "DAG INTERIOR DESIGN") {
      navigate('/page/interior', { replace: true })
    }
    if (title == "REAL ESTATE") {
      navigate('//page/realestate', { replace: true })
    }

    if (title.trim() === "DAG ED TECH") {
      window.open("", '_blank')
    }
    window.scrollTo(0, 0)
  }

  return (
    <>
      {/* Carousel Start */}
      <div className="container-fluid header-carousel d-flex owl-carousel p-0 m-0">
        <img
          src={carouselImg}
          className=""
          width={100}
          id='carouselImg'
          alt="Image"
        />
        <div className="carousel-caption animated fadeInUp">
          <div className="container">
            <div className="col-12 animated fadeInUp">
              <h4 className="text-uppercase rawColorTheme fs-6 fw-bold mb-4">Welcome To DAG</h4>
              <h4 className="text-uppercase text-white mb-4">Get Quality Leads to Boost Your Business Today!</h4>
              <div className="d-flex justify-content-center flex-shrink-0 mb-4">
                <a className="btn rounded-pill py-3 px-4 px-md-5 ms-2" href="#services">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}

      {/* About Section */}
      <div className="container-fluid about py-5" id="about">
        <div className="container py-5">
          <h2 className="rawColorTheme text-center mb-5">About Us</h2>
          <div className="row g-5 align-items-center" data-aos='fade-up'>
            <div className="col-xl-7">
              <h1 className="mb-4">DAG - Direct | Admission | Guideline</h1>
              <p className="mb-4 text-secondary">At DAG, we specialize in generating high-quality leads...</p>
              <div className="row g-4 d-flex flex-column flex-md-row justify-content-between">
                <div className="col-md-6 d-flex">
                  <i className="fa fa-lightbulb rawColorTheme fa-2x"></i>
                  <div className="ms-4">
                    <h5>Lead Generation</h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <i className="fa fa-bookmark fa-2x rawColorTheme"></i>
                    <div className="ms-4">
                      <h4>10+ Year Of Expertise</h4>
                    </div>
                  </div>
                </div>
                <div>
                  <a href="#contact" className="btn btn-success rounded-pill px-4 py-3 mt-4">Connect With Us!</a>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex">
                    <i className="fas fa-phone-alt fa-2x rawColorTheme me-4"></i>
                    <div>
                      <h5>Call Us</h5>
                      <p className="mb-0 fs-5" style={{ letterSpacing: 1 }}>+91 90961 74933</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <img src={aboutJPG} className="img-fluid rounded w-100" alt="About Us" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Start */}
      <div className="container-fluid service py-5 bg-light" id="services">
        <div className="container pb-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp">
            <h2 className="mb-5 rawColorTheme">DAG Services</h2>
            <p className="mb-0">Here is the list of wide services we offer!</p>
          </div>
          <div className="row g-4 d-flex">
            {
              services.length > 0 ? services.map((service, index) => (
                service.type == "main-service" && <div className="col-md-4" data-aos="zoom-in" key={index}>
                  <div className="card" >
                    <div className="card-body p-0">
                      <div>
                        <img src={`data:image/png;base64,${service.img}`} className='img-fluid' alt='Image not found' />
                      </div>
                      <div className='p-4'>
                        <h4 onClick={() => { renderPage(service.tittle) }}>{service.tittle}</h4>
                        <p className='text-secondary'>{service.discription}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )) : (
                <div className='text-center d-flex flex-column align-items-center'>
                  <p className='text-center'>Fetching service please wait......</p>
                  <img src={spinner} width={100} alt="" />
                </div>
              )
            }
          </div>
        </div>
      </div>

      {/* Services End */}

      {/* contact */}
      <div className="container-fluid contact py-5" id="contact">
        <div className="container py-5">
          <h2 className='rawColorTheme text-center mb-5'>Contact Us</h2>
          <div className="row g-5">
            {/* Left Side: Contact Details */}
            <div className="col-xl-6" data-aos="fade-right">
              <div className="bg-light rounded p-5 mb-5">
                <h4 className="mb-4 rawColorTheme">Get in Touch</h4>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="contact-add-item">
                      <div className="contact-icon mb-4">
                        <i className="fas fa-map-marker-alt fa-2x rawColorTheme"></i>
                      </div>
                      <div>
                        <h4>Address</h4>
                        <p className="mb-0">
                          Offc. No. - 72, 1st floor, Gol Market, Near YCM Hospital,
                          Pimpri, Pune - 18
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-add-item">
                      <div className="contact-icon mb-4">
                        <i className="fas fa-envelope rawColorTheme fa-2x"></i>
                      </div>
                      <div>
                        <h4>Mail Us</h4>
                        <p className="mb-0">careers@directadmissionguideline.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-add-item">
                      <div className="contact-icon rawColorTheme mb-4">
                        <i className="fa fa-phone-alt fa-2x"></i>
                      </div>
                      <div>
                        <h4>Call Us</h4>
                        <p className="mb-0">+91 90961 74933</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Google Map */}
            <div className="col-xl-6" data-aos='fade-left'>
              <div className="rounded h-100">
                <iframe
                  className="rounded h-100 w-100"
                  style={{ height: "400px" }}
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3780.9188287067277!2d73.81651997519408!3d18.622720382490805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM3JzIxLjgiTiA3M8KwNDknMDguNyJF!5e0!3m2!1sen!2sin!4v1729615395170!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
};

export default Home;
