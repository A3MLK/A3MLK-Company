import React, { Children } from 'react'
import "../styles/About.css"
const Card = ({title,children,dis}) => {
  return (
     <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-1 tmp-link-animation">
                <div className="service-card-icon">
                    {children}
                    </div>
                    <h4 className="service-title"><a href="service-details.html">{title}</a></h4>
                    <p className="service-para">{dis}</p>
                    </div>
                    </div>  
  )
}

export default Card