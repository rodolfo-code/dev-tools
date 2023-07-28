"use client";

import Link from "next/link";
import Toggle from "../toggle";

const categories = ["All", "code", "APIs", "styles", "icons", "Templates", "Layout"];

export default function Header(props: any) {
    return (
        <header className="flex w-full h-14 shadow-header dark:bg-dark-matter">
            <div className="flex items-center justify-center w-60">
                {/* <img src="" alt="" /> */}
                <h4>LOGO</h4>
            </div>
            <div className="flex justify-center w-full px-4 shadow-header">
                <nav className="flex justify-center align-center w-full">
                    <ul className="inline-flex items-center gap-12 text-lunar-600">
                        {categories.map((category: string) => (
                            <li key={category}>
                                <Link href={`/content/${category}`}>{category}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="flex items-center justify-center px-4">
                <Toggle />
            </div>
        </header>
    );
}
