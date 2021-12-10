import styled from "styled-components"

const Catalog = styled.div`
    display: grid;
    width: 100%;
    grid-gap: 8px;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(3, 13rem);
    grid-template-rows: max-content;
    padding: 0%;
    margin: 2rem 0 0;
    background: transparent;
    h2{}
`

export default Catalog