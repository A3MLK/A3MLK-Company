import React from 'react'
import logo from '../assets/logo.jpg'
import '../styles/Footer.css'
import { FaEnvelope, FaPhone , FaRegEnvelope,FaFacebookF,FaLinkedinIn,FaGithub,FaTiktok  } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
const Footer = () => {
  return (
    <>
    <footer className='footer-area footer-style-one-wrapper bg-color-footer bg_images tmp-section-gap'>
        <div className="container pr">
            <div className="footer-main footer-style-one">
                <div className="row g-5">
                    <div className="col-lg-5 col-md-6">
                        <div className="single-footer-wrapper border-right mr--20">
                            <div className="logo">
                                <a href="index.html">
                                    <img src={logo}/>
                                </a>
                            </div>
                            <p className="description"><span>Get Ready</span> To Create Great</p>
                            <form action="#" className="newsletter-form-1 mt--40">
                                <input type="email" placeholder="Email Adress"/>
                                <span className="form-icon"><FaRegEnvelope /></span>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-footer-wrapper quick-link-wrap">
                            <h5 className="ft-title">Quick Link</h5>
                            <ul className="ft-link tmp-link-animation">
                                <li>
                                    <a href="about">About Me</a>
                                </li>
                                <li>
                                    <a href="service">Service</a>
                                </li>
                                <li>
                                    <a href="contact">Contact Me</a>
                                </li>
                                <li>
                                    <a href="blog">Blog Post</a>
                                </li>
                                <li>
                                    <a href="contact">Pricing</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-wrapper contact-wrap">
                            <h5 className="ft-title">Contact </h5>
                            <ul className="ft-link tmp-link-animation">
                                <li>
                                    <span class="ft-icon">
                                        <FaEnvelope/>
                                        </span>
                                        <a href="#">amlk10375@gmail.com</a>
                                        </li>
                                <li>
                                    <span class="ft-icon">
                                        <FaLocationDot/>
                                        </span>Egypt</li>
                                <li>
                                    <span class="ft-icon">
                                        <FaPhone />
                                        </span>
                                        <a href="#">01105474782</a>
                                        </li>
                            </ul>
                             <div className="social-link">
                                <a href="https://www.facebook.com/share/1Bkab4Ldez/" target="_blank"><FaFacebookF /></a>
                                <a href="https://www.linkedin.com/company/a3mlk/" target="_blank"><FaLinkedinIn /></a>
                                <a href="https://github.com/A3MLK" target="_blank"><FaGithub /></a>
                                <a href="#" target="_blank"><FaTiktok /></a>
                              </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </footer>
    <div className="copyright-area-one">
        <div className="container pr">
            <div className="row">
                <div className="col-lg-12">
                    <div className="main-wrapper">
                        <p className="copy-right-para tmp-link-animation"> ©<a href="https://themeforest.net/user/inversweb/portfolio" target="_blank">InversWeb </a>
                        2025 | All Rights Reserved
                        
                        </p>
                        <ul className="tmp-link-animation">
                            <li><a href="#">Trams &amp; Condition</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer