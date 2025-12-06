import React from "react";
import '../styles/SideBar.css'
import {FaXmark } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdMyLocation } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn,FaGithub,FaTiktok } from "react-icons/fa";

const SideBar = ({ open, setOpen }) => {
  return (
    <>
    <div className={`overlay_close_side_menu ${open ? "overlay-active" : ""}`} 
     onClick={() => setOpen(false)}></div>
    <div className={`sidebar-container ${open ? "open" : ""}`}>
        <div className="inner">
            <div className="top-area">
                <a href="#" className="logo"><img src="src/assets/logo.jpg" alt="" /></a>
                 <button className="close-btn" onClick={() => setOpen(false)}> <FaXmark /></button>
            </div>
            <div className="content-wrapper">
                <div className="image-area-feature">
                    <a href="#">
                        <img src="src/assets/man.png" alt="personal-logo"></img>
                    </a>
                </div>
                <h5 class="title mt--30">Crafting Modern Websites & Mobile Apps for Your Business</h5>
               <p class="disc">  We are a dedicated freelance team delivering high-quality web and mobile solutions. From sleek websites to dynamic applications, we help your business grow with innovative and user-friendly digital experiences.
               </p>
               <div className="short-contact-area">
                <div className="single-contact">
                     <FaPhoneAlt  className="phone-icon"/>
                    <div className="information tmp-link-animation">
                        <span>Call Now</span>
                        <a href="#" className="number">+20 (01105474782)</a>
                        </div>
                </div>
                 <div className="single-contact">
                     <IoMail  className="phone-icon"/>
                    <div className="information tmp-link-animation">
                        <span>Mail Us</span>
                       <a href="#" class="number">amlk10375@gmail.com</a>
                        </div>
                </div>
                 <div className="single-contact">
                     <MdMyLocation  className="phone-icon"/>
                    <div className="information tmp-link-animation">
                       <span>My Address</span>
                      <span class="number">Egypt (Beni seuif)</span>
                        </div>
                </div>
               </div>
                  <ul className="links">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#service">Service</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#reviews">Reviews</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
               <div className="social-wrapper mt--20">
                <span class="subtitle">find with me</span>
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
    </>
  );
};

export default SideBar;
