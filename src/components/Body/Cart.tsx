import { Props } from '../../App'
import { CartDiv, CartItem, ProductInfo, Minus, Add } from '../styles/components/cart'

const Cart:React.FC<Props> = ({shoppingCart, setShoppingCart}) => {
    const addOneItem = (e:any) => {
        const id = e.target.parentElement.dataset.id
        let oldCart = JSON.parse(JSON.stringify(shoppingCart))
        let item
        if(oldCart.find((obj: { item: { id: any } } ) => obj.item.id === id)){
            item = oldCart.find((obj : {item : any}) => obj.item.id === id)
            item.quantity = item.quantity + 1
        }
        setShoppingCart(oldCart)
        
    }
    const removeOneItem = (e:any) => {
        const id = e.target.parentElement.dataset.id
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
        console.log(oldCart)
        setShoppingCart(oldCart)
        
    }

    return(
        <CartDiv className='CartDiv'>
            {shoppingCart.map((obj:any, i:number) => 
            <CartItem className='CartItem' key={i} data-id={obj.item.id}>
                <Minus onClick={removeOneItem} >---</Minus>
                <ProductInfo>
                    {obj.item.id} - ${obj.item.price}<br/> 
                    <img alt='img' src={obj.item.img}/>
                    {obj.quantity} 
                </ProductInfo>
                <Add onClick={addOneItem} >+++</Add>
            </CartItem>
            )}
        </CartDiv>
    )
}

export default Cart