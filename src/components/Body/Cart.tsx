import { Props } from '../../App'
import { CartDiv, CartItem, CartButton } from '../styles/components/cart'
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from 'react'
const plus = <FontAwesomeIcon icon={faPlus} />
const minus = <FontAwesomeIcon icon={faMinus} />

const Cart:React.FC<Props> = ({shoppingCart, setShoppingCart}) => {
    const addOneItem = (e:any) => {
        const id =(e.target.nodeName === 'path') ? e.target.parentElement.parentElement.dataset.id : e.target.parentElement.dataset.id
        let oldCart = JSON.parse(JSON.stringify(shoppingCart))
        let item
        if(oldCart.find((obj: { item: { id: any } } ) => obj.item.id === id)){
            item = oldCart.find((obj : {item : any}) => obj.item.id === id)
            item.quantity = item.quantity + 1
        }
        setShoppingCart(oldCart)
    }
    useEffect(()=>console.log(shoppingCart), [shoppingCart])
    const removeOneItem = (e:any) => {
        const id =(e.target.nodeName === 'path') ? e.target.parentElement.parentElement.dataset.id : e.target.parentElement.dataset.id
        let oldCart = JSON.parse(JSON.stringify(shoppingCart))
        let item:any
        if(oldCart.find((obj: { item: { id: any } } ) => obj.item.id === id)){
            item = oldCart.find((obj : {item : any}) => obj.item.id === id)
            if(item.quantity > 1 )item.quantity = item.quantity - 1   
            else if(item.quantity === 1) {
                item = oldCart.find((obj : {item : any}) => obj.item.id === id)
                oldCart.splice(
                oldCart.findIndex((obj :{item:any}) => obj.item.id === item.item.id), 1
                )       
            }
        }
        setShoppingCart(oldCart)     
    }

    const subtotal = (cart: any[]) => {
        const sub = cart.reduce((total:number, item: { item: { price: number }; quantity: number }) => total + (item.item.price * item.quantity), 0)
        return sub
    }

    return(
        <CartDiv className='CartDiv'>
            <h2>Shopping Cart</h2>
            {shoppingCart.map((obj:any, i:number) => 
            <CartItem className='CartItem' key={i}>                       
                    <img alt='img' src={obj.item.img}/><br/>
                    {obj.item.id} - $ {obj.item.price}<br/>
                    <section data-id={obj.item.id}>
                        <CartButton data-id={obj.item.id} onClick={removeOneItem} >{minus}</CartButton > 
                        <p>{obj.quantity}</p>
                        <CartButton data-id={obj.item.id} onClick={addOneItem} >{plus}</CartButton>
                    </section>
            </CartItem>
            )}
            <h4>{!shoppingCart[0] ? 'Your cart is empty' : `Subtotal: $ ${subtotal(shoppingCart)}`}</h4>
        </CartDiv>
    )
}
export default Cart