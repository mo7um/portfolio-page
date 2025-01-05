import style from "./Header.module.css"
import Button from "../Button";
import ThemeSwitcher from "../ThemeSwitcher";

const Header = () => {
    return (
        <header className={style.header}>
            <nav>
                <div className={style.logo}>МАТВЕЙ</div>
                <ol>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Portfolio</li>
                    <li>Services</li>
                </ol>
                <Button>Contact Me</Button>
                <ThemeSwitcher />
            </nav>
        </header>
    );
}

export default Header;