import React from 'react'
import "../static/css/dashboard.css"

const Hero = () => {

    return (
        <div className="hero">
            <div className="hero-image"></div>
            <div className="hero-info">
                <h1>Modern Warfare II</h1>
                <h3>$60</h3>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}
export default Hero