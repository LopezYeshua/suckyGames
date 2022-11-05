import axios from 'axios'
import { useState, useCallback, useContext } from 'react'
import { LoggedInContext } from '../../context/LoggedInContext'

const initialData = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const Registration = () => {
    const [user, setUser] = useState(initialData)
    const { loggedInInfo, setLoggedInInfo} = useContext(LoggedInContext)

    // update each field in the user object based on the field type eg. "username"
    const updateUserDataHandler = useCallback(
        (type) => (event) => {
            setUser({ ...user, [type]: event.target.value })
        },
        [user]
    )

    const handleForm = useCallback(
        () => (e) => {
            e.preventDefault()
            axios.post('http://localhost:8000/api/register', user)
                .then(res => {
                    console.log(res)
                    setLoggedInInfo({
                        loggedIn: true,
                        loggedInId: res.data.user._id,
                        loggedInUsername: res.data.user.username
                    })
                    const token = res.data.userToken
                })
                .catch(err => console.log(err))
        },
        [user]
    )
    
    return (
        <div>
            <h2>Registration</h2>
            <form onSubmit={handleForm()}>
                <div className="input-gap">
                    <label 
                        htmlFor="username">
                        <h4>Username</h4>
                    </label>
                    <input 
                        type="text" 
                        autoComplete="off"
                        value={user.username}
                        onChange={updateUserDataHandler("username")}
                        name="username" 
                        id="username" />
                </div>
                <div className="input-gap">
                    <label 
                        htmlFor="email">
                        <h4>Email</h4>
                    </label>
                    <input 
                        type="text" 
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
                <div className="input-gap">
                    <label 
                        htmlFor="confrimPassword">
                        <h4>Confirm Password</h4>
                    </label>
                    <input 
                        type="password" 
                        value={user.confirmPassowd}
                        onChange={updateUserDataHandler("confirmPassword")}
                        name="confirmPassword" 
                        id="confirmPassword" />
                </div>
                <button 
                    type="submit">
                    Register
                </button>
            </form>
        </div>
    )
}
export default Registration