import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {

    // const onAdd = (cantidad) =>{
    //     alert(`Agregaste al carrito ${cantidad} productos`)
    // }

    const onAdd = (cantidad) => {
        // validacion
        if(cantidad==1){
        alert(`Agregaste al carrito ${cantidad} producto`)
        }else if(cantidad<1){
        alert(`No hay productos para agregar =(`)            
        }else {
        alert(`Agregaste al carrito ${cantidad} productos`)            
        }
    }

    return (
        <div>
            <h1>Detalle del producto: {producto.name}</h1>
            <img src={producto.img} alt={producto.img}/>
            <p>{producto.description}</p>
            <p>${producto.price}</p>
            <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail