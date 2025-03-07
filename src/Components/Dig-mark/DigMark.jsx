import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import '../Dig-mark/DigMark.css'
import mainBannerPng from '../../Assests/Main Banner.png'
import servicePng from '../../Assests/SEO Service.png'
import ppcServiceImg from '../../Assests/PPC Service.png'
import SMMServicePng from '../../Assests/SMM Service.png'
import ContentMarkPng from '../../Assests/Content Marketing Service.png'
import digmarkSideimg from '../../Assests/Digital Marketing Side Image.png'
import carouselImg from '../../Assests/digMarkBg1.avif';
import aboutImg from '../../Assests/DigitalMarkAbout.png'
import AOS, { init } from 'aos'
import * as YUP from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Services } from '../../Services/Service';

const DigMark = () => {
  const [allServices, setAllServices] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {

    const fetchServices = async () => {
      try {
        const response = await Services.getAllServices();
        console.log(response);

        if (response.status === 200) {
          setAllServices(response.data);
        } else {
          alert("service not avilable")
        }
      } catch (error) {
        alert("Service not available")
      }
    }
    fetchServices();

    AOS.init({
      duration: 1000,
      once: false,
      disable: false
    })

    const modalElement = document.getElementById("enquireModal")
    if (modalElement) {
      modalElement.addEventListener("hidden.bs.modal", () => {
        setErrors({})
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          message: ''
        })
      })
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors((prevErrors) => ({
      ...prevErrors, [name]: undefined
    }))
  };

  const validationSchema = YUP.object({
    name: YUP.string().required("Name is required"),
    email: YUP.string().email("Invalid Email").required("Email is required"),
    phoneNumber: YUP.string().matches(/^\d{10}$/, "Phone number must contain 10 digits")
      .required("Phone number is required"),
    message: YUP.string().required("message is required")
  })


  const handleSubmit = async (e, formType) => {
    e.preventDefault();
    console.log(formData);

    if (isSubmitting) return;
    setIsSubmitting(true)
    // Form submission logic
    try {
      await validationSchema.validate(formData, { abortEarly: false })

      document.activeElement.blur();

      const response = await Services.addInquiry(formData)

      if (formType == 'modalForm') {
        const modalElement = document.getElementById("enquireModal")
        const modalInstance = Modal.getInstance(modalElement)
        if (!modalInstance) {
          modalInstance = new Modal(modalElement)
        }
        if (modalInstance._isShown) {
          modalInstance.hide()
        }
      }

      setErrors({})
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
      })
      setIsSubmitting(false)

      if (response.status == 200) {
        alert("Thank You for contacting us")
      }
    } catch (error) {
      setIsSubmitting(false)
      if (error?.inner) {
        const newError = {}
        error.inner.forEach((err) => {
          newError[err.path] = err.message
        })
        setErrors(newError)
      } else {
        console.error("Validation error", error)
      }
    }
  };

  return (
    <>
      <div className='digmarkmain'>

        {/* Enquire Form Modal */}
        <div className="modal fade " id='enquireModal'>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title w-100 text-primary fw-bold text-center">Enquire Now</div>
              </div>
              <div className="modal-body ">
                <div className='bg-light shadow p-4 rounded'>
                  <form action="" onSubmit={(e) => { handleSubmit(e, "modalForm") }}>
                    <div className='formContent'>
                      <label htmlFor="name">NAME : </label>
                      <input className='form-control ms-3 w-75' type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name..."
                      />

                    </div>
                    {errors.name && <div className='text-danger text-end'>{errors.name}</div>}
                    <div className='formContent'>
                      <label htmlFor="email">EMAIL : </label>
                      <input className='form-control w-75 ms-3'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email..."
                        id="" />

                    </div>
                    {errors.email && <div className='text-danger text-end'>{errors.email}</div>}
                    <div className='formContent'>
                      <label htmlFor="phoneNumber">MOBILE : </label>
                      <input className='form-control w-75 ms-3'
                        type="text"
                        name="phoneNumber"
                        id=""
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"

                      />

                    </div>
                    {errors.phoneNumber && <div className='text-danger text-end'>{errors.phoneNumber}</div>}
                    <div className='formContent'>
                      <label htmlFor="message">MESSAGE : </label>
                      <textarea className='form-control w-75'
                        name="message"
                        id=""
                        rows={5} cols={45}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    {errors.message && <div className='text-danger text-end mb-3'>{errors.message}</div>}
                    <div className='d-flex justify-content-between'>
                      <button className='btn btn-primary' type="submit" disabled={isSubmitting}>
                        {isSubmitting ? <span className='spinner-border spinner-border-sm'></span> : "Submit"}
                      </button>
                      <button button='button'
                        className='btn btn-danger'
                        data-bs-dismiss="modal"
                        aria-label="Close">Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Banner */}
        <div className="container-fluid header-carousel d-flex flex-wrap owl-carousel p-0 m-0">
          <img
            src={carouselImg}
            className=""
            width={100}
            id='carouselImg'
            alt="Image"
          />
          <div className="carousel-caption d-flex flex-wrap animated fadeInUp">
            <div className="container" data-aos="fade-up">
              <div className="col-12 animated fadeInUp">
                <h1 className=" rawColorTheme fw-bold mb-4">
                  Maximize Your Reach, Multiply Your Leads – DAG’s Digital Marketing Solutions for Guaranteed Growth!
                </h1>
                <h4 className="text-white mb-4">
                  Your one-stop destination for comprehensive digital marketing strategies that drive results.
                  At DAG, we specialize in generating high-quality leads tailored to your industry needs.
                </h4>
                <div className="d-flex justify-content-center flex-shrink-0 mb-4">
                  <button className="btn btn-success rounded-pill px-5" data-bs-toggle="modal" data-bs-target="#enquireModal">
                    Enquire Now</button>
                  <a className="btn rounded-pill py-3 px-4 px-md-5 ms-2" href="#services">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}

        <div className="container-fluid py-5 bg-light">
          <div class="container p1 py-4" id='about'>
            <div class="pa1">
              <h2 className='rawColorTheme'>About Us</h2>
            </div>
            <div className='row d-flex align-items-center pt-4'>
              <div class="col-md-6 pa2" data-aos="fade-right">
                <h4>DAG - Pioneering Digital Marketing for Lead Generation Success
                </h4>
                <p className='fs-6'>In today’s competitive market, capturing quality leads is essential to drive growth and boost revenue. At DAG, we bring together cutting-edge digital marketing techniques and personalized strategies to transform your lead generation efforts. With expertise across various industries, our team is dedicated to delivering digital marketing solutions that don’t just meet industry standards—they set them.
                </p>
              </div>
              <div className='col-5' data-aos="fade-left">
                <img className='img-fluid' src={aboutImg} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="container-fluid service py-5" id="services">
          <div className="container pb-5">
            <div className="text-center col-md-8 mx-auto pb-5" data-aos="fade-up">
              <h2 className="mb-4 rawColorTheme">Our Services</h2>
              <p className='fw-bold'>
                Comprehensive Digital Marketing Services to Drive Qualified Leads
              </p>
              <p>
                At DAG, we provide the full spectrum of digital marketing services.
                We focus on each stage of the customer journey to maximize your reach, drive traffic,
                and ensure high-quality lead conversion.
              </p>
            </div>
            <div className="row g-4">
              {
                allServices.length > 0 ? allServices.map((service, index) => (
                  service.type == 'dag digital marketing'.toUpperCase() 
                  &&
                  <div className="col-md-4" data-aos="zoom-in">
                    <div className="card h-100">
                      <div className="card-body p-0">
                        <div>
                          <img src={`data:image/png;base64,${service.img}`} className="img-fluid" alt="SEO" />
                        </div>
                        <div className="p-4">
                          <h4>{service.tittle}</h4>
                          <p>
                            {service.discription}
                          </p>
                          <div className='d-flex justify-content-evenly'>
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#enquireModal">
                              Enquire Now</button>
                            <a href="tel:+919096174933" className='btn btn-success'>Call Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )) :
                  <div className='text-center text-danger'>No service available now</div>
              }
              {/* Add other services similarly */}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}

        <div className="container-fluid py-5 bg-light" id="whyChooseDag">
          <div className="container">
            <div className="text-center mb-4" data-aos="fade-up">
              <h2 className="rawColorTheme">Why Choose DAG for Your Digital Marketing Needs?</h2>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-7" data-aos="fade-right">
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start mb-4">
                    <i className="fas fa-trophy fa-2x text-success me-3"></i>
                    <div>
                      <h5 className="fw-bold">Proven Success</h5>
                      <p>Trusted by clients across industries, we have a track record of generating thousands of leads monthly.</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <i className="fas fa-chart-line fa-2x text-danger me-3"></i>
                    <div>
                      <h5 className="fw-bold">Customized Strategies</h5>
                      <p>From B2B to B2C, our strategies are designed with your specific goals and audience in mind.</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <i className="fas fa-user-tie fa-2x text-warning me-3"></i>
                    <div>
                      <h5 className="fw-bold">Experienced Professionals</h5>
                      <p>Our digital marketing experts have deep knowledge in SEO, PPC, Social Media, Content Marketing, and more.</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <i className="fas fa-bullseye fa-2x text-info me-3"></i>
                    <div>
                      <h5 className="fw-bold">Results-Driven Approach</h5>
                      <p>We focus on leads that convert, ensuring you get value from every campaign.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-5" data-aos="fade-left">
                <div className="service-img">
                  <img src={digmarkSideimg} className="img-fluid rounded shadow-lg w-100" alt="Digital Marketing" />
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Industrie we Surve */}
        <section className='container-fluid text-center p-4'>
          <div className="container">
            <h2 className='rawColorTheme text-center'>Industries We Serve</h2>
            <div className="row g-4 my-4">
              <div className="col-md-3" data-aos="zoom-in">
                <div className="card">
                  <div className="card-body bg-light">
                    <i className='fa-solid fa-hospital fa-3x text-primary mb-3'></i>
                    <p className='fs-5 text-secondary'>Healthcare & Medical</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3" data-aos="zoom-in">
                <div className="card">
                  <div className="card-body bg-light">
                    <i className='fa-solid fa-cart-plus fa-3x text-primary mb-3'></i>
                    <p className='fs-5 text-secondary'>E-commerce & Retail</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3" data-aos="zoom-in">
                <div className="card">
                  <div className="card-body bg-light">
                    <i className='fa-solid fa-graduation-cap fa-3x text-primary mb-3'></i>
                    <p className='fs-5 text-secondary'>Education & E-learning</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3" data-aos="zoom-in">
                <div className="card">
                  <div className="card-body bg-light">
                    <i className='fa-solid fa-chart-area fa-3x text-primary mb-3'></i>
                    <i className='fa-solid fa-house fa-3x text-primary mb-3'></i>
                    <p className='fs-5 text-secondary'>Real Estate</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3" data-aos="zoom-in">
                <div className="card">
                  <div className="card-body bg-light">
                    <i className='fas fa-hand-holding-usd fa-3x text-primary mb-3'></i>
                    <p className='fs-5 text-secondary'>Finance & Banking</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3" data-aos="zoom-in">
                <div className="card">
                  <div className="card-body bg-light">
                    <i className='fa-solid fa-plane fa-3x text-primary mb-3'></i>
                    {/* <i className='fa-solid fa-hotel fs-1 text-primary'></i> */}
                    <p className='fs-5 text-secondary'>Travel & Hospitality</p>
                  </div>
                </div>
              </div>
            </div>
            <p>No matter your industry, our strategies align with your
              specific business goals to create impactful campaigns that bring results.
            </p>
          </div>
        </section>

        {/* Conact Section */}
        <div className="container-fluid contactSection bg-light py-5" id='contact'>
          <div className="container">
            <div>
              <h2 className='rawColorTheme text-center'>Contact Us</h2>
            </div>
            <div className='py-5' data-aos="fade-right">
              <div className="row p-4">
                {/* Contact Info */}
                <div className="d-flex justify-content-around" data-aos="zoom-in">
                  <div className='col-md-5'>
                    <h4 className="fw-bold rawColorTheme">Get in Touch</h4>
                    <p>Fill out the form below, and our team will reach out within 24 hours.</p>
                    <div className='p-4 bg-transparent border shadow'>
                      <form action="" onSubmit={(e) => { handleSubmit(e, "contactForm") }}>
                        <div className='formContent'>
                          <label htmlFor="name">NAME : </label>
                          <input className='form-control w-75 bg-light' type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name..."
                            required />
                        </div>
                        {errors.name && <div className='text-danger text-end'>{errors.name}</div>}
                        <div className='formContent'>
                          <label htmlFor="email">EMAIL : </label>
                          <input className='form-control w-75 bg-light'
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email..."
                            required
                            id="" />
                        </div>
                        {errors.email && <div className='text-danger text-end'>{errors.email}</div>}
                        <div className='formContent'>
                          <label htmlFor="phoneNumber">MOBILE : </label>
                          <input className='form-control w-75 bg-light'
                            type="text"
                            name="phoneNumber"
                            id=""
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            required
                          />
                        </div>
                        {errors.phoneNumber && <div className='text-danger text-end'>{errors.phoneNumber}</div>}
                        <div className='formContent'>
                          <label htmlFor="message">MESSAGE : </label>
                          <textarea className='form-control w-75 bg-light'
                            name="message"
                            id=""
                            rows={5} cols={45}
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Enter your message"
                            required
                          ></textarea>
                        </div>
                        {errors.message && <div className='text-danger text-end'>{errors.message}</div>}
                        <div className='d-flex justify-content-center'>
                          <button className='btn btn-primary w-75' type="submit">
                            {isSubmitting ? <span className='spinner-border'></span> : 'Submit'}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className='col-md-6 px-3'>
                    <h4 className='fw-bold'>Ready to Supercharge Your Lead Generation?</h4>
                    <p>Take the first step toward a steady flow of qualified leads.
                      Connect with DAG’s digital marketing experts today and experience
                      the transformation in your lead pipeline!
                    </p>
                    <h6 className='fw-bold'>Please reach out to us for getting free consultation!</h6>
                    <div className='mt-3'>
                      <h6 className='fw-bold'>Contact Us Today!</h6>
                      <ul className="list-unstyled">
                        <li>
                          <a href="mailto:careers@directadmissionguideline.com">
                            <i className="fas fa-envelope text-primary me-2"></i>
                            <strong>Email Us:</strong> careers@directadmissionguideline.com
                          </a>
                        </li>
                        <li>
                          <a href="tel:+919096174933">
                            <i className="fas fa-phone text-success me-2"></i>
                            <strong>Call Us :</strong> +91 90961 74933
                          </a>
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt text-danger me-2"></i>
                          <strong>Location:</strong> Your Business Address
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigMark;