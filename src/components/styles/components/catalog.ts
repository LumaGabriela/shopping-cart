import styled from "styled-components"

export const Catalog = styled.main`
    display: grid;
    width: 100%;
    grid-gap: 10px;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 16rem);
    grid-template-rows: max-content;
    padding: 0%;
    background: transparent;
    
`
export const ItemDiv = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    width: 16rem; height: 14rem;
    padding: 0%;
    margin: 0;
    cursor: pointer;
    border-radius: 15px;
    background: ${props => `${props.theme.colors.tertiary}`};
    transition: transform .2s ease-out;
    img{ height:10rem; width: auto; border-radius: 15px;}
    button{
        position:absolute;
        transform: translateY(-5.2rem) translateX(6rem);
        opacity: 0; z-index: 4; 
        border: none; cursor: pointer;
        border-radius: 15px;
        width: 3rem; height: 2rem;
        background: ${props => `${props.theme.colors.background}`};
        svg{
            width: 80% !important; height: 80%;
            color: ${props => props.theme.colors.primary};
        }     
    }
    &:hover { 
        button {opacity:1}
        transform: scale(1.05);
    }
    
`

