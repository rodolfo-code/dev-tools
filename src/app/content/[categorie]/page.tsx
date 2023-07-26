"use client";

import { useParams } from "next/navigation";

export default function Category(props: any) {
    const param = useParams();

    return (
        <div className="flex justify-center items-center bg-[gray] w-10/12">
            <h1 className="text-7xl">{param.categorie}</h1>
        </div>
    );
}
