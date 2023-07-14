import * as S from "./sidebarListItem.styled";

export default function SidebarListItem(props: any) {
    const { slug, name } = props.data;
    return <S.Item key={slug}>{name}</S.Item>;
}
