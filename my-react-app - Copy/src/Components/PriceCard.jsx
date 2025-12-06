import React from 'react'
import CheckCard from './CheckCard'
import { FaArrowRight } from 'react-icons/fa'

const PriceCard = ({ prime, price, className, cards }) => {
    return (
       <div className={`col-lg-4 ${className}`}>
            <div className="price-plan-card tmponhover blur-style-two tmp-scroll-trigger tmp-fade-in animation-order-1">
                
                <span className="price-sub-title">{prime}</span>
                <h3 className="main-price">$ {price}</h3>
                <p className="per-month">Per Month</p>

                <div className="check-box">
                    {cards.map((ch) => (
                        <CheckCard key={ch.id} boxPar={ch.boxPar} />
                    ))}
                </div>

                <div className="tmp-button-here">
                    <a className="tmp-btn hover-icon-reverse btn-md radius-round" href="contact.html">
                        <span className="icon-reverse-wrapper">
                            <span className="btn-text">Get Started</span>
                            <span className="btn-icon"><FaArrowRight className='icon'/></span>
                            <span className="btn-icon"><FaArrowRight className='icon'/></span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PriceCard
