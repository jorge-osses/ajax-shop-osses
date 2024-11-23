import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../mock/data'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [producto, setProducto] = useState({})
    const { id } = useParams()

    useEffect(() =>{
        setLoading(true)
        getOneProduct(id)
        .then((res) => setProducto(res))
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    }, [])


  return (
    <div>
        {loading ? <p>Cargando...</p>: <ItemDetail producto={producto}/>}
        
    </div>
  )
}

export default ItemDetailContainer