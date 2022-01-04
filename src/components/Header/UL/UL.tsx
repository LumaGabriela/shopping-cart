import { Navbar, Title, CartNumber } from "../../styles/components/navbar"
import { Link } from "react-router-dom"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { shade } from 'polished'
import Switch from 'react-switch'
import { useContext } from "react"
import { ThemeContext } from "styled-components"

const cart = <FontAwesomeIcon icon={faShoppingCart} />
const UL: React.FC<any> = ({shoppingCart, toggleTheme}) => {

    const { colors, title } = useContext(ThemeContext)
    return (
        <Navbar>
            <Link to='/'><li><Title>Paper & Action</Title></li></Link>
            <div>
            <Link to='/shop'><li>Items</li></Link>
            <Link to='/cart'><li className="Cart">{cart} <CartNumber>{
            shoppingCart.reduce((item: number, currentItem: {quantity:number}) => item + currentItem.quantity                 
                , 0)
            }</CartNumber></li>
            </Link>
            
            <li><Switch 
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={25}
            width={50}
            handleDiameter={20}
            offColor={shade(0.3, colors.secondary)}
            onColor={colors.secondary}
        /></li>
        </div>
        </Navbar>
    )
}

export default UL