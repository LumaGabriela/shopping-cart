import { Container } from '../styles/components/container'
import UL from './UL/UL'

interface Props {
    toggleTheme(): void,
    shoppingCart : any,
    setShoppingCart : any
}

const Header: React.FC<Props> = ({toggleTheme, shoppingCart, setShoppingCart}) => {
    
    
    return(
    <Container>
        <UL shoppingCart={shoppingCart} 
        setShoppingCart={setShoppingCart}
        toggleTheme={toggleTheme}
        />
    </Container>
)}

export default Header