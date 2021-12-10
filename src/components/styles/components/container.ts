import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5rem;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.primary}
    `
