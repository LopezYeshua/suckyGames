import Login from './Login'
import Registration from './Registration'

const LoginAndReg = ({active}) => {
    return (
            <div className={`${active ? "visible" : "hidden"}`}>
                <div className="container">
                    <h2>Login And Registration</h2>
                    <div>
                        <Login />
                        <Registration />
                    </div>
                </div>
            </div>
    )
}
export default LoginAndReg