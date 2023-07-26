"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const categories = ["hooks", "patterns", "functions", "function", "map"];

export default function Sidebar(props: any) {
    const { categorie } = useParams();

    return (
        <aside className="border-2 border-[orange] h-screem w-2/12">
            <ul className="flex flex-col h-screem items-center gap-12">
                {categories.map((category: string) => (
                    <li key={category}>
                        <Link href={`/content/${categorie}/${category}`}>{category}</Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
