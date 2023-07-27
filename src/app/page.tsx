"use client";

import useColorMode from "@/hooks/useColorMode";
import Image from "next/image";

import vercel from "../imagem/vercel.svg";
import SvgComponent from "@/components/icons/sun";
import { useState } from "react";

const Switcher12 = () => {
    const [colorMode, setColorMode] = useColorMode();
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setColorMode(colorMode === "light" ? "dark" : "light");
    };

    return (
        <>
            <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
                <input type="checkbox" checked={isChecked} onClick={handleCheckboxChange} className="sr-only" />
                <span className="label flex items-center text-sm font-medium text-black">Light</span>

                <span
                    className={`flex  relative slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 dark:bg-[#CCCCCE] bg-[#212b36]`}
                >
                    <span className="flex justify-between mx-[5px] w-full">
                        <img src="/lunar.svg" width="19px" />

                        <img src="/suny.svg" width="19px" />
                    </span>
                    <span className={`absolute dot h-6 w-6 rounded-full bg-[white] duration-200 ${!isChecked ? "translate-x-[28px]" : ""}`}></span>
                </span>

                <span className="label flex items-center text-sm font-medium text-[black]">Dark</span>
            </label>
        </>
    );
};

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <span className="">
                <Switcher12 />
            </span>
            {/* <button className="bg-green-200 p-4 rounded-3xl" onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}>
                Dark Mode
            </button> */}
            {/* <Image src="/sun.svg" width={20} height={20} alt={""} color="#fff" /> */}
            {/* <button className="flex items-center justify-center w-24 h-12 bg-dark-matter">
                <img src="/lua.png" />
                <SvgComponent fill="#fff" width={30} height={30} />
                <img src="/sun.svg" className="text-[white] w-[300px]" />
            </button> */}
        </>
    );
}
