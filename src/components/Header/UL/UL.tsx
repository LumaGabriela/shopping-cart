import Navbar from "../../styles/components/navbar"
import { Link } from "react-router-dom"

const UL: React.FC<any> = ({shoppingCart}) => {
    return (
        <Navbar>
            <Link to='/'><li>Store Name</li></Link>
            <Link to='/shop'><li>Items</li></Link>
            <Link to='/cart'><li>Cart: {shoppingCart.length}</li></Link>
        </Navbar>
    )
}

export default UL