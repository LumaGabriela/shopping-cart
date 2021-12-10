import styled from "styled-components"

export const CartDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    width:100%;
    

`
export const CartItem = styled.div`
    display: flex;
    width:70%; height: 10rem;
    background: ${props => props.theme.colors.primary + '90'}; 
    margin: 2rem 0 0 ;
`
export const ProductInfo = styled.div`
    width: 90%; height:100%max-content;
    img{height:8rem; width:10rem};
`
export const Minus = styled.button`

`
export const Add = styled.button`
    
`