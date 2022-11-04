import { useContext } from 'react'
import { LoggedInContext } from '../context/LoggedInContext'
import Logout from './LoginAndRegistration/Logout'

const Header = ({active, setActive}) => {
    const { loggedInInfo } = useContext(LoggedInContext)
    return (
        <div className="sg-games-header">
            <nav className="header">
                <h1>SuckyGames</h1>
                <div>
                    {loggedInInfo.loggedIn ? <Logout /> : null }
                    <button className="login-btn" onClick={() => setActive(!active)}>Login/Register</button>
                </div>
            </nav>
        </div>
    )
}
export default Header