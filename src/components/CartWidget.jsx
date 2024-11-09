import { TiShoppingCart } from "react-icons/ti";
import { Badge } from "react-bootstrap";

const CartWidget = ({counter}) => {
    return(
        <>
            <TiShoppingCart fontSize={"1.7rem"} color="black"/>
            <Badge bg="warning" text="light">8</Badge>
            {/* <div className="cartWidgetContainer">
                <img src="./shopping-cart.png" alt="cart" className="cartIcon" />
                <p className="cartCounter">{counter}</p>
            </div> */}
        </>
    )
}

export default CartWidget