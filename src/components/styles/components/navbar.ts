import styled from "styled-components"

export const Navbar = styled.ul`
    display: flex; margin: 0;
    width: 100%; height: 100%;
    list-style: none;
    justify-content: space-between;
    color: ${props => props.theme.colors.background};
    li, a{  
        display: flex;
        justify-content: center;
        align-items: center;
        color: inherit;
        text-decoration: none;
        font-size: 1.3rem;
        flex-wrap: wrap;
        text-align: center;
        height:100%; margin: 0 0.3rem ;
        transition: transform .2s ease-out;
        &:hover{transform: scaleX(1.06) scaleY(1.06) }
        @media(max-width: 340px){ font-size: .9rem; margin: 0;}
    }
    .Cart{margin: 0 0.8rem;}
    div{display: flex; flex-direction: row; justify-content: space-evenly;}
    svg{
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.primary};
        width: 2.7rem !important; height: 2.7rem;
        padding: .4rem;
        border-radius: 100px;
    }    
`
export const Title = styled.h1`
    display: flex;
    font-size: 1.5rem; margin: 0 0 0 0.4rem;
    @media(max-width: 340px){ font-size: 1rem; }
`
export const CartNumber = styled.div`
    position: absolute;
    display: flex; font-size: .9rem;
    font-weight: bolder;
    text-align: center;
    align-items: center;
    border-radius: 100px;
    justify-content: center !important;
    width: 1.3rem !important; height: 1.3rem; 
    transform: translateX(-1rem) translateY(1rem);
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
`