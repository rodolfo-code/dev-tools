import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1.4fr 5fr;
    /* grid-template-rows: 10vh 82vh 8vh; */
    grid-template-rows: 8vh 92vh;
    grid-template-areas:
        "header header"
        "aside main";
    /* "footer footer"; */
    background-color: black;
`;
