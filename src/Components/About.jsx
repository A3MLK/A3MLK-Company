import React from 'react';
import "../styles/About.css";
import { FaPenRuler, FaMobile, FaBezierCurve, FaDatabase, FaSeedling } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import custom from '../assets/custom-line.png';
import Card from './Card';

const About = () => {
  const Cards = [
    { id: 1, title: 'WEB DESIGN', children: <FaPenRuler /> },
    { id: 2, title: 'UI/UX', children: <FaBezierCurve /> },
    { id: 3, title: 'Mobile Apps', children: <FaMobile /> },
    { id: 4, title: 'Database Solutions', children: <FaDatabase /> },
    { id: 5, title: 'Api Development', children: <FaSeedling /> },
    { id: 6, title: 'AI/ML', children: <GiArtificialIntelligence /> },
    { id: 7, title: 'Cyber Security', children: <MdOutlineSecurity /> },
  ];

  return (
    <div id="about" className="about-container">

      {/* Section Title */}
      <div className="section-head mb--50">
        <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
          <span className="subtitle">About US</span>
        </div>
      </div>

      {/* Cards */}
      <div className="container se" style={{ marginTop: '3rem', maxWidth: '1290px' }}>
        <div className="row justify-content-center">
          {Cards.map((t) => (
            <Card key={t.id} title={t.title}>
              {t.children}
            </Card>
          ))}
        </div>
      </div>

      {/* Progress Bars */}
      <div className="tmp-section-gapTop">
        <div className="container se" style={{ maxWidth: '1290px' }}>
          <div className="row justify-content-center">

            <div className="col-lg-6">
              <div className="progress-wrapper">
                <div className="content">
                  <h2 className="custom-title mb--30">
                    FrameWork <span><img src={custom} alt="custom-line" style={{ width: '70px' }} /></span>
                  </h2>

                  {/* الشريط الأول */}
                  <div className="progress-charts">
                    <h6 className="heading heading-h6">Dart</h6>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '100%' }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="percent-label">100%</span>
                      </div>
                    </div>
                  </div>

                  {/* الشريط الثاني */}
                  <div className="progress-charts">
                    <h6 className="heading heading-h6">React</h6>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '95%' }}
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="percent-label">95%</span>
                      </div>
                    </div>
                  </div>
                  <div className="progress-charts">
                    <h6 className="heading heading-h6">Ai</h6>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '90%' }}
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="percent-label">90%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="col-lg-6">
              <div className="progress-wrapper">
                <div className="content" style={{ marginTop:'60px' }}>

                   <div className="progress-charts">
                    <h6 className="heading heading-h6">Laravel</h6>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '100%' }}
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="percent-label">100%</span>
                      </div>
                    </div>
                  </div>
                   <div className="progress-charts">
                    <h6 className="heading heading-h6">Figma</h6>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '90%' }}
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="percent-label">90%</span>
                      </div>
                    </div>
                  </div>
                  <div className="progress-charts">
                    <h6 className="heading heading-h6">Cyber Security</h6>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '89%' }}
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="percent-label">89%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
