import { useEffect, useState } from "react"
import ItemList from '../ItemList/ItemList'

import { useParams } from "react-router-dom"

import{getDocs,collection,query,where} from 'firebase/firestore'
import { db } from "../../config/firebaseConfig"

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db,'productos'), where('category', '==', categoryId))
            : collection(db, 'productos')
        
        getDocs(collectionRef)
            .then(response => {
                const productosAdapted = response.docs.map(doc =>{
                    const data =doc.data()
                    return {id: doc.id, ...data}
                })
                setProductos(productosAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div>
          <br />
          <h1>{greeting}</h1>
          {loading ? (
            <p>Cargando productos...</p>
          ) : (
            <ItemList productos={productos} />
          )}
        </div>
      );
      
}

export default ItemListContainer