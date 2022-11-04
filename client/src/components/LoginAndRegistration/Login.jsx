import { LoggedInContext } from "../../context/LoggedInContext"
import { useState, useCallback, useContext } from 'react'
import axios from "axios"
const initialState = {
    email: "",
    password: ""
}

const Login = () => {
    const [user, setUser] = useState(initialState)
    const { setLoggedInInfo } = useContext(LoggedInContext)

    const updateUserDataHandler = useCallback(
        (type) => (e) => {
            setUser({...user, [type]: e.target.value})
        }
    )

    const handleLogin = useCallback(
        () => (e) => {
            e.preventDefault()
            axios.post('http://localhost:8000/api/login', user)
                .then(res => {
                    setLoggedInInfo({
                        loggedIn: true,
                        loggedInInfo: res.data.user._id,
                        loggedInUsername: res.data.user.username
                    })
                })
                .catch(err => console.log(err))
        }
    )


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin()}>
                <div className="input-gap">
                    <label 
                        htmlFor="email">
                        <h4>Email</h4>
                    </label>
                    <input 
                        type="text"
                        placeholder="email"
                        value={user.email}
                        onChange={updateUserDataHandler("email")}
                        name="email"
                        id="email" />
                </div>
                <div className="input-gap">
                    <label
                        htmlFor="password">
                        <h4>Password</h4>
                    </label>
                    <input
                        type="password"
                        value={user.password}
                        onChange={updateUserDataHandler("password")}
                        name="password" 
                        id="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login