type MenuItemProps = {
    children: any;
    padding?: string;
    className?: string;
};

interface IPaddingSizes {
    [key: string]: string;
}

export default function MenuItem(props: MenuItemProps) {
    const { children, padding = "0" } = props;

    const paddingSizes: IPaddingSizes = {
        "10": "p-2.5",
        "0": "p-0",
    };

    return (
        <li
            className={`${paddingSizes[padding]} gap-12 flex items-center w-full h-12 text-lunar-600 hover:bg-indi-go-50 
        dark:text-lunar-100 dark:hover:bg-lunar-800 dark:hover:text-indi-go-50 duration-300`}
        >
            {children}
        </li>
    );
}
