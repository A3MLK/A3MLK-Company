import React from 'react'
import '../styles/Home.css'
import banner from '../assets/23369553_33.jpg'
import man2 from '../assets/man2.png'
import { FaArrowRight,FaArrowLeft} from "react-icons/fa";
 import { useEffect } from "react";

const Home = () => {

useEffect(() => {
  const words = document.querySelectorAll(".changing-words b");
  let index = 0;

  const changeWord = () => {
    words[index].classList.remove("is-visible");
    words[index].classList.add("is-hidden");

    index = (index + 1) % words.length;

    words[index].classList.remove("is-hidden");
    words[index].classList.add("is-visible");
  };

  const interval = setInterval(changeWord, 2500);

  return () => clearInterval(interval);
}, []);



  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <div className="row">
            <div className="col-lg-6 order-lg-2">
            <div className="banner-right-content">
              <img src={man2} alt="logo"  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"/>
              <h2 className="banner-big-text-1 up-down">WEB DESIGNER</h2>
              <h2 className="banner-big-text-2 up-down-2">Mobile Apps</h2>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="inner">
              <span className="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">Hello</span>

              <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2 mt--5">
                we are A3mlk a
                <br />
                <span className="header-caption">
                  <span className="cd-headline clip is-full-width">
                    <div className="changing-words">
                      <b className="is-visible">UI/UX Designer.</b>
                      <b>Web Developer.</b>
                      <b>Mobile Application </b>
                      <b>Freelancer.</b>
                      </div>
                  </span>
                </span>
              </h1>

              <p className="disc tmp-scroll-trigger tmp-fade-in animation-order-3">
                This portfolio is a collection of our work, achievements, and skills that
                highlights our abilities and professional growth.
              </p>

              <div className="button-area-banner-one tmp-scroll-trigger tmp-fade-in animation-order-4">
                <a className="tmp-btn hover-icon-reverse radius-round" href="project.html">
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">View Portfolio</span>
                    <span className="btn-icon"><FaArrowRight className="icon"/></span>
                     <span className="btn-icon"><FaArrowRight className="icon"/></span>
                  </span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
