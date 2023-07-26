import Link from "next/link";

const categories = ["code", "APIs", "styles", "icons"];

export default function Header(props: any) {
    return (
        <header className="flex w-full h-14 border-2 border-[red]">
            <div className="flex items-center justify-center border-2 border-[blue] w-60">
                <img src="" alt="" />
                <h4>Imagem</h4>
            </div>
            <div className="flex justify-center border-[yellow] border-2 w-full px-4">
                <nav className="flex justify-center align-center border-lime-500 border-2 w-full">
                    <ul className="inline-flex items-center gap-12">
                        {categories.map((category: string) => (
                            <li key={category}>
                                <Link href={`/content/${category}`}>{category}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
