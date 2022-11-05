import axios from 'axios'
import { useContext } from 'react'
import { LoggedInContext } from '../../context/LoggedInContext'

const Logout = () => {

    const { setLoggedInInfo } = useContext(LoggedInContext)

    const logout = (e) => {
        e.preventDefault()
        axios.get("http://localhost:8000/api/logout")
            .then(res => {
                setLoggedInInfo({
                    loggedIn: false,
                    loggedInId: null,
                    loggedInUsername: null,
                })
            })
            .catch(err => console.log(err))
    }

    return (
        <button className="clr-btn" onClick={logout}>Logout</button>
    )
}
export default Logout