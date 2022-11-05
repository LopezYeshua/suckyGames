import Login from './Login'
import Registration from './Registration'
import '../../static/css/LoginAndRegistration.css'

const LoginAndReg = ({active, setActive}) => {
    return (
            <div className={`${active ? "visible" : "hidden"}`}>
                <div className="container">
                    <h2>Login And Registration</h2>
                    <div>
                        <Login setActive={setActive} />
                        <Registration setActive={setActive} />
                    </div>
                </div>
            </div>
    )
}
export default LoginAndReg