import styled from "styled-components";

export const Container = styled.a`
    /* background-color: white; */
    background-color: #14181a;
    border-radius: 8px;
    cursor: pointer;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
`;

export const Header = styled.div``;

export const Image = styled.img`
    width: 100%;
    border-radius: 5px;
`;

export const Content = styled.div`
    margin: 15px 15px 15px 15px;

    div:nth-child(1) {
        h2 {
            font-size: 15px;
            color: #ffffff;
            font-weight: 600;
            letter-spacing: 0;
            word-spacing: 0.15rem;
            margin: 0;
        }

        span {
            color: #8e96a4;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        p {
            color: #b0b5c0;
            font-size: 14px;
            font-weight: 500;
            /* overflow: hidden; */
            /* text-overflow: ellipsis; */
        }
    }

    div:nth-child(2) {
        display: flex;
        gap: 20px;

        p {
            color: #ffffff;
            font-weight: 700;
            text-transform: uppercase;
            word-spacing: 0.15em;
            font-size: 10px;
            letter-spacing: 1px;
        }
    }
`;

export const Footer = styled.div`
    display: flex;
    gap: 20px;

    div {
        color: #ffffff;
        font-weight: 700;
        text-transform: uppercase;
        word-spacing: 0.15em;
        font-size: 10px;
        letter-spacing: 1px;
    }
`;
