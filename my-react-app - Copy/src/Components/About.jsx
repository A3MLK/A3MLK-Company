import React from 'react'
import "../styles/About.css"
import { FaPenRuler,FaMobile,FaBezierCurve,FaCloud,FaDatabase,FaSeedling} from "react-icons/fa6";
import Card from './Card';
const About = () => {
  const Cards=[
    {id:1,title:'WEB DESIGN',dis:'',children:<FaPenRuler/>},
    {id:2,title:'UI/UX',dis:'',children:<FaBezierCurve/>},
    {id:3,title:'Mobile Apps',dis:'',children:<FaMobile/>},
    {id:4,title:'Cloud Solutions',dis:'',children:<FaCloud/>},
    {id:5,title:'Database Solutions',dis:'',children:<FaDatabase/>},
    {id:6,title:'Api Development',dis:'',children:<FaSeedling/>},
  ]
  return (
    <div className="container" >
       <div className="section-head mb--50">
        <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
          <span className="subtitle">About US</span>
          </div>
        </div> 
        <div className="container se"  style={{marginTop:'3rem',maxWidth:'1290px'}}>
          <div className="row justify-content-center">
            {Cards.map((t)=>{
             return <Card key={t.id} title={t.title} dis={t.dis} children={t.children}/>
            })}    
                
        </div>
        </div>
    </div>
  )
}

export default About