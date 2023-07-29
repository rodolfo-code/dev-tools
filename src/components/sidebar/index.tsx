"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import MenuItem from "../menuItem";

const categories = ["Hooks", "Patterns", "Functions", "Function", "Config", "Inovations", "AI", "Features", "Development"];

export default function Sidebar(props: any) {
    const { categorie } = useParams();

    return (
        <aside className="h-screem w-2/12 dark:bg-dark-matter duration-500">
            <ul className="flex flex-col h-screem items-center">
                {categories.map((category: string) => (
                    <>
                        <MenuItem>
                            <Link className="flex pl-5 p-2.5 w-full" href={`/content/${categorie}/${category}`}>
                                <div className="flex items-center">
                                    <img src="/icone.png" width="14px" />
                                </div>
                                <div className="p-2.5">{category}</div>
                            </Link>
                        </MenuItem>
                        <div className="w-full h-[0.8px] bg-gradient-to-r from-lunar-100 via-transparent  to-transparent dark:bg-gradient-to-r dark:from-lunar-800 dark:via-transparent dark:to-transparent duration-300"></div>
                    </>
                ))}
            </ul>
        </aside>
    );
}
