import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeSwitcher = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("ThemeSwitcher must be used within a ThemeProvider");
    }
    const [theme, setTheme] = context;


    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <button onClick={toggleTheme}>
            Переключить на {theme === 'dark' ? 'светлую' : 'темную'} тему
        </button>
    )
}

export default ThemeSwitcher;