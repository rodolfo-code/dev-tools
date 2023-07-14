import styled from "styled-components";

export const Header = styled.header`
    /* background-color: white; */
    background-color: #070709;
    grid-area: header;

    display: flex;
    align-items: center;
    /* flex-direction: row; */
    padding-left: 20px;

    div:nth-child(1) {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #c1c1c1;
        font-size: x-large;
        width: 200px;

        img {
            /* width: 50px; */
            width: 50px;
        }

        p {
            margin: 0;
            margin-bottom: 5px;
            font-weight: 700;
        }
    }
    hr {
        /* border: 0; */
        border-color: grey;
        border-style: sollid;
        border-width: 1px;
        size: 20px;
    }

    div:nth-child(3) {
        color: #c1c1c1;
    }
`;
