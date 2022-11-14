import { useContext, useState } from 'react'
import { LoggedInContext } from '../context/LoggedInContext'
import Logout from './LoginAndRegistration/Logout'
import LoginAndReg from './LoginAndRegistration/LoginAndReg'
import '../static/css/header.css'
import CartPopup from './CartPopup'

const Header = ({ active, setActive }) => {
    const { loggedInInfo } = useContext(LoggedInContext)
    const [cartTab, setCartTab] = useState(false)

    const handleCartTab = (e) => {
        e.preventDefault()
        setCartTab(current => !current)
    }

    return (
        <div className="sg-games-header">
            <nav className={active ? "active-header" : 'header'}>
                <h1>SuckyGames</h1>

                {loggedInInfo.loggedIn ?
                    <div>
                        <button onClick={handleCartTab} className="clr-btn">
                            Cart
                        </button>
                        <CartPopup cartTab={cartTab} />
                        <Logout />
                    </div>
                    // add a cart for the user
                    :
                    <button
                        className="clr-btn"
                        onClick={() => setActive(!active)}>
                        Login/Register
                    </button>
                    // add a cart for the guest
                }

            </nav>
            <LoginAndReg active={active} setActive={setActive} />
        </div>
    )
}
export default Header