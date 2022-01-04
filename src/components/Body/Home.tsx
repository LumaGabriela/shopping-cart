import { Props } from '../../App'
import { Link } from 'react-router-dom'
import { Homepage } from '../styles/components/homepage'
import pa from '../../components/imgs/pa.png'
const Home:React.FC<Props> = () => {
    return(
        <Homepage>
            <div><h1>Handcrafted materials</h1>
                <img src={pa} alt='storeLogo'></img>           
                <h2>Diversity of notebooks, agendas and sketchbooks</h2> 
                <Link to='/shop'><button>Visit the shop</button></Link> 
            </div>         
        </Homepage>
    )
}

export default Home