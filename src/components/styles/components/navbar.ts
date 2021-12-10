import styled from "styled-components"

const Navbar = styled.ul`
    display: flex;
    width: 60%;
    list-style: none;
    justify-content: space-evenly;
    color: ${props => props.theme.colors.secondary};
    a{
        color: inherit;
        text-decoration: none;
        font-size: 1.7rem;
    }
`
export default Navbar