import React from 'react'
import { Link } from 'react-router-dom'

const GamesGrid = ({gameList, images}) => {

    return (
        <div className="game-grid">
            {gameList.map((game, index) => {
                return (
                    <div key={index} className="game-item">
                        <img src={images[game.title]} alt="game" />
                        <div className="game-info">
                            <h3>{game.title.replace( /([a-z])([A-Z, 0-9])/g,  "$1 $2" )}</h3>
                            <h4>{game.price === 0 ?
                                "Free" :
                                `$${game.price}`}
                            </h4>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default GamesGrid