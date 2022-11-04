import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './views/Dashboard'
import "./App.css"
import jwt from 'jwt-decode'
import Cookies from 'universal-cookie'
import { LoggedInContext } from './context/LoggedInContext'
let tempLoggedIn = false
let tempLoggedInId = null
let tempLoggedInUsername = null

const App = () => {

    const cookies = new Cookies()
    const token = cookies.get('usertoken')
    if (token) {
        if (jwt(token).id) {
            tempLoggedIn = true;
            tempLoggedInId = jwt(token).id
        }
    }

    const [loggedInInfo, setLoggedInInfo] = useState({
        loggedIn: tempLoggedIn,
        loggedInId: tempLoggedInId,
        loggedInUsername: tempLoggedInUsername
    })

    return (
        <LoggedInContext.Provider value={{loggedInInfo, setLoggedInInfo}}>
            <Routes>
                <Route path="/"  element={<Dashboard />}/>
            </Routes>
        </LoggedInContext.Provider>
    )
}

export default App