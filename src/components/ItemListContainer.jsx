import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {

    const onAdd = (cantidad) => {
        // agregar validacion
        if(cantidad==1){
        alert(`Agregaste al carrito ${cantidad} producto`)
        }else if(cantidad<1){
        alert(`No hay productos para agregar =(`)            
        }else {
        alert(`Agregaste al carrito ${cantidad} productos`)            
        }
    }

    return(
        <div>
            <h1 className="titleListContainer">{greeting}</h1>

            <ItemCount stock={10} onAdd = {onAdd}/>
        </div>
    )
}

export default ItemListContainer