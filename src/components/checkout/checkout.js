import { Timestamp, addDoc, collection } from "firebase/firestore";
import CartContext from "../../context/CartContext";
import { useContext, useState } from "react";
import { db } from "../../config/firebaseConfig";
import './chekout.css'
import CheckoutForm from '../CheckoutForm/CheckoutForm'



const Checkout = () => {
    const [loading, setLoading] = useState(false) 
    const [orderId, setOrderId] =  useState('')

    const {cart, totalPrice, clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: parseFloat(totalPrice),
                date: Timestamp.fromDate(new Date())
            }
            console.log('Total Price:', totalPrice);
            console.log('ObjOrder:', objOrder);
            

            const orderRef = collection(db, 'orders')
            const orderAdded = await addDoc(orderRef, objOrder)
            setOrderId(orderAdded.id)
            clearCart()
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1 className="IdOrden">Se esta generando la orden...</h1>
    }

    if(orderId) {
        return <h1 className="IdOrden">El Id de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <h1 className="h1-checkout">CHECKOUT</h1>
            <br/>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )

}

export default Checkout
