import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Button from "../Button/index"
import style from './ThemeSwitcher.module.css'

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
        <Button variant='switcher' onClick={toggleTheme} customClass={style.switcher}>
            {theme === 'dark' ? '☀️' : '🌒'}
        </Button>
    )
}

export default ThemeSwitcher;