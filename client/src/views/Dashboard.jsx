import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CategoryTabs from '../components/CategoryTabs'

const Dashboard = () => {
    
    const hero = {
        marginTop: "620px",
    }

    return (
        <>
            <div style={hero}>
                <Hero />
                <Header />
            </div>
            <CategoryTabs />
        </>
    )
}
export default Dashboard