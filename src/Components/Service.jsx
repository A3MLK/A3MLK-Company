import React from 'react'
import '../styles/Service.css'
import ServiceCard from './ServiceCard'
import Video from './Video';
import TIk from '../assets/video_2025-12-03_19-33-01.mp4'
const Service = () => {
   const SCards=[
      {id:1,header:'Success Architects',num:"01.",par:'We help businesses elevate their digital performance through smart, efficient, and tailored software solutions.'},
      {id:2,header:'UI/UX',num:"02.",par:'We combine creativity and technical expertise to deliver UI/UX solutions that align perfectly with our clients’ business goals.'},
      {id:3,header:'Mobile Apps',num:"03.",par:'At A3MLK, we specialize in developing high-performance mobile applications for both iOS and Android.'},
      {id:4,header:'Cloud Solutions',num:"04.",par:'Our cloud services optimize performance, enhance reliability, and simplify infrastructure management'},
      {id:5,header:'Database Solutions',num:"05.",par:'We design and optimize databases for speed, reliability, and seamless data management, ensuring your applications run efficiently.'},
      {id:6,header:'Api Development',num:"06.",par:'We build secure and efficient APIs that connect systems, enhance performance, and enable seamless integration across platforms.'},
      
    ];
  const firstCol = SCards.slice(0, 3);
  const secondCol = SCards.slice(3, 6);
    
  return (
      <div className="container" >
      <div className="section-head mb--50">
        <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
          <span className="subtitle">Our Service</span>
          </div>
          <h2 class="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Inspiring The World One<br/> Project</h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">From web and mobile development
             to custom systems and workflow optimization — we turn your ideas into powerful, high-quality products.</p>
        </div> 
    <div className="container SEV">
        <div div className="row">
        <div className="col-lg-6 col-sm-6">
          {firstCol.map(c => (
            <ServiceCard key={c.id} header={c.header} num={c.num} par={c.par}/>
          ))}
        </div>
        <div className="col-lg-6 col-sm-6">
          {secondCol.map(c => (
            <ServiceCard key={c.id} header={c.header} num={c.num} par={c.par}/>
          ))}
        </div>
      </div>
    </div>
    <div className="video">
      <Video videoSrc={TIk}/>
    </div>
    </div>
  )
}

export default Service