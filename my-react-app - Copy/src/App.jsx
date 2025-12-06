import React from 'react'
import Nav from './Components/Nav'
import './styles/App.css'
import { useState } from 'react'
import SideBar from './Components/SideBar'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Projects from './Components/Projects'
import Price from './Components/price'
import Contact from './Components/Contact'
const App = () => {
    const [open,setOpen]=useState(false);
  return (
    <div className="container">
      <Nav setOpen={setOpen}/>
      <SideBar open={open}  setOpen={setOpen} />
       <section id="home">
        <Home/>
      </section>
      <section id="about" className='latest-service-area tmp-section-gapTop'>
        <About/>
      </section>
       <section id="service" className='latest-service-area tmp-section-gapTop'>
        <Service/>
      </section>
       <section id="project" className='latest-service-area tmp-section-gapTop'>
        <Projects/>
      </section>
       <section id="price" className='latest-service-area tmp-section-gapTop'>
        <Price/>
      </section>
       <section id="contact" className='latest-service-area tmp-section-gapTop'>
        <Contact/>
      </section>
    </div>
  )
}

export default App