"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const categories = ["hooks", "patterns", "functions", "function", "map"];

export default function Main(props: any) {
    const { categorie, main } = useParams();

    console.log(props);

    return (
        <main className="flex items-center justify-center bg-[green] w-10/12">
            <div className="">
                <h1 className="text-7xl">{categorie}</h1>
                <h1 className="text-7xl">{main}</h1>
            </div>
        </main>
    );
}
