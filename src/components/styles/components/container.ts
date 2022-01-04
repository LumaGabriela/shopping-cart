import styled from "styled-components"

export const Container = styled.header`
    display: flex; z-index: 3;
    flex-direction: row;
    align-items: center; position: absolute;
    justify-content: space-between;
    width: 100%; top: 0px;
    height: 5rem; margin: 0;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.primary};
    `
