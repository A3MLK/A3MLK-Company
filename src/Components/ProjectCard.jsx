import React from 'react';
import '../styles/Project.css'
const ProjectCard = ({ imgSrc, title, imgDis }) => {
  return (
    <div className="col-lg-6 col-md-6 col-12">
      <div className="latest-portfolio-card v5 tmp-hover-link">
        <div className="portfoli-card-img">
          <div className="img-box v2">
            <a href="#">
              <img className="img-primary hidden-on-mobile" src={imgSrc} alt={title}/>
              <img className="img-secondary" src={imgSrc} alt={title}/>
               <div className="portfoli-card-para">{imgDis}</div>
            </a>
          </div>
        </div>
        <div className="portfolio-card-content-wrap">
            <div className="content-left">
              <h3 className="portfolio-card-title">
                <a className="link" href="project-details.html">{title}</a>
              </h3>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ProjectCard;
