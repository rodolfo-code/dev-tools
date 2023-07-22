import * as S from "./header.styled";

import lupa from "../../assets/message-code.png";
import { Link } from "react-router-dom";

const categories = ["Code", "Patterns", "APIs", "Styles", "Icons"];

function Header(props: any) {
    return (
        <S.Header>
            <S.Logo>
                <img src={lupa} />
                <p>DEV TOOLS</p>
            </S.Logo>
            <S.Menu>
                <ul>
                    {categories.map((category: string) => (
                        <li key={category}>
                            <Link to={`content/${category}`}>{category}</Link>
                        </li>
                    ))}
                </ul>
            </S.Menu>
            {/* <div>Code</div> */}
            {/* <hr /> */}
            {/* <div>Menu</div> */}
        </S.Header>
    );
}

export default Header;
