import { useEffect, useState } from "react";
import "./index.scss"


const DarkMode = () => {
    const storedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(false);

    const setDark = () => {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    };
    const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
    };
    useEffect(() => {
        if (storedTheme) {

            const prefersDark =
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches;
            const defaultDark =
                storedTheme === "dark" || (storedTheme === null && prefersDark);
            if (defaultDark) {
                setDark();
                setTheme(!theme)
            }
        }
    }, [])

    const handleToggleDark = () => {
        if (storedTheme === "dark") {
            setLight();
        } else {
            setDark();
        }
        setTheme(!theme)
    }


    return (
        <div className="toggle-theme-wrapper" onClick={handleToggleDark} >
            {
                (storedTheme === "light" && !theme) ?
                    <span className="material-icons-outlined">
                        mode_night
                    </span> :
                    <span className="material-icons-outlined">
                        light_mode
                    </span>
            }
        </div>
    );
};

export default DarkMode;
