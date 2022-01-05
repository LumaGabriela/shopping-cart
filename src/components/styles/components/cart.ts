import styled from "styled-components"
import texture from '../../imgs/texture.png'
export const CartDiv = styled.main`
    display: flex;
    flex-direction: column;
    align-items:center;
    min-height: calc(100vh - 5rem);
    justify-content:space-evenly;
    width: 60%; height: auto;
    padding: 1rem 0 0;
    background: url(${texture});
    background-size: 120%;
    color:#280004; margin: 5rem 0 0 ;
    @media(max-width: 340px){width: 90%;}
`
export const CartItem = styled.div`
    display: flex; flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    width: 80%; height: auto;
    padding: 1rem 0;
    margin: 1rem 0; border-bottom: 1px solid #444;
    img{ width: 85%; height: 70%; border-radius: 15px;}
    section{ display:flex; align-items: center; width: 5rem; justify-content: space-between;}
    p{cursor: default;}
`

export const CartButton = styled.button`
    width: 1.8rem; height: 1.8rem;
    border:none;cursor: pointer;
    border-radius: 5px;
    background:${props => props.theme.colors.secondary};
    svg{background:${props => props.theme.colors.secondary}; width:100%; height: 100%}
`
