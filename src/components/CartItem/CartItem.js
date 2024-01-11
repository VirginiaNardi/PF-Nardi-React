import CartContext from "../../context/CartContext";
import React from "react";
import { useContext } from "react";
import './CartItem.css'



const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext)


    return (
        <div className="carro">
            <div className="productosEnCarrito">
                <h2 className="name"> {name} </h2>
                <p className="info"> Cantidad: {quantity} </p>
                <p className="info"> Subtotal: ${(quantity) * (price)} </p>
                <button className="eliminar" onClick={() => removeItem(id)}> Eliminar </button>
            </div>
        </div>
    )
}

export default CartItem