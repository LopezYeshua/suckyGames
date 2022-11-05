import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CategoryTabs from '../components/CategoryTabs'
import GamesGrid from '../components/GamesGrid'
import games from '../data/games'
import images from '../static/images/index'
import Footer from '../components/Footer'
import "../static/css/dashboard.css"
import axios from 'axios'

const Dashboard = () => {
    const categories = ['Horror', 'Action', 'Survival', 'Puzzle', 'FPS', 'RPG', 'Casual', 'Strategy']
    const [active, setActive] = useState(false)
    const [heroGame, setHeroGame] = useState("Modern Warfare II")

    return (
        <>
            <div className="flex-column">
                <Header active={active} setActive={setActive} />
                <Hero gameTitle={heroGame} price={"$70"} btnAction={"Add To Cart"} />
                <div className="main-content">
                    <div className="category-tabs">
                        {categories.map((category, index) => {
                            return (
                                <div key={index}>
                                    <CategoryTabs category={category} />
                                </div>
                            )
                        })}
                    </div>
                    <GamesGrid gameList={games} images={images}/>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Dashboard