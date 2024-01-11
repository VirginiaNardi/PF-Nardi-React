import './CheckoutForm.css'
import { useState } from 'react'

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone,email
        }
        onConfirm(userData)
    }
    return (
        <div className='containerForm'>
            <form onSubmit={handleConfirm} className='form'>
                <label className='label'>
                    Nombre
                    <input className='input' type='text' value={name} onChange={({ target }) => setName(target.value)} />
                </label>
                <label className='label'>
                    Telefono
                    <input className='input' type='text' value={phone} onChange={({ target }) => setPhone(target.value)} />
                </label>
                <label className='label'>
                    Email
                    <input className='input' type='email' value={email} onChange={({ target }) => setEmail(target.value)}  />
                </label>
                <div className='label'>
                    <button type='submit' className='botonSubmit'>Crear orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm