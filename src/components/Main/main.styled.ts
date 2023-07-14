import styled from "styled-components";

export const Main = styled.main`
    background-color: #070709;
    /* background-color: white; */
    grid-area: main;
    padding: 15px 15px 40px;
    overflow: auto;

    display: grid;
    /* margin: auto; */
    /* grid-gap: 1rem; */
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
