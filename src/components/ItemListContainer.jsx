import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import { getProducts } from '../mock/data'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {category} = useParams()

    
    useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((res)=> {
            if (category){
                setProducts(res.filter((prod) => prod.category === category))
            } else {
                setProducts(res)
            }
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[category])

    return(
        <div>
            <h1 className="titleListContainer">{greeting}</h1>
            {/* <ItemList products={products}/> */}


            {loading ? <p>Cargando...</p>: <ItemList products={products}/>}
        </div>
    )
}

export default ItemListContainer