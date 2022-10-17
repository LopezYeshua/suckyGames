import React from 'react'

const Hero = ({gameTitle, price, btnAction}) => {

    return (
        <div className="hero">
            <div className="hero-image">
                <div className="hero-info">
                    <h1>{gameTitle}</h1>
                    <h3>{price}</h3>
                    <button>{btnAction}</button>
                </div>
            </div>
        </div>
    )
}
export default Hero