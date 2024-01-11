import './Cart.css'
import { useContext } from 'react'
import {CartContext} from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, clearCart, totalQuantity, totalPrice} = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3 className='totalPrice'>Total: ${totalPrice()} </h3>
            <button onClick={() => clearCart()} className='BotonLimpiar'>Limpiar carrito</button>
            <br/>
            <button className='checkout'>
            <Link to='/checkout' className='linkCheckout'>Checkout</Link>
            </button>
            
        </div>
    )
}

export default Cart