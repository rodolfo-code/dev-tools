import { useEffect } from "react";
import mql from "@microlink/mql";
import { RouterProvider, useLocation } from "react-router-dom";

import Card from "../Card";
import { cards } from "./card";
import * as S from "./main.styled";

import axios from "axios";

function Main(props: any) {
    let location = useLocation();
    console.log("location", location);

    useEffect(() => {
        // captureScreenshot();
    }, []);

    return (
        <S.Main>
            {/* {cards.map((card) => (
                <Card data={card} key={card.Link} />
            ))} */}
            <h2 style={{ color: "white" }}>{location.pathname}</h2>s
        </S.Main>
    );
}

export default Main;
