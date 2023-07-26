"use client";

import useColorMode from "@/hooks/useColorMode";
import Image from "next/image";

export default function Home() {
    const [colorMode, setColorMode] = useColorMode();

    return (
        <>
            <h1>Home</h1>
            {/* <button className="bg-green-200 p-4 rounded-3xl" onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}>
                Dark Mode
            </button> */}
        </>
    );
}
