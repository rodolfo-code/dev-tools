import * as S from "./searchField.styled";

function SearchField(props: any) {
    return (
        <>
            <S.Container>
                <S.SearchField type="search" placeholder="Search..." required />
                {/* <button type="submit">Go</button> */}
                {/* <i></i> */}
            </S.Container>
        </>
    );
}

export default SearchField;
