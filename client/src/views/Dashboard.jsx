import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CategoryTabs from '../components/CategoryTabs'

const Dashboard = () => {
    const categories = ['Horror', 'Action', 'Survival', 'Puzzle', 'FPS', 'RPG', 'Casual', 'Strategy']
    
    const hero = {
        display: "flex",
        flexDirection: "column",
    }

    return (
        
        <div className="main">
            <Header />
            <Hero />
            <div className="category-tabs">
                {categories.map((category, index) => {
                    return (
                        <div key={index} className="category-item">
                            <CategoryTabs category={category} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Dashboard