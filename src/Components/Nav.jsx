import React from 'react';
import '../styles/Nav.css';
import logo from '../assets/logo.jpg'; // استيراد الصورة صح
import { FaFacebookF, FaLinkedinIn,FaGithub,FaTiktok } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect} from 'react';
const Nav = ({setOpen }) => {
  const [hover,setHover]=useState(false);
 useEffect(() => {
  const handleScroll = () => {
    const nav = document.querySelector(".all-nav");
    if (!nav) return console.log("no .all-nav found");
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
      console.log("scrolled added", window.scrollY);
    } else {
      nav.classList.remove("scrolled");
      console.log("scrolled removed", window.scrollY);
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // لفحص الحالة عند التحميل
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div className="all-nav">
        <nav className="navbar-container">
  <div className="logo">
    <img src={logo} alt="logo" />
  </div>

  <ul className="links">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#service">Service</a></li>
    <li><a href="#project">Projects</a></li>
    <li><a href="#price">Price</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>

  <div className="social-link">
    <a href="https://www.facebook.com/share/1Bkab4Ldez/" target="_blank"><FaFacebookF /></a>
    <a href="https://www.linkedin.com/company/a3mlk/" target="_blank"><FaLinkedinIn /></a>
    <a href="https://github.com/A3MLK" target="_blank"><FaGithub /></a>
    <a href="#" target="_blank"><FaTiktok /></a>
     <div className="actions-area">
    <button className="tmp-menu-bars tmp_button_active" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
    onClick={()=>setOpen(prev=>!prev)}
        >
        {hover?<AiOutlineMenu/>:<FaBarsStaggered/>}
        </button>
  </div>
  </div>
</nav>
    </div>

  );
};

export default Nav;
