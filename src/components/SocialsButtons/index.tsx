import Button from "../Button";
import style from './SocialsButtons.module.css'

interface Props {
    customClass?: string;
}

const SocialsButtons: React.FC<Props> = ({ customClass }) => {
    const socButtonsClasses: string = `${style[`soc-container`]} ${customClass || ""}`

    return (
        <div className={socButtonsClasses}>
            <Button variant="socials" customClass={style.fb}></Button>
            <Button variant="socials" customClass={style.x}></Button>
            <Button variant="socials" customClass={style.ln}></Button>
        </div>
    );
}

export default SocialsButtons;