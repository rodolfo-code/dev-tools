import { RouterProvider, useLocation } from "react-router-dom";

import SearchField from "../SearchField";
import SidebarList from "../SidebarList";
import { categories } from "./categories";
import * as S from "./sidebar.styled";

function Sidebar(props: any) {
    return (
        <S.Sidebar>
            {/* <SearchField /> */}

            <SidebarList sidebarContent={categories} />
        </S.Sidebar>
    );
}

export default Sidebar;
