import { Props } from '../../App'
import ItemDiv from '../styles/components/productDiv' 
import Catalog from '../styles/components/catalog'


const Shop:React.FC<Props> = ({products, addToCart}) => {
    return(
        <Catalog>
            {products.map((obj:any)=> 
            <ItemDiv key={obj.key} data-id={obj.id}>
                <button onClick={addToCart} >PATO</button>
                <img alt='img' src={obj.img}/>
                <h4> ${obj.price}</h4>
                <p>{obj.id}</p>
            </ItemDiv>
            )}
        </Catalog>
    )
}

export default Shop