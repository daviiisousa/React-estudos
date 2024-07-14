import styled from "styled-components";

export const ContainerList = styled.main`
    max-width: 1240px;
    height: 100%;
    padding: 0 2rem;
    margin: 4rem auto;
    border-radius: 5px;

    display:flex ;
    align-items: stretch;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;

    & > * {
        flex: 1 300px;
    }
`