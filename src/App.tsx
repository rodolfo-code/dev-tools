import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import * as S from "./app.styled";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/global";

function App() {
    const [count, setCount] = useState(0);

    return (
        <S.Container>
            <Header />
            <Sidebar />
            <Main />
            {/* <Footer /> */}
            <GlobalStyle />
        </S.Container>
    );
}

export default App;
