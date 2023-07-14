import { useEffect } from "react";
import mql from "@microlink/mql";

import Card from "../Card";
import { cards } from "./card";
import * as S from "./main.styled";

import axios from "axios";

function Main(props: any) {
    const captureScreenshot = async () => {
        try {
            // const { data } = await mql("https://kikobeats.com", {
            //     data: {
            //         avatar: {
            //             selector: "#avatar",
            //             type: "image",
            //             attr: "src",
            //         },
            //     },
            // });

            const { status, data } = await mql("https://github.com/microlinkhq");

            // mql.render(data);

            console.log(data);
            console.log(status);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // captureScreenshot();
    }, []);

    return (
        <S.Main>
            {cards.map((card) => (
                <Card data={card} key={card.Link} />
            ))}
        </S.Main>
    );
}

export default Main;
