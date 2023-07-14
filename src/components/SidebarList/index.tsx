import SidebarListItem from "../SidebarListItem";
import * as S from "./sidebarList.styled";

type SidebarContent = {
    slug: string;
    name: string;
};

type SidebarListProps = {
    sidebarContent: Array<SidebarContent>;
};

function SidebarList(props: SidebarListProps) {
    const { sidebarContent } = props;
    return (
        <S.SidebarList>
            {sidebarContent.map((content) => (
                <SidebarListItem data={content} key={content.slug} />
            ))}
            {/* <div style={{ color: "white", marginBottom: "30px" }}></div> */}
        </S.SidebarList>
    );
}

export default SidebarList;
