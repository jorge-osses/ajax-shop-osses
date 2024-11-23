import { TiShoppingCart } from "react-icons/ti";
import { Badge } from "react-bootstrap";

const CartWidget = ({counter}) => {
    return(
        <>
            <TiShoppingCart fontSize={"1.7rem"} color="black"/>
            <Badge bg="warning" text="light">{counter}</Badge>
        </>
    )
}

export default CartWidget