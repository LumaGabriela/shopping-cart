import { Container } from '../styles/components/container'
import UL from './UL/UL'
import Switch from 'react-switch'
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { shade } from 'polished'

interface Props {
    toggleTheme(): void,
    shoppingCart : any,
    setShoppingCart : any
}

const Header: React.FC<Props> = ({toggleTheme, shoppingCart, setShoppingCart}) => {
    const { colors, title } = useContext(ThemeContext)
    
    return(
    <Container>
        <UL shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
        <Switch 
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={25}
        width={50}
        handleDiameter={20}
        offColor={shade(0.3, colors.secondary)}
        onColor={colors.secondary}
        />
    </Container>
)}

export default Header