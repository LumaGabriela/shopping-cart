import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${ props => props.theme.colors.background};
        color: ${props => props.theme.colors.text}; 
        margin: 0;
        font-family: 'Noto Sans', sans-serif;  
        justify-content: center;
        align-items: center; 
    }
    .App{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
        min-height: 100vh;
    }
    main{margin: 7rem 0 0;}
`