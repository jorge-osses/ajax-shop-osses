import React, { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)
    const sumar = () => {
        if(count<stock){
            setCount(count + 1)
        }
    }
    const restar = () => {
        if(count > 0){
            setCount(count -1)
        }
    }

  return (
    <>
    <div>
        <button className='btn btn-danger' onClick={restar}>-</button>
        <span className='btn'>{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
    </div>
    <br />
    <br />

    <button className='btn btn-primary' onClick={()=>onAdd(count)}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount