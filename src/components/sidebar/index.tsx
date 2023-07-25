import Link from "next/link";

const categories = ["Hooks", "Patterns", "Functions"];

export default function Sidebar(props: any) {
    return (
        // <div>
        <aside className="border-2 border-[orange] w-2/12">
            <ul className="flex flex-col w-full items-center gap-12">
                {categories.map((category: string) => (
                    <li key={category}>
                        <Link href={`/content/${category}`}>{category}</Link>
                    </li>
                ))}
            </ul>
        </aside>
        // </div>
    );
}
