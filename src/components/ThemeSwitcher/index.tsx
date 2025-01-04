import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Button from "../Button/index"

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
        <Button onClick={toggleTheme}>
            Переключить на {theme === 'dark' ? 'светлую' : 'темную'} тему
        </Button>
    )
}

export default ThemeSwitcher;