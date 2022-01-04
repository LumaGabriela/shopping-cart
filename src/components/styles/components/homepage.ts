import styled from "styled-components"
import stamp from '../../imgs/stamp.png'

export const Homepage = styled.main`
    z-index: 0; display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw; position: absolute;
    bottom: 0px;
    justify-content: center;
    height: calc(100vh - 5rem);
    color: #280004cc;
    background: url(${stamp});
    background-size: 120%;
    padding: 0 0;
    text-align: center;

    div{
        display: flex; 
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height:30rem; width: 100%;
    }
    a, button{
        border: none; height: 2.5rem;
        width: 12rem; text-decoration: none;
        display: flex; align-items: center;
        justify-content: center;
        font-weight: bolder;
        font-size: 1.1rem; border-radius: 10px;
        color: ${props => props.theme.colors.text};
        background: ${props => props.theme.colors.background};
        cursor: pointer;
        transition: background .4s ease-out;
        &:hover{
            color: ${props => props.theme.colors.background};
            background: ${props => props.theme.colors.text};
        }
    }
    img{width:10rem; height: 10rem;cursor: pointer;}
    `
