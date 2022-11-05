import { useContext } from 'react'
import { LoggedInContext } from '../context/LoggedInContext'
import Logout from './LoginAndRegistration/Logout'
import LoginAndReg from './LoginAndRegistration/LoginAndReg'
import '../static/css/header.css'

const Header = ({ active, setActive }) => {
    const { loggedInInfo } = useContext(LoggedInContext)
    return (
        <div className="sg-games-header">
            <nav className={active ? "active-header" : 'header'}>
                <h1>SuckyGames</h1>
                <div>
                    {loggedInInfo.loggedIn ?
                        <>
                            <button className="clr-btn">
                                Cart
                            </button>
                            <Logout />
                        </>
                        // add a cart for the user
                        :
                        <button
                            className="clr-btn"
                            onClick={() => setActive(!active)}>
                            Login/Register
                        </button>
                        // add a cart for the guest
                    }
                </div>
            </nav>
            <LoginAndReg active={active} setActive={setActive} />
        </div>
    )
}
export default Header