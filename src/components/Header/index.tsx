import style from "./Header.module.css"
import ThemeSwitcher from "../ThemeSwitcher";

const Header = () => {
    return (
        <header className={style.header}>
            HEADER  
            <ThemeSwitcher />
        </header>
    );
}

export default Header;