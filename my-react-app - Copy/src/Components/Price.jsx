import React from 'react'
import PriceCard from './PriceCard'
import '../styles/Price.css'

const Price = () => {
    const leftCards = [
        { id: 1, boxPar: 'Basic Web Development' },
        { id: 2, boxPar: 'Responsive Design' },
        { id: 3, boxPar: 'Basic Database Setup' },
        {id:4, boxPar:'30 Days Support'}
    ]

    const middleCards = [
        { id: 1, boxPar: 'Full-Stack Development' },
        { id: 2, boxPar: 'Mobile App Development' },
        { id: 3, boxPar: 'API Integration' },
        { id: 4, boxPar: '90 Days Support' },
    ]

    const rightCards = [
        { id: 1, boxPar: 'Custom Enterprise Solutions' },
        { id: 2, boxPar: 'Cloud Infrastructure' },
        { id: 3, boxPar: 'DevOps & Deployment' },
        { id: 4, boxPar: '1 Year Support' },

    ]

    const priceCards = [
        { id: 1, prime: 'Starter', price: 5.00, cards: leftCards },
        { id: 2, prime: 'Basic', price: 230.00, cards: middleCards },
        { id: 3, prime: 'Premium', price: 45.00, cards: rightCards }
    ]

    return (
        <div className="container">
            <div className="section-head mb--50">
                <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span className="subtitle">Our Price plan</span>
                </div>
                <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                    Choose the Plan<br />That Fits Your Needs
                </h2>
            </div>

            <div className="container pr" style={{ marginTop: '5rem' }}>
                <div className="row align-items-center">
                    {priceCards.map((p, index) => {
                        const isCenter = index === 1; // الكارت الأوسط
                        return (
                            <PriceCard
                                key={p.id}
                                price={(p.price).toFixed(2)}
                                prime={p.prime}
                                className={isCenter ? "center" : ""}
                                cards={p.cards} // تمرير العناصر لكل كارت
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Price
