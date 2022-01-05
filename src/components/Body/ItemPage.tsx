/* eslint-disable react-hooks/exhaustive-deps */
import { Props } from '../../App'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemIndividual } from '../styles/components/itemIndividual'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const cart = <FontAwesomeIcon icon={faShoppingCart} />

const ItemPage:React.FC<Props> = ({ products, addToCart, shoppingCart }) => {
    const [item, setItem] = useState<any>({})
    const params = useParams<string>()
    useEffect(()=>{selectItem()}, [params])
    const selectItem = () => {
        let catalog = JSON.parse(JSON.stringify(products))
        let currentItem = catalog.find((item: any)=> item.id === params.id )
        setItem(currentItem)
    }
  
    return(
    <ItemIndividual >
        <figure>
            <img alt={item.id + ' image'} src={`${item.img}`}/>
            <figcaption>{item.id}<br/>
            ${item.price}<br/>
            </figcaption>
        </figure>
        <div data-id={item.id}>
            Description: {item.description}<br/>
            <button data-id={item.id} onClick={addToCart}>{cart}ADD TO CART</button>
        </div>
    </ItemIndividual>      
    )
}

export default ItemPage