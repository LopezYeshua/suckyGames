import images from '../static/images/index'
import games from '../data/games'
const CartPopup = ({cartTab}) => {
    return (
        <div className={cartTab ? 'active-cart-tab' : 'hidden-cart-tab'}>
            <div className="cart-game-preview">
                <img src={images.Minecraft} alt="minecraft game" />
                <div>
                    <h2>{}</h2>
                </div>
            </div>
            <div className="cart-game-preview">
                <img src={images.Minecraft} alt="minecraft game" />
            </div>
        </div>
    )
}
export default CartPopup