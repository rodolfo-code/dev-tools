"use client";

import Link from "next/link";
import Toggle from "../toggle";
import MenuItem from "../menuItem";

const categories = ["All", "code", "APIs", "styles", "icons", "Templates", "Layout"];

export default function Header(props: any) {
    return (
        <header className="flex w-full h-14 shadow-header dark:bg-dark-matter duration-500">
            <div className="flex items-center justify-center w-60 border-[1px] border-solid border-green">
                {/* <img src="" alt="" /> */}
                <h4 className="dark:text-lunar-100">LOGO</h4>
            </div>
            <div className="flex justify-center w-full px-4 shadow-header">
                <nav className="flex justify-center align-center w-full">
                    <ul className="inline-flex items-center dark:text-lunar-100">
                        {categories.map((category: string) => (
                            <>
                                <MenuItem padding="10">
                                    <Link href={`/content/${category}`}>{category}</Link>
                                </MenuItem>
                                {/* <li key={category} className="p-[10px] text-lunar-600 hover:bg-indi-go-50 dark:hover:bg-lunar-800 duration-300">
                                    <Link href={`/content/${category}`}>{category}</Link>
                                </li> */}
                            </>
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
