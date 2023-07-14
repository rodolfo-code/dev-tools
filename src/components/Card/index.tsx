import * as S from "./card.styled";

function Card(props: any) {
    const { API, Link, Description, Auth, HTTPS, Cors, Category } = props.data;

    return (
        <S.Container href={Link} target="_blank">
            {/* <Microlink url={Link} /> */}
            <S.Header></S.Header>
            <S.Image src="https://iad.microlink.io/ruDlpMrSZRZWnQI7_QKbBgRB0P8QQJnRNMlEQqEwfyt-h5YsEIHKhiAxm7PT7uEGXTDfcA4DmFo9X06osnuUjg.png"></S.Image>
            <S.Content>
                <div>
                    <h2>{API}</h2>
                    <span>{Category}</span>
                    <p>{Description}</p>
                </div>
                <div>
                    <p>{Auth}</p>
                    <p>{Cors}</p>
                    <p>HTTPS</p>
                </div>
            </S.Content>
            {/* <S.Footer></S.Footer> */}
        </S.Container>
    );
}

export default Card;
