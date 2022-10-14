import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './views/Dashboard'
import "./App.css"

const App = () => {

    return (
        <Routes>
            <Route path="/"  element={<Dashboard />}/>
        </Routes>
    )
}

export default App