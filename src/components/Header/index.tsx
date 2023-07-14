import * as S from "./header.styled";

import lupa from "../../assets/message-code.png";

function Header(props: any) {
    return (
        <S.Header>
            <div>
                <img src={lupa} />
                <p>DEV TOOLS</p>
            </div>
            <hr />
            <div>Menu</div>
        </S.Header>
    );
}

export default Header;
