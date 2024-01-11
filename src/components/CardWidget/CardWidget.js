import "./CardWidget.css"
import cart from './assets/cart.png'
import { useContext } from "react"
import {CartContext} from '../../context/CartContext'
import { Link } from "react-router-dom"


const CardWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <div>
        <Link to='/cart' className="carrito" >
            <img src={cart} className="carrito" alt="cart"></img>
            { totalQuantity() }
            
        </Link>
        </div>
    )   
}

export default CardWidget
