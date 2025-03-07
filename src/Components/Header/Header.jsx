import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [toggleButton, setToggleButton] = useState(false);

    const location = useLocation()

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isHomePage = location.pathname === '/page/home'
    const isDigitalMarketing = location.pathname === '/page/digmark'
    const isInteriorDesign = location.pathname === '/page/interior'


    return (
        <header className={`fixed-top transition ${isScrolled ? "scrolled" : ""}`}>
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href={"/page/home"} className="navbar-brand p-0">
                    <h1>DAG</h1>
                </a>

                <button
                    className="navbar-toggler btn text-success"
                    onClick={() => setToggleButton(!toggleButton)}
                    type="button"
                >
                    <span className={`fa ${toggleButton ? "fa-times" : "fa-bars"}`}></span>
                </button>

                <div className={`collapse navbar-collapse ${toggleButton ? "show" : ""}`} id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 ">
                        <a href={'#'} className="nav-item nav-link">Home</a>
                        <a href="#about" className="nav-item nav-link">About</a>
                        <a href="#services" className="nav-item nav-link">Services</a>
                        {
                            isHomePage ? (
                                <a href={'/page/career'} target="_blank" className="nav-item nav-link">Career</a>) :
                                (<a href="#whyChooseDag" className="nav-item nav-link">Why Choose Us</a>)
                        }
                        <a href="#contact" className="nav-item nav-link">Contact Us</a>
                        {
                            isHomePage &&
                            <a href="#get-started" className="btn btn-primary text-light rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0">
                                Get Started
                            </a>
                        }
                        {
                            !isHomePage &&
                            <button className="btn btn-success rounded-pill" data-bs-toggle="modal" data-bs-target="#enquireModal">
                                Enquire Now</button>
                        }
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Header;
