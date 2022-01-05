import styled from "styled-components";

export const ItemIndividual = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    width: 40rem; height: 30rem;
    padding: 2rem 0rem;
    margin: 0; font-size: 1.09rem;
    border-radius: 15px;
    color: ${props => `${props.theme.colors.text}dd`};
    background: ${props => `${props.theme.colors.secondary}55`};
    @media(max-width:645px){flex-direction:column;width:90%;height:auto;}
    img{ height:17rem; width: 19rem; border-radius: 15px;margin: 0 1rem; }
    figcaption{
        display: flex;
        font-weight: bold;
        justify-content: center;
        text-align: left; font-size:1.2rem;
    }
    figure, div{display: flex; padding: 0 1rem;
        align-items: center; 
        flex-direction: column; 
        height: 100%; justify-content: space-evenly;
    }
    button{
        border: none; cursor: pointer;
        border-radius: 5px;
        display: flex; flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 8rem; height: 3rem;
        font-size: 1rem;
        font-weight: bolder;
        
        font-family: "IBM Plex Mono", monospace;
        background: ${props => `${props.theme.colors.secondary}`};
        svg{
            width: 40% !important; height: 2.5rem;
            color: ${props => `${props.theme.colors.primary}`};
            padding: 0.2rem;
        }     
    }   
`