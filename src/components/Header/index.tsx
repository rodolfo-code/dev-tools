import * as S from "./header.styled";

import lupa from "../../assets/message-code.png";

function Header(props: any) {
    return (
        <S.Header>
            <S.Logo>
                <img src={lupa} />
                <p>DEV TOOLS</p>
            </S.Logo>
            <S.Menu>
                <div>
                    <p>Code</p>
                    <p>Patterns</p>
                    <p>APIs</p>
                    <p>Styles</p>
                    <p>Icons</p>
                </div>
            </S.Menu>
            {/* <div>Code</div> */}
            {/* <hr /> */}
            {/* <div>Menu</div> */}
        </S.Header>
    );
}

export default Header;
