import { Props } from '../../App'
import { CartDiv, CartItem, ProductInfo, Minus, Add } from '../styles/components/cart'

const Cart:React.FC<Props> = ({shoppingCart}) => {
    return(
        <CartDiv>
            {shoppingCart.map((obj:any, i:number) => 
            <CartItem key={i} data-id={obj.id}>
                <Minus>---</Minus>
                <ProductInfo>{obj.item.id} - ${obj.item.price}<br/> {obj.quantity} </ProductInfo>
                <Add>+++</Add>
            </CartItem>
            )}
        </CartDiv>
    )
}

export default Cart