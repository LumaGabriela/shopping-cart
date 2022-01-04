import { Props } from '../../App'
import {Catalog, ItemDiv} from '../styles/components/catalog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const cart = <FontAwesomeIcon icon={faCartPlus} />


const Shop:React.FC<Props> = ({products, addToCart}) => {
    return(
        <Catalog>
            {products.map((obj:any)=> 
            <ItemDiv key={obj.key} data-id={obj.id}>
                <button onClick={addToCart} data-id={obj.id}>{ cart }</button>
                <Link to={`/shop/${obj.id}`} style={{color : 'inherit', textDecoration:'none'}} >
                    <img alt='img' src={obj.img}/>
                    <h4> {obj.id}</h4>
                    <p>${obj.price}</p>
                </Link>
            </ItemDiv>
            
            )}
        </Catalog>
    )
}

export default Shop