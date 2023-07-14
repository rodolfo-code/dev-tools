import styled from "styled-components";

export const Container = styled.div`
    width: 270px;
    height: 13vh;

    background-color: #070709;

    display: flex;
    /* justify-content: center; */
    align-items: center;

    padding-left: 20px;
    margin-bottom: 10px;
    /* position: absolute; */
`;

export const SearchField = styled.input`
    /* height: 2rem;
    font-family: "Lato", sans-serif;
    border: 0;
    color: #2f2f2f;
    font-size: 1.8rem;

    outline: 0; // <-- shold probably remove this for better accessibility, adding for demo aesthetics for now.
    width: 80%;
    background: #fff;
    padding: 0 1.6rem;
    border-radius: 5px;
    appearance: none; //for iOS input[type="search"] roundedness issue. border-radius alone doesn't work
    transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);
    transition-property: width, border-radius;
    z-index: 1;
    position: relative; */

    position: relative;
    padding: 15px 40px 15px 20px;
    /* width: 20px; */
    color: #525252;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 100;
    letter-spacing: 2px;
    border: none;
    border-radius: 5px;
    /* background: linear-gradient(to right, #ffffff 0%, #464747 #f9f9f9 100%); */
    /* transition: width 0.4s ease; */
    outline: none;

    /* &:focus {
        width: 300px;
    } */
`;
