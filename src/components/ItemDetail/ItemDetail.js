import './ItemDetail.css'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }
        addItem(item, quantity)
    }

    return (
        <div className='container'>
            <div className='columns is-centered'>
                <article className='CardItem column is-6'>
                    <header className='Header'>
                        <h2 className='ItemHeader'>{name}</h2>
                    </header>
                    <picture>
                        <img src={img} alt={name} className='ItemImg' />
                    </picture>
                    <section>
                        <p className='Info'>
                            Categoria: {category}
                        </p>
                        <p className='Info'>
                            Descripción: {description}
                        </p>
                        <p className='Info'>
                            Precio: ${price}
                        </p>
                    </section>
                    <footer className='ItemFooter'>
                        {
                            quantityAdded > 0 ? (
                                <Link to='/cart' className='Opcion'> Terminar compra</Link>
                            ) : (
                                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                            )
                        }
                    </footer>
                </article>
            </div>
        </div>
    )
}

export default ItemDetail