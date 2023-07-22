import styled from "styled-components";

export const Header = styled.header`
    /* background-color: white; */
    background-color: #070709;
    grid-area: header;
    color: #c1c1c1;
    padding-left: 10px;
    padding-right: 10px;

    display: flex;
    /* justify-content: space-between; */

    /* align-items: center; */
    /* flex-direction: row; */
    /* padding-left: 20px; */

    /* hr {
        border-color: grey;
        border-style: sollid;
        border-width: 1px;
        size: 20px;
    } */
`;

export const Menu = styled.section`
    /* width: auto; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 10px 0 10px;

    flex-grow: 1;

    div {
        display: flex;
        align-items: center;
        /* justify-content: space-evenly; */
        width: 80%;
        gap: 20px;
    }

    p {
        font-weight: 400;
        font-size: 14px;
    }
`;

export const Logo = styled.section`
    /* flex-grow: 1; */

    display: flex;
    align-items: center;
    gap: 8px;
    color: #c1c1c1;
    font-size: x-large;
    width: 200px;

    img {
        width: 50px;
    }

    p {
        margin: 0;
        margin-bottom: 5px;
        font-weight: 700;
    }
`;
