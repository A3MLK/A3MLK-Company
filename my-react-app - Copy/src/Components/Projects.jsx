import React from 'react';
import car_img from '../assets/car.png';
import ProjectCard from './ProjectCard';
import '../styles/Project.css';
import school_img from '../assets/school.png';
import app_img from '../assets/image.png';

const Projects = () => {
    const images = [
        {id:1,imgSrc:car_img,title:'Drivx Motor', imgDis:'High-performance car management system'},
        {id:2,imgSrc:school_img,title:'School App', imgDis:'Efficient school management website'},
        {id:3,imgSrc:app_img,title:'Mobile App', imgDis:'Custom mobile application development'}
    ];

    return (
        <div className="container">
            <div className="section-head mb--50">
                <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span className="subtitle">Latest Projects</span>
                </div>
                <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                    Empowering Creativity<br/>through Software
                </h2>
            </div>
            <div className="container pr">
                <div className="row" style={{marginTop:'5rem'}}>
                    {images.map((m)=>(
                        <ProjectCard key={m.id} imgSrc={m.imgSrc} title={m.title} imgDis={m.imgDis}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
