"use client";

import useColorMode from "@/hooks/useColorMode";
import Image from "next/image";

import vercel from "../imagem/vercel.svg";
import SvgComponent from "@/components/icons/sun";

export default function Home() {
    const [colorMode, setColorMode] = useColorMode();

    return (
        <>
            <h1>Home</h1>
            {/* <button className="bg-green-200 p-4 rounded-3xl" onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}>
                Dark Mode
            </button> */}
            <button className="flex items-center justify-center w-24 h-12 bg-dark-matter">
                {/* <Image src="/sun.svg" width={20} height={20} alt={""} color="#fff" /> */}
                {/* <img src="/lua.png" /> */}
                <SvgComponent fill="#fff" width={30} height={30} />
                {/* <img src="/sun.svg" className="text-[white] w-[300px]" /> */}
            </button>
        </>
    );
}
