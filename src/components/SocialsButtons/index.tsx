import Button from "../Button";
import style from './SocialsButtons.module.css'

interface Props {
    customClass?: string;
}

const SocialsButtons: React.FC<Props> = ({ customClass }) => {
    const socButtonsClasses: string = `${style[`soc-container`]} ${customClass || ""}`

    const handleClick = (url: string) => {
        window.open(url, '_blank');
    }

    return (
        <div className={socButtonsClasses}>
            <Button
                variant="socials"
                customClass={style.fb}
                onClick={() => handleClick('https://youtu.be/dQw4w9WgXcQ')}
            ></Button>
            <Button
                variant="socials"
                customClass={style.x}
                onClick={() => handleClick('https://youtu.be/dQw4w9WgXcQ')}
                ></Button>
            <Button
                variant="socials"
                customClass={style.ln}
                onClick={() => handleClick('https://youtu.be/dQw4w9WgXcQ')}
                ></Button>
        </div>
    );
}

export default SocialsButtons;