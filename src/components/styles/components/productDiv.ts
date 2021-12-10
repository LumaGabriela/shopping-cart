import styled from "styled-components"

const ItemDiv = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    width: 12rem; height: 12rem;
    padding: 0%;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    background: ${props => `${props.theme.colors.secondary}55`};
    img{ height:9rem; width: 11rem;}
    button{
        position:absolute;
        transform: translateY(-5rem) translateX(4.3rem);
        opacity: 0; z-index: 4;        
    }
    &:hover { button {opacity:1}}
    
`

export default ItemDiv