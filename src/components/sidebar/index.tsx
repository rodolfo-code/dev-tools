import Link from "next/link";

const categories = ["Hooks", "Patterns", "Functions"];

export default function Sidebar(props: any) {
    return (
        <div>
            <aside>
                <ul className="inline-flex items-center gap-12">
                    {categories.map((category: string) => (
                        <li key={category}>
                            <Link href={`${category}`}>{category}</Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
}
