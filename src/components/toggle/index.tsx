import useColorMode from "@/hooks/useColorMode";

const Toggle = () => {
    const [colorMode, setColorMode] = useColorMode();
    // const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        // setIsChecked(!isChecked);
        setColorMode(colorMode === "light" ? "dark" : "light");
    };

    return (
        <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
            <input type="checkbox" onClick={handleCheckboxChange} className="sr-only" />
            <span
                id="toggle"
                className={`flex items-center p-[1px] slider mx-4 h-[20px] w-[50px] rounded-full duration-200 dark:bg-[#CCCCCE] bg-[#212b36] border-[2px] border-solid border-[#212b36] dark:border-[#CCCCCE]`}
            >
                <span id="image container" className="flex justify-between mx-[2px] w-full">
                    <img src="/lunar.svg" width="14px" />

                    <img src="/suny.svg" width="14px" />
                </span>
                <span
                    id="slider do toggle"
                    className={`absolute dot h-[16px] w-[16px] rounded-full bg-[white] dark:bg-[#212b36] duration-200 dark:translate-x-[29px] `}
                ></span>
            </span>
        </label>
    );
};

export default Toggle;
