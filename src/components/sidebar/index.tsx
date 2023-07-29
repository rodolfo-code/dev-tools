"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const categories = ["Hooks", "Patterns", "Functions", "Function", "Config", "Inovations", "AI", "Features", "Development"];

export default function Sidebar(props: any) {
    const { categorie } = useParams();

    return (
        <aside className="h-screem w-2/12 dark:bg-dark-matter duration-500">
            <ul className="flex flex-col h-screem items-center">
                {categories.map((category: string) => (
                    <>
                        <li
                            key={category}
                            className="flex items-center w-full h-12 text-lunar-600 hover:bg-indi-go-50 
                        dark:text-lunar-100 dark:hover:bg-lunar-800 dark:hover:text-indi-go-50 duration-300"
                        >
                            <Link className="flex pl-5 p-2.5 w-full" href={`/content/${categorie}/${category}`}>
                                <div className="flex items-center">
                                    <img src="/icone.png" width="14px" />
                                </div>
                                <div className="p-2.5">{category}</div>
                            </Link>
                        </li>
                        <div className="w-full h-[0.8px] bg-gradient-to-r from-lunar-100 via-transparent  to-transparent dark:bg-gradient-to-r dark:from-lunar-800 dark:via-transparent dark:to-transparent duration-300"></div>
                    </>
                ))}
            </ul>
        </aside>
    );
}
