import { useState } from "react";
import * as S from "../../app.styled";
import Main from "../../components/Main";
import Sidebar from "../../components/Sidebar";

function MainContent() {
    const [count, setCount] = useState(0);

    console.log(count);

    return (
        <S.Container>
            <Sidebar />
            <Main />
        </S.Container>
    );
}

export default MainContent;
